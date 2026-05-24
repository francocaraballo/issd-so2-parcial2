import { wm, spawnApp } from './core/window-manager.js';
import { bootConfigurations } from './core/theme-engine.js';
import { startClockUpdater, setupCinnamonMenu } from './ui/cinnamon-menu.js';
import { renderDesktopIcons, setupContextMenu } from './ui/desktop.js';
import { runDiagnosticTests } from './tests/diagnostics.js';

window.addEventListener('DOMContentLoaded', () => {
  bootConfigurations();
  startClockUpdater();
  setupCinnamonMenu();
  renderDesktopIcons();
  setupContextMenu();

  // Monitor viewport widths dynamically for mobile adaptations
  window.addEventListener('resize', () => {
    window.wm.handleScreenResize();
  });

  // Run tests inside console environment for validation
  runDiagnosticTests();

  // Open Nemo & Welcome file automatically to greet users
  window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Documentos', { path: '/Documentos' });
  window.spawnApp('xed', 'Editor de Texto (Xed) - Bienvenida.txt', { filePath: '/Documentos/Bienvenida.txt' });
});
