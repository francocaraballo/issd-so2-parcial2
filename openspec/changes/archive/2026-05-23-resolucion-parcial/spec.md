# Specification: Resolución de Parcial

## Purpose
This specification defines the functional requirements and user interaction behaviors for integrating the Systems Programming 2 (Sistemas Operativos 2) exam resolutions. It details the desktop launcher, file associations in Nemo, the user interface of the new Xreader simulator, content layout styling, and responsive layout adaptations.

## Functional Requirements

| ID | Component | Strength | Requirement Description |
| :--- | :--- | :--- | :--- |
| **REQ-PAR-01** | Desktop Launcher | MUST | The desktop MUST display a folder shortcut named "Resolución de Parcial" pointing to `/Documentos/Resolución de Parcial`. |
| **REQ-PAR-02** | Nemo Binding | MUST | Double-clicking or pressing Enter on `.html` files within `/Documentos/Resolución de Parcial` in Nemo MUST open them in the Xreader simulator. |
| **REQ-PAR-03** | Xreader Window | MUST | Xreader MUST display a window title: "Visor de Documentos (Xreader)" (or "Visor de Documentos (Xreader) - [Filename]"). |
| **REQ-PAR-04** | Xreader UI | MUST | Xreader MUST consist of: a Title Bar, a Toolbar (with zoom in/out/reset, page prev/next, sidebar toggle, print simulation buttons), a Sidebar Navigation Index listing the 5 exercises, and a main reading panel. |
| **REQ-PAR-05** | Content Styling | MUST | Main reading panel content MUST simulate an A4 page with vertical scrolling, using responsive styling for rich media. |
| **REQ-PAR-06** | Responsive Images | MUST | All images within the exercise files MUST scale to fit the container width (`max-w-full h-auto`) and never overflow. |
| **REQ-PAR-07** | YouTube Iframes | MUST | Embedded YouTube videos MUST be wrapped in a container that enforces a responsive `16:9` (`aspect-video`) ratio. |
| **REQ-PAR-08** | Adaptive Scaling | MUST | Below `768px` viewport width, the Xreader window MUST auto-maximize, disabling drag/resize, and collapse or stack the sidebar index for space optimization. |

## User Interaction Scenarios

### Scenario: Launching from Desktop Shortcut
- GIVEN the simulator has loaded
- WHEN the user double-clicks the "Resolución de Parcial" desktop shortcut
- THEN Nemo MUST open displaying the directory contents of `/Documentos/Resolución de Parcial`

### Scenario: Opening HTML File in Xreader
- GIVEN Nemo is open displaying `/Documentos/Resolución de Parcial`
- WHEN the user double-clicks `Ejercicio 1 - Planificación de CPU.html`
- THEN a window titled "Visor de Documentos (Xreader)" MUST open loading that exercise

### Scenario: Navigation via Sidebar Index
- GIVEN Xreader is open displaying an exercise
- WHEN the user clicks "Ejercicio 2 - Gestión de Memoria" in the sidebar index
- THEN Xreader MUST update the main panel content to the selected exercise and highlight the item

### Scenario: Simulation of Document Printing
- GIVEN Xreader is open displaying an exercise
- WHEN the user clicks the "Print" mock button on the toolbar
- THEN the system MUST trigger a visual notification confirming simulated print action

### Scenario: Media Scaling on Small Screens
- GIVEN Xreader is open on a mobile device (viewport width < 768px)
- WHEN the user scrolls down to see images and YouTube video embeds
- THEN the images and video iframes MUST scale down proportionally without creating horizontal overflow

### Scenario: Toolbar Zoom Functionality
- GIVEN Xreader is open displaying an exercise
- WHEN the user clicks the "Zoom In" button on the toolbar
- THEN the zoom level of the main reading panel text MUST increase by a fixed step
