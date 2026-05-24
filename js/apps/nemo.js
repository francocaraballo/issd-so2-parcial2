import { VIRTUAL_FS } from '../data/virtual-fs.js';
import { getAppIconSvg } from '../data/icons.js';

// --- B. NEMO FILE MANAGER ---
export function initNemoApp(container, winInstance, initData) {
  const sidebar = container.querySelector('#nemo-sidebar-links');
  const filesGrid = container.querySelector('#nemo-files-grid');
  const breadcrumbs = container.querySelector('.nemo-breadcrumbs');
  const backBtn = container.querySelector('.nemo-back-btn');

  let currentPath = initData && initData.path ? initData.path : '/';
  let navigationHistory = [currentPath];
  let historyPointer = 0;

  // Render Sidebar navigation shortcuts
  const renderSidebar = () => {
    sidebar.innerHTML = '';
    const shortcuts = [
      { label: 'Equipo', path: '/', icon: 'computer' },
      { label: 'Escritorio', path: '/Desktop', icon: 'desktop' },
      { label: 'Documentos', path: '/Documentos', icon: 'documents' },
      { label: 'Imágenes', path: '/Imágenes', icon: 'pictures' },
      { label: 'Integrantes', path: '/Integrantes', icon: 'about' }
    ];

    shortcuts.forEach(item => {
      const active = currentPath === item.path;
      const btn = document.createElement('button');
      btn.className = `w-full text-left px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 select-none hover:bg-slate-200/60 dark:hover:bg-slate-800/40 ${active ? 'bg-mint/20 text-mint font-bold dark:text-mint-light' : 'text-slate-600 dark:text-slate-300'
        }`;
      btn.innerHTML = `
        <span class="w-3.5 h-3.5 flex-shrink-0">${getAppIconSvg(item.icon)}</span>
        <span>${item.label}</span>
      `;
      btn.addEventListener('click', () => {
        navigateTo(item.path);
      });
      sidebar.appendChild(btn);
    });
  };

  // Render Address bar breadcrumbs
  const renderBreadcrumbs = () => {
    breadcrumbs.innerHTML = '';
    const parts = currentPath.split('/').filter(Boolean);

    // Root link
    const rootBtn = document.createElement('button');
    rootBtn.className = 'hover:text-mint font-semibold hover:underline';
    rootBtn.textContent = 'Equipo';
    rootBtn.addEventListener('click', () => navigateTo('/'));
    breadcrumbs.appendChild(rootBtn);

    let pathAcc = '';
    parts.forEach(part => {
      pathAcc += '/' + part;

      const separator = document.createElement('span');
      separator.className = 'text-slate-400';
      separator.textContent = '>';
      breadcrumbs.appendChild(separator);

      const currentPathVal = pathAcc;
      const partBtn = document.createElement('button');
      partBtn.className = 'hover:text-mint font-semibold hover:underline truncate max-w-[80px]';
      partBtn.textContent = part;
      partBtn.addEventListener('click', () => navigateTo(currentPathVal));
      breadcrumbs.appendChild(partBtn);
    });

    // Back button state
    backBtn.disabled = historyPointer <= 0;
  };

  // Render Grid files list
  const renderFilesGrid = () => {
    filesGrid.innerHTML = '';
    const dirNode = VIRTUAL_FS[currentPath];
    if (!dirNode || !dirNode.children) return;

    dirNode.children.forEach(child => {
      const fullChildPath = currentPath === '/' ? `/${child}` : `${currentPath}/${child}`;
      const itemObj = VIRTUAL_FS[fullChildPath];
      const isDir = itemObj ? itemObj.type === 'dir' : true;
      const displayName = child;

      const fileCard = document.createElement('div');
      fileCard.className = 'desktop-icon flex-col w-[76px] min-h-[82px] h-auto border border-transparent rounded hover:bg-slate-200/50 dark:hover:bg-slate-800/50 cursor-pointer text-center py-2 flex items-center justify-start gap-1.5 focus:outline-none';
      fileCard.tabIndex = 0;

      // Determine Icon
      let iconSvg = '';
      if (isDir) {
        iconSvg = getAppIconSvg('nemo'); // default folder icon
      } else if (itemObj && itemObj.isLink) {
        iconSvg = getAppIconSvg('link'); // link shortcut icon
      } else {
        iconSvg = getAppIconSvg('xed'); // document editor icon
      }

      fileCard.innerHTML = `
        <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center">${iconSvg}</div>
        <div class="text-[11px] leading-tight whitespace-normal break-words w-full px-1.5 font-medium text-slate-800 dark:text-slate-200">${displayName}</div>
      `;

      // Click listeners
      let clickCount = 0;
      let clickTimer = null;

      fileCard.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
          clickTimer = setTimeout(() => {
            clickCount = 0;
            // Select highlight state can go here
          }, 300);
        } else if (clickCount === 2) {
          clearTimeout(clickTimer);
          clickCount = 0;

          if (isDir) {
            navigateTo(fullChildPath);
          } else if (itemObj && itemObj.isLink) {
            window.open(itemObj.url, '_blank');
          } else if (itemObj && (itemObj.isUnopenable || fullChildPath.startsWith('/Integrantes/'))) {
            // Do nothing
          } else if (fullChildPath.endsWith('.html')) {
            window.spawnApp('xreader', `Visor de Documentos (Xreader) - ${displayName}`, { filePath: fullChildPath });
          } else {
            // File double-click opens Xed!
            window.spawnApp('xed', `Xed - ${displayName}`, { filePath: fullChildPath });
          }
        }
      });

      // Support keyboard enter
      fileCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (isDir) {
            navigateTo(fullChildPath);
          } else if (itemObj && itemObj.isLink) {
            window.open(itemObj.url, '_blank');
          } else if (itemObj && (itemObj.isUnopenable || fullChildPath.startsWith('/Integrantes/'))) {
            // Do nothing
          } else if (fullChildPath.endsWith('.html')) {
            window.spawnApp('xreader', `Visor de Documentos (Xreader) - ${displayName}`, { filePath: fullChildPath });
          } else {
            window.spawnApp('xed', `Xed - ${displayName}`, { filePath: fullChildPath });
          }
        }
      });

      filesGrid.appendChild(fileCard);
    });
  };

  const navigateTo = (path) => {
    if (!VIRTUAL_FS[path] || VIRTUAL_FS[path].type !== 'dir') return;

    currentPath = path;

    // Update pointer logs
    if (navigationHistory[historyPointer] !== path) {
      // Clear forward history if we navigate to a new page
      navigationHistory = navigationHistory.slice(0, historyPointer + 1);
      navigationHistory.push(path);
      historyPointer = navigationHistory.length - 1;
    }

    renderSidebar();
    renderBreadcrumbs();
    renderFilesGrid();
  };

  // Back button event
  backBtn.addEventListener('click', () => {
    if (historyPointer > 0) {
      historyPointer--;
      currentPath = navigationHistory[historyPointer];
      renderSidebar();
      renderBreadcrumbs();
      renderFilesGrid();
    }
  });

  // Start NEMO view
  navigateTo(currentPath);
}
