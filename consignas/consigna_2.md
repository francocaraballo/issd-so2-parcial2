# **Consigna 2:  Investigación y Experimentación Guiada**

## **Mi Pc a mi manera**

La idea está basada en una necesidad real ya que uno de los miembros del grupo hace servicio técnico de computadoras, notebooks, impresoras, redes, etc.  
Detallamos el procedimiento técnico realizado para la construcción de una distribución GNU/Linux en formato "Live USB". Todo el proceso desde el ensamblaje hasta la compilación de la imagen ISO final.

### **Fase 1: Preparación del Entorno de Laboratorio**

**1 \- virtualHost y Virtualizació**n: Desde el equipo anfitrión corriendo Windows 10, se configuró el software Oracle VM VirtualBox.  
**2 \- Configuración de la Máquina Virtual**: Se creó una VM tipo "Debian (64-bit)" asignándole 4 GB de memoria RAM, 2 núcleos de procesamiento y un disco duro virtual de asignación dinámica de 35 GB (espacio necesario para compilar la ISO posteriormente).  
**3 \- Instalación Base**: Se descargó la imagen ISO oficial de Linux Mint 22.3 Cinnamon Edition. Se montó en la VM y se realizó la instalación completa del sistema operativo en el disco virtual.

![][Captura 2](images/consigna_2_a.png)

### **Fase 2: Actualización e Inyección de Software Especializado**

Una vez instalado MX Linux, se procedió a actualizar los repositorios e instalar las herramientas  
orientadas al diagnóstico de hardware, redes y recuperación de sistemas Windows.  
Desde la terminal (CLI), se actualizaron las listas de paquetes y el sistema base.  
Se ejecutó una instalación masiva utilizando el gestor apt para integrar utilidades fundamentales como: chntpw (reseteo SAM Windows), testdisk (recuperación de particiones), gsmartcontrol y gnome-disk-utility (salud S.M.A.R.T.), clamav/clamtk (antivirus), gddrescue/safecopy (clonación física), entre otras utilidades de red y ofimática ligera.

***sudo apt install gdisk parted dosfstools exfatprogs hdparm extundelete foremost safecopy clonezilla wimtools rkhunter chkrootkit nmap wireshark iperf3 ethtool net-tools traceroute mtr curl wget lshw hwinfo dmidecode lmsensors stress-ng memtest86+ cpu-x mc ranger p7zip-full unrar remmina openssh-client terminator gnome-disk-utility \-y***

Hardinfo, RustDesktop (soporte remoto), ClamAV (antivirus), Wireshark (redes), CPU-X y QdiskInfo (Informacion de Sistema y disco), DoubleCommander (explorador doble panel)  
También incluimos Arduino IDE

### **Fase 3: Personalización del Entorno Gráfico (UI/UX)**

Se adaptó el entorno XFCE para ofrecer una experiencia familiar a los técnicos acostumbrados a  
sistemas operativos de Microsoft y reflejar la identidad institucional de SSCOM Informática.  
Fondo de Escritorio: Se importó y estableció una imagen alusiva a Linux y servicio técnico.  
Panel de Tareas y estructura del menú: se bajo el tema de Windows 10 y se aplicaron los estilos.  
Personalizamos categorías por función:  
•	Discos y Recuperación  
•	Recuperación de Datos y Clonación  
•	Herramientas de sistema  
•	Internet  
•	Seguridad  
•	Programación  
•	Otras  
Icono de inicio: Bajamos un icono similar al del inicio de windows

## ![Captura 3](images/consigna_2_b.png)

### **Fase 4 Remasterización y Generación de la Imagen ISO**

Una vez configurado el entorno visual y el catálogo de software, se procede a congelar el sistema en una imagen ISO distribuible.  
**1\. Limpieza del Almacenamiento**: Ejecutar la depuración del caché de paquetes para reducir el peso de la imagen final: sudo apt clean Vaciar la papelera de reciclaje y eliminar archivos residuales en el directorio de descargas.  
**2\. Instalación del Framework de Remasterización**: Clonar o instalar la herramienta de compilación eggs (Penguin's Eggs) asegurando la carga de sus dependencias del sistema.  
**3\. Compilación en Modo Clon:** Es mandatorio ejecutar la compilación utilizando el flag de clonación de usuario. Esto garantiza que los archivos de configuración local (los temas visuales, el papel tapiz seleccionado, los accesos directos de las aplicaciones y las categorías de menú personalizadas) se incorporen dentro del sistema de archivos comprimido que se montará al arrancar el Live USB: 

***sudo eggs produce \--clone***

**4\. Ubicación del Resultado:** Al finalizar el proceso de compresión de bloques, la herramienta almacenará la imagen ISO generada (ej. SO2.iso) en la ruta protegida del sistema: /home/eggs/.

### 

### 

### **Fase 5 Preparación de la Unidad USB y Estructura de Persistencia**

La última etapa traslada la ISO a la unidad física y configura el backend que recibirá los datos en los ciclos de trabajo reales.  
**1\.	Instalación de Ventoy:** Utilizar la herramienta Ventoy (vía interfaz gráfica en Linux o Windows) para formatear la unidad USB física, dividiéndola automáticamente en su estructura de arranque oculta y su partición principal de datos.  
![][Captura 4](images/consigna_2_c.png)
**2\. Transferencia de la ISO:** Copiar el archivo de la imagen ISO generada (ej. SO2.iso) directamente en la raíz de la partición principal de datos de la unidad USB.   
![][Captura 5](images/consigna_2_d.png)

**3\. Configuración del Bloque de Persistencia:** Dado que el entorno generado por Penguin's Eggs corre bajo el script de inicialización live-boot de Debian, se debe proveer un bloque compatible:  
•Descargar un contenedor de persistencia formateado en EXT4 provisto por el backend de Ventoy, asegurando que su nombre contenga el sufijo correspondiente a la arquitectura de Debian, por ejemplo: persistence\_ext4\_2GB\_persistence.dat.  
•Mover este archivo de almacenamiento masivo virtual a la raíz de la unidad USB (junto a la imagen ISO).

![][Captura 6](images/consigna_2_e.png)
   
**4\. Vinculación mediante Descriptor JSON:** En la raíz de la unidad USB, crear una carpeta llamada exactamente ventoy. Dentro de ella, estructurar un archivo de texto plano denominado ventoy.json que asocie de forma unívoca la ISO con su almacenamiento persistente mediante el siguiente código descriptivo:

![][Captura 7](images/consigna_2_f.png)

### **Fase 6 Procedimiento de Arranque en producción**

Para ejecutar el entorno conservando la persistencia de datos (por ejemplo, para guardar un proyecto de desarrollo en Visual Studio Code o bases de datos locales):  
1\. Conectar la unidad USB a la computadora de destino e inicializar el sistema accediendo al menú de arranque de la BIOS/UEFI.  
2\. En el menú gráfico de Ventoy, seleccionar la imagen SO2.iso.

![][Captura 8](images/consigna_2_g.png)

3\. En el submenú inmediato desplegado por Ventoy, seleccionar la opción "Boot with /persistence\_ext4\_2GB\_persistence.dat" (no utilizar el modo normal).  
![][Captura 9](images/consigna_2_h.png)

4\. Al cargar la pantalla del cargador de arranque personalizado (pantalla de GRUB de Penguin's Eggs), posicionarse sobre la primera opción de arranque, presionar la tecla TAB para editar los parámetros del kernel en tiempo de ejecución, añadir la instrucción de montaje al final de la línea dejando un espacio: persistence y presionar Enter para iniciar la sesión de forma persistente.

![][Captura 10](images/consigna_2_i.png)

![][Captura 11](images/consigna_2_j.png)

Pantalla de como inició el live usb

![][Captura 12](images/consigna_2_k.png)
Cambiamos el fondo de pantalla, creamos una carpeta y nos conectamos a internet.  
Al reiniciar el sistema guardo todos los cambios.

![][Captura 13](images/consigna_2_l.png)

Por lo que logramos crear un sistema operativo portable con herramientas que puede actualizarse.

# 
