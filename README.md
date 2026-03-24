# Sports App

Aplicacion React para explorar ligas por pais, listar equipos por liga y ver detalle de cada equipo usando TheSportsDB.

## Demo funcional

- Home moderna con hero responsive.
- Busqueda de pais con autocompletado personalizado.
- Carga inmediata de ligas al elegir pais.
- Navegacion corta y amigable:
  - `/ligas`
  - `/equipos/:id`
  - `/equipo/:id`
- Loading full-screen con fade/blur.

## Stack tecnico

- React 17
- React Router DOM 5
- Material-UI v4
- Create React App (react-scripts 4.0.3)
- API: TheSportsDB v1

## Requisitos

- Node.js 20.x
- npm 10 o superior

El proyecto incluye:

- `.nvmrc` con `20`
- `engines` en `package.json`

## Instalacion

```bash
npm install --legacy-peer-deps
```

## Scripts

```bash
# desarrollo
npm start

# build produccion
npm run build

# tests
npm test
```

Nota: `start` y `build` usan `NODE_OPTIONS=--openssl-legacy-provider` para compatibilidad con Webpack 4 en Node 20.

## Variables de entorno

Puedes crear un `.env` opcional:

```env
REACT_APP_THESPORTSDB_API_KEY=123
```

Si no existe, el proyecto usa `123` por defecto.

## Rutas de la app

Rutas publicas actuales:

- `/` -> Home
- `/ligas` -> Busqueda de ligas por pais
- `/equipos/:id` -> Equipos de la liga
- `/equipo/:id` -> Detalle del equipo

Rutas antiguas (legacy) redirigidas automaticamente:

- `/leaguescontext/countries` -> `/ligas`
- `/teamscontext/teams/:id` -> `/equipos/:id`
- `/teamcontext/team/:id` -> `/equipo/:id`

## Arquitectura resumida

### Contextos

- `LeaguesContext`
  - Carga paises.
  - Guarda pais seleccionado (`selectedCountry`) para persistir al navegar.
  - Carga ligas por pais (`validateC`).

- `TeamsContext`
  - Carga equipos por liga con estrategia de fusion para evitar limites de la API gratuita:
    - `eventsseason`
    - `lookuptable`
    - `search_all_teams` por id
    - `search_all_teams` por nombre de liga

- `TeamContext`
  - Carga detalle de equipo por id.
  - Reutiliza estado de navegacion cuando esta disponible para mejorar consistencia.

### API wrapper

`src/constants/index.js` centraliza endpoints de TheSportsDB.

## Limitaciones conocidas de TheSportsDB (free key)

- `search_all_teams` devuelve como maximo 10 filas.
- `all_countries` devuelve como maximo 50 filas.

Para mejorar UX:

- Se fusionan multiples endpoints para recuperar mas equipos.
- Se amplian paises con `Intl.DisplayNames` cuando la API no alcanza.

## Despliegue en Vercel

Archivos relevantes:

- `vercel.json`
- `package.json` (`engines`, scripts)

Configuracion aplicada:

- `installCommand`: `npm install --legacy-peer-deps`
- `buildCommand`: `npm run build`
- `outputDirectory`: `build`

### Pasos recomendados

1. Push a `master` (o rama deseada).
2. Importar proyecto en Vercel.
3. Verificar que use Node 20.x (ya viene forzado por `engines`).

## Troubleshooting

### 1) Error: `ERR_PACKAGE_PATH_NOT_EXPORTED` (postcss-safe-parser/postcss)

Ya resuelto en este repo con:

- `overrides` + `resolutions` fijando `postcss-safe-parser` en `6.0.0`
- `postcss` en dependencias

### 2) Error OpenSSL en Node 20 (`ERR_OSSL_EVP_UNSUPPORTED`)

Ya resuelto en scripts con:

- `cross-env NODE_OPTIONS=--openssl-legacy-provider`

### 3) Vercel usa Yarn y avisa lock mixto

El proyecto fuerza `npm install` en `vercel.json`, por lo que no deberia romper build.

## Estructura principal

```text
src/
  components/
    Common/
    Leagues/
    Teams/
  contexts/
  constants/
  utils/
  App.js
```

## Calidad y verificacion

Antes de publicar cambios:

```bash
npm run build
```

Si compila, la app esta lista para deploy en Vercel.

## Licencia

Uso educativo/demostrativo.
