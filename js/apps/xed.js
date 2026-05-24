import { VIRTUAL_FS } from '../data/virtual-fs.js';

// --- D. XED TEXT EDITOR ---
export function initXedApp(container, winInstance, initData) {
  const textarea = container.querySelector('.xed-textarea');
  const statusMsg = container.querySelector('.xed-status-msg');
  const coordsMsg = container.querySelector('.xed-coords-msg');
  const saveBtn = container.querySelector('#xed-save-btn');

  let openedFilePath = initData && initData.filePath ? initData.filePath : null;

  // Pre-load content
  if (openedFilePath && VIRTUAL_FS[openedFilePath]) {
    textarea.value = VIRTUAL_FS[openedFilePath].content;
    statusMsg.textContent = `File: ${openedFilePath.split('/').pop()}`;
  } else {
    textarea.value = '';
    statusMsg.textContent = 'Untitled Document';
  }

  // Save button logic
  saveBtn.addEventListener('click', () => {
    if (!openedFilePath) {
      // Simulate Prompt for saving file
      const inputFilename = prompt("Escribí un nombre de archivo para guardar (se guardará en Desktop/):", "sin_titulo.txt");
      if (!inputFilename) return;
      openedFilePath = `/Desktop/${inputFilename}`;
    }

    // Save to virtual filesystem
    VIRTUAL_FS[openedFilePath] = {
      type: "file",
      name: openedFilePath.split('/').pop(),
      content: textarea.value
    };

    // Make sure it is registered in parent folder
    const parentPath = openedFilePath.substring(0, openedFilePath.lastIndexOf('/')) || '/';
    if (VIRTUAL_FS[parentPath] && VIRTUAL_FS[parentPath].children) {
      if (!VIRTUAL_FS[parentPath].children.includes(VIRTUAL_FS[openedFilePath].name)) {
        VIRTUAL_FS[parentPath].children.push(VIRTUAL_FS[openedFilePath].name);
      }
    }

    statusMsg.textContent = `Guardado: ${openedFilePath.split('/').pop()}`;

    // Refresh Nemo File Manager if open to instantly display new file!
    const nemoWin = window.wm.windows.find(w => w.appId === 'nemo');
    if (nemoWin) {
      const contentContainer = nemoWin.node.querySelector('.window-content');
      contentContainer.innerHTML = '';
      window.wm.mountAppContent(contentContainer, 'nemo', nemoWin, { path: parentPath });
    }
  });

  // Calculate Ln/Col cursor tracking
  const updateCursorTracking = () => {
    const textVal = textarea.value;
    const selectionStart = textarea.selectionStart;

    const lines = textVal.substring(0, selectionStart).split("\n");
    const currentLine = lines.length;
    const currentCol = lines[lines.length - 1].length + 1;

    coordsMsg.textContent = `Lín ${currentLine}, Col ${currentCol}`;
  };

  textarea.addEventListener('keyup', updateCursorTracking);
  textarea.addEventListener('click', updateCursorTracking);
  textarea.addEventListener('focus', updateCursorTracking);
}
