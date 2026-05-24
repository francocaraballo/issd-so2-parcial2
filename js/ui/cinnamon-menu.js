import { getAppIconSvg } from '../data/icons.js';

export function startClockUpdater() {
  const clockNode = document.getElementById('clock');
  const updateClock = () => {
    const now = new Date();
    // Format: 'May 23, 03:04 AM'
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    clockNode.textContent = now.toLocaleDateString('es-AR', options);
  };

  updateClock();
  setInterval(updateClock, 1000);
}

export function setupCinnamonMenu() {
  const menuNode = document.getElementById('mint-menu');
  const btn = document.getElementById('mint-menu-btn');
  const searchInput = document.getElementById('menu-search');
  const categoriesList = document.getElementById('menu-categories');
  const appsList = document.getElementById('menu-apps-list');

  // App definitions inside Mint menu
  const menuApps = [
    { id: 'nemo', name: 'Gestor de Archivos (Nemo)', desc: 'Explorá y organizá carpetas y documentos.', cat: 'system', icon: 'nemo' },
    { id: 'terminal', name: 'Terminal de Cinnamon', desc: 'Ejecutá comandos y utilidades de la terminal.', cat: 'system', icon: 'terminal' },
    { id: 'settings', name: 'Preferencias del Sistema', desc: 'Personalizá el fondo de pantalla, colores y temas.', cat: 'settings', icon: 'settings' },
    { id: 'xed', name: 'Editor de Texto (Xed)', desc: 'Creá y modificá archivos de texto plano.', cat: 'office', icon: 'xed' },
    { id: 'firefox', name: 'Navegador Web Firefox', desc: 'Navegá por la web de forma segura.', cat: 'internet', icon: 'firefox' }
  ];

  const categories = [
    { id: 'all', label: 'Todas las Aplicaciones' },
    { id: 'internet', label: 'Internet' },
    { id: 'office', label: 'Oficina' },
    { id: 'system', label: 'Administración' },
    { id: 'settings', label: 'Preferencias' }
  ];

  let selectedCategory = 'all';

  // Render Categories sidebar links
  const renderCategories = () => {
    categoriesList.innerHTML = '';
    categories.forEach(cat => {
      const active = selectedCategory === cat.id;
      const button = document.createElement('button');
      button.className = `w-full text-left px-3 py-2 rounded text-xs font-semibold select-none ${active ? 'bg-mint text-white font-bold' : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
        }`;
      button.textContent = cat.label;
      button.addEventListener('click', () => {
        selectedCategory = cat.id;
        renderCategories();
        renderApps();
      });
      categoriesList.appendChild(button);
    });
  };

  // Render application shortcuts in Menu panel
  const renderApps = () => {
    appsList.innerHTML = '';
    const filterText = searchInput.value.toLowerCase();

    const filtered = menuApps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(filterText) || app.desc.toLowerCase().includes(filterText);
      const matchesCategory = selectedCategory === 'all' || app.cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
      appsList.innerHTML = `<div class="p-4 text-center text-slate-500 font-medium text-xs">No se encontraron aplicaciones.</div>`;
      return;
    }

    filtered.forEach(app => {
      const card = document.createElement('button');
      card.className = 'w-full flex items-center gap-3 p-2 rounded-lg hover:bg-mint/15 text-left transition-colors border border-transparent hover:border-mint/20 focus:outline-none';
      card.innerHTML = `
        <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center">${getAppIconSvg(app.icon)}</div>
        <div>
          <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${app.name}</div>
          <div class="text-[10px] text-slate-400 leading-normal truncate w-[260px]">${app.desc}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        window.spawnApp(app.id);
        menuNode.classList.add('hidden'); // Close menu
      });

      appsList.appendChild(card);
    });
  };

  // Button toggle Cinnamon Menu
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuNode.classList.toggle('hidden');
    if (!menuNode.classList.contains('hidden')) {
      searchInput.value = '';
      selectedCategory = 'all';
      renderCategories();
      renderApps();
      searchInput.focus();
    }
  });

  // Close menu if clicking outside
  document.addEventListener('click', (e) => {
    if (!menuNode.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
      menuNode.classList.add('hidden');
    }
  });

  // Search Keyup
  searchInput.addEventListener('input', renderApps);

  // Init
  renderCategories();
  renderApps();
}

export function lockScreenSimulator() {
  alert("Pantalla Bloqueada (Simulación). Presioná Aceptar para desbloquear.");
}

export function shutdownSimulator() {
  const overlay = document.getElementById('shutdown-screen');
  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('opacity-100');
    overlay.classList.remove('pointer-events-none');
  }, 50);
}

export function rebootSimulator() {
  const overlay = document.getElementById('shutdown-screen');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('pointer-events-none');
  setTimeout(() => {
    overlay.classList.add('hidden');
    location.reload();
  }, 1000);
}

// Ensure these are attached to window since they might be used globally
window.lockScreenSimulator = lockScreenSimulator;
window.shutdownSimulator = shutdownSimulator;
window.rebootSimulator = rebootSimulator;
