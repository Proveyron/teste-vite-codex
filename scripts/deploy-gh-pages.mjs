import { execSync, spawnSync } from 'node:child_process';

const getOrigin = () => {
  try {
    return execSync('git config --get remote.origin.url', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return '';
  }
};

const repo = process.env.GH_PAGES_REPO || getOrigin();

if (!repo) {
  console.warn('\n⚠️  Nenhum repositório remoto encontrado para publicar com gh-pages.');
  console.warn('Defina GH_PAGES_REPO (ex.: https://github.com/usuario/repositorio.git) para deploy automático.');
  console.warn('Executando fallback para gerar /docs e permitir publicação via GitHub Pages (main/docs).\n');

  const fallback = spawnSync('npm', ['run', 'build:pages'], { stdio: 'inherit' });
  process.exit(fallback.status ?? 1);
}

console.log(`\n🚀 Publicando com gh-pages para: ${repo}\n`);
const deploy = spawnSync('npx', ['gh-pages', '-d', 'dist', '-r', repo], { stdio: 'inherit' });
process.exit(deploy.status ?? 1);
