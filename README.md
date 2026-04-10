IT Alumni

Proyecto frontend estático construido con Vite, TypeScript y Vue 3 para una landing page de comunidad alumni.

Qué incluye

-Landing principal** con navegación y secciones de bienvenida, beneficios y testimonios.
-Páginas funcionales** para:
  -Xarxa` (red de contactos)
  -Feina` (oportunidades de empleo)
  -Esdeveniments` (agenda de eventos)
-Datos de ejemplo en src/data/*.json.
-Lógica modular en src/feature/*/Manager.ts y páginas HTML independientes.

Tecnologías

-Vite
-TypeScript
-Vue 3
-Vitest

Estructura clave

-index.html: Entrada principal
-src/main.ts: Carga los módulos de características
-src/style.css: Estilos globales
-src/feature/: Funciones y páginas específicas
-public/: Imágenes e iconos

Mapa de archivos

it-alumni/
├── public/
│   ├── icons/
│   └── images/
│       ├── esdeveniments/
│       ├── feina/
│       └── xarxa/
├── src/
│   ├── main.ts
│   ├── style.css
│   ├── data/
│   │   ├── esdeveniments.json
│   │   ├── feina.json
│   │   └── xarxa.json
│   └── feature/
│       ├── esdeveniments/
│       │   ├── esdevenimentsManager.ts
│       │   ├── esdevenimentsManager.test.ts
│       │   ├── esdevenimentsPage.html
│       │   └── esdevenimentsStyle.css
│       ├── feina/
│       │   ├── feinaManager.ts
│       │   ├── feinaManager.test.ts
│       │   ├── feinaPage.html
│       │   └── feinaStyle.css
│       └── xarxa/
│           ├── xarxaManager.ts
│           ├── xarxaManager.test.ts
│           ├── xarxaPage.html
│           └── xarxaStyle.css
├── index.html
├── package.json
└── tsconfig.json

Comandos

npm install
npm run dev
npm run build
npm run preview
npm test

Uso

1. Instala dependencias: npm install
2. Ejecuta en desarrollo: npm run dev
3. Abre el servidor local que muestra la aplicación.

Notas

La aplicación está pensada como prototipo para una experiencia de alumni con navegación simple y datos gestionados por módulos.
