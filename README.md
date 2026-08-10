# Lumus Digital

Lumus Digital é uma iniciativa pessoal focada em experimentação, aprendizado contínuo e na criação de experiências digitais significativas.

Este repositório contém o site institucional do projeto.

---

## 🚧 Status

Em construção

---

## 🧰 Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Storybook
- Vitest + Testing Library
- ESLint + Prettier
- Husky + lint-staged
- Plop (geração de componentes e páginas)

## 🎨 Ícones

Este projeto usa `lucide-react` para a biblioteca de ícones. Sempre que
possível, prefira ícones nomeados da lib em vez de SVGs soltos, mantendo
consistência visual, acessibilidade e tipagem nos componentes.

---

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/lumus-digital/lumus-site.git
cd lumus-site
```

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

http://localhost:3000

---

## 📚 Como rodar o Storybook

Para visualizar e documentar os componentes isoladamente, utilize o Storybook:

```bash
npm run storybook
```

O Storybook estará disponível em:

http://localhost:6006

---

## ✅ Como rodar os testes

O projeto usa [Vitest](https://vitest.dev), com Testing Library.

Para rodar os testes unitários:

```bash
npm run test:unit
```

Para rodar a suíte com relatório de cobertura (thresholds mínimos de 80%):

```bash
npm run test:coverage
```

Modo watch (reexecuta ao salvar arquivos) também está disponível:

```bash
npm test
```

---

## 🎯 Objetivos do projeto

- Servir como base do Lumus Digital
- Evoluir para portfólio pessoal
- Ter blog técnico
- Showcase de projetos
- Base para possíveis produtos e serviços

---

## 🛣 Roadmap inicial

- [x] Setup Next.js
- [x] Página "Em breve"
- [x] Deploy na Vercel
- [x] Setup storybook
- [x] Setup testes unitários
- [x] Padronização de componentes e páginas, incluindo generate
- [x] Página "Home"
- [x] Página "Sobre"
- [x] Página "Contato"
- [x] SEO
- [x] Página "Blog"
- [ ] CMS para posts do Blog e paginação
- [ ] Métricas Web Vitals
- [ ] Analytics e Tracking
- [ ] Otimização de imagens
- [ ] Configuração para GitHub Copilot
- [ ] Customização de páginas de erro
- [ ] Translation

---

Inspired by stories. Built with logic. ✨
