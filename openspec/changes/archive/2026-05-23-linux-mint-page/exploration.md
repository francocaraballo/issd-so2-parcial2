# Exploration: Linux Mint Cinnamon Desktop Simulator

This document explores the requirements, UI/UX structure, technical decisions, and architecture for the "linux-mint-page" project. The goal is to build a high-fidelity single-page simulation of the Linux Mint Cinnamon desktop environment that highlights the benefits of Linux, presents the group's conclusion, and introduces the 4 members.

---

## 1. Current State
The project is currently an empty directory. There is no pre-existing codebase or assets. We are building the entire page from scratch.

---

## 2. Affected Areas (To Be Created)
Since the project is starting from scratch, we will create the following files:
- `index.html` — The main entry point containing the workspace structure, Cinnamon panel, start menu, desktop grid, window container, and SVG assets.
- `index.css` — Custom styling, CSS custom variables for themes/accents, animations for windows, and Tailwind CSS v4 directives.
- `app.js` — The core JavaScript file containing the custom Window Manager (dragging, resizing, active focus, min/max/close controls), taskbar synchronization, start menu filtering, clock updater, and application-specific logic (Terminal command loop, Nemo file browser, System Settings theme updater).
- `openspec/changes/linux-mint-page/` — Contains SDD artifacts tracking the progress of this change.

---

## 3. Layout and Architecture Design

### 3.1. Technical Stack Decisions
To align with the core philosophy of Linux Mint (efficiency, high performance, and running smoothly on older PCs), we should build this simulator using **Vanilla HTML5, Tailwind CSS v4 (via CDN), and Vanilla ES6 JavaScript**.

- **Why Vanilla?** Bringing in a heavy framework (like React or Angular) for a single-page interactive UI adds build steps and runtime overhead. A university professor grading a midterm on Operating Systems will be wowed by a project they can run instantly by double-clicking `index.html` from a USB drive or file explorer. It perfectly mirrors the "lightweight & high performance" value of Linux!
- **Styling**: Tailwind CSS v4 via CDN provides modern styling out-of-the-box, letting us use HSL colors, arbitrary styles, and utility classes quickly. We will pair it with custom CSS variables in `index.css` to enable system-wide dynamic theme switching.

### 3.2. Cinnamon OS UI Mockup Details
A high-fidelity Cinnamon mockup requires:
1. **The Wallpaper**: A green-hued abstract background with a subtle Linux Mint logo. We will support wallpaper switching in the simulated Settings.
2. **Desktop Icon Grid**: Grid container aligned to the top-left, utilizing `grid-flow-col` to match how OS icons stack vertically.
   - Icons: "Computer", "Home", "Trash", "Linux Benefits", "About Us", "Conclusion".
3. **Cinnamon Panel (Bottom Taskbar)**:
   - **Menu Button**: Bottom-left, displaying the Linux Mint leaf logo and the word "Menu".
   - **Quick Launch**: Links to terminal, file manager, browser.
   - **Task List**: Buttons representing currently open windows. Clicking them toggles minimization/restore.
   - **System Tray**: Network, Volume, Power/Battery status, and a fully functional Digital Clock updating in real-time.
4. **Draggable & Resizable Window Manager**:
   - Each window will have a title bar with the application icon, title, and buttons: Minimize (`-`), Maximize (`⬜`), and Close (`X`).
   - Custom pointer event handling in JavaScript to support dragging via the title bar and resizing from borders.
   - Custom z-index manager to bring the clicked/active window to the front.
   - **Responsive Scaling**: On viewports below `768px` (mobile), the drag/resize functionality is deactivated, and windows open full-screen (maximized) automatically to fit the screen size. The panel transforms into a mobile-friendly navigation bar.

---

## 4. Simulated Desktop Applications

We will mock four essential desktop applications to fulfill the requirements:

| Application | Purpose | Features |
|-------------|---------|----------|
| **Xed Text Editor** | Highlights Linux Benefits & Conclusion | Opens when double-clicking "Linux Benefits" or "Conclusion" icons. Displays readable rich-text. |
| **Nemo File Manager** | Presents Group Members & Navigation | Folders: `Desktop`, `Documents`, `Pictures`, `About Us`. Double-clicking member files opens details in Xed. |
| **Interactive Terminal** | Visual "WOW" factor & OS theme | Interactive shell running commands like `help`, `ls`, `cat`, `clear`, `theme`, and `neofetch`. |
| **System Settings** | Demonstrates Linux Customization | Change wallpapers, toggle Dark/Light mode, change accent colors (Mint Green, Blue, Red, Orange). |

---

## 5. Approaches

We compare two technical approaches for implementing the window manager and interactivity:

### Approach A: Vanilla SPA with DOM-based Window Manager (Recommended)
Building a lightweight, custom JS class/module to manage windows directly in the DOM.
- **Pros**:
  - Extremely fast load time (zero dependencies).
  - No build pipeline required; simple deployment.
  - Highlights strong fundamentals in core DOM API (drag events, mouse coordinate tracking).
- **Cons**:
  - State (which windows are open, coordinates) must be manually kept in sync with the DOM.
- **Effort**: Medium

### Approach B: Component-based Web App (Next.js / Vite + React)
Creating the desktop environment with React components using `create-vite`.
- **Pros**:
  - Declarative rendering of windows and taskbar.
  - State management is cleaner using React state/context.
- **Cons**:
  - Requires `npm install`, node_modules, and a build step.
  - Overkill for a single-page interactive mockup.
- **Effort**: Medium-High

---

## 6. Architecture & Implementation Recommendation

**We choose Approach A (Vanilla HTML/CSS/JS).**
Why? It demonstrates maximum performance, requires no dependencies, and is incredibly easy to grade or host. We will structure `app.js` with clear object-oriented or modular responsibilities:
- `WindowManager`: Handles coordinate tracking, window drag/resize, z-index stacking, and active state.
- `Terminal`: Handles command input, history, and command routing (especially `neofetch` and `cat`).
- `SystemSettings`: Manages wallpaper changing and accent color classes on the root `<html>` element.

---

## 7. Risks and Mitigation

- **Risk 1: Drag/Resize bugs on Touch Devices.**
  - *Mitigation*: Ensure pointer events (`pointerdown`, `pointermove`, `pointerup`) are used instead of mouse events, as they support mouse, touch, and stylus input seamlessly.
- **Risk 2: Visual clutter on small mobile devices.**
  - *Mitigation*: Automatically disable window dragging and force all windows to open maximized on mobile viewports.

---

## 8. Ready for Proposal
**Yes.** The requirements and files architecture are fully understood. We are ready to propose the change details.
