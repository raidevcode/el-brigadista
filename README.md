# Memoria y Democracia — React

Starter para un proyecto de investigación y difusión de la memoria de Luis M. Peraza Barrios.

## Stack

- React 19.3
- Vite
- React Router
- Lucide React
- CSS propio, sin framework de estilos

React recomienda Vite para montar una aplicación React desde cero cuando no se necesita un framework completo.

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
├── components/
│   ├── DocumentCard.jsx
│   ├── Layout.jsx
│   ├── SectionHeading.jsx
│   └── Timeline.jsx
├── data/
│   └── siteData.js
├── pages/
│   ├── About.jsx
│   ├── Biography.jsx
│   ├── Documents.jsx
│   ├── History.jsx
│   ├── Home.jsx
│   ├── Research.jsx
│   └── ResearchEntry.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Lo primero que debes modificar

La mayor parte del contenido está centralizada en `src/data/siteData.js` para que puedas cambiar nombres, fechas, textos, documentos y fuentes sin perseguir strings por todos los componentes.

Después sustituye los placeholders visuales por las fotografías y documentos reales.

## Principio editorial

No se debe inventar actividad pasada para aparentar una labor continuada. Las publicaciones deben llevar fechas reales y las afirmaciones históricas deben asociarse a fuentes/documentos.

## Nota legal

Esta plantilla es un proyecto web y no constituye por sí misma una garantía de que una autoridad administrativa considere acreditado un requisito jurídico. La estructura está diseñada para documentar de forma clara y trazable una actividad real de investigación y difusión.
