# Souvi Landing Page

Uma landing page moderna e convincente para a Souvi - AI Creative Factory para PMEs.

## Sobre o Projeto

A Souvi é uma plataforma WhatsApp-first que gera vídeos, imagens, copies e anúncios automaticamente para pequenas e médias empresas, similar à proposta de valor da TopView.ai.

## Recursos Implementados

- ✅ Hero section com headline impactante
- ✅ Seção "Como funciona" (4 passos)
- ✅ Value propositions com 6 benefícios
- ✅ Social proof com depoimentos
- ✅ Planos de preços (Básico, Pro, Studio)
- ✅ CTA final para conversão
- ✅ Design moderno e responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Tipografia Inter para modernidade
- ✅ Paleta de cores: branco, preto, verde (#0BD36D)

## Tecnologias Utilizadas

- **Next.js 16** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos
- **Inter Font** - Tipografia limpa e moderna

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Deploy na Vercel

### Opção 1: Via GitHub (Recomendada)

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Conecte sua conta GitHub
4. Selecione o repositório
5. Configure como Next.js project
6. Deploy automaticamente!

### Opção 2: Via CLI da Vercel

```bash
# Instalar CLI da Vercel
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

### Variáveis de Ambiente (se necessário)

Nenhuma variável de ambiente específica é necessária para esta landing page estática.

## Customizações Futuras

Para personalizar ainda mais a landing page:

1. **Adicionar WhatsApp Integration**: Implementar redirecionamento real para WhatsApp
2. **Analytics**: Adicionar Google Analytics ou similar
3. **CMS**: Integrar com Strapi ou outro CMS para conteúdo dinâmico
4. **A/B Testing**: Implementar testes de diferentes versões
5. **SEO**: Adicionar meta tags específicas e Schema.org

## Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e configuração Tailwind
│   │   ├── layout.tsx       # Layout base com Inter font
│   │   └── page.tsx         # Landing page principal
├── public/                  # Assets estáticos
├── package.json
└── README.md
```

## Performance

- ✅ Build otimizado para produção
- ✅ Imagens responsivas (placeholders prontos)
- ✅ Fontes otimizadas com Next.js
- ✅ CSS otimizado com Tailwind v4
- ✅ Animações performáticas com Framer Motion
