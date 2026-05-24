# Design: Resolución de Parcial

## Technical Approach

To integrate the five Systems Programming 2 (Sistemas Operativos 2) exam resolutions inside the Linux Mint Cinnamon simulator, we will create a dedicated application: **Xreader (Document Viewer)**. Instead of raw text files in Xed, resolutions are represented as semantically structured HTML files inside `VIRTUAL_FS` under `/Documentos/Resolución de Parcial/`. Double-clicking any `.html` file in Nemo or pressing Enter will launch `xreader`, loading the document with custom rich formatting, image scaling, and embedded video responsive ratios. A desktop folder launcher is added to open Nemo directly in the partial resolution directory.

---

## Architecture Decisions

### Decision: Document Rendering Framework

| Option | Tradeoff | Decision |
| :--- | :--- | :--- |
| **Render in Xed editor** | Simple implementation, but fails the desktop metaphor since Xed is a plain text editor. | Rejected |
| **Simulated Xreader app** | Cohesive with Linux Mint Cinnamon, allows dedicated page layout, sidebar navigation, and custom toolbar controls. | **Chosen** |

### Decision: Nemo Integration for HTML Files

| Option | Tradeoff | Decision |
| :--- | :--- | :--- |
| **Hardcode path routing** | Rigid, will not scale if other directories contain HTML files. | Rejected |
| **Extension check (`.html`)** | Flexible, maps any HTML file double-click or Enter keypress to open in Xreader simulator. | **Chosen** |

---

## Data Flow

```
[Nemo Grid / Desktop Icon] ──(Double-click/Enter)──> [window.spawnApp('xreader', ...)]
                                                              │
                                                       (mountAppContent)
                                                              │
                                                              ▼
[initXreaderApp()] <──(Loads VIRTUAL_FS content)── [xreader Template cloned]
         │
         ├─> Render Sidebar List (exercises in folder)
         ├─> Render Document Canvas (A4 sheet, current content)
         └─> Set Window Title: "Visor de Documentos (Xreader) - [Filename]"
```

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `app.js` | Modify | Update `VIRTUAL_FS` with directory/5 HTML files, add desktop folder shortcut, handle `.html` in Nemo click/keydown, register and implement `initXreaderApp()`. |
| `index.html` | Modify | Append `<template id="app-xreader">` containing toolbar controls (zoom, nav, print, search), sidebar, and sheet reader. |
| `index.css` | Modify | Style `.xreader-page-sheet` (A4 simulation, shadows), print action toasts, responsive media adjustments, and text zoom scales. |

---

## Interfaces / Contracts

### VIRTUAL_FS Layout

```javascript
// Adding the nested structure inside VIRTUAL_FS:
VIRTUAL_FS["/Documentos"].children.push("Resolución de Parcial");
VIRTUAL_FS["/Documentos/Resolución de Parcial"] = {
  type: "dir",
  name: "Resolución de Parcial",
  children: [
    "Ejercicio 1 - Planificación de CPU.html",
    "Ejercicio 2 - Gestión de Memoria.html",
    "Ejercicio 3 - Sincronización de Procesos.html",
    "Ejercicio 4 - Administración de E-S y Discos.html",
    "Ejercicio 5 - Sistemas de Archivos.html"
  ]
};

// Example HTML file structure in VIRTUAL_FS:
VIRTUAL_FS["/Documentos/Resolución de Parcial/Ejercicio 1 - Planificación de CPU.html"] = {
  type: "file",
  name: "Ejercicio 1 - Planificación de CPU.html",
  content: `
    <h1>Ejercicio 1 - Planificación de CPU</h1>
    <p>Algoritmos de planificación FCFS, Round Robin, SRTF...</p>
    <img src="images/cpu_diagram.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" />
    <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
      <iframe class="absolute top-0 left-0 w-full h-full border-0" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
    </div>
  `
};
```

### Application Initializer Interface

```javascript
function initXreaderApp(container, winInstance, initData) {
  // state parameters
  let zoom = 1.0;
  let activePath = initData && initData.filePath ? initData.filePath : defaultPath;
  let sidebarOpen = true;

  // functions
  const loadPage = (path) => { ... };
  const updateZoom = (change) => { ... };
  const filterSearch = (term) => { ... };
  const triggerPrintSimulation = () => { ... };
}
```

---

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| **Unit** | `initXreaderApp` zoom scaling constraints (0.5x to 2.0x) | Verify zoom factor bounds and style transformation scale values on document sheet. |
| **Integration** | Nemo-to-Xreader binding & Desktop Launch | Double-click desktop folder shortcut opens Nemo. Double-click `.html` inside Nemo spawns Xreader with target file content and path. |
| **E2E** | Sidebar sync and Responsive Layout | Check if clicking sidebar navigation updates reading content. Validate that on viewport < 768px, window auto-maximizes and sidebar collapses. |

---

## Migration / Rollout

No migration of persistent databases or servers is required. On application deployment, the state of the filesystem is extended, and Cinnamon's template registers the new node element.

---

## Open Questions

- [ ] Should we support full text highlighting in the search filter, or is a warning toast for "mocked search" sufficient?
- [ ] Should the window resizing hooks dynamically scale down the A4 sheet container if the user shrinks the desktop window below standard bounds?
