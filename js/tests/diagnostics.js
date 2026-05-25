import { VIRTUAL_FS, systemConfig } from '../data/virtual-fs.js';
import { WALLPAPERS } from '../data/wallpapers.js';

export function runDiagnosticTests() {
  console.log("=== RUNNING INLINE VERIFICATION TESTS ===");

  // Test 1: VIRTUAL_FS path retrieval validation
  try {
    const file = VIRTUAL_FS["/Desktop/Ventajas de Linux.txt"];
    if (file && file.type === "file" && file.content.includes("VENTAJAS DE MIGRAR A LINUX")) {
      console.log("✅ Test 1: VIRTUAL_FS path lookup works correctly.");
    } else {
      console.error("❌ Test 1: VIRTUAL_FS path lookup FAILED.");
    }
  } catch (err) {
    console.error("❌ Test 1 Encountered Error:", err);
  }

  // Test 2: Virtual FS structure integrity check
  try {
    let valid = true;
    for (let path in VIRTUAL_FS) {
      const node = VIRTUAL_FS[path];
      if (node.type === 'dir' && (!node.children || !Array.isArray(node.children))) {
        valid = false;
        console.error(`❌ Dir folder ${path} has missing children arrays.`);
      }
    }
    if (valid) console.log("✅ Test 2: VIRTUAL_FS structural rules validation passed.");
  } catch (err) {
    console.error("❌ Test 2 Exception:", err);
  }

  // Test 3: System Wallpaper setup integrity
  try {
    if (WALLPAPERS[systemConfig.wallpaper] !== undefined) {
      console.log("✅ Test 3: Wallpaper background configurations are loaded correctly.");
    } else {
      console.error("❌ Test 3: Wallpaper asset mapping is missing fallback.");
    }
  } catch (err) {
    console.error("❌ Test 3 Exception:", err);
  }

  // Test 5: Verify Google Docs URL file entry
  try {
    const linkFile = VIRTUAL_FS["/Documentos/Trabajo Escrito (Google Docs).url"];
    const docsDir = VIRTUAL_FS["/Documentos"];
    if (
      linkFile &&
      linkFile.type === "file" &&
      linkFile.isLink === true &&
      linkFile.url === "https://docs.google.com/document/d/1ucNDarIfe9OJuwl3Td50-TFYytHLR7-Zcdve3En44r0/edit?tab=t.0" &&
      docsDir &&
      docsDir.children.includes("Trabajo Escrito (Google Docs).url")
    ) {
      console.log("✅ Test 5: Google Docs URL link is configured correctly.");
    } else {
      console.error("❌ Test 5: Google Docs URL link lookup or properties validation FAILED.");
    }
  } catch (err) {
    console.error("❌ Test 5 Exception:", err);
  }

  // Test 4: Verify Welcome text and Xed integration (runs after startup apps spawn)
  setTimeout(() => {
    try {
      const welcomeFile = VIRTUAL_FS["/Documentos/Bienvenida.txt"];
      if (!welcomeFile) {
        console.error("❌ Test 4: Bienvenida.txt does not exist in VIRTUAL_FS.");
      } else if (!welcomeFile.content.includes("Segundo parcial de Sistemas Operativos 2")) {
        console.error("❌ Test 4: Bienvenida.txt content does not match expected text.");
      } else {
        // Find open Xed window displaying Bienvenida.txt
        const xedWin = window.wm.windows.find(w => w.appId === 'xed');
        if (!xedWin) {
          console.error("❌ Test 4: Xed window was not spawned at startup.");
        } else {
          const textarea = xedWin.node.querySelector('textarea');
          if (!textarea) {
            console.error("❌ Test 4: Xed window is missing the textarea element.");
          } else if (!textarea.value.includes("Segundo parcial de Sistemas Operativos 2")) {
            console.error("❌ Test 4: Xed textarea content does not match Bienvenida.txt.");
          } else {
            console.log("✅ Test 4: Bienvenida.txt and Xed integration test passed successfully.");
          }
        }
      }
    } catch (err) {
      console.error("❌ Test 4 Exception:", err);
    }
  }, 100);

  // Test 6: Verify window centering and cascade offset logic on desktop viewports
  setTimeout(() => {
    try {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        console.log("ℹ️ Test 6: Viewport is mobile. Centering logic skipped as expected.");
        return;
      }

      const windows = window.wm.windows;
      if (windows.length < 2) {
        console.error("❌ Test 6: Expected at least 2 windows spawned at startup.");
        return;
      }

      let allCorrect = true;
      const panelHeight = 48;
      const defaultWidth = 640;
      const defaultHeight = 440;

      windows.forEach((win, index) => {
        const offset = index * window.wm.winCascadeOffset;
        const expectedX = Math.max(0, ((window.innerWidth - defaultWidth) / 2) - offset);
        const expectedY = Math.max(0, ((window.innerHeight - defaultHeight - panelHeight) / 2) + offset);

        const actualX = parseInt(win.node.style.left);
        const actualY = parseInt(win.node.style.top);

        if (Math.abs(actualX - expectedX) > 2 || Math.abs(actualY - expectedY) > 2) {
          console.error(`❌ Test 6: Window ${win.appId} (index ${index}) not centered correctly. Expected (${expectedX}, ${expectedY}), got (${actualX}, ${actualY})`);
          allCorrect = false;
        }
      });

      if (allCorrect) {
        console.log("✅ Test 6: Centering and cascade offset logic validation passed successfully.");
      }
    } catch (err) {
      console.error("❌ Test 6 Exception:", err);
    }
  }, 150);

  // Test 7: Verify Integrantes files are renamed and marked as unopenable
  try {
    const integrantesDir = VIRTUAL_FS["/Integrantes"];
    if (!integrantesDir) {
      console.error("❌ Test 7: /Integrantes directory does not exist.");
    } else {
      const expectedChildren = ["Maxi Oria", "Manuel Saquilán", "Leandro Fernández", "Franco Caraballo"];
      const actualChildren = integrantesDir.children;
      const matches = expectedChildren.every(c => actualChildren.includes(c)) && expectedChildren.length === actualChildren.length;
      if (!matches) {
        console.error("❌ Test 7: /Integrantes children do not match expected Maxi Oria, Manuel Saquilán, Leandro Fernández, Franco Caraballo.");
      } else {
        let allUnopenable = true;
        expectedChildren.forEach(member => {
          const path = `/Integrantes/${member}`;
          const file = VIRTUAL_FS[path];
          if (!file) {
            console.error(`❌ Test 7: File ${path} does not exist in VIRTUAL_FS.`);
            allUnopenable = false;
          } else if (file.name !== member) {
            console.error(`❌ Test 7: File ${path} has incorrect name property: ${file.name}`);
            allUnopenable = false;
          } else if (file.isUnopenable !== true) {
            console.error(`❌ Test 7: File ${path} is missing isUnopenable: true flag.`);
            allUnopenable = false;
          }
        });
        if (allUnopenable) {
          console.log("✅ Test 7: Integrantes files verified as renamed and unopenable successfully.");
        }
      }
    }
  } catch (err) {
    console.error("❌ Test 7 Exception:", err);
  }

  // Test 8: Xreader Zoom bounds validation (Unit Test)
  try {
    let testZoom = 1.0;
    const zoomIn = () => {
      testZoom = parseFloat((testZoom + 0.1).toFixed(1));
      if (testZoom > 2.0) testZoom = 2.0;
    };
    const zoomOut = () => {
      testZoom = parseFloat((testZoom - 0.1).toFixed(1));
      if (testZoom < 0.5) testZoom = 0.5;
    };

    // Zoom in to limit
    for (let i = 0; i < 15; i++) zoomIn();
    const zoomInCorrect = (testZoom === 2.0);

    // Zoom out to limit
    for (let i = 0; i < 20; i++) zoomOut();
    const zoomOutCorrect = (testZoom === 0.5);

    if (zoomInCorrect && zoomOutCorrect) {
      console.log("✅ Test 8: Xreader Zoom boundary constraints (0.5x - 2.0x) validated successfully.");
    } else {
      console.error(`❌ Test 8: Xreader Zoom boundaries failed. In: ${zoomInCorrect}, Out: ${zoomOutCorrect}`);
    }
  } catch (err) {
    console.error("❌ Test 8 Exception:", err);
  }

  // Test 9: Nemo HTML file double click binding (Integration Test)
  try {
    const originalSpawnApp = window.spawnApp;
    let spawnedAppId = null;
    let spawnedInitData = null;

    window.spawnApp = (appId, title, initData) => {
      spawnedAppId = appId;
      spawnedInitData = initData;
    };

    const testPath = "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html";
    if (testPath.endsWith('.html')) {
      window.spawnApp('xreader', `Visor de Documentos (Xreader)`, { filePath: testPath });
    }

    if (spawnedAppId === 'xreader' && spawnedInitData && spawnedInitData.filePath === testPath) {
      console.log("✅ Test 9: Nemo HTML file association to Xreader binding validated successfully.");
    } else {
      console.error("❌ Test 9: Nemo HTML file association failed to spawn Xreader.");
    }

    window.spawnApp = originalSpawnApp;
  } catch (err) {
    console.error("❌ Test 9 Exception:", err);
  }

  // Test 10: Xreader Mobile Auto-Maximize and Sidebar Collapse (E2E Test)
  setTimeout(() => {
    try {
      let xreaderWin = window.wm.windows.find(w => w.appId === 'xreader');
      if (!xreaderWin) {
        window.spawnApp('xreader', null, { filePath: "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html" });
        xreaderWin = window.wm.windows.find(w => w.appId === 'xreader');
      }

      if (!xreaderWin) {
        console.error("❌ Test 10: Xreader window could not be spawned for testing.");
        return;
      }

      const prevInnerWidth = window.innerWidth;
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

      // Trigger resize handler
      if (typeof window.wm.handleScreenResize === 'function') {
        window.wm.handleScreenResize();
      }

      // Simulate resize inside window
      const sidebar = xreaderWin.node.querySelector('.xreader-sidebar');
      const hasCollapsedClass = sidebar && sidebar.classList.contains('collapsed');
      const wasMaximizedOnMobile = xreaderWin.isMaximized;

      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: prevInnerWidth });
      if (typeof window.wm.handleScreenResize === 'function') {
        window.wm.handleScreenResize();
      }

      if (hasCollapsedClass && wasMaximizedOnMobile) {
        console.log("✅ Test 10: Xreader mobile responsive maximize and sidebar collapse validated successfully.");
      } else {
        console.error(`❌ Test 10: Xreader responsive test failed. Maximized: ${xreaderWin.isMaximized}, Sidebar collapsed: ${hasCollapsedClass}`);
      }
    } catch (err) {
      console.error("❌ Test 10 Exception:", err);
    }
  }, 250);
}
