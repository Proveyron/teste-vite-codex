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

## Deploy no GitHub Pages (branch `main`)

Este projeto está configurado para publicar via **main branch + pasta `/docs`** (GitHub Pages):

1. Gere o build:

```bash
npm run build
```

2. Faça commit/push da pasta `docs`.
3. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selecione: **Branch `main`** e **Folder `/docs`**.

### Observações

- `base: './'` evita erro de `404` de assets (`main.tsx`/JS/CSS) em caminhos de Pages.
- Se preferir deploy por `gh-pages`, o script já publica a pasta `docs`:

```bash
npm run deploy
```
