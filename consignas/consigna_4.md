# **Consigna 4: Linux, el Motor de la Inteligencia Artificial**

# **4.1 — Por qué Linux domina la IA (dos razones técnicas)**

# **Drivers de GPU, CUDA y rendimiento: el entrenamiento de modelos de IA depende fuertemente de las placas de video NVIDIA. CUDA (la plataforma de NVIDIA para cálculo en GPU) y casi todas las librerías de aceleración por hardware están pensadas y optimizadas primero para Linux. Eso significa mejor soporte de drivers para cómputo, mejor aprovechamiento de la GPU y, en general, más rendimiento y estabilidad en tareas largas de entrenamiento que en otros sistemas.**

# **Terminal, automatización y contenedores (Docker): Linux ofrece una terminal potentísima donde se instala, configura y ejecuta todo mediante comandos y scripts, lo que permite automatizar experimentos y reproducirlos. Sumado a eso, los contenedores como Docker —que nacieron y funcionan de forma nativa en Linux— permiten empaquetar todo el entorno (versiones de Python, librerías, dependencias) y que corra igual en cualquier máquina o servidor. Como casi todos los servidores, supercomputadoras y servicios en la nube donde realmente se entrena la IA usan Linux, desarrollar directamente en Linux evita problemas de compatibilidad al pasar del escritorio al servidor.**

# **4.2 — Jupyter Notebook**

# **Jupyter Notebook es una herramienta de desarrollo interactivo que permite escribir y ejecutar código (sobre todo Python) por bloques o "celdas", viendo el resultado de cada una al instante, sin tener que correr todo el programa de una. En el mismo documento se mezcla código, los resultados (números, tablas, gráficos) y texto explicativo con formato. Por eso es la herramienta preferida en ciencia de datos, machine learning y educación: sirve para experimentar paso a paso, visualizar datos, probar modelos y, a la vez, documentar y compartir el trabajo de forma clara y reproducible.**

# **4.3 — Upscayl**

# **Upscayl es una aplicación de código abierto que usa inteligencia artificial para escalar y mejorar imágenes (image upscaling). Toma una foto de baja resolución o pixelada y, mediante modelos de IA, la agranda agregando detalle y nitidez en vez de quedar borrosa, como pasaría con un escalado común. Es un buen ejemplo de IA "de escritorio", funcionando localmente en tu propia máquina.**

# **Un detalle para tu instalación: en la consigna sugieren sudo apt install flatpak. Tené en cuenta que en Linux Mint, Flatpak normalmente ya viene listo y el Gestor de Software lo soporta de fábrica, así que probablemente puedas instalar Upscayl directo desde el Gestor sin tocar la terminal. Si no aparece, ahí sí corrés el comando.**
