# Currículo — Alexandre Santos Adabo

Currículo interativo em página única, escrito em HTML, CSS e JavaScript puros, sem framework e sem etapa de build.

**Acesse:** https://alexandreadabo.github.io/Curriculo/

## Sobre

Uma landing page que apresenta trajetória, projetos e competências sem abrir mão da leitura por recrutadores e por sistemas de triagem (ATS). O conteúdo do currículo vive separado da interface: tudo que é texto está em um único objeto de dados, e a página se monta a partir dele.

### Funcionalidades

- **Tema claro e escuro** — respeita a preferência do sistema no primeiro acesso e guarda a escolha no `localStorage`, sem flash de tema errado ao carregar.
- **Exportação em PDF** — folha de estilo de impressão dedicada (A4), que expande todas as experiências, remove navegação e reflui o layout para papel.
- **Acessibilidade** — HTML semântico, skip link, navegação por teclado, `aria-expanded`/`aria-controls` nos acordeões e suporte a `prefers-reduced-motion`.
- **Responsivo** — layout de três estágios: sidebar fixa no desktop, cabeçalho horizontal em tablet e coluna única no celular.
- **Zero dependências em runtime** — nenhum framework, nenhuma biblioteca JS. Só duas fontes do Google Fonts.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Marcação | HTML5 semântico |
| Estilo | CSS3 com custom properties, Grid e Flexbox |
| Comportamento | JavaScript ES6+ (`IntersectionObserver`, template literals) |
| Tipografia | Manrope (títulos) e DM Sans (texto) |
| Hospedagem | GitHub Pages |

## Estrutura

```
.
├── index.html          # estrutura da página e conteúdo estático (formação, rodapé)
├── css/resume.css      # design tokens, layout, componentes, responsivo e impressão
├── js/resume.js        # dados do currículo + renderização + interações
├── img/                # foto de perfil
└── vendor/fontawesome-free/ # ícones e webfonts locais
```

O projeto não usa npm, Gulp, framework ou etapa de build. O Font Awesome é distribuído como recurso estático local e carregado diretamente pelo navegador.

## Rodando localmente

Não há build. Basta abrir o `index.html` no navegador.

Para servir via HTTP (recomendado, evita restrições de origem):

```bash
npx serve .
```

## Editando o conteúdo

Experiências, projetos e competências ficam no objeto `resumeData`, no topo de [js/resume.js](js/resume.js). Adicionar um item é adicionar um objeto ao array correspondente — a página se atualiza sozinha, sem tocar em HTML.

Formação, certificações e dados de contato estão diretamente no [index.html](index.html).

Convenções de código e checklist de revisão estão em [AGENTS.md](AGENTS.md).

## Licença

MIT. Veja [LICENSE](LICENSE).
