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
  "/Documentos/Resolución de Parcial/Parte 1 - Instalacion Virtual Box y Linux Mint.html": {
    type: "file",
    name: "Parte 1 - Instalacion Virtual Box y Linux Mint.html",
    content: `
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">Consgina 1: Instalación y Primeros Pasos</h1>
      <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">1.1 Instalación de Virtualbox y LinuxMint en una máquina virtual.</h2>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        Video de muestra de instalación del software de Oracle VirtualBox, que funciona como ecosistema de emulación y prueba de sistemas operativos. Se incluyen los puntos 1.2, 1.3 y 1.4.
      </p>
      <div class="my-6 flex justify-center">
        <img src="images/consigna_1.png" alt="Instalación de Linux Mint" class="rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 max-w-full h-auto">
      </div>
      <p class="text-slate-600 dark:text-slate-300 mt-4">
        Link al video tutorial: 
        <a href="https://www.youtube.com/watch?v=2q2drKX9rP4" target="_blank" class="text-mint hover:underline font-semibold inline-flex items-center gap-1">
          Instalacion paso a paso
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </p>
      <div class="my-6 aspect-video rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/2q2drKX9rP4" title="Video tutorial de instalación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export let systemConfig = {
  theme: 'dark',
  accent: 'mint',
  accentHex: '#8fae53',
  wallpaper: 'mint-default'
};
