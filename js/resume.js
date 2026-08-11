const resumeData = {
  experiences: [
    {
      role: "Full Stack Engineer",
      company: "Publicis Groupe",
      period: "Experiência atual",
      summary: "Desenvolvimento de aplicações web completas em um ambiente de tecnologia e comunicação de escala global.",
      details: [
        "Atuação full stack conectando interfaces, regras de negócio, APIs e persistência de dados.",
        "Participação no ciclo completo de desenvolvimento, com atenção à qualidade e experiência do usuário."
      ]
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Qualicorp",
      period: "Experiência recente",
      summary: "Construção e evolução de soluções digitais em uma operação de grande porte.",
      details: ["Desenvolvimento de aplicações com visão de produto e integração entre front-end e back-end.", "Colaboração em ambiente multidisciplinar e foco em soluções usadas no contexto real do negócio."]
    },
    {
      role: "Líder de Desenvolvimento",
      company: "Codando Community",
      period: "Jan 2025 — Ago 2025",
      summary: "Liderança voluntária na criação de ferramentas para apoiar estudantes da Ânima Educação.",
      details: ["Desenvolvimento de site e chatbot voltados ao auxílio dos alunos.", "Coordenação técnica e colaboração com uma comunidade de estudantes desenvolvedores."]
    },
    {
      role: "Desenvolvedor de Software",
      company: "Codando Community",
      period: "Jan 2024 — Dez 2024",
      summary: "Desenvolvimento voluntário de ferramentas para melhorar a jornada acadêmica dos estudantes.",
      details: ["Construção colaborativa de soluções web orientadas a problemas reais da comunidade acadêmica.", "Participação da descoberta da necessidade até a entrega do software."]
    },
    {
      role: "Programador Júnior",
      company: "GBS",
      period: "A partir de Jan 2021",
      summary: "Desenvolvimento e evolução de soluções para um ecossistema ERP, CRM e BI.",
      details: ["Manutenção e melhoria contínua de aplicações usadas por clientes de diferentes portes.", "Criação de automações e análise de necessidades de negócio com foco no usuário."]
    }
  ],
  projects: [
    {
      number: "01",
      title: "Quanto Deu Aí",
      icon: "fas fa-shopping-basket",
      description: "Aplicativo colaborativo para acompanhar o valor das compras em tempo real e evitar surpresas no caixa, criado a partir de uma necessidade cotidiana.",
      impact: "Listas compartilhadas, entrada de itens por voz, sincronização simultânea e publicação para Android e iOS.",
      tags: ["Mobile", "Real time", "UX/UI", "Android", "iOS"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.quantodeuai", icon: "fab fa-google-play" },
        { label: "App Store", url: "https://lnkd.in/d3bmJuY3", icon: "fab fa-apple" }
      ]
    },
    {
      number: "02",
      title: "DoGym",
      icon: "fas fa-dumbbell",
      description: "Sistema desenvolvido para o segmento fitness, reunindo tecnologia e experiência do usuário em uma solução voltada à rotina de academias.",
      impact: "Projeto de produto que demonstra construção de interfaces e modelagem de fluxos para um domínio específico.",
      tags: ["Sistema web", "Fitness", "UX/UI", "Full stack"],
      links: [
        { label: "Acessar DoGym", url: "https://dogym-net.com.br/", icon: "fas fa-external-link-alt" }
      ]
    },
    {
      number: "03",
      title: "Ferramentas Codando",
      icon: "fas fa-graduation-cap",
      description: "Site e chatbot desenvolvidos em comunidade para orientar e auxiliar estudantes da Ânima Educação.",
      impact: "Projeto com impacto educacional, construção colaborativa e evolução de atuação técnica para liderança de desenvolvimento.",
      tags: ["Web", "Chatbot", "Liderança", "Educação"]
    },
    {
      number: "04",
      title: "Currículo interativo",
      icon: "fas fa-code",
      description: "Landing page responsiva construída para apresentar experiência e repertório técnico sem abrir mão da leitura por recrutadores e ATS.",
      impact: "Dados desacoplados da interface, acessibilidade WCAG 2.1, dark mode e impressão otimizada.",
      tags: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"]
    }
  ],
  skills: [
    { title: "Front-end", items: ["HTML5 semântico", "CSS3 / SCSS", "JavaScript (ES6+)", "Angular", "Responsive Design", "Acessibilidade"] },
    { title: "Back-end & dados", items: ["Node.js", "NestJS", "APIs", "TypeORM", "Prisma", "SQL e NoSQL"] },
    { title: "Produto & engenharia", items: ["Arquitetura mobile", "Sistemas distribuídos", "Sincronização em tempo real", "UX/UI", "Git", "Liderança técnica"] }
  ]
};

const experienceList = document.querySelector("#experienceList");
experienceList.innerHTML = resumeData.experiences.map((item, index) => `
  <article class="timeline-item">
    <button class="experience-toggle" type="button" aria-expanded="${index === 0}" aria-controls="experience-${index}">
      <span class="timeline-item__date">${item.period}</span>
      <span class="timeline-item__main"><span class="timeline-item__role">${item.role}</span><span class="timeline-item__company">${item.company}</span><span class="timeline-item__summary">${item.summary}</span></span>
      <span class="toggle-mark" aria-hidden="true"></span>
    </button>
    <div class="experience-details" id="experience-${index}" ${index === 0 ? "" : "hidden"}>
      <ul>${item.details.map(detail => `<li>${detail}</li>`).join("")}</ul>
    </div>
  </article>`).join("");

document.querySelector("#projectList").innerHTML = resumeData.projects.map(project => `
  <article class="project-card">
    <div class="project-card__top"><p class="project-card__number">${project.number} / projeto</p><span class="project-card__icon" aria-hidden="true"><i class="${project.icon}"></i></span></div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p class="project-card__impact"><strong>Impacto</strong>${project.impact}</p>
    <ul class="tag-list" aria-label="Tecnologias">${project.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
    ${project.links ? `<div class="project-links">${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer"><i class="${link.icon}" aria-hidden="true"></i>${link.label}<span aria-hidden="true">↗</span></a>`).join("")}</div>` : ""}
  </article>`).join("");

document.querySelector("#skillList").innerHTML = resumeData.skills.map(group => `
  <article class="skill-group"><h3>${group.title}</h3><ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul></article>`).join("");

document.querySelectorAll(".experience-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    details.hidden = expanded;
  });
});

const themeToggle = document.querySelector("#themeToggle");
const updateThemeLabel = () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
};
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeLabel();
});
updateThemeLabel();

document.querySelector("#printButton").addEventListener("click", () => window.print());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(section => observer.observe(section));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -60%" });
sections.forEach(section => navObserver.observe(section));
