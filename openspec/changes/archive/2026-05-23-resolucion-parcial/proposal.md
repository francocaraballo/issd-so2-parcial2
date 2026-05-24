# Propuesta de Cambio: Resolución de Parcial

Esta propuesta de cambio detalla la integración de los 5 ejercicios resueltos del examen parcial de Sistemas Operativos 2 en el simulador del escritorio Linux Mint Cinnamon.

---

## 1. Alcance (Scope)

El alcance de este desarrollo comprende:
- **Incorporación del Contenido del Parcial**: Integrar 5 documentos de resolución de ejercicios en formato HTML estructurado que soporten explicaciones teóricas, diagramas e imágenes responsivos, y videos explicativos embebidos de YouTube.
- **Creación de la Aplicación Xreader**: Implementar un simulador del Visor de Documentos de Linux Mint (Xreader) con una interfaz de lectura optimizada y navegación lateral.
- **Acceso Directo en el Escritorio**: Añadir un lanzador interactivo en el escritorio que abra Nemo (el gestor de archivos) directamente en la carpeta del parcial.
- **Integración con Nemo**: Configurar Nemo para abrir los archivos con extensión `.html` directamente en la nueva aplicación Xreader al hacer doble clic o presionar la tecla `Enter`.

Los 5 ejercicios a incluir son:
1. **Ejercicio 1 - Planificación de CPU**: Algoritmos de planificación y análisis de tiempos de espera/retorno.
2. **Ejercicio 2 - Gestión de Memoria**: Paginación, segmentación y algoritmos de reemplazo de páginas.
3. **Ejercicio 3 - Sincronización de Procesos**: Semáforos, monitores y problemas clásicos de concurrencia.
4. **Ejercicio 4 - Administración de E/S y Discos**: Planificación del brazo del disco (SSTF, SCAN, C-SCAN, etc.).
5. **Ejercicio 5 - Sistemas de Archivos**: Estructura de inodos, bloques de datos y asignación de espacio en disco.

---

## 2. Impacto Arquitectónico (Architectural Impact)

El desarrollo se realizará dentro de la arquitectura de la aplicación web de una sola página existente, modificando únicamente los módulos clave sin introducir dependencias externas.

### A. Estructura de VIRTUAL_FS (Sistema de Archivos Virtual)
Se agregarán las siguientes rutas y archivos en el objeto global `VIRTUAL_FS` definido en `app.js`:
- `/Documentos/Resolución de Parcial/` (Directorio contenedor)
- `/Documentos/Resolución de Parcial/Ejercicio 1 - Planificación de CPU.html`
- `/Documentos/Resolución de Parcial/Ejercicio 2 - Gestión de Memoria.html`
- `/Documentos/Resolución de Parcial/Ejercicio 3 - Sincronización de Procesos.html`
- `/Documentos/Resolución de Parcial/Ejercicio 4 - Administración de E-S y Discos.html`
- `/Documentos/Resolución de Parcial/Ejercicio 5 - Sistemas de Archivos.html`

Cada archivo `.html` tendrá un objeto asociado con tipo `"file"`, nombre y propiedad `content` que contendrá la estructura HTML enriquecida del ejercicio.

### B. Renderizado de Ventanas con Xreader
Se agregará una nueva aplicación al Window Manager (`WindowManager`):
- **Template en `index.html`**: `<template id="app-xreader">` que contendrá la estructura visual de la barra de herramientas, panel lateral y área de contenido del visor de documentos.
- **Controlador en `app.js`**: Función `initXreaderApp(container, winInstance, initData)` que gestiona la carga de archivos, la navegación a través del índice lateral, la impresión simulada y el control de zoom.
- **Registro en `WindowManager.mountAppContent`**: Añadir el caso `'xreader'` para inicializar la aplicación con su controlador correspondiente.
- **Actualización de Título de Ventanas**: Modificar `window.spawnApp` para que configure `'Visor de Documentos (Xreader)'` como título por defecto si se lanza sin un nombre específico.

### C. Asociación de Archivos en Nemo
- Modificar el controlador `initNemoApp` en `app.js`. Al hacer doble clic en un archivo en Nemo, o al presionar la tecla `Enter`, se verificará si la ruta del archivo finaliza con `.html` o está asociada a la carpeta del parcial.
- De ser así, se invocará `window.spawnApp('xreader', ...)` pasando la ruta en `initData.filePath`, en lugar de llamar a la aplicación de edición de texto plano `xed`.

---

## 3. Cambios de Diseño de cara al Usuario (User-Facing Design Changes)

La interfaz gráfica del simulador mantendrá un diseño premium y cohesivo con la estética Cinnamon:

- **Icono en el Escritorio**: Un lanzador llamado "Resolución de Parcial" con el ícono de carpeta de Mint. Al hacer doble clic, se abrirá Nemo directamente en `/Documentos/Resolución de Parcial`.
- **Ventana de Xreader**:
  - **Barra de Herramientas**: Botones de navegación de páginas (anterior/siguiente), indicación de la página/ejercicio actual (ej. "Ejercicio 1 de 5"), botones para zoom (acercar, alejar, restablecer), botón de alternancia para el panel lateral de índice, y un botón de impresión simulada (que mostrará una notificación estilizada del sistema).
  - **Panel Lateral Izquierdo**: Un índice interactivo con la lista de los 5 ejercicios del parcial. El ejercicio activo estará resaltado visualmente con el color de acento del sistema.
  - **Área de Lectura**: Un contenedor central que simulará una hoja de papel (A4) con fondo blanco, sombras tenues, tipografía elegante y un comportamiento de scroll vertical fluido.
- **Contenido Enriquecido**:
  - Las imágenes integradas usarán clases responsivas (`max-w-full h-auto rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 mx-auto`) para adaptarse al ancho dinámico del visor.
  - Los videos embebidos de YouTube estarán contenidos en un contenedor responsivo con proporción `aspect-video` para ajustar automáticamente su tamaño a dispositivos móviles y escritorios sin desbordar los límites de la ventana.

---

## 4. Módulos y Paquetes Afectados (Affected Modules and Packages)

Se modificarán tres archivos principales del repositorio actual:
1. `index.html`: Agregar el template `<template id="app-xreader">` para estructurar la interfaz del visor de documentos.
2. `app.js`: 
   - Inicializar los contenidos de los 5 archivos HTML en `VIRTUAL_FS`.
   - Modificar `renderDesktopIcons` para incluir el acceso directo en el escritorio.
   - Modificar Nemo en la apertura de archivos (doble clic y tecla Enter) para detectar archivos `.html` y enviarlos a `xreader`.
   - Modificar `mountAppContent` and `window.spawnApp` para dar soporte a `xreader`.
   - Implementar la función controladora de la app `initXreaderApp`.
3. `index.css`: Agregar clases de diseño CSS específicas para la maquetación del visor de documentos (A4 simulado, diseño responsivo móvil, etc.).

No se requieren paquetes NPM externos ni dependencias adicionales, manteniendo el enfoque de cero compilación del simulador.

---

## 5. Evaluación de Riesgos y Mitigación (Risk Analysis and Mitigation)

| Riesgo Identificado | Gravedad | Estrategia de Mitigación |
| :--- | :--- | :--- |
| **Tamaño de datos en app.js** | Bajo | Los archivos HTML se guardarán con markup semántico simplificado y clases CSS directas. No se agregarán contenidos multimedia de forma local; se enlazarán imágenes remotas o del proyecto y videos embebidos de YouTube. |
| **Desbordamiento horizontal en pantallas pequeñas (Mobile)** | Alto | El visor Xreader deshabilitará las dimensiones fijas y forzará una vista adaptable al contenedor. Las imágenes usarán `max-w-full` y los videos se encapsularán en un contenedor `aspect-video` interactivo. |
| **Falta de sincronización entre Nemo y la barra lateral de Xreader** | Media | La inicialización de Xreader leerá el archivo de entrada enviado desde Nemo, buscará su índice en el directorio del parcial para establecer la página inicial correcta, y sincronizará la lista de ejercicios de manera dinámica. |

---

## 6. Plan de Retorno (Rollback Plan)

En caso de fallos críticos durante el desarrollo o pruebas:
1. Utilizar Git para revertir las modificaciones en los tres archivos fuente afectados (`index.html`, `index.css`, `app.js`).
2. Eliminar la carpeta `openspec/changes/resolucion-parcial/` y los archivos de diseño/especificaciones no incorporados.
3. El estado del sistema de archivos y las aplicaciones simuladas volverán a su versión anterior sin efectos colaterales, ya que los cambios propuestos son modulares y desacoplados del núcleo del gestor de ventanas.
