# Task Breakdown: Resolución de Parcial

This document outlines the concrete, actionable steps required to implement the Sistemas Operativos 2 exam resolutions, Nemo file association, and the Xreader desktop simulator.

---

## Phase 1: Baseline and Filesystem Setup

### TASK-001: Populate VIRTUAL_FS with Directory and HTML Files
* **Description**: Define the virtual folder structure under `/Documentos/Resolución de Parcial` inside `VIRTUAL_FS` in `app.js`. Create five HTML files containing semantic layout markup for the exam exercises.
* **Content Specs**:
  * Rich text content (headings, paragraphs, bullet points).
  * Styled images (`<img>` with classes `max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto`).
  * Responsive YouTube video embed wrappers (`aspect-video` iframe layout).
* **Acceptance Criteria**:
  * `VIRTUAL_FS["/Documentos/Resolución de Parcial"]` lists the 5 HTML file nodes.
  * Files contain the corresponding exercise text, scaled images, and video frames.
* **Dependencies**: None
* **Status**: `Completed`

### TASK-002: Add Desktop Folder Shortcut
* **Description**: Register a new shortcut icon in the desktop files list pointing to `/Documentos/Resolución de Parcial`.
* **Acceptance Criteria**:
  * An icon labeled "Resolución de Parcial" is visible on the desktop.
* **Dependencies**: None
* **Status**: `Completed`

---

## Phase 2: Xreader HTML Templates

### TASK-003: Define `<template id="app-xreader">` in `index.html`
* **Description**: Declare the static template markup structure for the Xreader simulated app.
* **Layout Requirements**:
  * A standard window structure (Title Bar, Close/Minimize/Maximize actions).
  * A Toolbar containing controls for:
    * Zoom In (`+`), Zoom Out (`-`), and Reset Zoom (`100%`).
    * Navigation: Previous Page, Next Page.
    * Toggle Sidebar (hamburger icon).
    * Simulation actions: Mock Search bar, Mock Print button.
  * Main Container split into:
    * Collapsible Sidebar (navigation index listing the 5 exercises).
    * Main Canvas area containing the `.xreader-page-sheet` element to render active exercise HTML content.
* **Acceptance Criteria**:
  * Template is added inside `index.html` without disrupting other app templates.
* **Dependencies**: TASK-001
* **Status**: `Completed`

---

## Phase 3: Xreader CSS Styling

### TASK-004: Implement Base Layout and Toolbar Styles
* **Description**: Create base layout rules in `index.css` for the Xreader window frame, layout flex grid, toolbar height/spacing, button hover transitions, and styling of the sidebar index list items.
* **Acceptance Criteria**:
  * The window layout divides sidebar and canvas cleanly.
  * Buttons have micro-animations and proper hover/active states.
* **Dependencies**: TASK-003
* **Status**: `Completed`

### TASK-005: Design A4 Sheet Simulation
* **Description**: Style the `.xreader-page-sheet` wrapper inside `index.css`. This must simulate an A4 paper sheet page using margins, shadow overlays, custom background colors (support dark mode), and proper padding.
* **Acceptance Criteria**:
  * Reading panel content appears centered on an elevated A4 page container.
  * Page scrolls vertically if content overflows, with custom scrollbar styling if necessary.
* **Dependencies**: TASK-004
* **Status**: `Completed`

### TASK-006: Styling Responsive Media and Typography
* **Description**: Write CSS styles targeting images (`max-w-full h-auto`) and the YouTube wrapper (`aspect-video` maintaining a 16:9 ratio).
* **Acceptance Criteria**:
  * Images scale smoothly with the viewport.
  * Video embeds preserve their 16:9 aspect ratio and do not overflow the sheet.
* **Dependencies**: TASK-005
* **Status**: `Completed`

---

## Phase 4: Nemo Integration & Desktop Launcher

### TASK-007: Intercept HTML Double-clicks and Keypresses in Nemo
* **Description**: Update the double-click event listener and keypress listener (`Enter`) for grid files in Nemo inside `app.js`.
* **Details**: Check if the file is an `.html` file inside the resolution directory. If true, launch `xreader` application by calling `window.spawnApp('xreader', { filePath: targetPath })`.
* **Acceptance Criteria**:
  * Triggering double-click or hitting Enter on any HTML file in Nemo opens Xreader with the target document.
* **Dependencies**: TASK-003
* **Status**: `Completed`

### TASK-008: Integrate Desktop Launcher with Nemo Navigation
* **Description**: Map desktop folder shortcut clicks to open a Nemo window focused specifically on `/Documentos/Resolución de Parcial`.
* **Acceptance Criteria**:
  * Double-clicking the desktop icon opens Nemo showing the 5 HTML exercise files.
* **Dependencies**: TASK-002
* **Status**: `Completed`

---

## Phase 5: Xreader Controller Engine (JS)

### TASK-009: Register `initXreaderApp` Initializer
* **Description**: Register the lifecycle function `initXreaderApp(container, winInstance, initData)` in `app.js` to manage Xreader startup state.
* **Details**:
  * Extract initial filePath from `initData` or default to Exercise 1.
  * Set window title dynamically to `"Visor de Documentos (Xreader) - [Filename]"`.
  * Load and inject the HTML document content into the A4 canvas.
* **Acceptance Criteria**:
  * The window opens showing the correct document title and rendering the default text.
* **Dependencies**: TASK-007, TASK-008
* **Status**: `Completed`

### TASK-010: Implement Sidebar Navigation Sync
* **Description**: Populates the index sidebar with list items for the exercises. Add click handlers to update the loaded document, toggle the visual highlight state on active items, and update the window title accordingly.
* **Acceptance Criteria**:
  * Clicks in the index list seamlessly switch document content.
  * Highlight status updates to reflect the active document.
* **Dependencies**: TASK-009
* **Status**: `Completed`

### TASK-011: Implement Zoom Controller Logic
* **Description**: Connect Zoom In, Zoom Out, and Reset buttons to adjust the scale factor of the `.xreader-page-sheet`.
* **Constraints**:
  * Minimum zoom: `0.5`
  * Maximum zoom: `2.0`
  * Steps: `0.1` per click.
  * Apply the scale value using CSS variables or inline `transform: scale(zoom)` / custom font resizing.
* **Acceptance Criteria**:
  * Zooming correctly adjusts visual layout scaling.
  * Zoom factor does not exceed bounds (0.5x to 2.0x).
* **Dependencies**: TASK-009
* **Status**: `Completed`

### TASK-012: Toolbar Page Navigation (Prev/Next)
* **Description**: Bind navigation buttons on the toolbar to shift to the previous/next exercise sequentially based on the file index.
* **Acceptance Criteria**:
  * Clicking Prev or Next moves through exercises in order, looping or stopping at boundaries appropriately.
  * Sidebar highlight updates automatically.
* **Dependencies**: TASK-010
* **Status**: `Completed`

### TASK-013: Simulation Actions (Search & Print Mocking)
* **Description**:
  * Hook mock print button to display a system notification toast: `"Simulando impresión de [Filename]..."`.
  * Bind search input to display a warning toast: `"La búsqueda dentro del documento está simulada."`.
* **Acceptance Criteria**:
  * Visual feedback (toasts) displays when interacting with these buttons.
* **Dependencies**: TASK-009
* **Status**: `Completed`

---

## Phase 6: Responsive Adaptations

### TASK-014: Auto-Maximize and Drag/Resize Constraints
* **Description**: In `initXreaderApp`, check if window viewport is `< 768px`. If so, auto-maximize the window, disable resizing, and lock dragging.
* **Acceptance Criteria**:
  * Below `768px`, Xreader spans full screen, with resize handles disabled.
* **Dependencies**: TASK-009
* **Status**: `Completed`

### TASK-015: Collapsible Mobile Sidebar
* **Description**: Add CSS rules and JavaScript logic to hide the index sidebar on mobile viewports (< 768px). Support the toggle button to slide the sidebar out/in.
* **Acceptance Criteria**:
  * On mobile screen widths, sidebar collapses by default and toggles via the toolbar hamburger button without causing horizontal overflow.
* **Dependencies**: TASK-010, TASK-014
* **Status**: `Completed`

---

## Phase 7: Tests and Validation

### TASK-016: Unit Tests: Zoom Restrictions
* **Description**: Validate zoom state boundaries. Verify that calling zoom-in on `2.0` zoom remains at `2.0`, and zoom-out on `0.5` remains at `0.5`.
* **Acceptance Criteria**: Unit tests check boundaries programmatically.
* **Dependencies**: TASK-011
* **Status**: `Completed`

### TASK-017: Integration Tests: Nemo File Binding
* **Description**: Test that triggering double click or key Enter on target virtual HTML files spawns Xreader with the correct file arguments.
* **Acceptance Criteria**: Binding flow successfully tested.
* **Dependencies**: TASK-007, TASK-008
* **Status**: `Completed`

### TASK-018: E2E Tests: Navigation and Mobile Auto-Maximize
* **Description**: Write tests simulating viewport resizing to `< 768px`, asserting that the window becomes maximized and the sidebar is collapsed. Simulates clicks on the sidebar to ensure content update works.
* **Acceptance Criteria**: Layout behaviors and sidebar selection sync are robust under different widths.
* **Dependencies**: TASK-014, TASK-015
* **Status**: `Completed`
