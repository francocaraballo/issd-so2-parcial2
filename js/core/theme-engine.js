import { systemConfig } from '../data/virtual-fs.js';
import { WALLPAPERS } from '../data/wallpapers.js';
import { ACCENTS } from '../data/accents.js';

// ==========================================
// 4. GLOBAL THEME ENGINE CONTROLLERS
// ==========================================
export function setGlobalTheme(themeMode) {
  systemConfig.theme = themeMode;
  localStorage.setItem('mint_theme', themeMode);

  if (themeMode === 'light') {
    document.documentElement.classList.remove('theme-dark', 'dark');
    document.documentElement.classList.add('theme-light');
  } else {
    document.documentElement.classList.remove('theme-light');
    document.documentElement.classList.add('theme-dark', 'dark');
  }
}

export function setGlobalAccent(accentKey) {
  const accent = ACCENTS[accentKey];
  if (!accent) return;

  systemConfig.accent = accentKey;
  systemConfig.accentHex = accent.hex;
  localStorage.setItem('mint_accent', accentKey);

  document.documentElement.style.setProperty('--mint-accent', accent.hex);
  document.documentElement.style.setProperty('--mint-accent-rgb', accent.rgb);
}

export function setGlobalWallpaper(wallpaperKey) {
  const wallpaperStyle = WALLPAPERS[wallpaperKey];
  if (!wallpaperStyle) return;

  systemConfig.wallpaper = wallpaperKey;
  localStorage.setItem('mint_wallpaper', wallpaperKey);

  document.getElementById('desktop').style.background = wallpaperStyle;
}

// Boot Configuration
export function bootConfigurations() {
  const savedTheme = localStorage.getItem('mint_theme') || 'dark';
  const savedAccent = localStorage.getItem('mint_accent') || 'mint';
  const savedWallpaper = localStorage.getItem('mint_wallpaper') || 'mint-default';

  setGlobalTheme(savedTheme);
  setGlobalAccent(savedAccent);
  setGlobalWallpaper(savedWallpaper);
}
