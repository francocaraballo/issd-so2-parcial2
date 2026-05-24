# Exploración de Requisitos: Resolución de Parcial

Este documento detalla la exploración y análisis técnico para el desarrollo de la nueva característica **"resolucion-parcial"**, la cual integrará 5 ejercicios resueltos del examen parcial de Sistemas Operativos 2 en el simulador de Linux Mint Cinnamon.

---

## 1. Formato de Archivos (File Format)

Necesitamos un formato para almacenar las resoluciones de los 5 ejercicios que soporte texto estructurado, imágenes y videos embebidos de YouTube.

### Opciones Consideradas

| Formato | Pros | Contras |
| :--- | :--- | :--- |
| **HTML (Recomendado)** | - Nativo del navegador web.<br>- No requiere parsers externos (cero dependencias).<br>- Permite usar clases de Tailwind CSS directamente.<br>- Soporte nativo y seguro para `<img>` e `<iframe>`. | - El código fuente del contenido es más verboso que en Markdown. |
| **Markdown** | - Contenido más limpio para leer como texto plano.<br>- Muy estándar para documentación. | - Requiere integrar un renderizador de Markdown (como *Marked*) o escribir un parser propio propenso a fallas. |
| **Estructura JSON** | - Separación completa de datos y vista.<br>- Facilidad para estructurar bloques. | - Requiere un motor de renderizado ad-hoc en `app.js`. <br>- Complejidad innecesaria de mantenimiento. |

### Decisión Técnica
Se utilizará **HTML** (guardado como una cadena de texto estructurada en el atributo `content` de los nodos de `VIRTUAL_FS`). Para identificarlos y abrirlos de forma diferenciada, estos archivos tendrán la extensión `.html`.

---

## 2. Renderizado de Aplicaciones (Application Rendering)

Dado que el editor de texto **Xed** actualmente está diseñado para edición de texto plano sin formato, debemos definir cómo renderizar estos archivos enriquecidos.

### Opciones Consideradas

#### Opción A: Extender Xed para renderizar HTML/Markdown
*   **Descripción**: Si el archivo está en la carpeta de la resolución del parcial, Xed cambia a un modo de "vista previa renderizada".
*   **Análisis**:
    *   *Desventaja principal*: Rompe la metáfora de Linux Mint Cinnamon. Xed es un clon de Pluma/Gedit, un editor de texto plano. Que renderice páginas web destruye la fidelidad del simulador.

#### Opción B: Crear un simulador de "Visor de Documentos (Xreader)" (Recomendado)
*   **Descripción**: Crear una nueva aplicación simulada en Cinnamon llamada **Xreader** (el visor de PDFs/Documentos oficial de Linux Mint) para abrir archivos `.html` enriquecidos.
*   **Análisis**:
    *   *Ventaja principal*: Es súper cohesivo con la estética de Linux Mint. Xreader ofrecerá un diseño clásico de lector de documentos: una barra superior de herramientas (zoom, navegación de páginas, imprimir simulado), un panel lateral izquierdo con miniaturas o índice de ejercicios, y un área de visualización central de lectura fluida con fondo blanco simulando una página A4.
    *   *Integración*: Cuando Nemo detecte un doble clic en un archivo de la carpeta de parciales (o archivo `.html`), abrirá `xreader` en lugar de `xed`.

#### Opción C: Crear una aplicación dedicada "Resolución de Parcial"
*   **Descripción**: Una aplicación personalizada para ver directamente las resoluciones.
*   **Análisis**:
    *   *Desventaja principal*: Se siente como una solución rígida y acoplada a este parcial en lugar de una simulación de sistema operativo real.

### Decisión Técnica
Se implementará la **Opción B (Visor de Documentos Xreader)**. Esto mantendrá la arquitectura modular del simulador y respetará la cohesión de la interfaz de Cinnamon.

---

## 3. Adición al Sistema de Archivos Virtual (Virtual Filesystem)

Debemos definir dónde residirá la carpeta del parcial y cómo acceder a ella para balancear orden de sistema y usabilidad.

### Estructura Propuesta
1.  **Directorio Físico**: Los archivos residirán de forma ordenada dentro del sistema de archivos en:
    `/Documentos/Resolución de Parcial/`
2.  **Accesibilidad y Visibilidad**:
    *   Para asegurar que el usuario encuentre el contenido al instante (alta visibilidad), se agregará un **Acceso Directo (Shortcut/Lanzador) en el Escritorio** (`/Desktop`).
    *   En el código de `renderDesktopIcons()`, se incluirá un acceso con ícono de carpeta que ejecute:
        `window.spawnApp('nemo', 'Resolución de Parcial', { path: '/Documentos/Resolución de Parcial' })`
    *   Esto abrirá Nemo directamente en la ruta del parcial, simulando un enlace de carpeta.

### Archivos del Parcial (5 ejercicios):
*   `/Documentos/Resolución de Parcial/Ejercicio 1 - Planificación de CPU.html`
*   `/Documentos/Resolución de Parcial/Ejercicio 2 - Gestión de Memoria.html`
*   `/Documentos/Resolución de Parcial/Ejercicio 3 - Sincronización de Procesos.html`
*   `/Documentos/Resolución de Parcial/Ejercicio 4 - Administración de E-S y Discos.html`
*   `/Documentos/Resolución de Parcial/Ejercicio 5 - Sistemas de Archivos.html`

---

## 4. Comportamiento Responsivo (Responsive Behavior)

El simulador ya cuenta con adaptabilidad móvil básica en `index.css` (forzando las ventanas a maximizarse en pantallas de menos de 768px). Para el contenido de las resoluciones, aplicaremos las siguientes reglas:

### Imágenes
*   Las imágenes en las resoluciones utilizarán estilos responsivos:
    ```html
    <img src="ruta_de_imagen" class="max-w-full h-auto rounded-lg border border-slate-200 dark:border-slate-800 mx-auto" alt="Diagrama" />
    ```
*   Esto asegura que la imagen se adapte perfectamente al ancho de la ventana sin romper los márgenes laterales.

### Videos de YouTube (Iframes)
*   Los reproductores embebidos de YouTube no tienen escalamiento automático por defecto si se usan con dimensiones fijas (`width="560" height="315"`).
*   Para solucionar esto de manera responsiva, envolveremos el iframe en un contenedor con proporción de aspecto fija (16:9) usando Tailwind CSS:
    ```html
    <div class="relative w-full aspect-video my-4 rounded-lg overflow-hidden shadow-md">
      <iframe class="absolute top-0 left-0 w-full h-full border-0" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
      </iframe>
    </div>
    ```
*   De esta manera, el contenedor se adaptará al ancho disponible del visor Xreader, escalando la altura del video proporcionalmente tanto en computadoras como en celulares.

---

## 5. Plan de Tareas Inicial

1.  **Inicialización de Archivos**: Definir el contenido HTML estructurado para los 5 ejercicios del parcial en `VIRTUAL_FS` dentro de `app.js`.
2.  **Lanzador del Escritorio**: Añadir el ícono "Resolución de Parcial" al array de iconos de escritorio en `app.js`.
3.  **UI de Xreader**: Crear el template HTML para la ventana de `app-xreader` en `index.html`.
4.  **Controlador de Xreader**: Programar `initXreaderApp(container, winInstance, initData)` en `app.js` para cargar, renderizar el contenido HTML y proveer un índice interactivo de ejercicios.
5.  **Ruteo de Apertura**: Actualizar Nemo y el gestor de ventanas para que al abrir archivos con extensión `.html` se lance `xreader` en vez de `xed`.
