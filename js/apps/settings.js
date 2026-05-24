import { systemConfig } from '../data/virtual-fs.js';
import { WALLPAPERS } from '../data/wallpapers.js';
import { ACCENTS } from '../data/accents.js';
import { setGlobalTheme, setGlobalAccent, setGlobalWallpaper } from '../core/theme-engine.js';

// --- C. SYSTEM SETTINGS ---
export function initSettingsApp(container, winInstance, initData) {
  const tabs = container.querySelectorAll('.settings-nav-item');
  const panes = container.querySelectorAll('.settings-pane');
  const themeToggle = container.querySelector('#settings-theme-toggle');

  // Theme state setup
  themeToggle.checked = systemConfig.theme === 'dark';
  themeToggle.addEventListener('change', (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setGlobalTheme(newTheme);
  });

  // Render Accents grid
  const accentContainer = container.querySelector('#settings-accent-colors');
  accentContainer.innerHTML = '';
  Object.keys(ACCENTS).forEach(key => {
    const color = ACCENTS[key];
    const isSelected = systemConfig.accent === key;

    const btn = document.createElement('button');
    btn.className = `w-8 h-8 rounded-full border-2 transition-all relative flex items-center justify-center hover:scale-105 active:scale-95 ${isSelected ? 'border-slate-800 dark:border-white scale-110 shadow-md' : 'border-transparent shadow-sm'
      }`;
    btn.style.backgroundColor = color.hex;

    const accentNames = {
      'mint': 'Verde Menta',
      'blue': 'Azul',
      'purple': 'Púrpura',
      'amber': 'Ámbar'
    };
    btn.title = `Color de énfasis: ${accentNames[key] || key}`;

    // Selected marker check
    if (isSelected) {
      btn.innerHTML = `<svg class="w-4 h-4 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
    }

    btn.addEventListener('click', () => {
      setGlobalAccent(key);
      initSettingsApp(container, winInstance, initData); // force rerender
    });

    accentContainer.appendChild(btn);
  });

  // Render Backgrounds previews
  const bgContainer = container.querySelector('#settings-backgrounds');
  bgContainer.innerHTML = '';
  Object.keys(WALLPAPERS).forEach(key => {
    const bgStyle = WALLPAPERS[key];
    const isSelected = systemConfig.wallpaper === key;

    const card = document.createElement('button');
    card.className = `h-20 rounded-lg overflow-hidden border-2 transition-all text-left relative flex flex-col justify-end p-2 ${isSelected ? 'border-mint dark:border-mint-light scale-102 shadow-lg ring-1 ring-mint' : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
      }`;
    card.style.background = bgStyle;

    const nameLabel = document.createElement('span');
    nameLabel.className = 'text-[10px] text-white bg-slate-900/60 px-1.5 py-0.5 rounded font-semibold w-max backdrop-blur-xs select-none';

    const wallpaperNames = {
      'mint-default': 'Menta Predeterminado',
      'sunset-indigo': 'Atardecer Índigo',
      'cyber-slate': 'Pizarra Cyberpunk'
    };
    nameLabel.textContent = wallpaperNames[key] || key.replace('-', ' ');
    card.appendChild(nameLabel);

    card.addEventListener('click', () => {
      setGlobalWallpaper(key);
      initSettingsApp(container, winInstance, initData); // force rerender
    });
    bgContainer.appendChild(card);
  });

  // Tab Switching logic
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-mint/15', 'text-mint', 'dark:text-mint-light');
        t.classList.add('text-slate-600', 'dark:text-slate-300');
      });
      tab.classList.add('bg-mint/15', 'text-mint', 'dark:text-mint-light');
      tab.classList.remove('text-slate-600', 'dark:text-slate-300');

      const tabName = tab.getAttribute('data-tab');
      panes.forEach(pane => {
        if (pane.id === `settings-pane-${tabName}`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });
}
