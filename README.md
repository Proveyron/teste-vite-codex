# Alma Tattoo - Landing Page

Projeto one-page de estúdio de tatuagem feito com **Vite + React + TypeScript + Tailwind CSS**.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

### Opção A — Branch dedicada (`gh-pages`)

```bash
npm run deploy
```

Isso publica o build padrão (`dist`) na branch `gh-pages`.

### Opção B — Deploy from branch `main` + pasta `/docs`

```bash
npm run build:pages
```

Depois faça commit/push da pasta `docs` e configure no GitHub:

1. **Settings → Pages**
2. **Build and deployment → Deploy from a branch**
3. **Branch: `main`**
4. **Folder: `/docs`**

## Notas sobre 404 de assets

O `vite.config.ts` está preparado para ambos os cenários via variáveis de ambiente:

- `VITE_BASE_PATH` (ex.: `./` para Pages em subpasta)
- `VITE_OUT_DIR` (ex.: `docs`)

Por padrão o projeto gera `dist`, mas para Pages em `main/docs` use `npm run build:pages`.
