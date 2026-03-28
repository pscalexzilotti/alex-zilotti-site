# Alex Zilotti - Site Profissional

Site profissional do Psicólogo Alex Zilotti, desenvolvido com Next.js 14, Tailwind CSS e shadcn/ui.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes UI)
- **MDX** (artigos/blog)
- **JSON** (conteúdo estruturado)

## Estrutura do Projeto

```
alex-zilotti-site/
├── app/(public)/
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   ├── sobre/page.tsx
│   ├── servicos/page.tsx
│   ├── imersao/page.tsx
│   ├── conteudos/page.tsx
│   ├── conteudos/[slug]/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── ui/button.tsx
│   ├── shared/ (section, section-header, icon-card, step-timeline)
│   ├── layout/ (main-nav, site-header, site-footer)
│   └── home/ (hero, for-whom, how-i-help, immersion-teaser, about-summary, sessions)
├── content/
│   ├── home.json
│   ├── services.json
│   ├── immersion.json
│   ├── about.md
│   └── posts/*.mdx
├── lib/ (utils.ts, posts.ts, seo.ts)
├── public/
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Instalação

```bash
# Clone
git clone https://github.com/pscalexzilotti/alex-zilotti-site.git
cd alex-zilotti-site

# Instale dependências
npm install

# Copie e configure o .env
cp .env.example .env.local
# Edite NEXT_PUBLIC_WHATSAPP_NUMBER no .env.local

# Instale componentes shadcn/ui
npx shadcn-ui@latest add button card sheet input textarea

# Inicie o servidor
npm run dev
```

## Deploy (Vercel)

1. Importe o repositório na [Vercel](https://vercel.com)
2. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` nas variáveis de ambiente
3. Deploy automático a cada push na `main`

## Novos Artigos

Crie arquivos `.mdx` em `content/posts/`:

```mdx
---
title: "Título"
date: "2024-01-01"
excerpt: "Resumo"
category: "Categoria"
author: "Alex Zilotti"
---

Conteudo em Markdown...
```

## CRP e Ética

Todo o conteúdo apresenta o CRP 08/48529 e respeita o Código de Ética do CFP.

---

Todos os direitos reservados © Alex Zilotti
