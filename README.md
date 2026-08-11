# Vanessa Contabilidade — Site institucional

Site estático, responsivo e pronto para ser versionado no GitHub e publicado na Vercel.

## Estrutura

- `index.html` — conteúdo e SEO
- `styles.css` — identidade visual, responsividade e acessibilidade
- `script.js` — menu mobile, animações e ativação dos canais de contato
- `site.config.js` — WhatsApp/e-mail/Instagram (configure antes de publicar)
- `assets/` — logotipo, sublogo, foto profissional, favicon e imagem social
- `vercel.json` — configuração simples de cache para a Vercel

## 1. Configurar os contatos

Abra `site.config.js` e preencha:

```js
window.SITE_CONFIG = {
  whatsapp: "5521999999999",
  email: "contato@seudominio.com.br",
  instagram: "https://instagram.com/seuperfil"
};
```

O WhatsApp deve conter apenas números, com DDI + DDD + número.

## 2. Testar localmente

Na pasta do projeto:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 3. Publicar no GitHub

Crie um repositório vazio e, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Site Vanessa Contabilidade"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## 4. Vincular à Vercel

1. Na Vercel, escolha **Add New > Project**.
2. Importe o repositório do GitHub.
3. Framework Preset: **Other**.
4. Build Command: deixe vazio.
5. Output Directory: deixe vazio.
6. Clique em **Deploy**.

A cada novo `git push`, a Vercel fará um novo deploy automaticamente.

## Identidade visual

A paleta fornecida foi aplicada no site:

- Verde oliva: `#555B3B`
- Verde sálvia: `#C1C8B8`
- Rosa suave: `#E0BDBB`

A referência de tipografia do material utiliza Luxerie. Como o arquivo da fonte não foi fornecido, o site usa **Cormorant Garamond** como serifada de apoio e **DM Sans** para textos, mantendo o estilo elegante e profissional sem redistribuir fontes licenciadas.

## Observação de conteúdo

O texto foi organizado a partir do protótipo fornecido, preservando serviços, posicionamento, credenciais, atuação presencial/online e seção de credenciamento hospitalar/militar. Nenhum telefone, e-mail ou rede social foi inventado; esses dados devem ser preenchidos em `site.config.js`.

## Correção de layout — v2

Esta versão corrige o hero em telas desktop/intermediárias:

- título com escala responsiva mais controlada;
- colunas com `minmax(0, ...)` para evitar compressão inesperada;
- breakpoint do hero ajustado para empilhar antes de a coluna ficar estreita;
- foto com fallback JPG caso WebP não carregue;
- marca do cabeçalho mais legível;
- proteção contra overflow horizontal;
- query de versão em CSS/JS para reduzir problemas de cache após o redeploy.

Para atualizar um projeto já publicado, substitua **todos os arquivos do repositório** pelos desta pasta e faça um novo commit/push. A Vercel fará o deploy automaticamente se o repositório estiver conectado.
