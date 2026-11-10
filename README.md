# Héctor Montoya | High Performance Online Coaching

> Plataforma web de entrenamiento personal online de alto rendimiento en musculación y fuerza. Diseñada con una estética moderna en negro obsidiana y blanco sofisticado, animaciones cinemáticas de ejercicios (tipo GIF de movimiento en bucle), simulador interactivo de progreso semanal y estimador de energía para entrenamiento.

---

## ⚡ Vista General del Proyecto

Esta aplicación web fue diseñada para posicionar a **Héctor Montoya** como entrenador personal online de élite. La plataforma comunica autoridad técnica, carisma y rigor metodológico, permitiendo a los visitantes explorar ejercicios en bucle animado, probar el portal de seguimiento que utilizan los alumnos y solicitar una sesión de diagnóstico 1-a-1.

### Pilares de la Plataforma:
- **Enfoque 100% en Musculación & Fuerza**: Rigor en técnica sólida, palancas articulares, tempo y sobrecarga progresiva adaptada a la anatomía individual.
- **Tips Nutricionales Deportivos**: Principios prácticos para convertir la comida en combustible de entrenamiento sin dietas clínicas restrictivas ni complicaciones innecesarias.
- **Transparencia y Resultados Reales**: Métricas verificadas, testimonios atribuibles y garantía de progreso mutuo.

---

## 📖 Guía de Usuario (Manual de Navegación y Funcionalidades)

### 1. Cabecera y Navegación Rápida
- **Marca**: Identidad visual *HÉCTOR MONTOYA*.
- **Enlaces de acceso directo**: Filosofía, Ejercicios en Movimiento, Tips Nutrición, Progress Hub, Programas y Casos Reales.
- **Acceso Rápido**: Botón *Aplicar a Asesoría* con modal emergente en cualquier momento.

### 2. Galería de Ejercicios en Movimiento (Musculación & Fuerza)
- **Filtro por Objetivo**:
  - **Pérdida de Grasa (Quema Metabólica)**: Battle ropes, kettlebell swings, thrusters, burpees tácticos, mountain climbers y saltos pliométricos.
  - **Hipertrofia & Aumento de Masa**: Press de banca plano, sentadilla trasera con pausa en foso, peso muerto rumano (RDL), dominadas lastradas, press militar y remo pendlay.
- **Filtro por Grupo Muscular**: Tren superior, tren inferior, cadena posterior y core/cardiovascular.
- **Buscador Dinámico**: Encuentra cualquier ejercicio o grupo muscular en tiempo real.
- **Reproductor de Movimiento & Técnica**:
  - **Modo Animación GIF**: Animación continua en SVG de los vectores de fuerza, trayectoria vertical, arco escapular y leg drive.
  - **Modo Foto Técnica HD**: Fotografía en alta resolución capturada en estudio oscuro.
  - **Controles en Vivo**: Pausa/reproducción, selector de velocidad (0.5x, 1x, 1.5x) y contador de repeticiones (#1 a #12).
  - **Claves del Coach**: Consejos técnicos directos de Héctor para evitar lesiones articulares.

### 3. Tips Nutricionales del Coach (Combustible Deportivo)
- Pautas prácticas estructuradas en 4 categorías:
  - **Pre-Entrenamiento**: Carbohidratos de vaciado rápido 60-90 min antes y la pizca de sal marina para congestión y volemia.
  - **Proteína y Recuperación**: La regla de la palma de la mano (1.8 a 2.2 g/kg) y desmitificación de la ventana anabólica urgente.
  - **Vida Social & Cenas**: Estrategia de ahorro diurno para disfrutar salidas sociales sin culpa ni cardio compensatorio.
  - **Suplementos con Evidencia Científica**: Solo lo que funciona con evidencia grado A (creatina monohidrato, proteína en polvo y cafeína).

### 4. Montoya Progress Hub (Sistema de Seguimiento Personalizado)
- **Simulador de Check-In del Alumno**:
  - Gráfica interactiva de 1 a 12 semanas con evolución de peso báscula y reducción de porcentaje graso.
  - Selector de semanas (Semana 1, 4, 8 y 12) con métricas de pasos, adherencia y calidad de sueño.
  - **Reproductor de Audio Real (VoiceMemoPlayer)**: Escucha la nota de voz con voz real en español (Web Speech Synthesis + Web Audio API), control de velocidad (1x, 1.25x, 1.5x), onda interactiva con búsqueda por clic y resaltado sincronizado de la transcripción de Héctor.
  - **Ajustes Tácticos**: Lista de directivas concretas para la semana entrante.
- **Estimador de Energía de Entrenamiento**:
  - Introduce peso, altura, edad, género y nivel de actividad.
  - Calcula calorías dianas recomendadas según objetivo (Pérdida de grasa, Recomposición o Hipertrofia limpia).
  - Distribución orientativa de macronutrientes (Proteínas, Grasas y Carbohidratos).
  - Botón de envío directo para pre-llenar la solicitud de consulta con tus datos.

### 5. Programas de Asesoría 1-a-1
- **Recomposición Corporal 1-a-1** (Programa Insignia).
- **Hipertrofia & Fuerza de Élite** (Alto Rendimiento).
- **Longevidad & Rendimiento Ejecutivo** (Profesionales ocupados).
- Contador dinámico de plazas disponibles por mes.

### 6. Modal de Admisión y Reserva de Diagnóstico
- Cuestionario de 2 pasos optimizado para móvil:
  - **Paso 1**: Selección de objetivo, disponibilidad semanal y principal obstáculo.
  - **Paso 2**: Nombre, email profesional y WhatsApp con código de país.
  - Confirmación inmediata con garantía de respuesta en menos de 12 horas laborables.

---

## 🛠️ Guía de Desarrollador (Instalación y Ejecución Local)

### Requisitos Previos
- **Node.js**: Versión 18.0.0 o superior (recomendado Node 20 LTS o 22 LTS).
- **Gestor de paquetes**: npm (incluido con Node.js), pnpm o yarn.
- **Git**: Instalado en el sistema.

### 1. Clonar el Repositorio
```bash
git clone https://github.com/TU_USUARIO/hector-montoya-coaching.git
cd hector-montoya-coaching
```

### 2. Instalar Dependencias
Instala todos los paquetes requeridos definidos en `package.json`:
```bash
npm install
```

### 3. Ejecutar en Modo Desarrollo Local
Inicia el servidor de desarrollo de Vite:
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) (o el puerto indicado en la terminal).

### 4. Compilar para Producción
Genera la build optimizada y minificada en la carpeta `dist/`:
```bash
npm run build
```

### 5. Previsualizar la Build de Producción Localmente
```bash
npm run preview
```

### 6. Comprobación de Tipos y Linter
Ejecuta la verificación estricta de TypeScript:
```bash
npm run lint
```

---

## 📂 Estructura del Proyecto

```plaintext
├── index.html                   # Entry point HTML con fuentes Google Fonts (Outfit, Plus Jakarta Sans, Space Mono)
├── metadata.json                # Configuración de metadatos del proyecto
├── package.json                 # Dependencias y scripts de ejecución
├── tsconfig.json                # Configuración de TypeScript
├── vite.config.ts               # Configuración de Vite con plugins React y Tailwind CSS v4
├── public/                      # Archivos estáticos accesibles directamente
│   └── assets/images/           # Copia de seguridad de activos visuales
└── src/
    ├── main.tsx                 # Entrada de React (createRoot)
    ├── App.tsx                  # Componente raíz integrador de todas las secciones
    ├── index.css                # Estilos globales y Tailwind CSS v4 (@import "tailwindcss";)
    ├── types/
    │   └── index.ts             # Definición de tipos TypeScript (ExerciseItem, ClientCase, CoachingProgram, NutritionTip, etc.)
    ├── data/
    │   └── coachingData.ts      # Base de datos local tipada (ejercicios, tips nutricionales, casos de éxito, simulador de check-ins)
    ├── assets/
    │   └── images/              # Fotografías en alta resolución del entrenador y ejercicios
    └── components/
        ├── Navbar.tsx           # Barra superior con contrato de 3 zonas y menú móvil responsive
        ├── Hero.tsx             # Sección principal con propuesta de valor y foto de Héctor Montoya
        ├── Philosophy.tsx       # Metodología asimétrica en 4 pilares (Musculación y fuerza real, Tips nutricionales, Monitoreo y Mentalidad)
        ├── ExerciseTheater.tsx  # Galería interactiva con 12 ejercicios, búsqueda y filtros por objetivo y anatomía
        ├── ExerciseMotionPlayer.tsx # Reproductor cinemático en SVG animado (modo GIF de movimiento) y modo foto HD
        ├── NutritionTips.tsx    # Guía de tips y principios nutricionales deportivos del coach
        ├── ProgressHub.tsx      # Simulador de portal de check-in semanal y estimador de energía
        ├── Programs.tsx         # Tarjetas de los 3 programas de entrenamiento 1-a-1
        ├── Testimonials.tsx     # Casos de éxito con métricas biométricas verificadas
        ├── CoachBio.tsx         # Biografía y manifiesto de Héctor Montoya
        ├── FAQ.tsx              # Preguntas frecuentes con aclaración sobre enfoque de entrenamiento
        ├── BookingModal.tsx     # Modal interactivo de admisión y reserva en 2 pasos
        └── Footer.tsx           # Pie de página con aviso legal y canales de contacto
```

---

## 📦 Stack Tecnológico

| Herramienta | Versión | Uso Principal |
| :--- | :--- | :--- |
| **React** | `^19.0.1` | Biblioteca de interfaz de usuario basada en componentes y hooks |
| **TypeScript** | `^7.0.2` | Tipado estático y robustez en tiempo de compilación |
| **Vite** | `^8.3.0` | Servidor de desarrollo ultra rápido y empaquetador para producción |
| **Tailwind CSS** | `^4.3.3` | Framework de utilidades CSS moderno con `@import "tailwindcss";` |
| **Lucide React** | `^0.546.0` | Conjunto de iconos vectoriales limpios y funcionales |
| **Motion** | `^12.23.24` | Micro-animaciones y transiciones fluidas de alto rendimiento |

---

## 🚀 Pasos para Subir este Proyecto a tu GitHub

Si deseas subir este proyecto a un nuevo repositorio en tu cuenta de GitHub, sigue estos comandos en tu terminal:

1. **Inicializar Git localmente (si no está inicializado)**:
   ```bash
   git init
   ```

2. **Añadir todos los archivos**:
   ```bash
   git add .
   ```

3. **Crear el primer commit**:
   ```bash
   git commit -m "feat: Plataforma web de entrenamiento personal - Héctor Montoya"
   ```

4. **Renombrar la rama a main**:
   ```bash
   git branch -M main
   ```

5. **Vincular con tu repositorio de GitHub**:
   Crea un repositorio vacío en tu cuenta de GitHub (por ejemplo, `hector-montoya-coaching`) y ejecuta:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/hector-montoya-coaching.git
   ```

6. **Subir los cambios**:
   ```bash
   git push -u origin main
   ```

---

## 🌐 Opciones de Despliegue en la Nube

El proyecto está listo para ser desplegado con un solo clic en cualquiera de las siguientes plataformas:
- **Vercel**: Conecta tu repositorio de GitHub; detectará Vite automáticamente.
- **Netlify**: Configura el comando de build como `npm run build` y el directorio de publicación como `dist`.
- **Cloud Run / Docker**: El contenedor servirá el build estático optimizado en el puerto configurado.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Libre para uso personal o comercial.
