import { getAppIconSvg } from '../data/icons.js';

export function renderDesktopIcons() {
  const grid = document.getElementById('desktop-grid');
  grid.innerHTML = '';

  const desktopApps = [
    { label: 'Equipo', icon: 'computer', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Equipo', { path: '/' }) },
    { label: 'Gestor de Archivos (Nemo)', icon: 'nemo', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Inicio', { path: '/Desktop' }) },
    { label: 'Terminal', icon: 'terminal', action: () => window.spawnApp('terminal', 'Terminal de Cinnamon') },
    { label: 'Preferencias del Sistema', icon: 'settings', action: () => window.spawnApp('settings', 'Preferencias del Sistema') },
    { label: 'Ventajas de Linux.txt', icon: 'linux-doc', action: () => window.spawnApp('xed', 'Editor de Texto (Xed) - Ventajas de Linux.txt', { filePath: '/Desktop/Ventajas de Linux.txt' }) },
    { label: 'Resolución de Parcial', icon: 'documents', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Resolución de Parcial', { path: '/Documentos/Resolución de Parcial' }) }
  ];

  desktopApps.forEach(app => {
    const node = document.createElement('div');
    node.className = 'desktop-icon text-center focus:outline-none';
    node.tabIndex = 0;

    const iconHtml = getAppIconSvg(app.icon);

    node.innerHTML = `
      <div class="w-12 h-12 flex items-center justify-center drop-shadow-md select-none">${iconHtml}</div>
      <span class="text-xs font-semibold text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.9)] whitespace-normal break-words w-full mt-1.5 select-none leading-tight">${app.label}</span>
    `;

    // Double click or enter launches application
    let clicks = 0;
    let timer = null;

    node.addEventListener('click', () => {
      clicks++;
      if (clicks === 1) {
        timer = setTimeout(() => { clicks = 0; }, 300);
      } else if (clicks === 2) {
        clearTimeout(timer);
        clicks = 0;
        app.action();
      }
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        app.action();
      }
    });

    grid.appendChild(node);
  });

  // Add Quick Launch Panel Items in Cinnamon Panel
  const quickLaunchContainer = document.getElementById('quick-launch');
  quickLaunchContainer.innerHTML = '';
  const quickItems = [
    { icon: 'terminal', appId: 'terminal', title: 'Terminal de Cinnamon' },
    { icon: 'nemo', appId: 'nemo', title: 'Gestor de Archivos (Nemo)' },
    { icon: 'settings', appId: 'settings', title: 'Preferencias del Sistema' }
  ];
  quickItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'h-10 w-10 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded flex items-center justify-center transition-colors';
    btn.title = item.title;
    btn.innerHTML = `<span class="w-5 h-5">${getAppIconSvg(item.icon)}</span>`;
    btn.addEventListener('click', () => window.spawnApp(item.appId, item.title));
    quickLaunchContainer.appendChild(btn);
  });
}

export function setupContextMenu() {
  const menu = document.getElementById('desktop-context-menu');
  const desktop = document.getElementById('desktop');

  desktop.addEventListener('contextmenu', (e) => {
    // Only open context menu directly on desktop background or grid, not on windows/buttons
    if (e.target !== desktop && e.target === document.getElementById('window-zone')) return;

    e.preventDefault();
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.classList.remove('hidden');
  });

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
}
