import { getAppIconSvg } from '../data/icons.js';
import { initTerminalApp } from '../apps/terminal.js';
import { initNemoApp } from '../apps/nemo.js';
import { initSettingsApp } from '../apps/settings.js';
import { initXreaderApp } from '../apps/xreader.js';
import { initXedApp } from '../apps/xed.js';

export class WindowManager {
  constructor() {
    this.windows = [];
    this.zStack = [];
    this.baseZIndex = 100;
    this.zoneNode = document.getElementById('window-zone');
    this.activeWindowId = null;
    this.winCascadeOffset = 25;
  }

  // Create Window Instance
  createWindow(appId, title, initData = null, options = {}) {
    const template = document.getElementById('window-template');
    const clone = template.content.cloneNode(true);
    const windowNode = clone.querySelector('.app-window');

    // Unique ID
    const winId = 'win_' + Date.now() + Math.floor(Math.random() * 1000);
    windowNode.id = winId;
    windowNode.setAttribute('data-app', appId);

    // Position cascade calculation
    const offset = this.windows.length * this.winCascadeOffset;
    let initialWidth = 640;
    let initialHeight = 440;
    let initialX, initialY;

    // Mobile Viewport constraints
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      initialX = 0;
      initialY = 0;
      initialWidth = window.innerWidth;
      initialHeight = window.innerHeight - 48; // Excluding bottom panel
    } else {
      const panelHeight = 48;
      initialX = Math.max(0, ((window.innerWidth - initialWidth) / 2) - offset);
      initialY = Math.max(0, ((window.innerHeight - initialHeight - panelHeight) / 2) + offset);
    }

    const startMaximized = options.isMaximized !== undefined ? options.isMaximized : isMobile;

    // Set position
    if (startMaximized) {
      windowNode.style.left = '0px';
      windowNode.style.top = '0px';
      windowNode.style.width = '100vw';
      windowNode.style.height = 'calc(100vh - 48px)';
      windowNode.classList.add('rounded-none');
    } else {
      windowNode.style.left = `${initialX}px`;
      windowNode.style.top = `${initialY}px`;
      windowNode.style.width = `${initialWidth}px`;
      windowNode.style.height = `${initialHeight}px`;
    }

    // Window Instance object
    const winInstance = {
      id: winId,
      title: title,
      appId: appId,
      node: windowNode,
      x: initialX,
      y: initialY,
      width: initialWidth,
      height: initialHeight,
      isMinimized: options.isMinimized !== undefined ? options.isMinimized : false,
      isMaximized: startMaximized,
      desktopMaximized: options.isMaximized !== undefined ? options.isMaximized : false,
      savedX: initialX,
      savedY: initialY,
      savedWidth: initialWidth,
      savedHeight: initialHeight
    };

    // Add App icon & Title
    windowNode.querySelector('.window-title').textContent = title;
    const iconContainer = windowNode.querySelector('.window-app-icon');
    iconContainer.innerHTML = getAppIconSvg(appId);

    // Initialize specific app contents
    const contentContainer = windowNode.querySelector('.window-content');
    this.mountAppContent(contentContainer, appId, winInstance, initData);

    // Setup event listeners
    this.bindWindowControls(windowNode, winInstance);
    this.bindWindowFocus(windowNode, winId);
    if (!isMobile) {
      this.bindWindowDragging(windowNode, winInstance);
      this.bindWindowResizing(windowNode, winInstance);
    }

    // Append to Zone
    this.zoneNode.appendChild(windowNode);

    // Track states
    this.windows.push(winInstance);
    this.zStack.push(winId);

    // Focus and draw taskbar
    if (winInstance.isMinimized) {
      windowNode.style.display = 'none';
      this.updateTaskbar();
    } else {
      this.focusWindow(winId);
    }

    return winInstance;
  }

  // Focus Window
  focusWindow(winId) {
    if (!this.zStack.includes(winId)) return;

    // Move to end of zStack
    this.zStack = this.zStack.filter(id => id !== winId);
    this.zStack.push(winId);

    this.activeWindowId = winId;

    // Re-index nodes and update styles
    this.zStack.forEach((id, index) => {
      const win = this.windows.find(w => w.id === id);
      if (win && win.node) {
        win.node.style.zIndex = this.baseZIndex + index;

        // Active border highlights
        if (id === winId) {
          win.node.classList.add('active-window');

          // Autofocus terminal inputs or specific fields
          const termInput = win.node.querySelector('.terminal-input');
          if (termInput) termInput.focus();
          const nemoGrid = win.node.querySelector('#nemo-files-grid');
          if (nemoGrid) nemoGrid.focus();
        } else {
          win.node.classList.remove('active-window');
        }
      }
    });

    this.updateTaskbar();
  }

  // Minimize Window
  minimizeWindow(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win) return;

    win.isMinimized = true;
    win.node.style.display = 'none';

    // Find next window to focus
    const remainingFocusable = this.zStack.filter(id => {
      const w = this.windows.find(x => x.id === id);
      return w && !w.isMinimized;
    });

    if (remainingFocusable.length > 0) {
      this.focusWindow(remainingFocusable[remainingFocusable.length - 1]);
    } else {
      this.activeWindowId = null;
      this.updateTaskbar();
    }
  }

  // Restore Window (un-minimize)
  restoreWindow(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win) return;

    win.isMinimized = false;
    win.node.style.display = 'flex';
    this.focusWindow(winId);
  }

  // Toggle Maximize
  toggleMaximize(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win || window.innerWidth < 768) return; // Prevent change in mobile

    const node = win.node;
    if (win.isMaximized) {
      // Restore previous geometry
      win.isMaximized = false;
      win.desktopMaximized = false;
      node.style.left = `${win.savedX}px`;
      node.style.top = `${win.savedY}px`;
      node.style.width = `${win.savedWidth}px`;
      node.style.height = `${win.savedHeight}px`;
      node.classList.remove('rounded-none');
    } else {
      // Save current geometry first
      win.savedX = parseInt(node.style.left) || win.x;
      win.savedY = parseInt(node.style.top) || win.y;
      win.savedWidth = parseInt(node.style.width) || win.width;
      win.savedHeight = parseInt(node.style.height) || win.height;

      // Expand fully
      win.isMaximized = true;
      win.desktopMaximized = true;
      node.style.left = '0px';
      node.style.top = '0px';
      node.style.width = '100vw';
      node.style.height = 'calc(100vh - 48px)';
      node.classList.add('rounded-none');
    }

    // Focus
    this.focusWindow(winId);
  }

  // Close Window
  closeWindow(winId) {
    const winIndex = this.windows.findIndex(w => w.id === winId);
    if (winIndex === -1) return;

    const win = this.windows[winIndex];
    if (win.node) {
      // Fade out transition
      win.node.style.opacity = '0';
      win.node.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (win.node && win.node.parentNode) {
          win.node.parentNode.removeChild(win.node);
        }
      }, 150);
    }

    // Delete from records
    this.windows.splice(winIndex, 1);
    this.zStack = this.zStack.filter(id => id !== winId);

    // Focus next top-most window
    if (this.zStack.length > 0) {
      this.focusWindow(this.zStack[this.zStack.length - 1]);
    } else {
      this.activeWindowId = null;
    }

    this.updateTaskbar();
  }

  // Mount specific App UI Templates
  mountAppContent(containerNode, appId, winInstance, initData) {
    const appTemplate = document.getElementById(`app-${appId}`);
    if (!appTemplate) {
      containerNode.innerHTML = `<div class="p-4 text-red-500 font-semibold">Error: Application template not found.</div>`;
      return;
    }

    const content = appTemplate.content.cloneNode(true);
    containerNode.appendChild(content);

    // Initialize application-specific controllers
    switch (appId) {
      case 'terminal':
        initTerminalApp(containerNode, winInstance, initData);
        break;
      case 'nemo':
        initNemoApp(containerNode, winInstance, initData);
        break;
      case 'settings':
        initSettingsApp(containerNode, winInstance, initData);
        break;
      case 'xed':
        initXedApp(containerNode, winInstance, initData);
        break;
      case 'xreader':
        initXreaderApp(containerNode, winInstance, initData);
        break;
    }
  }

  // Window focusing on click/tap
  bindWindowFocus(windowNode, winId) {
    windowNode.addEventListener('pointerdown', () => {
      if (this.activeWindowId !== winId) {
        this.focusWindow(winId);
      }
    });
  }

  // Close, Minimize, Maximize clicks
  bindWindowControls(windowNode, winInstance) {
    const minBtn = windowNode.querySelector('[data-control="minimize"]');
    const maxBtn = windowNode.querySelector('[data-control="maximize"]');
    const closeBtn = windowNode.querySelector('[data-control="close"]');

    minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.minimizeWindow(winInstance.id);
    });

    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMaximize(winInstance.id);
    });

    // Double click header maximizing
    const titlebar = windowNode.querySelector('.window-titlebar');
    titlebar.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.toggleMaximize(winInstance.id);
    });

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeWindow(winInstance.id);
    });
  }

  // Dragging using Pointer Events (Mouse/Touch unified)
  bindWindowDragging(windowNode, winInstance) {
    const titlebar = windowNode.querySelector('.window-titlebar');

    titlebar.addEventListener('pointerdown', (e) => {
      // Only drag with left click or touch
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      if (winInstance.isMaximized || window.innerWidth < 768) return;

      // Stop selection default
      e.preventDefault();

      // Focus first
      this.focusWindow(winInstance.id);

      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = parseInt(windowNode.style.left) || 0;
      const startTop = parseInt(windowNode.style.top) || 0;

      const onPointerMove = (moveEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        let newLeft = startLeft + dx;
        let newTop = startTop + dy;

        // Boundaries: keep at least 50% titlebar on screen horizontally
        const buffer = 150;
        newLeft = Math.max(-windowNode.offsetWidth + buffer, Math.min(window.innerWidth - buffer, newLeft));
        // Keep title bar visible vertically (cannot hide behind panel at bottom, nor scroll off top)
        newTop = Math.max(0, Math.min(window.innerHeight - 80, newTop));

        windowNode.style.left = `${newLeft}px`;
        windowNode.style.top = `${newTop}px`;

        // Cache coordinates
        winInstance.x = newLeft;
        winInstance.y = newTop;
      };

      const onPointerUp = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  }

  // Resizing using Pointer Events (8 zones)
  bindWindowResizing(windowNode, winInstance) {
    const resizers = windowNode.querySelectorAll('.window-resizer');

    resizers.forEach(resizer => {
      resizer.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        if (winInstance.isMaximized || window.innerWidth < 768) return;

        e.stopPropagation();
        e.preventDefault();

        this.focusWindow(winInstance.id);

        const dir = resizer.getAttribute('data-direction');
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(windowNode.style.left) || 0;
        const startTop = parseInt(windowNode.style.top) || 0;
        const startWidth = parseInt(windowNode.style.width) || windowNode.offsetWidth;
        const startHeight = parseInt(windowNode.style.height) || windowNode.offsetHeight;

        const minW = 340;
        const minH = 200;

        const onPointerMove = (moveEvent) => {
          const dx = moveEvent.clientX - startX;
          const dy = moveEvent.clientY - startY;

          let newWidth = startWidth;
          let newHeight = startHeight;
          let newLeft = startLeft;
          let newTop = startTop;

          if (dir.includes('e')) {
            newWidth = Math.max(minW, startWidth + dx);
          }
          if (dir.includes('s')) {
            newHeight = Math.max(minH, startHeight + dy);
          }
          if (dir.includes('w')) {
            const potentialWidth = startWidth - dx;
            if (potentialWidth >= minW) {
              newWidth = potentialWidth;
              newLeft = startLeft + dx;
            }
          }
          if (dir.includes('n')) {
            const potentialHeight = startHeight - dy;
            if (potentialHeight >= minH) {
              newHeight = potentialHeight;
              newTop = startTop + dy;
            }
          }

          // Verify vertical constraint to avoid dragging/resizing above 0 top limit
          if (newTop < 0) {
            newHeight = newHeight + newTop; // deduct height
            newTop = 0;
          }

          windowNode.style.left = `${newLeft}px`;
          windowNode.style.top = `${newTop}px`;
          windowNode.style.width = `${newWidth}px`;
          windowNode.style.height = `${newHeight}px`;

          winInstance.x = newLeft;
          winInstance.y = newTop;
          winInstance.width = newWidth;
          winInstance.height = newHeight;
        };

        const onPointerUp = () => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      });
    });
  }

  // Update Cinnamon Panel Taskbar
  updateTaskbar() {
    const container = document.getElementById('taskbar-items');
    container.innerHTML = '';

    this.windows.forEach(win => {
      const isActive = this.activeWindowId === win.id;

      const item = document.createElement('button');
      // Rich glass styling matching active/minimized states
      item.className = `h-10 px-3 flex items-center gap-2 rounded border border-white/5 transition-all text-xs font-semibold text-left max-w-[140px] truncate ${isActive
        ? 'bg-white/15 border-b-2 border-b-mint text-white shadow-sm'
        : win.isMinimized
          ? 'opacity-40 hover:opacity-75 hover:bg-white/5'
          : 'hover:bg-white/10 hover:text-white'
        }`;

      item.innerHTML = `
        <span class="w-4 h-4 flex-shrink-0 flex items-center justify-center">${getAppIconSvg(win.appId)}</span>
        <span class="truncate">${win.title}</span>
      `;

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isActive) {
          this.minimizeWindow(win.id);
        } else if (win.isMinimized) {
          this.restoreWindow(win.id);
        } else {
          this.focusWindow(win.id);
        }
      });

      container.appendChild(item);
    });
  }

  // Adapt to mobile screens on the fly
  handleScreenResize() {
    const isMobile = window.innerWidth < 768;
    this.windows.forEach(win => {
      const node = win.node;
      if (isMobile) {
        if (!win.isMaximized) {
          win.savedX = parseInt(node.style.left) || win.x;
          win.savedY = parseInt(node.style.top) || win.y;
          win.savedWidth = parseInt(node.style.width) || win.width;
          win.savedHeight = parseInt(node.style.height) || win.height;
        }
        node.style.left = '0px';
        node.style.top = '0px';
        node.style.width = '100vw';
        node.style.height = `${window.innerHeight - 48}px`;
        node.classList.add('rounded-none');
        win.isMaximized = true;
      } else {
        // Desktop view
        if (win.desktopMaximized) {
          node.style.left = '0px';
          node.style.top = '0px';
          node.style.width = '100vw';
          node.style.height = `calc(100vh - 48px)`;
          node.classList.add('rounded-none');
          win.isMaximized = true;
        } else {
          node.style.left = `${win.savedX}px`;
          node.style.top = `${win.savedY}px`;
          node.style.width = `${win.savedWidth}px`;
          node.style.height = `${win.savedHeight}px`;
          node.classList.remove('rounded-none');
          win.isMaximized = false;
        }
      }
    });
  }
}

export const wm = new WindowManager();

export function spawnApp(appId, title, initData = null, options = {}) {
  let winTitle = title;
  if (!winTitle) {
    switch (appId) {
      case 'terminal': winTitle = 'Terminal de Cinnamon'; break;
      case 'nemo': winTitle = 'Gestor de Archivos (Nemo)'; break;
      case 'settings': winTitle = 'Preferencias del Sistema'; break;
      case 'xed': winTitle = 'Editor de Texto (Xed)'; break;
      case 'firefox': winTitle = 'Navegador Web Firefox'; break;
      case 'xreader': winTitle = 'Visor de Documentos (Xreader)'; break;
      default: winTitle = 'Aplicación';
    }
  }

  // Prevent duplicate settings/nemo/terminal windows for cleaner interaction, Xed can open multiple
  if (appId !== 'xed') {
    const existing = wm.windows.find(w => w.appId === appId);
    if (existing) {
      existing.title = winTitle;
      const titleElem = existing.node.querySelector('.window-title');
      if (titleElem) {
        titleElem.textContent = winTitle;
      }
      if (options.isMinimized === true) {
        wm.minimizeWindow(existing.id);
      } else {
        wm.restoreWindow(existing.id);
      }
      if (options.isMaximized === true && !existing.isMaximized) {
        wm.toggleMaximize(existing.id);
      }
      if (initData) {
        // Re-init with new path/data
        const contentContainer = existing.node.querySelector('.window-content');
        contentContainer.innerHTML = '';
        wm.mountAppContent(contentContainer, appId, existing, initData);
      }
      wm.updateTaskbar();
      return;
    }
  }

  wm.createWindow(appId, winTitle, initData, options);
}

window.wm = wm;
window.spawnApp = spawnApp;
