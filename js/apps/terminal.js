import { VIRTUAL_FS } from '../data/virtual-fs.js';
import { resolvePath } from '../utils/path-resolver.js';
import { setGlobalTheme } from '../core/theme-engine.js';

// --- A. TERMINAL ENGINE ---
export function initTerminalApp(container, winInstance, initData) {
  const historyNode = container.querySelector('.terminal-history');
  const inputNode = container.querySelector('.terminal-input');

  // Custom directory state per terminal instance
  let currentDirectory = '/';
  let commandHistory = [];
  let historyIndex = -1;

  // Print response helper
  const printLine = (text, type = 'normal') => {
    const line = document.createElement('div');
    if (type === 'error') {
      line.className = 'text-red-400 font-bold';
    } else if (type === 'success') {
      line.className = 'text-emerald-300';
    } else if (type === 'header') {
      line.className = 'text-white font-bold mt-1';
    } else if (type === 'dim') {
      line.className = 'text-slate-500 text-xs';
    } else {
      line.className = 'text-emerald-400 whitespace-pre-wrap';
    }
    line.innerHTML = text;
    historyNode.appendChild(line);
    historyNode.scrollTop = historyNode.scrollHeight;
  };

  // Run mock commands
  const executeCommand = (cmdStr) => {
    const parts = cmdStr.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Command print history echo
    printLine(`<span class="text-white font-semibold">mint@cinnamon:${currentDirectory}$</span> ${cmdStr}`);

    if (!cmd) return;

    switch (cmd) {
      case 'help':
        printLine('Comandos Disponibles:', 'header');
        printLine('  help              Muestra esta lista de comandos simulados');
        printLine('  ls                Lista archivos y carpetas en el directorio actual');
        printLine('  cd [directorio]   Cambia de directorio');
        printLine('  cat [archivo]     Muestra el contenido de un archivo');
        printLine('  neofetch          Muestra estadísticas de hardware y el logo ASCII');
        printLine('  theme [light|dark] Cambia el tema visual de la interfaz');
        printLine('  clear             Limpia el buffer de salida de la terminal');
        break;

      case 'ls':
        const dirNode = VIRTUAL_FS[currentDirectory];
        if (dirNode && dirNode.children) {
          const list = dirNode.children.map(child => {
            const path = currentDirectory === '/' ? `/${child}` : `${currentDirectory}/${child}`;
            const file = VIRTUAL_FS[path];
            const isDir = file ? file.type === 'dir' : true;
            return isDir ? `<span class="text-blue-400 font-bold">${child}/</span>` : `<span class="text-slate-200">${child}</span>`;
          }).join('   ');
          printLine(list);
        } else {
          printLine('ls: no se puede acceder al directorio: Error de permisos o ruta inexistente', 'error');
        }
        break;

      case 'cd':
        const target = args.join(' ') || '/';
        let newPath = currentDirectory;

        if (target === '/') {
          newPath = '/';
        } else if (target === '..') {
          if (currentDirectory !== '/') {
            const segs = currentDirectory.split('/');
            segs.pop();
            newPath = segs.join('/') || '/';
          }
        } else {
          const testPath = resolvePath(currentDirectory, target);
          if (VIRTUAL_FS[testPath] && VIRTUAL_FS[testPath].type === 'dir') {
            newPath = testPath;
          } else {
            printLine(`cd: no existe el archivo o directorio: ${target}`, 'error');
            return;
          }
        }
        currentDirectory = newPath;
        break;

      case 'cat':
        if (args.length === 0) {
          printLine('cat: falta el operando', 'error');
          return;
        }
        const fileTarget = args.join(' ');
        const filePath = resolvePath(currentDirectory, fileTarget);
        const fileObj = VIRTUAL_FS[filePath];

        if (fileObj && fileObj.type === 'file') {
          printLine(fileObj.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        } else if (fileObj && fileObj.type === 'dir') {
          printLine(`cat: ${fileTarget}: Es un directorio`, 'error');
        } else {
          printLine(`cat: ${fileTarget}: No existe el archivo o directorio`, 'error');
        }
        break;

      case 'clear':
        historyNode.innerHTML = '';
        break;

      case 'neofetch':
        const asciiMint = `
<span class="text-mint font-bold">         \`.-::--..\`      </span>  <span class="text-white font-bold">mint@cinnamon</span>
<span class="text-mint font-bold">      .-\`          \`-.   </span>  -------------
<span class="text-mint font-bold">    .\`                 \`.</span>  <span class="text-mint font-semibold">SO:</span> Linux Mint 22 (Wilma) x86_64
<span class="text-mint font-bold">   /      .--------.     \\</span>  <span class="text-mint font-semibold">Host:</span> Simulador Web Antigravity 1.0
<span class="text-mint font-bold">  |      /   __     \\     |</span> <span class="text-mint font-semibold">Kernel:</span> 6.8.0-31-generic
<span class="text-mint font-bold">  |     |   /  \\     |    |</span> <span class="text-mint font-semibold">Uptime:</span> 1 hora, 42 min
<span class="text-mint font-bold">  |     |   \\__/     |    |</span> <span class="text-mint font-semibold">Shell:</span> bash 5.2.15
<span class="text-mint font-bold">  |      \\          /     |</span> <span class="text-mint font-semibold">Resolución:</span> ${window.innerWidth}x${window.innerHeight}
<span class="text-mint font-bold">   \\      \`--------\`     /</span>  <span class="text-mint font-semibold">DE:</span> Cinnamon 6.2.2
<span class="text-mint font-bold">    \`.                 .\`</span>  <span class="text-mint font-semibold">WM:</span> Muffin (X11)
<span class="text-mint font-bold">      \`-.           .-\`  </span>  <span class="text-mint font-semibold">Tema:</span> Linux Mint Green [GTK]
<span class="text-mint font-bold">         \`..---..\`       </span>  <span class="text-mint font-semibold">CPU:</span> Intel Core i7 Virtual (4) @ 3.4GHz
                           <span class="text-mint font-semibold">GPU:</span> Renderizador CSS3 WebGPU Core Canvas
                           <span class="text-mint font-semibold">Memoria:</span> 4.1GiB / 16.0GiB (25%)
        `;
        printLine(asciiMint);
        break;

      case 'theme':
        const desiredTheme = args[0];
        if (desiredTheme === 'light' || desiredTheme === 'dark') {
          setGlobalTheme(desiredTheme);
          printLine(`Tema actualizado a ${desiredTheme === 'light' ? 'claro' : 'oscuro'} correctamente.`, 'success');
        } else {
          printLine('Uso: theme [light|dark]', 'error');
        }
        break;

      default:
        printLine(`bash: ${cmd}: comando no encontrado. Escribí 'help' para recibir ayuda.`, 'error');
    }
  };

  // Keyboard hooks
  inputNode.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inputNode.value;
      if (val.trim()) {
        commandHistory.push(val);
        executeCommand(val);
      } else {
        printLine('<span class="text-white font-semibold">mint@cinnamon:' + currentDirectory + '$</span> ');
      }
      inputNode.value = '';
      historyIndex = commandHistory.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputNode.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputNode.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        inputNode.value = '';
      }
    }
  });

  // Auto focus terminal click anywhere inside content
  container.addEventListener('click', () => {
    inputNode.focus();
  });

  // First neofetch trigger automatically if terminal is loaded freshly without initial args
  if (initData && initData.command) {
    executeCommand(initData.command);
  } else {
    printLine('¡Bienvenido! Escribí "help" para comenzar.', 'dim');
  }
}
