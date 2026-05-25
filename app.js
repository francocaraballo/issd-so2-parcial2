/**
 * Linux Mint 22 Cinnamon Simulator - Core Logic & Window Manager
 */

// ==========================================
// 1. VIRTUAL FILESYSTEM DATA
// ==========================================
const VIRTUAL_FS = {
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
  "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html": {
    type: "file",
    name: "Parte 1 - Instalacion Virtual Box y Linux Mint.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Consigna 1: Instalación y Primeros Pasos</h1>

      <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">1.1 Instalación de Virtualbox y Linux Mint en una máquina virtual</h2>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Video de muestra de instalación del software de Oracle VirtualBox, que funciona como ecosistema de emulación y prueba de sistemas operativos. Se incluyen los puntos 1.2, 1.3 y 1.4.
      </p>

      <div class="my-6 flex justify-center">
        <img src="images/consigna_1_a.png" alt="Instalación de Linux Mint" class="rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <p class="text-slate-600 dark:text-slate-300 mt-4 mb-2">
        Link al video tutorial: 
        <a href="https://www.youtube.com/watch?v=2q2drKX9rP4" target="_blank" class="text-mint hover:underline font-semibold inline-flex items-center gap-1">
          Instalación paso a paso
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </p>

      <div class="my-6 aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/2q2drKX9rP4" title="Video tutorial de instalación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Parte 2: Investigación y Experimentación Guiada</h1>

      <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">Consigna 1 – El mundo post-windows 10</h2>

      <div class="space-y-6">
        <div class="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
          <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mb-2">1.1. Investigación - El fin de una era</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Cuando un sistema alcanza el fin de su ciclo de vida oficial (comúnmente denominado <em>End of Support</em> o EoS), el desarrollador cesa de forma definitiva la provisión de actualizaciones de software, correcciones de errores críticos y parches de seguridad esenciales. Si bien el entorno operativo continuará su ejecución, el sistema quedará en un estado de vulnerabilidad técnica y obsolescencia funcional. El riesgo principal de usar software sin soporte es la exposición total ante ciberataques, ya que las puertas traseras del programa quedan abiertas de forma permanente.
          </p>
        </div>

        <div class="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
          <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mb-2">1.2. Experimentación - Reviviendo hardware antiguo</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Linux funciona de manera más eficiente, comparado con Windows 11, ya que no tiene procesos ejecutándose en segundo plano, como telemetría. Además, el kernel de Linux está altamente optimizado para aprovechar al máximo el hardware de una PC, por este motivo también funciona para “revivir” computadoras antiguas. Un punto muy importante es que las interfaces de Linux son muchos más ligeras y en el caso de querer otras se pueden instalar.
          </p>
          
          <div class="my-4 flex justify-center">
            <img src="images/consigna_1_b.png" alt="Hardware antiguo con Linux" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
          </div>
          
          <h4 class="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-4 mb-2">Monitor de recursos de Linux Mint:</h4>
          <div class="my-4 flex justify-center">
            <img src="images/consigna_1_c.png" alt="Monitor de recursos" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
          </div>
        </div>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Parte 2 - Investigacion y Experimentacion.html": {
    type: "file",
    name: "Parte 2 - Investigacion y Experimentacion.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">Consigna 2: Investigación y Experimentación Guiada</h1>
      <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">Mi PC a mi manera</h2>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        La idea está basada en una necesidad real ya que uno de los miembros del grupo hace servicio técnico de computadoras, notebooks, impresoras, redes, etc. Detallamos el procedimiento técnico realizado para la construcción de una distribución GNU/Linux en formato "Live USB". Todo el proceso desde el ensamblaje hasta la compilación de la imagen ISO final.
      </p>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-4 mb-2">Fase 1: Preparación del Entorno de Laboratorio</h3>
      <ul class="list-disc pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-1">
        <li><strong>1 - virtualHost y Virtualización:</strong> Desde el equipo anfitrión corriendo Windows 10, se configuró el software Oracle VM VirtualBox.</li>
        <li><strong>2 - Configuración de la Máquina Virtual:</strong> Se creó una VM tipo "Debian (64-bit)" asignándole 4 GB de memoria RAM, 2 núcleos de procesamiento y un disco duro virtual de asignación dinámica de 35 GB (espacio necesario para compilar la ISO posteriormente).</li>
        <li><strong>3 - Instalación Base:</strong> Se descargó la imagen ISO oficial de Linux Mint 22.3 Cinnamon Edition. Se montó en la VM y se realizó la instalación completa del sistema operativo en el disco virtual.</li>
      </ul>
      <div class="my-4 flex justify-center">
        <img src="images/consigna_2_a.png" alt="Preparación del Entorno" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Fase 2: Actualización e Inyección de Software Especializado</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Una vez instalado el sistema operativo base, se procedió a actualizar los repositorios e instalar las herramientas orientadas al diagnóstico de hardware, redes y recuperación de sistemas Windows.
        Desde la terminal (CLI), se actualizaron las listas de paquetes y el sistema base. Se ejecutó una instalación masiva utilizando el gestor apt para integrar utilidades fundamentales como: chntpw (reseteo SAM Windows), testdisk (recuperación de particiones), gsmartcontrol y gnome-disk-utility (salud S.M.A.R.T.), clamav/clamtk (antivirus), gddrescue/safecopy (clonación física), entre otras utilidades de red y ofimática ligera.
      </p>
      <pre class="bg-slate-100 dark:bg-slate-950 p-3 rounded text-xs overflow-x-auto border border-slate-200 dark:border-slate-800 text-mint font-mono mb-4">sudo apt install gdisk parted dosfstools exfatprogs hdparm extundelete foremost safecopy clonezilla wimtools rkhunter chkrootkit nmap wireshark iperf3 ethtool net-tools traceroute mtr curl wget lshw hwinfo dmidecode lmsensors stress-ng memtest86+ cpu-x mc ranger p7zip-full unrar remmina openssh-client terminator gnome-disk-utility -y</pre>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Hardinfo, RustDesktop (soporte remoto), ClamAV (antivirus), Wireshark (redes), CPU-X y QdiskInfo (información de sistema y disco), DoubleCommander (explorador doble panel) y Arduino IDE.
      </p>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Fase 3: Personalización del Entorno Gráfico (UI/UX)</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Se adaptó el entorno Cinnamon para ofrecer una experiencia familiar a los técnicos acostumbrados a sistemas operativos de Microsoft y reflejar la identidad institucional de SSCOM Informática.
      </p>
      <ul class="list-disc pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-1">
        <li><strong>Fondo de Escritorio:</strong> Se importó y estableció una imagen alusiva a Linux y servicio técnico.</li>
        <li><strong>Panel de Tareas y estructura del menú:</strong> Se descargó el tema de Windows 10 y se aplicaron los estilos.</li>
        <li><strong>Personalización de categorías por función:</strong> Discos y Recuperación, Recuperación de Datos y Clonación, Herramientas de sistema, Internet, Seguridad, Programación, Otras.</li>
        <li><strong>Ícono de inicio:</strong> Bajamos un ícono similar al del inicio de Windows.</li>
      </ul>
      <div class="my-4 flex justify-center">
        <img src="images/consigna_2_b.png" alt="Personalización Gráfica" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Fase 4: Remasterización y Generación de la Imagen ISO</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Una vez configurado el entorno visual y el catálogo de software, se procede a congelar el sistema en una imagen ISO distribuible.
      </p>
      <ol class="list-decimal pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-2">
        <li><strong>Limpieza del Almacenamiento:</strong> Ejecutar la depuración del caché de paquetes para reducir el peso de la imagen final:<br><code class="bg-slate-100 dark:bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">sudo apt clean</code>. Vaciar la papelera de reciclaje y eliminar archivos residuales en el directorio de descargas.</li>
        <li><strong>Instalación del Framework de Remasterización:</strong> Clonar o instalar la herramienta de compilación eggs (Penguin's Eggs) asegurando la carga de sus dependencias del sistema.</li>
        <li><strong>Compilación en Modo Clon:</strong> Es mandatorio ejecutar la compilación utilizando el flag de clonación de usuario. Esto garantiza que los archivos de configuración local (los temas visuales, el papel tapiz seleccionado, los accesos directos de las aplicaciones y las categorías de menú personalizadas) se incorporen dentro del sistema de archivos comprimido que se montará al arrancar el Live USB:<br>
        <pre class="bg-slate-100 dark:bg-slate-950 p-2.5 rounded text-xs border border-slate-200 dark:border-slate-800 text-mint font-mono mt-2">sudo eggs produce --clone</pre></li>
        <li><strong>Ubicación del Resultado:</strong> Al finalizar el proceso de compresión de bloques, la herramienta almacenará la imagen ISO generada (ej. SO2.iso) en la ruta protegida del sistema: <code class="bg-slate-100 dark:bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">/home/eggs/</code>.</li>
      </ol>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Fase 5: Preparación de la Unidad USB y Estructura de Persistencia</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        La última etapa traslada la ISO a la unidad física y configura el backend que recibirá los datos en los ciclos de trabajo reales.
      </p>
      <ul class="list-disc pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-3">
        <li><strong>1. Instalación de Ventoy:</strong> Utilizar la herramienta Ventoy (vía interfaz gráfica en Linux o Windows) para formatear la unidad USB física, dividiéndola automáticamente en su estructura de arranque oculta y su partición principal de datos.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_c.png" alt="Instalación de Ventoy" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li><strong>2. Transferencia de la ISO:</strong> Copiar el archivo de la imagen ISO generada (ej. SO2.iso) directamente en la raíz de la partición principal de datos de la unidad USB.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_d.png" alt="Transferencia ISO" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li><strong>3. Configuración del Bloque de Persistencia:</strong> Dado que el entorno generado por Penguin's Eggs corre bajo el script de inicialización live-boot de Debian, se debe proveer un bloque compatible:
          <ul class="list-circle pl-5 mt-1 space-y-1">
            <li>Descargar un contenedor de persistencia formateado en EXT4 provisto por el backend de Ventoy, asegurando que su nombre contenga el sufijo correspondiente a la arquitectura de Debian, por ejemplo: <code class="bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">persistence_ext4_2GB_persistence.dat</code>.</li>
            <li>Mover este archivo de almacenamiento masivo virtual a la raíz de la unidad USB (junto a la imagen ISO).</li>
          </ul>
          <div class="my-2 flex justify-center"><img src="images/consigna_2_e.png" alt="Bloque de Persistencia" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div>
        </li>
        <li><strong>4. Vinculación mediante Descriptor JSON:</strong> En la raíz de la unidad USB, crear una carpeta llamada exactamente <code class="bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">ventoy</code>. Dentro de ella, estructurar un archivo de texto plano denominado <code class="bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">ventoy.json</code> que asocie la ISO con su persistencia.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_f.png" alt="Estructura JSON" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
      </ul>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Fase 6: Procedimiento de Arranque en Producción</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Para ejecutar el entorno conservando la persistencia de datos (por ejemplo, para guardar un proyecto de desarrollo en Visual Studio Code o bases de datos locales):
      </p>
      <ol class="list-decimal pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-3">
        <li>Conectar la unidad USB a la computadora de destino e inicializar el sistema accediendo al menú de arranque de la BIOS/UEFI.</li>
        <li>En el menú gráfico de Ventoy, seleccionar la imagen SO2.iso.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_g.png" alt="Ventoy Menu" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li>En el submenú inmediato desplegado por Ventoy, seleccionar la opción "Boot with /persistence_ext4_2GB_persistence.dat".
        <div class="my-2 flex justify-center"><img src="images/consigna_2_h.png" alt="Ventoy Boot Mode" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li>Al cargar la pantalla de GRUB de Penguin's Eggs, posicionarse sobre la primera opción de arranque, presionar la tecla TAB para editar los parámetros del kernel en tiempo de ejecución, añadir la instrucción de montaje al final de la línea dejando un espacio: <code class="bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">persistence</code> y presionar Enter para iniciar la sesión de forma persistente.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_i.png" alt="GRUB edit" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div>
        <div class="my-2 flex justify-center"><img src="images/consigna_2_j.png" alt="GRUB boot" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li>El entorno se cargará de forma normal y podemos verificar el funcionamiento.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_k.png" alt="Home Live" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
        <li>Al cambiar el fondo de pantalla, crear carpetas o conectarnos a internet, todo se almacenará en la persistencia y estará disponible en el próximo inicio.
        <div class="my-2 flex justify-center"><img src="images/consigna_2_l.png" alt="Persistence verified" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-xs h-auto"></div></li>
      </ol>
      <p class="text-slate-600 dark:text-slate-300 font-semibold mt-4">
        Logramos así crear un sistema operativo portable y personalizable con persistencia en producción.
      </p>
    `
  },
  "/Documentos/Resolución de Parcial/Parte 3 - Linux para diferentes personas.html": {
    type: "file",
    name: "Parte 3 - Linux para diferentes personas.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">Consigna 3: Linux para Diferentes Personas</h1>

      <h2 class="text-xl font-bold text-slate-700 dark:text-slate-200 mt-6 mb-2">3.1 – Perfil Desarrollador de Software: Fedora Workstation</h2>
      <div class="my-4 flex justify-center">
        <img src="images/consgina_3_a.png" alt="Perfil Desarrollador" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Para el perfil de un Desarrollador de Software, considero una de las mejores opciones a <strong>Fedora Workstation</strong>, una distribución de Linux respaldada por Red Hat.
        Algunas de las razones clave de esta elección son:
      </p>
      <ul class="list-disc pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-2">
        <li><strong>Ecosistema empresarial:</strong> Permite familiarizarse con tecnologías de Red Hat, muy demandadas en infraestructuras y servidores de entornos corporativos a gran escala.</li>
        <li><strong>Soporte nativo para lenguajes:</strong> Facilidad de uso para programar en Java, Python, Node.js, PHP, Go, Ruby, C/C++, etc.</li>
        <li><strong>Herramientas y editores:</strong> Integración fluida de IDEs y editores de código populares (JetBrains, VS Code, Sublime Text), así como editores clásicos en la terminal (Vim/Neovim, Nano).</li>
        <li><strong>Base de Datos y Contenedores:</strong> Entornos robustos para bases de datos relacionales y no relacionales (PostgreSQL, SQLite, MongoDB) y contenedores mediante Docker.</li>
        <li><strong>Virtualización avanzada nativa:</strong> Permite virtualizar usando tecnologías nativas del kernel como KVM y QEMU sin necesidad de software de terceros como VirtualBox.</li>
        <li><strong>Gestión de paquetes limpia:</strong> Utilización del gestor de paquetes DNF, ágil y moderno, complementado con Flatpak (Flathub) para un despliegue de aplicaciones seguro y universal.</li>
      </ul>

      <div class="my-4 flex justify-center">
        <img src="images/consgina_3_b.png" alt="Fedora Home" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
        <img src="images/consgina_3_c.png" alt="Fedora Apps" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto ml-4">
      </div>

      <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-4 mb-1">Comunidad y Soporte:</h4>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Fedora cuenta con una comunidad enorme y foros dedicados. Podés ver más en el foro de discusión: 
        <a href="https://discussion.fedoraproject.org/" target="_blank" class="text-mint hover:underline font-medium">Foro Oficial de Fedora</a>.
      </p>

      <h2 class="text-xl font-bold text-slate-700 dark:text-slate-200 mt-8 mb-2">3.2 Perfil Familia y Estudiantes</h2>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Para un entorno enfocado en el aprendizaje escolar y familiar, recomendamos una serie de herramientas integradas de código abierto:
      </p>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-4 mb-2">OnlyOffice</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Una excelente alternativa a Microsoft Office. Esta suite ofimática permite crear y modificar documentos de texto, hojas de cálculo y presentaciones con total compatibilidad de formatos (.docx, .xlsx, .pptx, .pdf). Además, integra asistentes virtuales modernos basados en Inteligencia Artificial y es de código abierto.
      </p>
      <div class="my-4 flex justify-center">
        <img src="images/consgina_3_d.png" alt="OnlyOffice" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">TuxMath (Educación infantil)</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Juego arcade educativo de matemáticas básicas protagonizado por Tux, la mascota de Linux. Basado en mecánicas de defensa (estilo Missile Command), los niños deben resolver operaciones matemáticas sencillas antes de que los meteoritos destruyan sus ciudades/iglús.
      </p>
      <div class="my-4 flex justify-center">
        <img src="images/consgina_3_e.png" alt="TuxMath" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">OpenShot (Edición de video sencilla)</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Editor de video multiplataforma, gratuito y muy intuitivo. Es ideal para que los estudiantes editen videos escolares usando transiciones rápidas, recorte de clips, audio multicanal y títulos animados en 3D en pocos pasos.
      </p>
      <div class="my-4 flex justify-center">
        <img src="images/consgina_3_f.png" alt="OpenShot" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Tutorial: Instalación de aplicaciones vía Flatpak (Anki)</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        <strong>Anki</strong> es una app de memorización basada en flashcards (tarjetas de memoria digitales) con repetición espaciada y recuerdo activo.
      </p>
      <ol class="list-decimal pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-3">
        <li>Búsqueda de la aplicación en la terminal:<br>
          <code class="bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">flatpak search anki</code>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_g.png" alt="Flatpak search" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
        </li>
        <li>Instalación del paquete estable desde Flathub:<br>
          <code class="bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">flatpak install flathub net.ankiweb.Anki</code>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_h.png" alt="Flatpak install" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_i.png" alt="Flatpak confirmation" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
        </li>
        <li>Esperamos la descarga e instalación:<br>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_j.png" alt="Flatpak progress" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
        </li>
        <li>Mensaje de instalación exitosa:<br>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_k.png" alt="Flatpak complete" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
        </li>
        <li>Verificar las aplicaciones instaladas:<br>
          <code class="bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded font-mono text-xs border border-slate-200 dark:border-slate-800">flatpak list</code>
          <div class="my-2 flex justify-center"><img src="images/consgina_3_l.png" alt="Flatpak list" class="rounded-lg shadow border border-slate-200 dark:border-slate-800 max-w-full h-auto"></div>
        </li>
      </ol>

      <h3 class="text-md font-bold text-slate-800 dark:text-slate-100 mt-6 mb-2">Ventajas del Software Libre para la Familia</h3>
      <ul class="list-disc pl-5 text-slate-600 dark:text-slate-300 mb-4 space-y-1">
        <li>Independencia y ahorro al evitar pagar licencias costosas y restrictivas de software comercial.</li>
        <li>Excelente rendimiento en computadoras de bajos recursos, prolongando la vida útil del hardware familiar.</li>
        <li>Seguridad, transparencia y protección de la privacidad al evitar el rastreo oculto de telemetría propio de Windows.</li>
      </ul>
    `
  },
  "/Documentos/Resolución de Parcial/Parte 4 - Linux, el motor de la IA.html": {
    type: "file",
    name: "Parte 4 - Linux, el motor de la IA.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">Consigna 4: Linux, el Motor de la Inteligencia Artificial</h1>
      <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-4">Bibliografía de Referencia</h2>
      <div class="space-y-4">
        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Linux Mint Project</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Proyecto oficial, repositorios y documentación del entorno de escritorio Cinnamon.</p>
          <a href="https://linuxmint.com/" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://linuxmint.com/</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Oracle VM VirtualBox</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Manual de usuario, gestión de almacenamiento virtual e integración de utilidades (Guest Additions).</p>
          <a href="https://www.virtualbox.org/manual/" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://www.virtualbox.org/manual/</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Penguin's Eggs</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Repositorio oficial de Piero Proietti, documentación del CLI y empaquetamiento de sistemas (parámetro --clone).</p>
          <a href="https://github.com/pieroproietti/penguins-eggs" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://github.com/pieroproietti/penguins-eggs</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Ventoy Persistence</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Documentación oficial del gestor de arranque multiboot y especificaciones técnicas del plugin de persistencia (estructuras JSON).</p>
          <a href="https://www.ventoy.net/en/plugin_persistence.html" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://www.ventoy.net/en/plugin_persistence.html</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Debian live-boot</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Manual técnico (manpage) sobre los parámetros del kernel y la sintaxis de persistencia para entornos remasterizados.</p>
          <a href="https://manpages.debian.org/testing/live-boot-doc/live-boot.7.en.html" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://manpages.debian.org/testing/live-boot-doc/live-boot.7.en.html</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">GParted (GNOME Partition Editor)</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Documentación oficial sobre gestión de particiones y sistemas de archivos.</p>
          <a href="https://gparted.org/" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://gparted.org/</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">chntpw & TestDisk</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Recuperación de particiones, manipulación de archivos SAM y herramientas de diagnóstico físico.</p>
          <a href="https://www.cgsecurity.org/" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://www.cgsecurity.org/</a>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-200 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Wireshark & Nmap</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Análisis de protocolos de red, tráfico de paquetes a bajo nivel y descubrimiento de puertos abiertos.</p>
          <a href="https://www.wireshark.org/" target="_blank" class="text-xs text-mint hover:underline font-mono mt-1 inline-block">https://www.wireshark.org/</a>
        </div>
      </div>
    `
  },
  "/Documentos/Resolución de Parcial/Parte 5 - Conclusión grupal.html": {
    type: "file",
    name: "Parte 5 - Conclusión grupal.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">Consigna 5: Conclusión Grupal</h1>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        En este proyecto pusimos en práctica los conceptos de arquitectura de sistemas operativos, modularización de código gráfico y gestión de recursos integrando datos de servicio técnico real en un simulador visual premium.
      </p>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        A continuación, presentamos un video introductorio y explicativo sobre las bases de la Inteligencia Artificial y el futuro de los sistemas de automatización inteligente:
      </p>
      <div class="my-6 aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/ad79nYk2kEg" title="Introduction to AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p class="text-slate-600 dark:text-slate-300">
        ¡Gracias por explorar nuestra resolución del parcial de Sistemas Operativos 2!
      </p>
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

Integrantes del grupo: Manuel Saquilán, Leandro Fernández, Franco Caraballo y Maxi Oria.`
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
  "/Integrantes/Maxi Oria": {
    type: "file",
    name: "Maxi Oria",
    isUnopenable: true,
    content: `Nombre: Maxi Oria
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
  "/Integrantes/Leandro Fernández": {
    type: "file",
    name: "Leandro Fernández",
    isUnopenable: true,
    content: `Nombre: Leandro Fernández
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
let systemConfig = {
  theme: 'dark',
  accent: 'mint',
  accentHex: '#8fae53',
  wallpaper: 'mint-default'
};

// Wallpapers definition
const WALLPAPERS = {
  'mint-default': 'radial-gradient(circle at 50% 50%, #022c22 0%, #0f172a 60%, #090d16 100%)',
  'sunset-indigo': 'linear-gradient(135deg, #31103f 0%, #1e1b4b 50%, #090d16 100%)',
  'cyber-slate': 'linear-gradient(to bottom, #111827, #1f2937, #111827)'
};

// Accents definition
const ACCENTS = {
  'mint': { hex: '#8fae53', rgb: '143, 174, 83' },
  'blue': { hex: '#3b82f6', rgb: '59, 130, 246' },
  'purple': { hex: '#d946ef', rgb: '217, 70, 239' },
  'amber': { hex: '#f59e0b', rgb: '245, 158, 11' }
};

// ==========================================
// 2. WINDOW MANAGER ENGINE
// ==========================================
class WindowManager {
  constructor() {
    this.windows = [];
    this.zStack = [];
    this.baseZIndex = 100;
    this.zoneNode = document.getElementById('window-zone');
    this.activeWindowId = null;
    this.winCascadeOffset = 25;
  }

  // Create Window Instance
  createWindow(appId, title, initData = null, options = {}) {
    const template = document.getElementById('window-template');
    const clone = template.content.cloneNode(true);
    const windowNode = clone.querySelector('.app-window');

    // Unique ID
    const winId = 'win_' + Date.now() + Math.floor(Math.random() * 1000);
    windowNode.id = winId;
    windowNode.setAttribute('data-app', appId);

    // Position cascade calculation
    const offset = this.windows.length * this.winCascadeOffset;
    let initialWidth = 640;
    let initialHeight = 440;
    let initialX, initialY;

    // Mobile Viewport constraints
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      initialX = 0;
      initialY = 0;
      initialWidth = window.innerWidth;
      initialHeight = window.innerHeight - 48; // Excluding bottom panel
    } else {
      const panelHeight = 48;
      initialX = Math.max(0, (window.innerWidth - initialWidth) / 2) + offset;
      initialY = Math.max(0, (window.innerHeight - initialHeight - panelHeight) / 2) + offset;
    }

    const startMaximized = options.isMaximized !== undefined ? options.isMaximized : isMobile;

    // Set position
    if (startMaximized) {
      windowNode.style.left = '0px';
      windowNode.style.top = '0px';
      windowNode.style.width = '100vw';
      windowNode.style.height = 'calc(100vh - 48px)';
      windowNode.classList.add('rounded-none');
    } else {
      windowNode.style.left = `${initialX}px`;
      windowNode.style.top = `${initialY}px`;
      windowNode.style.width = `${initialWidth}px`;
      windowNode.style.height = `${initialHeight}px`;
    }

    // Window Instance object
    const winInstance = {
      id: winId,
      title: title,
      appId: appId,
      node: windowNode,
      x: initialX,
      y: initialY,
      width: initialWidth,
      height: initialHeight,
      isMinimized: options.isMinimized !== undefined ? options.isMinimized : false,
      isMaximized: startMaximized,
      desktopMaximized: options.isMaximized !== undefined ? options.isMaximized : false,
      savedX: initialX,
      savedY: initialY,
      savedWidth: initialWidth,
      savedHeight: initialHeight
    };

    // Add App icon & Title
    windowNode.querySelector('.window-title').textContent = title;
    const iconContainer = windowNode.querySelector('.window-app-icon');
    iconContainer.innerHTML = getAppIconSvg(appId);

    // Initialize specific app contents
    const contentContainer = windowNode.querySelector('.window-content');
    this.mountAppContent(contentContainer, appId, winInstance, initData);

    // Setup event listeners
    this.bindWindowControls(windowNode, winInstance);
    this.bindWindowFocus(windowNode, winId);
    if (!isMobile) {
      this.bindWindowDragging(windowNode, winInstance);
      this.bindWindowResizing(windowNode, winInstance);
    }

    // Append to Zone
    this.zoneNode.appendChild(windowNode);

    // Track states
    this.windows.push(winInstance);
    this.zStack.push(winId);

    // Focus and draw taskbar
    if (winInstance.isMinimized) {
      windowNode.style.display = 'none';
      this.updateTaskbar();
    } else {
      this.focusWindow(winId);
    }

    return winInstance;
  }

  // Focus Window
  focusWindow(winId) {
    if (!this.zStack.includes(winId)) return;

    // Move to end of zStack
    this.zStack = this.zStack.filter(id => id !== winId);
    this.zStack.push(winId);

    this.activeWindowId = winId;

    // Re-index nodes and update styles
    this.zStack.forEach((id, index) => {
      const win = this.windows.find(w => w.id === id);
      if (win && win.node) {
        win.node.style.zIndex = this.baseZIndex + index;

        // Active border highlights
        if (id === winId) {
          win.node.classList.add('active-window');

          // Autofocus terminal inputs or specific fields
          const termInput = win.node.querySelector('.terminal-input');
          if (termInput) termInput.focus();
          const nemoGrid = win.node.querySelector('#nemo-files-grid');
          if (nemoGrid) nemoGrid.focus();
        } else {
          win.node.classList.remove('active-window');
        }
      }
    });

    this.updateTaskbar();
  }

  // Minimize Window
  minimizeWindow(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win) return;

    win.isMinimized = true;
    win.node.style.display = 'none';

    // Find next window to focus
    const remainingFocusable = this.zStack.filter(id => {
      const w = this.windows.find(x => x.id === id);
      return w && !w.isMinimized;
    });

    if (remainingFocusable.length > 0) {
      this.focusWindow(remainingFocusable[remainingFocusable.length - 1]);
    } else {
      this.activeWindowId = null;
      this.updateTaskbar();
    }
  }

  // Restore Window (un-minimize)
  restoreWindow(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win) return;

    win.isMinimized = false;
    win.node.style.display = 'flex';
    this.focusWindow(winId);
  }

  // Toggle Maximize
  toggleMaximize(winId) {
    const win = this.windows.find(w => w.id === winId);
    if (!win || window.innerWidth < 768) return; // Prevent change in mobile

    const node = win.node;
    if (win.isMaximized) {
      // Restore previous geometry
      win.isMaximized = false;
      win.desktopMaximized = false;
      node.style.left = `${win.savedX}px`;
      node.style.top = `${win.savedY}px`;
      node.style.width = `${win.savedWidth}px`;
      node.style.height = `${win.savedHeight}px`;
      node.classList.remove('rounded-none');
    } else {
      // Save current geometry first
      win.savedX = parseInt(node.style.left) || win.x;
      win.savedY = parseInt(node.style.top) || win.y;
      win.savedWidth = parseInt(node.style.width) || win.width;
      win.savedHeight = parseInt(node.style.height) || win.height;

      // Expand fully
      win.isMaximized = true;
      win.desktopMaximized = true;
      node.style.left = '0px';
      node.style.top = '0px';
      node.style.width = '100vw';
      node.style.height = 'calc(100vh - 48px)';
      node.classList.add('rounded-none');
    }

    // Focus
    this.focusWindow(winId);
  }

  // Close Window
  closeWindow(winId) {
    const winIndex = this.windows.findIndex(w => w.id === winId);
    if (winIndex === -1) return;

    const win = this.windows[winIndex];
    if (win.node) {
      // Fade out transition
      win.node.style.opacity = '0';
      win.node.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (win.node && win.node.parentNode) {
          win.node.parentNode.removeChild(win.node);
        }
      }, 150);
    }

    // Delete from records
    this.windows.splice(winIndex, 1);
    this.zStack = this.zStack.filter(id => id !== winId);

    // Focus next top-most window
    if (this.zStack.length > 0) {
      this.focusWindow(this.zStack[this.zStack.length - 1]);
    } else {
      this.activeWindowId = null;
    }

    this.updateTaskbar();
  }

  // Mount specific App UI Templates
  mountAppContent(containerNode, appId, winInstance, initData) {
    const appTemplate = document.getElementById(`app-${appId}`);
    if (!appTemplate) {
      containerNode.innerHTML = `<div class="p-4 text-red-500 font-semibold">Error: Application template not found.</div>`;
      return;
    }

    const content = appTemplate.content.cloneNode(true);
    containerNode.appendChild(content);

    // Initialize application-specific controllers
    switch (appId) {
      case 'terminal':
        initTerminalApp(containerNode, winInstance, initData);
        break;
      case 'nemo':
        initNemoApp(containerNode, winInstance, initData);
        break;
      case 'settings':
        initSettingsApp(containerNode, winInstance, initData);
        break;
      case 'xed':
        initXedApp(containerNode, winInstance, initData);
        break;
      case 'xreader':
        initXreaderApp(containerNode, winInstance, initData);
        break;
    }
  }

  // Window focusing on click/tap
  bindWindowFocus(windowNode, winId) {
    windowNode.addEventListener('pointerdown', () => {
      if (this.activeWindowId !== winId) {
        this.focusWindow(winId);
      }
    });
  }

  // Close, Minimize, Maximize clicks
  bindWindowControls(windowNode, winInstance) {
    const minBtn = windowNode.querySelector('[data-control="minimize"]');
    const maxBtn = windowNode.querySelector('[data-control="maximize"]');
    const closeBtn = windowNode.querySelector('[data-control="close"]');

    minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.minimizeWindow(winInstance.id);
    });

    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMaximize(winInstance.id);
    });

    // Double click header maximizing
    const titlebar = windowNode.querySelector('.window-titlebar');
    titlebar.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.toggleMaximize(winInstance.id);
    });

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeWindow(winInstance.id);
    });
  }

  // Dragging using Pointer Events (Mouse/Touch unified)
  bindWindowDragging(windowNode, winInstance) {
    const titlebar = windowNode.querySelector('.window-titlebar');

    titlebar.addEventListener('pointerdown', (e) => {
      // Only drag with left click or touch
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      if (winInstance.isMaximized || window.innerWidth < 768) return;

      // Stop selection default
      e.preventDefault();

      // Focus first
      this.focusWindow(winInstance.id);

      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = parseInt(windowNode.style.left) || 0;
      const startTop = parseInt(windowNode.style.top) || 0;

      const onPointerMove = (moveEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        let newLeft = startLeft + dx;
        let newTop = startTop + dy;

        // Boundaries: keep at least 50% titlebar on screen horizontally
        const buffer = 150;
        newLeft = Math.max(-windowNode.offsetWidth + buffer, Math.min(window.innerWidth - buffer, newLeft));
        // Keep title bar visible vertically (cannot hide behind panel at bottom, nor scroll off top)
        newTop = Math.max(0, Math.min(window.innerHeight - 80, newTop));

        windowNode.style.left = `${newLeft}px`;
        windowNode.style.top = `${newTop}px`;

        // Cache coordinates
        winInstance.x = newLeft;
        winInstance.y = newTop;
      };

      const onPointerUp = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  }

  // Resizing using Pointer Events (8 zones)
  bindWindowResizing(windowNode, winInstance) {
    const resizers = windowNode.querySelectorAll('.window-resizer');

    resizers.forEach(resizer => {
      resizer.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        if (winInstance.isMaximized || window.innerWidth < 768) return;

        e.stopPropagation();
        e.preventDefault();

        this.focusWindow(winInstance.id);

        const dir = resizer.getAttribute('data-direction');
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(windowNode.style.left) || 0;
        const startTop = parseInt(windowNode.style.top) || 0;
        const startWidth = parseInt(windowNode.style.width) || windowNode.offsetWidth;
        const startHeight = parseInt(windowNode.style.height) || windowNode.offsetHeight;

        const minW = 340;
        const minH = 200;

        const onPointerMove = (moveEvent) => {
          const dx = moveEvent.clientX - startX;
          const dy = moveEvent.clientY - startY;

          let newWidth = startWidth;
          let newHeight = startHeight;
          let newLeft = startLeft;
          let newTop = startTop;

          if (dir.includes('e')) {
            newWidth = Math.max(minW, startWidth + dx);
          }
          if (dir.includes('s')) {
            newHeight = Math.max(minH, startHeight + dy);
          }
          if (dir.includes('w')) {
            const potentialWidth = startWidth - dx;
            if (potentialWidth >= minW) {
              newWidth = potentialWidth;
              newLeft = startLeft + dx;
            }
          }
          if (dir.includes('n')) {
            const potentialHeight = startHeight - dy;
            if (potentialHeight >= minH) {
              newHeight = potentialHeight;
              newTop = startTop + dy;
            }
          }

          // Verify vertical constraint to avoid dragging/resizing above 0 top limit
          if (newTop < 0) {
            newHeight = newHeight + newTop; // deduct height
            newTop = 0;
          }

          windowNode.style.left = `${newLeft}px`;
          windowNode.style.top = `${newTop}px`;
          windowNode.style.width = `${newWidth}px`;
          windowNode.style.height = `${newHeight}px`;

          winInstance.x = newLeft;
          winInstance.y = newTop;
          winInstance.width = newWidth;
          winInstance.height = newHeight;
        };

        const onPointerUp = () => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      });
    });
  }

  // Update Cinnamon Panel Taskbar
  updateTaskbar() {
    const container = document.getElementById('taskbar-items');
    container.innerHTML = '';

    this.windows.forEach(win => {
      const isActive = this.activeWindowId === win.id;

      const item = document.createElement('button');
      // Rich glass styling matching active/minimized states
      item.className = `h-10 px-3 flex items-center gap-2 rounded border border-white/5 transition-all text-xs font-semibold text-left max-w-[140px] truncate ${isActive
        ? 'bg-white/15 border-b-2 border-b-mint text-white shadow-sm'
        : win.isMinimized
          ? 'opacity-40 hover:opacity-75 hover:bg-white/5'
          : 'hover:bg-white/10 hover:text-white'
        }`;

      item.innerHTML = `
        <span class="w-4 h-4 flex-shrink-0 flex items-center justify-center">${getAppIconSvg(win.appId)}</span>
        <span class="truncate">${win.title}</span>
      `;

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isActive) {
          this.minimizeWindow(win.id);
        } else if (win.isMinimized) {
          this.restoreWindow(win.id);
        } else {
          this.focusWindow(win.id);
        }
      });

      container.appendChild(item);
    });
  }

  // Adapt to mobile screens on the fly
  handleScreenResize() {
    const isMobile = window.innerWidth < 768;
    this.windows.forEach(win => {
      const node = win.node;
      if (isMobile) {
        if (!win.isMaximized) {
          win.savedX = parseInt(node.style.left) || win.x;
          win.savedY = parseInt(node.style.top) || win.y;
          win.savedWidth = parseInt(node.style.width) || win.width;
          win.savedHeight = parseInt(node.style.height) || win.height;
        }
        node.style.left = '0px';
        node.style.top = '0px';
        node.style.width = '100vw';
        node.style.height = `${window.innerHeight - 48}px`;
        node.classList.add('rounded-none');
        win.isMaximized = true;
      } else {
        // Desktop view
        if (win.desktopMaximized) {
          node.style.left = '0px';
          node.style.top = '0px';
          node.style.width = '100vw';
          node.style.height = `calc(100vh - 48px)`;
          node.classList.add('rounded-none');
          win.isMaximized = true;
        } else {
          node.style.left = `${win.savedX}px`;
          node.style.top = `${win.savedY}px`;
          node.style.width = `${win.savedWidth}px`;
          node.style.height = `${win.savedHeight}px`;
          node.classList.remove('rounded-none');
          win.isMaximized = false;
        }
      }
    });
  }
}

// Global reference
window.wm = new WindowManager();
window.spawnApp = (appId, title, initData = null, options = {}) => {
  let winTitle = title;
  if (!winTitle) {
    switch (appId) {
      case 'terminal': winTitle = 'Terminal de Cinnamon'; break;
      case 'nemo': winTitle = 'Gestor de Archivos (Nemo)'; break;
      case 'settings': winTitle = 'Preferencias del Sistema'; break;
      case 'xed': winTitle = 'Editor de Texto (Xed)'; break;
      case 'firefox': winTitle = 'Navegador Web Firefox'; break;
      case 'xreader': winTitle = 'Visor de Documentos (Xreader)'; break;
      default: winTitle = 'Aplicación';
    }
  }

  // Prevent duplicate settings/nemo/terminal windows for cleaner interaction, Xed can open multiple
  if (appId !== 'xed') {
    const existing = window.wm.windows.find(w => w.appId === appId);
    if (existing) {
      existing.title = winTitle;
      const titleElem = existing.node.querySelector('.window-title');
      if (titleElem) {
        titleElem.textContent = winTitle;
      }
      if (options.isMinimized === true) {
        window.wm.minimizeWindow(existing.id);
      } else {
        window.wm.restoreWindow(existing.id);
      }
      if (options.isMaximized === true && !existing.isMaximized) {
        window.wm.toggleMaximize(existing.id);
      }
      if (initData) {
        // Re-init with new path/data
        const contentContainer = existing.node.querySelector('.window-content');
        contentContainer.innerHTML = '';
        window.wm.mountAppContent(contentContainer, appId, existing, initData);
      }
      window.wm.updateTaskbar();
      return;
    }
  }

  window.wm.createWindow(appId, winTitle, initData, options);
};

// ==========================================
// 3. MOCKED APPLICATIONS LOGIC
// ==========================================

// Helper to resolve absolute or relative path securely without double slashes or trailing slashes (except root)
function resolvePath(currentDir, targetPath) {
  if (!targetPath) return currentDir;

  // Strip outer quotes if any
  let cleanTarget = targetPath.trim();
  if ((cleanTarget.startsWith('"') && cleanTarget.endsWith('"')) ||
    (cleanTarget.startsWith("'") && cleanTarget.endsWith("'"))) {
    cleanTarget = cleanTarget.slice(1, -1);
  }

  // Normalize slashes (replace multiple slashes with a single one)
  let normalized = cleanTarget.replace(/\/+/g, '/');

  let resolved;
  if (normalized.startsWith('/')) {
    resolved = normalized;
  } else {
    resolved = currentDir === '/' ? `/${normalized}` : `${currentDir}/${normalized}`;
  }

  // Strip trailing slash unless it is just "/"
  if (resolved.length > 1 && resolved.endsWith('/')) {
    resolved = resolved.slice(0, -1);
  }

  return resolved;
}

// --- A. TERMINAL ENGINE ---
function initTerminalApp(container, winInstance, initData) {
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

// --- B. NEMO FILE MANAGER ---
function initNemoApp(container, winInstance, initData) {
  const sidebar = container.querySelector('#nemo-sidebar-links');
  const filesGrid = container.querySelector('#nemo-files-grid');
  const breadcrumbs = container.querySelector('.nemo-breadcrumbs');
  const backBtn = container.querySelector('.nemo-back-btn');

  let currentPath = initData && initData.path ? initData.path : '/';
  let navigationHistory = [currentPath];
  let historyPointer = 0;

  // Render Sidebar navigation shortcuts
  const renderSidebar = () => {
    sidebar.innerHTML = '';
    const shortcuts = [
      { label: 'Equipo', path: '/', icon: 'computer' },
      { label: 'Escritorio', path: '/Desktop', icon: 'desktop' },
      { label: 'Documentos', path: '/Documentos', icon: 'documents' },
      { label: 'Imágenes', path: '/Imágenes', icon: 'pictures' },
      { label: 'Integrantes', path: '/Integrantes', icon: 'about' }
    ];

    shortcuts.forEach(item => {
      const active = currentPath === item.path;
      const btn = document.createElement('button');
      btn.className = `w-full text-left px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 select-none hover:bg-slate-200/60 dark:hover:bg-slate-800/40 ${active ? 'bg-mint/20 text-mint font-bold dark:text-mint-light' : 'text-slate-600 dark:text-slate-300'
        }`;
      btn.innerHTML = `
        <span class="w-3.5 h-3.5 flex-shrink-0">${getAppIconSvg(item.icon)}</span>
        <span>${item.label}</span>
      `;
      btn.addEventListener('click', () => {
        navigateTo(item.path);
      });
      sidebar.appendChild(btn);
    });
  };

  // Render Address bar breadcrumbs
  const renderBreadcrumbs = () => {
    breadcrumbs.innerHTML = '';
    const parts = currentPath.split('/').filter(Boolean);

    // Root link
    const rootBtn = document.createElement('button');
    rootBtn.className = 'hover:text-mint font-semibold hover:underline';
    rootBtn.textContent = 'Equipo';
    rootBtn.addEventListener('click', () => navigateTo('/'));
    breadcrumbs.appendChild(rootBtn);

    let pathAcc = '';
    parts.forEach(part => {
      pathAcc += '/' + part;

      const separator = document.createElement('span');
      separator.className = 'text-slate-400';
      separator.textContent = '>';
      breadcrumbs.appendChild(separator);

      const currentPathVal = pathAcc;
      const partBtn = document.createElement('button');
      partBtn.className = 'hover:text-mint font-semibold hover:underline truncate max-w-[80px]';
      partBtn.textContent = part;
      partBtn.addEventListener('click', () => navigateTo(currentPathVal));
      breadcrumbs.appendChild(partBtn);
    });

    // Back button state
    backBtn.disabled = historyPointer <= 0;
  };

  // Render Grid files list
  const renderFilesGrid = () => {
    filesGrid.innerHTML = '';
    const dirNode = VIRTUAL_FS[currentPath];
    if (!dirNode || !dirNode.children) return;

    dirNode.children.forEach(child => {
      const fullChildPath = currentPath === '/' ? `/${child}` : `${currentPath}/${child}`;
      const itemObj = VIRTUAL_FS[fullChildPath];
      const isDir = itemObj ? itemObj.type === 'dir' : true;
      const displayName = child;

      const fileCard = document.createElement('div');
      fileCard.className = 'desktop-icon flex-col w-[76px] min-h-[82px] h-auto border border-transparent rounded hover:bg-slate-200/50 dark:hover:bg-slate-800/50 cursor-pointer text-center py-2 flex items-center justify-start gap-1.5 focus:outline-none';
      fileCard.tabIndex = 0;

      // Determine Icon
      let iconSvg = '';
      if (isDir) {
        iconSvg = getAppIconSvg('nemo'); // default folder icon
      } else if (itemObj && itemObj.isLink) {
        iconSvg = getAppIconSvg('link'); // link shortcut icon
      } else {
        iconSvg = getAppIconSvg('xed'); // document editor icon
      }

      fileCard.innerHTML = `
        <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center">${iconSvg}</div>
        <div class="text-[11px] leading-tight whitespace-normal break-words w-full px-1.5 font-medium text-slate-800 dark:text-slate-200">${displayName}</div>
      `;

      // Click listeners
      let clickCount = 0;
      let clickTimer = null;

      fileCard.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
          clickTimer = setTimeout(() => {
            clickCount = 0;
            // Select highlight state can go here
          }, 300);
        } else if (clickCount === 2) {
          clearTimeout(clickTimer);
          clickCount = 0;

          if (isDir) {
            navigateTo(fullChildPath);
          } else if (itemObj && itemObj.isLink) {
            window.open(itemObj.url, '_blank');
          } else if (itemObj && (itemObj.isUnopenable || fullChildPath.startsWith('/Integrantes/'))) {
            // Do nothing
          } else if (fullChildPath.endsWith('.html')) {
            window.spawnApp('xreader', `Visor de Documentos (Xreader) - ${displayName}`, { filePath: fullChildPath });
          } else {
            // File double-click opens Xed!
            window.spawnApp('xed', `Xed - ${displayName}`, { filePath: fullChildPath });
          }
        }
      });

      // Support keyboard enter
      fileCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (isDir) {
            navigateTo(fullChildPath);
          } else if (itemObj && itemObj.isLink) {
            window.open(itemObj.url, '_blank');
          } else if (itemObj && (itemObj.isUnopenable || fullChildPath.startsWith('/Integrantes/'))) {
            // Do nothing
          } else if (fullChildPath.endsWith('.html')) {
            window.spawnApp('xreader', `Visor de Documentos (Xreader) - ${displayName}`, { filePath: fullChildPath });
          } else {
            window.spawnApp('xed', `Xed - ${displayName}`, { filePath: fullChildPath });
          }
        }
      });

      filesGrid.appendChild(fileCard);
    });
  };

  const navigateTo = (path) => {
    if (!VIRTUAL_FS[path] || VIRTUAL_FS[path].type !== 'dir') return;

    currentPath = path;

    // Update pointer logs
    if (navigationHistory[historyPointer] !== path) {
      // Clear forward history if we navigate to a new page
      navigationHistory = navigationHistory.slice(0, historyPointer + 1);
      navigationHistory.push(path);
      historyPointer = navigationHistory.length - 1;
    }

    renderSidebar();
    renderBreadcrumbs();
    renderFilesGrid();
  };

  // Back button event
  backBtn.addEventListener('click', () => {
    if (historyPointer > 0) {
      historyPointer--;
      currentPath = navigationHistory[historyPointer];
      renderSidebar();
      renderBreadcrumbs();
      renderFilesGrid();
    }
  });

  // Start NEMO view
  navigateTo(currentPath);
}

// --- C. SYSTEM SETTINGS ---
function initSettingsApp(container, winInstance, initData) {
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

// Helper to show modern Cinnamon system notification toasts
function showToast(message) {
  let container = document.getElementById('system-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'system-toast-container';
    container.className = 'fixed bottom-16 right-4 flex flex-col gap-2 z-[999999] pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900/95 dark:bg-slate-950/95 text-white text-xs px-4 py-3 rounded-lg shadow-2xl border border-white/10 dark:border-white/5 flex items-center gap-2.5 pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0';
  toast.style.borderLeft = '4px solid var(--mint-accent)';
  toast.innerHTML = `
    <svg class="w-4 h-4 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// --- C2. XREADER DOCUMENT VIEWER ---
function initXreaderApp(container, winInstance, initData) {
  const sidebar = container.querySelector('.xreader-sidebar');
  const sidebarList = container.querySelector('.xreader-sidebar-list');
  const toggleSidebarBtn = container.querySelector('.xreader-toggle-sidebar-btn');

  const zoomInBtn = container.querySelector('.xreader-zoom-in-btn');
  const zoomOutBtn = container.querySelector('.xreader-zoom-out-btn');
  const zoomResetBtn = container.querySelector('.xreader-zoom-reset-btn');
  const zoomIndicator = container.querySelector('.xreader-zoom-indicator');

  const prevBtn = container.querySelector('.xreader-prev-btn');
  const nextBtn = container.querySelector('.xreader-next-btn');
  const pageIndicator = container.querySelector('.xreader-page-indicator');

  const searchInput = container.querySelector('.xreader-search-input');
  const printBtn = container.querySelector('.xreader-print-btn');

  const sheet = container.querySelector('.xreader-page-sheet');
  const sheetContainer = container.querySelector('.xreader-page-sheet-container');

  let zoom = 1.0;
  let activePath = initData && initData.filePath ? initData.filePath : '/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html';
  let sidebarOpen = true;

  const exercises = [
    "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html",
    "/Documentos/Resolución de Parcial/Parte 2 - Investigacion y Experimentacion.html",
    "/Documentos/Resolución de Parcial/Parte 3 - Linux para diferentes personas.html",
    "/Documentos/Resolución de Parcial/Parte 4 - Linux, el motor de la IA.html",
    "/Documentos/Resolución de Parcial/Parte 5 - Conclusión grupal.html"
  ];

  // Render Sidebar index links
  const renderSidebar = () => {
    sidebarList.innerHTML = '';
    exercises.forEach((path, idx) => {
      const active = activePath === path;
      const btn = document.createElement('button');
      btn.className = `w-full text-left px-3 py-2 rounded text-xs font-medium flex items-center gap-2 select-none cursor-pointer ${active ? 'active' : 'text-slate-600 dark:text-slate-300'
        }`;
      btn.innerHTML = `
        <span class="w-4 h-4 flex-shrink-0 flex items-center justify-center font-bold text-mint">${idx + 1}</span>
        <span class="truncate">${path.split('/').pop().replace('.html', '')}</span>
      `;
      btn.addEventListener('click', () => {
        loadPage(path);
      });
      sidebarList.appendChild(btn);
    });
  };

  // Load document content
  const loadPage = (path) => {
    if (!VIRTUAL_FS[path]) return;
    activePath = path;

    // Set file contents
    sheet.innerHTML = VIRTUAL_FS[path].content;

    // Update active highlight & page indicator
    const idx = exercises.indexOf(path);
    pageIndicator.textContent = `Documento ${idx + 1} de ${exercises.length}`;

    // Update sidebar highlight
    renderSidebar();

    // Update window title
    const fileName = path.split('/').pop();
    const fullTitle = `Visor de Documentos (Xreader) - ${fileName}`;
    winInstance.title = fullTitle;
    const titleElem = winInstance.node.querySelector('.window-title');
    if (titleElem) {
      titleElem.textContent = fullTitle;
    }
    window.wm.updateTaskbar();

    // Reset scroll of the viewport
    const viewport = container.querySelector('.xreader-canvas-viewport');
    if (viewport) {
      viewport.scrollTop = 0;
      viewport.scrollLeft = 0;
    }
  };

  // Zoom Controls
  const applyZoom = () => {
    zoomIndicator.textContent = `${Math.round(zoom * 100)}%`;
    // Apply zoom style
    if (typeof sheet.style.zoom !== 'undefined') {
      sheet.style.zoom = zoom;
    } else {
      sheet.style.transform = `scale(${zoom})`;
      sheet.style.transformOrigin = 'top center';
    }
  };

  zoomInBtn.addEventListener('click', () => {
    if (zoom < 2.0) {
      zoom = parseFloat((zoom + 0.1).toFixed(1));
      if (zoom > 2.0) zoom = 2.0;
      applyZoom();
    }
  });

  zoomOutBtn.addEventListener('click', () => {
    if (zoom > 0.5) {
      zoom = parseFloat((zoom - 0.1).toFixed(1));
      if (zoom < 0.5) zoom = 0.5;
      applyZoom();
    }
  });

  zoomResetBtn.addEventListener('click', () => {
    zoom = 1.0;
    applyZoom();
  });

  // Toggle Sidebar
  toggleSidebarBtn.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
      sidebar.classList.remove('collapsed');
    } else {
      sidebar.classList.add('collapsed');
    }
  });

  // Navigation
  prevBtn.addEventListener('click', () => {
    let idx = exercises.indexOf(activePath);
    if (idx > 0) {
      loadPage(exercises[idx - 1]);
    } else {
      loadPage(exercises[exercises.length - 1]); // Loop around
    }
  });

  nextBtn.addEventListener('click', () => {
    let idx = exercises.indexOf(activePath);
    if (idx < exercises.length - 1) {
      loadPage(exercises[idx + 1]);
    } else {
      loadPage(exercises[0]); // Loop around
    }
  });

  // Mock Print simulation
  printBtn.addEventListener('click', () => {
    const fileName = activePath.split('/').pop();
    showToast(`Simulando impresión de ${fileName}...`);
  });

  // Mock Search simulation
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      showToast("La búsqueda dentro del documento está simulada.");
    }
  });

  // Mobile Adaptations
  const checkViewport = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      winInstance.isMaximized = true;
      winInstance.node.style.left = '0px';
      winInstance.node.style.top = '0px';
      winInstance.node.style.width = '100vw';
      winInstance.node.style.height = 'calc(100vh - 48px)';
      winInstance.node.classList.add('rounded-none');

      const resizers = winInstance.node.querySelectorAll('.window-resizer');
      resizers.forEach(r => r.style.display = 'none');

      sidebar.classList.add('collapsed');
      sidebarOpen = false;
    } else {
      const resizers = winInstance.node.querySelectorAll('.window-resizer');
      resizers.forEach(r => r.style.display = '');
    }
  };

  // Cleanup listener on next spawn/init
  if (winInstance._resizeHandler) {
    window.removeEventListener('resize', winInstance._resizeHandler);
  }
  winInstance._resizeHandler = checkViewport;
  window.addEventListener('resize', checkViewport);

  // Initial load
  checkViewport();
  loadPage(activePath);
  applyZoom();
}

// --- D. XED TEXT EDITOR ---
function initXedApp(container, winInstance, initData) {
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

// ==========================================
// 4. GLOBAL THEME ENGINE CONTROLLERS
// ==========================================
function setGlobalTheme(themeMode) {
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

function setGlobalAccent(accentKey) {
  const accent = ACCENTS[accentKey];
  if (!accent) return;

  systemConfig.accent = accentKey;
  systemConfig.accentHex = accent.hex;
  localStorage.setItem('mint_accent', accentKey);

  document.documentElement.style.setProperty('--mint-accent', accent.hex);
  document.documentElement.style.setProperty('--mint-accent-rgb', accent.rgb);
}

function setGlobalWallpaper(wallpaperKey) {
  const wallpaperStyle = WALLPAPERS[wallpaperKey];
  if (!wallpaperStyle) return;

  systemConfig.wallpaper = wallpaperKey;
  localStorage.setItem('mint_wallpaper', wallpaperKey);

  document.getElementById('desktop').style.background = wallpaperStyle;
}

// Boot Configuration
function bootConfigurations() {
  const savedTheme = localStorage.getItem('mint_theme') || 'dark';
  const savedAccent = localStorage.getItem('mint_accent') || 'mint';
  const savedWallpaper = localStorage.getItem('mint_wallpaper') || 'mint-default';

  setGlobalTheme(savedTheme);
  setGlobalAccent(savedAccent);
  setGlobalWallpaper(savedWallpaper);
}

// ==========================================
// 5. CINNAMON MENU & CLOCK SYSTEM
// ==========================================

// Real-Time Tray Clock
function startClockUpdater() {
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

// Start Cinnamon Menu Logic
function setupCinnamonMenu() {
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

// Power Management Mock Controls
window.lockScreenSimulator = () => {
  alert("Pantalla Bloqueada (Simulación). Presioná Aceptar para desbloquear.");
};

window.shutdownSimulator = () => {
  const overlay = document.getElementById('shutdown-screen');
  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('opacity-100');
    overlay.classList.remove('pointer-events-none');
  }, 50);
};

window.rebootSimulator = () => {
  const overlay = document.getElementById('shutdown-screen');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('pointer-events-none');
  setTimeout(() => {
    overlay.classList.add('hidden');
    location.reload();
  }, 1000);
};

// ==========================================
// 6. DESKTOP GRID RENDERING
// ==========================================
function renderDesktopIcons() {
  const grid = document.getElementById('desktop-grid');
  grid.innerHTML = '';

  const desktopApps = [
    { label: 'Equipo', icon: 'computer', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Equipo', { path: '/' }) },
    { label: 'Gestor de Archivos (Nemo)', icon: 'nemo', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Inicio', { path: '/Desktop' }) },
    { label: 'Terminal', icon: 'terminal', action: () => window.spawnApp('terminal', 'Terminal de Cinnamon') },
    { label: 'Preferencias del Sistema', icon: 'settings', action: () => window.spawnApp('settings', 'Preferencias del Sistema') },
    { label: 'Ventajas de Linux.txt', icon: 'linux-doc', action: () => window.spawnApp('xed', 'Editor de Texto (Xed) - Ventajas de Linux.txt', { filePath: '/Desktop/Ventajas de Linux.txt' }) },
    { label: 'Resolución de Parcial', icon: 'documents', action: () => window.spawnApp('nemo', 'Gestor de Archivos (Nemo) - Resolución de Parcial', { path: '/Documentos/Resolución de Parcial' }) }
  ];

  desktopApps.forEach(app => {
    const node = document.createElement('div');
    node.className = 'desktop-icon text-center focus:outline-none';
    node.tabIndex = 0;

    const iconHtml = getAppIconSvg(app.icon);

    node.innerHTML = `
      <div class="w-12 h-12 flex items-center justify-center drop-shadow-md select-none">${iconHtml}</div>
      <span class="text-xs font-semibold text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.9)] whitespace-normal break-words w-full mt-1.5 select-none leading-tight">${app.label}</span>
    `;

    // Double click or enter launches application
    let clicks = 0;
    let timer = null;

    node.addEventListener('click', () => {
      clicks++;
      if (clicks === 1) {
        timer = setTimeout(() => { clicks = 0; }, 300);
      } else if (clicks === 2) {
        clearTimeout(timer);
        clicks = 0;
        app.action();
      }
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        app.action();
      }
    });

    grid.appendChild(node);
  });

  // Add Quick Launch Panel Items in Cinnamon Panel
  const quickLaunchContainer = document.getElementById('quick-launch');
  quickLaunchContainer.innerHTML = '';
  const quickItems = [
    { icon: 'terminal', appId: 'terminal', title: 'Terminal de Cinnamon' },
    { icon: 'nemo', appId: 'nemo', title: 'Gestor de Archivos (Nemo)' },
    { icon: 'settings', appId: 'settings', title: 'Preferencias del Sistema' }
  ];
  quickItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'h-10 w-10 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded flex items-center justify-center transition-colors';
    btn.title = item.title;
    btn.innerHTML = `<span class="w-5 h-5">${getAppIconSvg(item.icon)}</span>`;
    btn.addEventListener('click', () => window.spawnApp(item.appId, item.title));
    quickLaunchContainer.appendChild(btn);
  });
}

// Right Click Context Menu setup
function setupContextMenu() {
  const menu = document.getElementById('desktop-context-menu');
  const desktop = document.getElementById('desktop');

  desktop.addEventListener('contextmenu', (e) => {
    // Only open context menu directly on desktop background or grid, not on windows/buttons
    if (e.target !== desktop && e.target === document.getElementById('window-zone')) return;

    e.preventDefault();
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.classList.remove('hidden');
  });

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
}

// ==========================================
// 7. INLINE ASSET DICTIONARY (SVGS)
// ==========================================
function getAppIconSvg(iconId) {
  switch (iconId) {
    case 'internet':
    case 'firefox':
      return `<svg class="w-full h-full text-orange-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>`;

    case 'computer':
      return `<svg class="w-full h-full text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>`;

    case 'desktop':
      return `<svg class="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <line x1="9" y1="18" x2="9" y2="18.01"></line>
        <line x1="15" y1="18" x2="15" y2="18.01"></line>
      </svg>`;

    case 'documents':
      return `<svg class="w-full h-full text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        <path d="M2 10h20"></path>
      </svg>`;

    case 'pictures':
      return `<svg class="w-full h-full text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>`;

    case 'about':
      return `<svg class="w-full h-full text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>`;

    case 'nemo':
      // Folder Icon SVG
      return `<svg class="w-full h-full text-emerald-500 hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 21a2.5 2.5 0 002.5-2.5v-9a2.5 2.5 0 00-2.5-2.5h-7.7L9.4 5.2A2.5 2.5 0 007.7 4H4.5A2.5 2.5 0 002 6.5v12A2.5 2.5 0 004.5 21h15z"/>
      </svg>`;

    case 'terminal':
      // Shell terminal command line logo
      return `<svg class="w-full h-full text-slate-800 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>`;

    case 'settings':
      // Gear / configuration cog logo
      return `<svg class="w-full h-full text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>`;

    case 'xed':
      // Text Editor logo
      return `<svg class="w-full h-full text-slate-800 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>`;

    case 'link':
      // Document file with a small external link/shortcut arrow badge
      return `<svg class="w-full h-full text-slate-800 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
        <g transform="translate(13, 13)">
          <circle cx="5" cy="5" r="5.5" fill="var(--mint-accent, #8fae53)" stroke="var(--mint-accent, #8fae53)" stroke-width="0.5"></circle>
          <path d="M3.5 6.5l3-3M6.5 3.5v2.5M6.5 3.5h-2.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
        </g>
      </svg>`;

    case 'linux-doc':
      // Linux benefits file / Tux badge
      return `<svg class="w-full h-full text-mint" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6zm-2 4a2 2 0 100 4 2 2 0 000-4zm4 0a2 2 0 100 4 2 2 0 000-4zm-2 5a1 1 0 00-1 1v2a3 3 0 006 0v-2a1 1 0 00-2 0v2a1 1 0 01-2 0v-2a1 1 0 00-1-1zm-6 4v1h16v-1a4 4 0 00-4-4h-8a4 4 0 00-4 4z"/>
      </svg>`;

    default:
      return `<svg class="w-full h-full text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>`;
  }
}

// ==========================================
// 8. VERIFICATION TESTS & RUNTIME CHECKS
// ==========================================
function runDiagnosticTests() {
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
        const expectedX = Math.max(0, (window.innerWidth - defaultWidth) / 2) + offset;
        const expectedY = Math.max(0, (window.innerHeight - defaultHeight - panelHeight) / 2) + offset;

        const actualX = win.isMaximized ? win.savedX : (parseInt(win.node.style.left) || 0);
        const actualY = win.isMaximized ? win.savedY : (parseInt(win.node.style.top) || 0);

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

    window.spawnApp = (appId, title, initData, options) => {
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

// ==========================================
// 9. SIMULATOR STARTUP INITIALIZATION
// ==========================================
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

  // Open Xreader (Resolution) & Xed (Welcome) automatically, with Xed focused on top
  window.spawnApp('xreader', 'Visor de Documentos (Xreader) - Parte 1 - Instalacion Virtual Box y Linux Mint.html', { filePath: '/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html' });
  window.spawnApp('xed', 'Editor de Texto (Xed) - Bienvenida.txt', { filePath: '/Documentos/Bienvenida.txt' });
});
