import { VIRTUAL_FS } from '../data/virtual-fs.js';
import { showToast } from '../ui/toast.js';

// --- C2. XREADER DOCUMENT VIEWER ---
export function initXreaderApp(container, winInstance, initData) {
  const sidebar = container.querySelector('.xreader-sidebar');
  const sidebarList = container.querySelector('.xreader-sidebar-list');
  const toggleSidebarBtn = container.querySelector('.xreader-toggle-sidebar-btn');

  const zoomInBtn = container.querySelector('.xreader-zoom-in-btn');
  const zoomOutBtn = container.querySelector('.xreader-zoom-out-btn');
  const zoomResetBtn = container.querySelector('.xreader-zoom-reset-btn');
  const zoomIndicator = container.querySelector('.xreader-zoom-indicator');

  const prevBtn = container.querySelector('.xreader-prev-btn');
  const nextBtn = container.querySelector('.xreader-next-btn');
  const pageIndicator = container.querySelector('.xreader-page-indicator');

  const searchInput = container.querySelector('.xreader-search-input');
  const printBtn = container.querySelector('.xreader-print-btn');

  const sheet = container.querySelector('.xreader-page-sheet');
  const sheetContainer = container.querySelector('.xreader-page-sheet-container');

  let zoom = 1.0;
  let activePath = initData && initData.filePath ? initData.filePath : '/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html';
  let sidebarOpen = true;

  const exercises = [
    "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html",
    "/Documentos/Resolución de Parcial/Parte 2 - Investigacion y Experimentacion.html",
    "/Documentos/Resolución de Parcial/Parte 3 - Linux para diferentes personas.html",
    "/Documentos/Resolución de Parcial/Parte 4 - Linux, el motor de la IA.html",
    "/Documentos/Resolución de Parcial/Parte 5 - Conclusión grupal.html",
    "/Documentos/Resolución de Parcial/Bibliografía.html"
  ];

  // Render Sidebar index links
  const renderSidebar = () => {
    sidebarList.innerHTML = '';
    exercises.forEach((path, idx) => {
      const active = activePath === path;
      const btn = document.createElement('button');
      btn.className = `w-full text-left px-3 py-2 rounded text-xs font-medium flex items-center gap-2 select-none cursor-pointer ${active ? 'active' : 'text-slate-600 dark:text-slate-300'
        }`;
      btn.innerHTML = `
        <span class="w-4 h-4 flex-shrink-0 flex items-center justify-center font-bold text-mint">${idx + 1}</span>
        <span class="truncate">${path.split('/').pop().replace('.html', '')}</span>
      `;
      btn.addEventListener('click', () => {
        loadPage(path);
      });
      sidebarList.appendChild(btn);
    });
  };

  // Load document content
  const loadPage = (path) => {
    if (!VIRTUAL_FS[path]) return;
    activePath = path;

    // Set file contents
    sheet.innerHTML = VIRTUAL_FS[path].content;

    // Update active highlight & page indicator
    const idx = exercises.indexOf(path);
    pageIndicator.textContent = `Documento ${idx + 1} de ${exercises.length}`;

    // Update sidebar highlight
    renderSidebar();

    // Update window title
    const fileName = path.split('/').pop();
    const fullTitle = `Visor de Documentos (Xreader) - ${fileName}`;
    winInstance.title = fullTitle;
    const titleElem = winInstance.node.querySelector('.window-title');
    if (titleElem) {
      titleElem.textContent = fullTitle;
    }
    window.wm.updateTaskbar();

    // Reset scroll of the viewport
    const viewport = container.querySelector('.xreader-canvas-viewport');
    if (viewport) {
      viewport.scrollTop = 0;
      viewport.scrollLeft = 0;
    }
  };

  // Zoom Controls
  const applyZoom = () => {
    zoomIndicator.textContent = `${Math.round(zoom * 100)}%`;
    // Apply zoom style
    if (typeof sheet.style.zoom !== 'undefined') {
      sheet.style.zoom = zoom;
    } else {
      sheet.style.transform = `scale(${zoom})`;
      sheet.style.transformOrigin = 'top center';
    }
  };

  zoomInBtn.addEventListener('click', () => {
    if (zoom < 2.0) {
      zoom = parseFloat((zoom + 0.1).toFixed(1));
      if (zoom > 2.0) zoom = 2.0;
      applyZoom();
    }
  });

  zoomOutBtn.addEventListener('click', () => {
    if (zoom > 0.5) {
      zoom = parseFloat((zoom - 0.1).toFixed(1));
      if (zoom < 0.5) zoom = 0.5;
      applyZoom();
    }
  });

  zoomResetBtn.addEventListener('click', () => {
    zoom = 1.0;
    applyZoom();
  });

  // Toggle Sidebar
  toggleSidebarBtn.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
      sidebar.classList.remove('collapsed');
    } else {
      sidebar.classList.add('collapsed');
    }
  });

  // Navigation
  prevBtn.addEventListener('click', () => {
    let idx = exercises.indexOf(activePath);
    if (idx > 0) {
      loadPage(exercises[idx - 1]);
    } else {
      loadPage(exercises[exercises.length - 1]); // Loop around
    }
  });

  nextBtn.addEventListener('click', () => {
    let idx = exercises.indexOf(activePath);
    if (idx < exercises.length - 1) {
      loadPage(exercises[idx + 1]);
    } else {
      loadPage(exercises[0]); // Loop around
    }
  });

  // Mock Print simulation
  printBtn.addEventListener('click', () => {
    const fileName = activePath.split('/').pop();
    showToast(`Simulando impresión de ${fileName}...`);
  });

  // Mock Search simulation
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      showToast("La búsqueda dentro del documento está simulada.");
    }
  });

  // Mobile Adaptations
  const checkViewport = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      winInstance.isMaximized = true;
      winInstance.node.style.left = '0px';
      winInstance.node.style.top = '0px';
      winInstance.node.style.width = '100vw';
      winInstance.node.style.height = 'calc(100vh - 48px)';
      winInstance.node.classList.add('rounded-none');

      const resizers = winInstance.node.querySelectorAll('.window-resizer');
      resizers.forEach(r => r.style.display = 'none');

      sidebar.classList.add('collapsed');
      sidebarOpen = false;
    } else {
      const resizers = winInstance.node.querySelectorAll('.window-resizer');
      resizers.forEach(r => r.style.display = '');
    }
  };

  // Cleanup listener on next spawn/init
  if (winInstance._resizeHandler) {
    window.removeEventListener('resize', winInstance._resizeHandler);
  }
  winInstance._resizeHandler = checkViewport;
  window.addEventListener('resize', checkViewport);

  // Initial load
  checkViewport();
  loadPage(activePath);
  applyZoom();
}
