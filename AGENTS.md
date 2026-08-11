# AGENTS.md

Guia de convenções para trabalhar neste repositório. Vale para agentes de IA e para quem for editar o projeto no futuro.

## O projeto em uma frase

Currículo de página única em HTML/CSS/JS puros, servido pelo GitHub Pages. **Não existe etapa de build**: o que está no repositório é exatamente o que vai para o ar.

## Regras que não se quebram

1. **Sem build, sem dependências em runtime.** Não introduzir bundler, framework, jQuery, Bootstrap, Tailwind ou qualquer biblioteca. Se a solução exige `npm install`, não é a solução certa aqui.
2. **Editar apenas três arquivos.** `index.html`, `css/resume.css` e `js/resume.js`.
3. **Não tocar nos arquivos legados.** `scss/`, `vendor/`, `gulpfile.js`, `package.json`, `package-lock.json`, `.travis.yml`, `.browserslistrc`, `css/resume.min.css`, `js/resume.min.js` e `debug.log` são resquícios do template Start Bootstrap e estão órfãos. Não editar, não regenerar, não usar como referência de estilo. Removê-los é uma decisão do autor do repositório, não uma limpeza a ser feita de passagem.
4. **Todo texto visível em português (pt-BR).** Nomes de classes, ids, variáveis e funções em inglês.
5. **Conteúdo do currículo é dado, não marcação.** Experiências, projetos e competências entram em `resumeData` (`js/resume.js`), nunca como HTML escrito à mão.

## HTML (`index.html`)

- Indentação de 2 espaços.
- Marcação semântica: `aside`, `main`, `nav`, `section`, `article`, `header`, `footer`, `dl`. Nada de `div` onde existe elemento com significado.
- Toda `section` tem `id` e `aria-labelledby` apontando para o `id` do seu título.
- **Ids seguem duas convenções, por propósito:**
  - âncoras de navegação, em português e sem acento: `#sobre`, `#experiencia`, `#projetos`, `#competencias`, `#formacao`, `#inicio`;
  - ganchos de JavaScript, em inglês camelCase: `experienceList`, `projectList`, `skillList`, `printButton`, `themeToggle`.
- Links externos sempre com `target="_blank" rel="noreferrer"` e `aria-label` descritivo.
- `img` sempre com `alt`, `width` e `height` explícitos.
- Ícones decorativos e setas (`↗`, `↓`, `↑`) recebem `aria-hidden="true"`.
- O script inline no `<head>` que define `data-theme` é intencional e deve continuar sendo a primeira coisa a rodar — é o que evita o flash de tema errado. Não mover para `js/resume.js`.

## CSS (`css/resume.css`)

### Formato

Uma regra por linha, com todas as declarações na mesma linha:

```css
.project-card__number { margin: 0 0 auto; color: var(--accent); font-size: .72rem; font-weight: 700; }
```

Blocos com muitas declarações (`:root`, media queries, `.sidebar`) podem quebrar em várias linhas. Seguir o que já existe ao redor.

### Nomenclatura

BEM leve: `.bloco`, `.bloco__elemento`, `.bloco--modificador`. Exemplos vivos: `.profile__photo`, `.timeline-item__date`, `.button--primary`, `.theme-icon--sun`.

### Ordem do arquivo

Manter esta sequência ao adicionar código:

1. tokens (`:root` e `:root[data-theme="dark"]`)
2. reset e elementos base
3. layout (`.site-shell`, `.sidebar`, `main`, `.topbar`)
4. componentes, na mesma ordem em que aparecem na página
5. `@media (max-width: 980px)` — tablet
6. `@media (max-width: 680px)` — celular
7. `@media (prefers-reduced-motion: reduce)`
8. `@media print`

### Design tokens

Cores **sempre** via custom property. Nunca hardcodar cor em componente.

| Token | Papel |
| --- | --- |
| `--bg` | fundo da página |
| `--surface` | cartões e superfícies elevadas |
| `--surface-soft` | superfície secundária (tags, certificações) |
| `--text` | texto principal |
| `--muted` | texto secundário |
| `--line` | bordas e divisórias |
| `--accent` | destaque, links, numeração de seção |
| `--accent-strong` | hover do destaque |
| `--sidebar` / `--sidebar-text` | barra lateral |
| `--shadow` | sombra dos cartões |

Todo token novo precisa de valor nos dois temas e no bloco `@media print`.

A sidebar é a única exceção tolerada a literais de cor (`#70dbc4`, `#8fa09c`, `#91a39f`, `white`): ela é escura nos dois temas, então não acompanha os tokens. Não usar isso como precedente fora dela.

### Convenções de valor

- Espaçamentos e tipografia fluidos com `clamp(min, vw, max)`.
- `rem` para tamanhos; `px` só para detalhes finos (bordas, ícones, larguras fixas como os 290px da sidebar); `mm` e `pt` exclusivamente dentro de `@media print`.
- Decimais sem zero à esquerda: `.85rem`, não `0.85rem`.
- Cores em hex minúsculo; `rgba()` quando precisa de alfa.
- Transições curtas e explícitas: `transition: opacity .2s, transform .25s`. Nunca `transition: all`.
- Breakpoints são exatamente **980px** e **680px**, desktop-first. Não criar outros.

### Impressão

Qualquer componente novo precisa ser conferido no `@media print`. O bloco de impressão precisa continuar garantindo que: acordeões apareçam abertos (`.experience-details[hidden] { display: block }`), controles interativos sumam, sombras sejam removidas e cartões não quebrem entre páginas (`break-inside: avoid`).

## JavaScript (`js/resume.js`)

- ES6+ nativo, sem transpilação. Alvo: navegadores evergreen.
- Aspas duplas. Indentação de 2 espaços. `const` por padrão, `let` só quando reatribuir.
- Estrutura do arquivo, nesta ordem: `resumeData` → renderização → interações.
- Renderização por template literal + `.map().join("")` + `innerHTML`. É seguro aqui porque o conteúdo é estático e autoral; **não** passar a receber texto de URL, formulário ou API por esse caminho.
- `document.querySelector` / `querySelectorAll`, nunca `getElementById`.
- Arrow functions; funções nomeadas apenas quando reutilizadas (ex.: `updateThemeLabel`).
- Estado de UI mora no DOM, não em variáveis: `aria-expanded`, `hidden`, `dataset.theme`, classe `.active`. Ler o estado de volta do atributo em vez de manter um espelho em JS.
- `IntersectionObserver` para animação de entrada e para o link ativo da navegação. O observer de reveal faz `unobserve` depois de disparar — manter esse comportamento.
- Sem tratamento de erro defensivo para elementos que sempre existem no `index.html`.

## Acessibilidade — inegociável

- Controles que expandem conteúdo precisam de `aria-expanded` + `aria-controls`, e o alvo alterna via atributo `hidden`.
- Rótulos de botão que mudam de função precisam de `aria-label` atualizado em JS (ver `updateThemeLabel`).
- Contraste mínimo AA nos dois temas.
- Nada de conteúdo acessível só por hover ou só por mouse.
- `prefers-reduced-motion` desliga transições e revela tudo imediatamente.

## Checklist antes de dar a tarefa por concluída

Mudanças de interface precisam ser abertas no navegador. Não reportar como pronto sem isso.

- [ ] Tema claro e tema escuro
- [ ] Prévia de impressão (Ctrl+P) — cabe em A4, sem conteúdo cortado
- [ ] Larguras 1440px, 980px e 375px
- [ ] Navegação só por teclado: skip link, foco visível, acordeões operáveis por Enter/Espaço
- [ ] Console do navegador sem erros
- [ ] Link ativo da sidebar acompanha o scroll

## Git

- Não commitar sem pedido explícito do autor.
- Mensagens de commit em português, no imperativo.
