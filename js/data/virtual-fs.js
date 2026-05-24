// ==========================================
// 1. VIRTUAL FILESYSTEM DATA
// ==========================================
export const VIRTUAL_FS = {
  "/": {
    type: "dir",
    name: "Raíz",
    children: ["Desktop", "Documentos", "Imágenes", "Integrantes"]
  },
  "/Desktop": {
    type: "dir",
    name: "Desktop",
    children: ["Ventajas de Linux.txt"]
  },
  "/Desktop/Ventajas de Linux.txt": {
    type: "file",
    name: "Ventajas de Linux.txt",
    content: `=========================================
      VENTAJAS DE MIGRAR A LINUX
=========================================

1. SOFTWARE LIBRE Y CÓDIGO ABIERTO
Linux está bajo la Licencia Pública General (GPL). Cualquiera puede ejecutar, estudiar, compartir y modificar el código fuente. Vos tenés el control total de tu sistema.

2. ESTABILIDAD Y RENDIMIENTO
Linux gestiona los recursos del sistema de una manera excepcional, casi nunca requiere reiniciar y no se ralentiza con el paso del tiempo como otros sistemas operativos.

3. SEGURIDAD
El modelo de permisos y la auditoría constante de la comunidad hacen que las vulnerabilidades se encuentren y solucionen al toque. Los virus o malware diseñados para el escritorio de Linux son sumamente raros.

4. SIN ACTUALIZACIONES FORZADAS
Vos decidís cuándo actualizar. Las actualizaciones se instalan en segundo plano en silencio, sin interrumpir tu trabajo ni obligarte a reiniciar de repente.

5. CERO INTRUSIÓN A LA PRIVACIDAD
Linux Mint no espía el uso que le das al sistema, no registra tus clics ni envía telemetría a servidores corporativos para publicidad. Tu escritorio es 100% privado.

6. ALTAMENTE PERSONALIZABLE
Desde la barra de tareas hasta el comportamiento de las ventanas, los temas y los íconos: podés adaptar todo el entorno para que se ajuste exactamente a tu forma de trabajar.

7. REVIVIR HARDWARE ANTIGUO
Gracias a entornos de escritorio livianos (como MATE o XFCE) y un consumo de RAM bajísimo, Linux permite darle una segunda vida a computadoras viejas que Windows ya no soporta.`
  },
  "/Documentos": {
    type: "dir",
    name: "Documentos",
    children: ["Bienvenida.txt", "conclusion_grupal.txt", "Trabajo Escrito (Google Docs).url", "Resolución de Parcial"]
  },
  "/Documentos/Resolución de Parcial": {
    type: "dir",
    name: "Resolución de Parcial",
    children: [
      "Parte 1 - Instalacion Virtual Box y Linux Mint.html",
      "Parte 2 - Investigacion y Experimentacion.html",
      "Parte 3 - Linux para diferentes personas.html",
      "Parte 4 - Linux, el motor de la IA.html",
      "Parte 5 - Conclusión grupal.html"
    ]
  },
  "/Documentos/Resolución de Parcial/Ejercicio 1 - Planificación de Procesos.html": {
    type: "file",
    name: "Parte 1 - Instalacion Virtual Box y Linux Mint.html",
    content: `
      <h1>Parte 1 - Instalacion Virtual Box y Linux Mint.html</h1>
      <p>La planificación de la CPU consiste en determinar qué proceso en la cola de Listos (Ready Queue) recibe el uso del procesador cuando este queda libre. El objetivo principal es maximizar el uso de la CPU y brindar tiempos de respuesta óptimos para el usuario.</p>
      <h2>Algoritmos de Planificación</h2>
      <ul>
        <li><strong>First-Come, First-Served (FCFS):</strong> Planificación no apropiativa donde el primer proceso que llega se ejecuta primero. Sencillo pero propenso al "efecto convoy".</li>
        <li><strong>Shortest Job First (SJF):</strong> Ejecuta el proceso con la ráfaga de CPU más corta. Es óptimo porque minimiza el tiempo de espera promedio.</li>
        <li><strong>Shortest Remaining Time First (SRTF):</strong> Versión apropiativa de SJF. Si llega un proceso con menor tiempo restante que el actual, se apropia del procesador.</li>
        <li><strong>Round Robin (RR):</strong> Algoritmo diseñado para sistemas de tiempo compartido. Cada proceso recibe una pequeña porción de tiempo de CPU (quantum). Si no termina, vuelve al final de la cola.</li>
      </ul>
      <img src="images/scheduling_diagram.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama de Planificación de CPU" />
      <p>A continuación se presenta un video explicativo sobre los criterios de planificación y cómo se calculan las métricas clave como el tiempo de retorno (turnaround) y el tiempo de espera (waiting time):</p>
      <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
        <iframe class="absolute top-0 left-0 w-full h-full border-0 aspect-video" src="https://www.youtube.com/embed/YpTMc_H3QoA" allowfullscreen></iframe>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Ejercicio 2 - Memoria Virtual.html": {
    type: "file",
    name: "Ejercicio 2 - Memoria Virtual.html",
    content: `
      <h1>Ejercicio 2: Memoria Virtual</h1>
      <p>La memoria virtual es una técnica de gestión de memoria que permite al sistema operativo proveer a cada proceso un espacio de direccionamiento lógico contiguo y grande, simulando que tiene más memoria física de la realmente disponible. Esto se logra mediante la paginación y la traducción dinámica de direcciones.</p>
      <h2>Conceptos Clave de Paginación</h2>
      <ul>
        <li><strong>Páginas y Marcos de Página:</strong> El espacio de direcciones lógicas se divide en páginas de tamaño fijo, y la memoria física se divide en marcos (frames) de igual tamaño.</li>
        <li><strong>Tabla de Páginas (Page Table):</strong> Mantiene la correspondencia entre las páginas lógicas y los marcos físicos de memoria, incluyendo bits de validez/invalidez, de modificación (dirty) y de referencia.</li>
        <li><strong>Fallo de Página (Page Fault):</strong> Excepción de hardware producida cuando un proceso intenta acceder a una página lógica que no se encuentra mapeada en la memoria RAM física.</li>
      </ul>
      <img src="images/virtual_memory.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama de Memoria Virtual y Traducción de Direcciones" />
      <h2>Algoritmos de Reemplazo de Páginas</h2>
      <p>Cuando ocurre un fallo de página y no hay marcos libres, el sistema operativo debe elegir una página víctima para desalojar:</p>
      <ul>
        <li><strong>FIFO (First-In, First-Out):</strong> Desaloja la página más antigua. Sufre de la anomalía de Belady.</li>
        <li><strong>LRU (Least Recently Used):</strong> Desaloja la página que no ha sido usada por más tiempo. Excelente rendimiento pero requiere soporte de hardware para ser eficiente.</li>
        <li><strong>Óptimo (OPT):</strong> Desaloja la página que tardará más tiempo en volver a usarse. Es inalcanzable en la práctica, sirve como referencia de comparación.</li>
      </ul>
      <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
        <iframe class="absolute top-0 left-0 w-full h-full border-0 aspect-video" src="https://www.youtube.com/embed/YpTMc_H3QoA" allowfullscreen></iframe>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Ejercicio 3 - Sistemas de Archivos.html": {
    type: "file",
    name: "Ejercicio 3 - Sistemas de Archivos.html",
    content: `
      <h1>Ejercicio 3: Sistemas de Archivos</h1>
      <p>El sistema de archivos es la estructura subyacente que utiliza el sistema operativo para organizar, almacenar, nombrar y recuperar archivos en dispositivos de almacenamiento secundario de forma eficiente y segura.</p>
      <h2>Estructuras Basadas en Inodos (Ej: Ext4)</h2>
      <p>En sistemas tipo Unix, un archivo está representado por un <strong>inodo (nodo de índice)</strong>, que es una estructura de datos que almacena metadatos y punteros a bloques de datos:</p>
      <ul>
        <li><strong>Metadatos:</strong> Permisos, propietario, tamaño del archivo, marcas de tiempo de acceso, modificación y creación.</li>
        <li><strong>Punteros Directos:</strong> Direcciones que apuntan directamente a los primeros bloques de datos del archivo (rápido acceso para archivos pequeños).</li>
        <li><strong>Punteros Indirectos:</strong> Direcciones que apuntan a bloques de punteros adicionales (simples, dobles o triples), permitiendo el almacenamiento de archivos extremadamente grandes.</li>
      </ul>
      <img src="images/file_system.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama de Estructura de un Inodo" />
      <h2>Métodos de Asignación de Espacio</h2>
      <ul>
        <li><strong>Asignación Contigua:</strong> Cada archivo ocupa un conjunto de bloques contiguos en el disco. Rápido acceso secuencial, pero sufre fragmentación externa.</li>
        <li><strong>Asignación Enlazada:</strong> Cada archivo es una lista enlazada de bloques de disco. Resuelve fragmentación externa pero el acceso aleatorio es lento.</li>
        <li><strong>Asignación Indexada:</strong> Reúne todos los punteros en un bloque de índice. Admite acceso aleatorio rápido sin fragmentación externa.</li>
      </ul>
      <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
        <iframe class="absolute top-0 left-0 w-full h-full border-0 aspect-video" src="https://www.youtube.com/embed/YpTMc_H3QoA" allowfullscreen></iframe>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Ejercicio 4 - Concurrencia y Semáforos.html": {
    type: "file",
    name: "Ejercicio 4 - Concurrencia y Semáforos.html",
    content: `
      <h1>Ejercicio 4: Concurrencia y Semáforos</h1>
      <p>La ejecución de múltiples procesos o hilos cooperativos que comparten memoria puede dar lugar a <strong>condiciones de carrera (race conditions)</strong>, donde el resultado final depende del orden relativo de ejecución. Para evitar esto, se requiere sincronización.</p>
      <h2>Semáforos de Dijkstra</h2>
      <p>Un semáforo es una variable entera especial a la que solo se puede acceder mediante dos operaciones atómicas estándar:</p>
      <ul>
        <li><strong>P(S) o wait(S):</strong> Decrementa el valor del semáforo. Si el valor es negativo, el proceso se bloquea y entra en la cola del semáforo.</li>
        <li><strong>V(S) o signal(S):</strong> Incrementa el valor del semáforo. Si hay procesos bloqueados en la cola, despierta a uno de ellos.</li>
      </ul>
      <img src="images/concurrency_semaphores.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama de exclusión mutua mediante Semáforo" />
      <h2>Problemas Clásicos de Sincronización</h2>
      <ol>
        <li><strong>Productor-Consumidor (Bounded Buffer):</strong> Un conjunto de productores coloca elementos en un buffer de tamaño limitado, y los consumidores los retiran. Se usan semáforos para evitar sobrellenar o vaciar el buffer indebidamente.</li>
        <li><strong>Lectores-Escritores:</strong> Múltiples lectores pueden leer concurrentemente, pero solo un escritor puede acceder a la vez de forma exclusiva.</li>
        <li><strong>Cena de los Filósofos:</strong> Ilustra el problema de la asignación de recursos compartidos sin interbloqueos (deadlock) ni inanición (starvation).</li>
      </ol>
      <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
        <iframe class="absolute top-0 left-0 w-full h-full border-0 aspect-video" src="https://www.youtube.com/embed/YpTMc_H3QoA" allowfullscreen></iframe>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Ejercicio 5 - Entrada y Salida.html": {
    type: "file",
    name: "Ejercicio 5 - Entrada y Salida.html",
    content: `
      <h1>Ejercicio 5: Entrada y Salida (E/S)</h1>
      <p>El subsistema de Entrada/Salida es responsable de comunicar el procesador y la memoria con los periféricos externos, abstrayendo al programador de los detalles de hardware de cada dispositivo específico.</p>
      <h2>Técnicas de Operación de E/S</h2>
      <ul>
        <li><strong>E/S Programada (Polling):</strong> La CPU monitorea continuamente el estado del controlador del dispositivo en un bucle activo. Consume ciclos valiosos de CPU.</li>
        <li><strong>E/S por Interrupciones:</strong> El controlador del dispositivo interrumpe a la CPU cuando tiene datos listos o finalizó su tarea, evitando la espera activa.</li>
        <li><strong>Acceso Directo a Memoria (DMA):</strong> Un controlador especial transfiere bloques enteros de datos entre el dispositivo de E/S y la memoria RAM sin intervención constante de la CPU.</li>
      </ul>
      <img src="images/io_subsystem.png" class="max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama de Planificación de Lectura en Disco" />
      <h2>Algoritmos de Planificación de Disco (Búsqueda)</h2>
      <p>Los algoritmos determinan el orden en el que se atienden las solicitudes de lectura/escritura pendientes del disco para minimizar el movimiento del brazo magnético:</p>
      <ul>
        <li><strong>SSTF (Shortest Seek Time First):</strong> Selecciona la solicitud más cercana a la posición actual del cabezal. Reduce el tiempo de búsqueda pero puede causar inanición de pistas lejanas.</li>
        <li><strong>SCAN (Algoritmo del Ascensor):</strong> El brazo se desplaza de un extremo a otro atendiendo solicitudes, y al llegar al final invierte la dirección.</li>
        <li><strong>C-SCAN (Circular SCAN):</strong> Se mueve en una dirección atendiendo peticiones y al llegar al extremo retorna al inicio inmediatamente sin atender peticiones de regreso. Proporciona un tiempo de espera más uniforme.</li>
      </ul>
      <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
        <iframe class="absolute top-0 left-0 w-full h-full border-0 aspect-video" src="https://www.youtube.com/embed/YpTMc_H3QoA" allowfullscreen></iframe>
      </div>
    `
  },
  "/Documentos/Trabajo Escrito (Google Docs).url": {
    type: "file",
    name: "Trabajo Escrito (Google Docs).url",
    isLink: true,
    url: "https://docs.google.com/document/d/1ucNDarIfe9OJuwl3Td50-TFYytHLR7-Zcdve3En44r0/edit?tab=t.0",
    content: "Redireccionando al documento de Google Docs...\nSi no se abre automáticamente, hacé clic acá o copiá el siguiente enlace:\nhttps://docs.google.com/document/d/1ucNDarIfe9OJuwl3Td50-TFYytHLR7-Zcdve3En44r0/edit?tab=t.0"
  },
  "/Documentos/Bienvenida.txt": {
    type: "file",
    name: "Bienvenida.txt",
    content: `Segundo parcial de Sistemas Operativos 2

Este simulador representa un entorno de escritorio Cinnamon basado en la distribución Linux Mint. Su propósito es demostrar las capacidades de personalización del sistema operativo, promover la filosofía del software libre y ofrecer características interactivas como una terminal con comandos Unix, un gestor de archivos virtual (Nemo) y un editor de texto (Xed).

¡Explorá las carpetas, usá la terminal y configurá el entorno a tu gusto!

Integrantes del grupo: Manuel Saquilán, Leandro Fernández Fernández, Franco Caraballo y Maxi.`
  },
  "/Documentos/conclusion_grupal.txt": {
    type: "file",
    name: "conclusion_grupal.txt",
    content: `=========================================
          CONCLUSIÓN GRUPAL - SISTEMAS OPERATIVOS
=========================================

A lo largo del desarrollo de esta materia, pudimos comprender el rol crucial que tiene el Sistema Operativo como intermediario y administrador de los recursos de hardware y software. 

A través de la teoría y la práctica (como el desarrollo de este simulador interactivo), comprendimos conceptos fundamentales como la gestión de procesos, la concurrencia, la sincronización de hilos, los sistemas de archivos y el manejo de memoria. 

Entender el funcionamiento interno de Linux, su robustez gracias al software libre y su modelo de permisos nos dio una perspectiva invaluable como futuros profesionales de la computación. Diseñar y programar a nivel de sistema requiere rigurosidad y nos ayuda a construir software mucho más eficiente, estable y seguro.

¡Una experiencia súper enriquecedora para todo el equipo!`
  },
  "/Imágenes": {
    type: "dir",
    name: "Imágenes",
    children: ["logo_ascii.txt"]
  },
  "/Imágenes/logo_ascii.txt": {
    type: "file",
    name: "logo_ascii.txt",
    content: `
         \`.-::--..\`
       .-\`          \`-.
     .\`                 \`.
    /      .--------.     \\
   |      /   __     \\     |
   |     |   /  \\     |    |
   |     |   \\__/     |    |
   |      \\          /     |
    \\      \`--------\`     /
     \`.                 .\`
       \`-.           .-\`
          \`..---..\`
     Linux Mint - Libertad de Elección`
  },
  "/Integrantes": {
    type: "dir",
    name: "Integrantes",
    children: ["Maxi Oria", "Manuel Saquilán", "Leandro Fernández", "Franco Caraballo"]
  },
  "/Integrantes/Maxi": {
    type: "file",
    name: "Maxi",
    isUnopenable: true,
    content: `Nombre: Maxi
Rol: Líder de Proyecto e Ingeniero de Sistemas
Especialidad: Personalización del Kernel de Linux y Planificación de Procesos
Frase: "Si no puede ejecutarse en espacio de usuario, optimizalo en espacio de kernel."`
  },
  "/Integrantes/Manuel Saquilán": {
    type: "file",
    name: "Manuel Saquilán",
    isUnopenable: true,
    content: `Nombre: Manuel Saquilán
Rol: Arquitecto Frontend Principal
Especialidad: Gestión de Estado, Rendimiento de Interfaz y Diseño Atómico
Frase: "El código limpio no es un lujo; es la base de todo proyecto estable."`
  },
  "/Integrantes/Leandro Fernández Fernández": {
    type: "file",
    name: "Leandro Fernández Fernández",
    isUnopenable: true,
    content: `Nombre: Leandro Fernández Fernández
Rol: Desarrollador Principal de Sistemas
Especialidad: Sistemas de Archivos y Control de Concurrencia
Frase: "La sincronización de hilos es lo que mantiene ordenado al caos."`
  },
  "/Integrantes/Franco Caraballo": {
    type: "file",
    name: "Franco Caraballo",
    isUnopenable: true,
    content: `Nombre: Franco Caraballo
Rol: Especialista en Automatización de Pruebas (QA) y Seguridad
Especialidad: Pruebas de Penetración y Tests de Integración en Tiempo de Ejecución
Frase: "Si algo puede romperse, tiene que estar registrado en el log."`
  }
};

// Default Configuration State
export let systemConfig = {
  theme: 'dark',
  accent: 'mint',
  accentHex: '#8fae53',
  wallpaper: 'mint-default'
};
