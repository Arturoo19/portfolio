import type { Locale, SiteCopy, SocialLink } from "@/types/portfolio";

export const owner = {
  initials: "AA",
  name: "Artur",
  fullName: "Artur",
  surname: "Azizbekov",
  role: "Full-stack developer",
  email: "artur.azizbekov.dam@gmail.com",
  phone: "+34 602 415 691",
  telegram: "https://t.me/tonn_19",
  telegramUsername: "@tonn_19",
  cvHref: "/Artur AzizbekovCV.pdf",
};

export const locales: Locale[] = ["en", "es", "uk"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  uk: "UA",
};

export const socialLinks: SocialLink[] = [
  { label: "Telegram", href: owner.telegram, icon: "TG" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/artur-azizbekov",
    icon: "IN",
  },
  { label: "GitHub", href: "https://github.com/Arturoo19", icon: "GH" },
  { label: "Email", href: `mailto:${owner.email}`, icon: "ML" },
];

const sharedProjects = {
  rentauto: {
    slug: "rentauto",
    title: "RentAuto",
    year: "2026",
    category: "websites" as const,
    tags: [
      "Angular",
      "NestJS",
      "PostgreSQL",
      "JWT/RBAC",
      "Stripe",
      "n8n",
    ],
    preview: "website" as const,
    previewLabel: "Vehicle rental platform",
    href: "https://rent-auto-sepia.vercel.app",
  },
  chat: {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    year: "2026",
    category: "ai" as const,
    tags: ["Node.js", "Supabase", "Google Drive", "RAG"],
    preview: "chat" as const,
    previewLabel: "Restaurant AI agent",
  },
  ads: {
    slug: "meta-ads-analyzer-bot",
    title: "Meta Ads Analyzer Bot",
    year: "2026",
    category: "automation" as const,
    tags: ["Python", "Claude AI", "Telegram Bot API", "Notion"],
    preview: "workflow" as const,
    previewLabel: "AI ads audit bot",
    nodes: ["Metrics", "Claude", "Notion"],
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    navigation: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      discuss: "Discuss a project",
      hire: "Contact me",
      cv: "View CV",
      viewWork: "View work",
      viewProject: "View project",
      details: "Open project",
      scroll: "Scroll down",
      previewCase: "Case",
      previewMenu: "Menu",
      screenshots: "Screenshots",
      overview: "Overview",
      focus: "Technical focus",
      stack: "Stack",
      highlights: "What I built",
      openOriginal: "Open original site",
      closeCase: "Close case",
    },
    hero: {
      role: "Full-stack developer",
      status: "Ready for the next challenge",
      intro:
        "I create complete web products: clean interfaces, reliable APIs, databases, integrations, and automations. I can join a team or help turn an idea into a working product.",
      highlights: [
        "Frontend, backend, and database work connected in one clear flow",
        "Practical experience with production systems, AWS, Linux, Git, and debugging",
        "Automation and AI only where they make the product faster or more useful",
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects that show the stack",
      description:
        "Full-stack products first, with automation and AI projects as an extra advantage.",
      categories: [
        { id: "all", label: "All" },
        { id: "websites", label: "Full-stack & web" },
        { id: "ai", label: "AI systems" },
        { id: "automation", label: "Automations" },
      ],
      items: [
        {
          ...sharedProjects.rentauto,
          categoryLabel: "Full-stack rental platform",
          status: "Live",
          summary:
            "A scalable vehicle rental platform with availability validation, JWT authentication, RBAC, Stripe payments, admin metrics, n8n reports, and an AI booking assistant.",
          caseStudy: {
            type: "Full-stack rental platform",
            overview:
              "Course project: a full-stack vehicle rental platform built with a modern architecture focused on scalability, security, and user experience. The application combines vehicle browsing, reservations, online payments, protected admin workflows, automation, and AI support in one complete product.",
            focus:
              "End-to-end product architecture: Angular UI, NestJS API, PostgreSQL data model, TypeORM entities, JWT authentication, RBAC permissions, Stripe payments, admin metrics, n8n reporting, and AI assistant flows.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "Stripe", "n8n"],
            highlights: [
              "Complete reservation system with availability validation and protected user flows.",
              "Online payments with Stripe and JWT authentication with role-based access control.",
              "Admin panel with business metrics, automatic n8n reports, AI booking assistant, and private Telegram admin chat with real-time analysis.",
            ],
            screenshots: [
              {
                src: "/projects/rentauto-home.png",
                alt: "RentAuto home page",
              },
              {
                src: "/projects/rentauto-admin.png",
                alt: "RentAuto admin dashboard",
              },
            ],
          },
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "Restaurant AI agent",
          summary:
            "An AI assistant that answers customer questions, manages bookings, and works from an easy-to-update knowledge base.",
          caseStudy: {
            type: "AI customer support system",
            overview:
              "AI assistant concept for restaurant support, focused on answering customer questions from a maintained knowledge base and helping with booking-related intent.",
            focus:
              "Assistant architecture with a maintainable knowledge base, backend conversation flow, booking intent logic, and integration points for restaurant operations.",
            stack: ["Node.js", "Supabase", "Google Drive", "RAG", "API integrations"],
            highlights: [
              "Knowledge-base structure that non-technical users can update.",
              "Conversation flow for FAQs, availability, and booking intent.",
              "Backend-ready architecture for connecting restaurant data and AI responses.",
            ],
            screenshots: [],
          },
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "AI reporting bot",
          summary:
            "A bot that analyzes ad campaigns, leads, and partner data, then creates reports with practical recommendations.",
          caseStudy: {
            type: "Automation and AI reporting",
            overview:
              "Automation concept for campaign reporting: a Telegram-first bot that structures marketing data, requests AI analysis, and turns it into practical team recommendations.",
            focus:
              "Automation workflow covering bot commands, data handoff, AI analysis structure, and Notion-style output for repeatable campaign reviews.",
            stack: ["Python", "Claude AI", "Telegram Bot API", "Notion", "Automation"],
            highlights: [
              "Telegram-first workflow for quick reporting requests.",
              "AI-generated campaign observations with actionable next steps.",
              "Structured output designed for team review and follow-up.",
            ],
            screenshots: [],
          },
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Work-ready, not only project-ready",
      description:
        "My background combines full-stack development, production IT support, databases, cloud infrastructure, and automation.",
      items: [
        {
          company: "OPINATOR",
          role: "Full-Stack Developer | IT Support Technician",
          period: "2026 - Present",
          summary:
            "Daily work around production systems, infrastructure support, debugging, security tasks, and development assistance.",
          points: [
            "Managed and migrated AWS EC2 virtual machines, including instance configuration and production maintenance.",
            "Worked in Linux terminal environments with Git for version control and change management.",
            "Diagnosed configuration issues and technical incidents by identifying root causes and reducing operational impact.",
            "Supported cybersecurity tasks including log monitoring, access/IAM management, patches, and security updates.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Security"],
        },
        {
          company: "Alenta",
          role: "Database Developer and Digital Support Intern",
          period: "2026",
          summary:
            "Database maintenance and internal tooling for business process improvement.",
          points: [
            "Maintained corporate databases with Microsoft Access.",
            "Created queries, forms, and reports to optimize internal workflows.",
            "Structured business data to improve operational efficiency.",
          ],
          tags: ["Microsoft Access", "Databases", "Reports"],
        },
        {
          company: "Naturprint Artes Graficas",
          role: "Automation and Web Developer Intern",
          period: "2025",
          summary:
            "Web, database, and automation support for repetitive internal processes.",
          points: [
            "Created and managed MySQL tables and SQL queries.",
            "Automated internal processes with Power Automate.",
            "Configured WordPress websites and optimized repetitive data tasks.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Skills",
      title: "Full-stack capabilities",
      description:
        "The areas I can contribute to in a product team or on selected freelance projects.",
      items: [
        {
          id: "frontend",
          eyebrow: "01",
          title: "Frontend development",
          subtitle: "Angular, React, TypeScript",
          description:
            "I build responsive interfaces, application flows, admin panels, and product pages with attention to UX and maintainable components.",
          includes: [
            "Angular and TypeScript",
            "React and Next.js",
            "HTML, CSS, responsive UI",
            "Component-based architecture",
          ],
        },
        {
          id: "backend",
          eyebrow: "02",
          title: "Backend and APIs",
          subtitle: "NestJS, Node.js, Java, Python",
          description:
            "I work on REST APIs, authentication, role-based access, payment flows, data validation, and integrations.",
          includes: [
            "NestJS and Node.js",
            "Java and Python backends",
            "REST APIs",
            "JWT, RBAC, Stripe",
          ],
        },
        {
          id: "data-cloud",
          eyebrow: "03",
          title: "Data and cloud",
          subtitle: "PostgreSQL, MySQL, MongoDB, AWS",
          description:
            "I model relational data, write SQL, connect application data layers, and support deployed systems in cloud environments.",
          includes: [
            "PostgreSQL and TypeORM",
            "MySQL and MongoDB",
            "AWS EC2 basics",
            "Linux, logs, Git",
          ],
        },
        {
          id: "automation-ai",
          eyebrow: "04",
          title: "Automation and AI",
          subtitle: "n8n, Make, Power Automate, chatbots",
          description:
            "I connect tools and data into workflows that reduce manual work, generate reports, and support users with AI assistants.",
          includes: [
            "n8n and Make workflows",
            "Power Automate",
            "Telegram bots",
            "RAG and AI assistants",
          ],
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "A full-stack developer who adapts quickly",
      description:
        "I have software engineering training and practical experience across web development, backend systems, databases, automation, and AI integrations. I like building complete products, but I also understand the operational side: debugging, deployments, infrastructure, security updates, and working with existing systems.",
      stackLabel: "Stack",
      stack: [
        "Angular",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Java",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "AWS",
        "Git",
        "n8n",
        "Make",
        "Power Automate",
      ],
      cards: [
        {
          eyebrow: "Profile",
          title: "Full-stack product builder",
          description:
            "I can move from UI to API to database and keep the whole feature understandable.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Strength",
          title: "Production mindset",
          description:
            "I have hands-on experience with Linux, AWS, logs, IAM, incident diagnosis, and security updates.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Extra",
          title: "Automation and AI",
          description:
            "I use automation and AI as practical tools for reporting, support, internal workflows, and assistants.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Languages",
          title: "Multilingual communicator",
          description:
            "Ukrainian native, Spanish C1, Russian C2, and English B1. Comfortable in international teams.",
          tags: ["UA", "ES", "EN", "RU"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to full-stack opportunities",
      description:
        "I am open to full-stack developer roles, internships/junior-mid opportunities, and selected freelance projects where web, backend, databases, automation, or AI can create real value.",
      primaryContact: "Main contact",
      telegram: "Message on Telegram",
      email: "Send an email",
    },
    footer: "Full-stack developer portfolio.",
    accessibility: {
      skipToContent: "Skip to content",
      languageSwitcher: "Language switcher",
      home: "Back to top",
    },
  },
  es: {
    navigation: [
      { label: "Proyectos", href: "#projects" },
      { label: "Experiencia", href: "#experience" },
      { label: "Skills", href: "#services" },
      { label: "Sobre mi", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: {
      discuss: "Hablar del proyecto",
      hire: "Contactar conmigo",
      cv: "Ver CV",
      viewWork: "Ver trabajos",
      viewProject: "Ver proyecto",
      details: "Abrir proyecto",
      scroll: "Desplazate abajo",
      previewCase: "Caso",
      previewMenu: "Menu",
      screenshots: "Capturas",
      overview: "Resumen",
      focus: "Enfoque tecnico",
      stack: "Stack",
      highlights: "Que construí",
      openOriginal: "Abrir sitio original",
      closeCase: "Cerrar caso",
    },
    hero: {
      role: "Desarrollador full-stack",
      status: "Listo para el próximo reto",
      intro:
        "Creo productos web completos: interfaces claras, APIs fiables, bases de datos, integraciones y automatizaciones. Puedo sumarme a un equipo o ayudar a convertir una idea en un producto funcional.",
      highlights: [
        "Frontend, backend y base de datos conectados en un flujo claro",
        "Experiencia practica con sistemas en produccion, AWS, Linux, Git y debugging",
        "Automatizacion e IA solo cuando hacen el producto mas rapido o util",
      ],
    },
    projects: {
      eyebrow: "Trabajos seleccionados",
      title: "Proyectos que muestran el stack",
      description:
        "Primero productos full-stack, con automatizacion e IA como ventaja adicional.",
      categories: [
        { id: "all", label: "Todos" },
        { id: "websites", label: "Full-stack y web" },
        { id: "ai", label: "Sistemas IA" },
        { id: "automation", label: "Automatizaciones" },
      ],
      items: [
        {
          ...sharedProjects.rentauto,
          categoryLabel: "Plataforma full-stack",
          status: "Live",
          summary:
            "Plataforma escalable de alquiler de vehiculos con validacion de disponibilidad, JWT, RBAC, pagos Stripe, metricas admin, informes n8n y asistente IA.",
          caseStudy: {
            type: "Plataforma full-stack de alquiler",
            overview:
              "Proyecto de fin de curso: plataforma full-stack de alquiler de vehiculos con arquitectura moderna orientada a escalabilidad, seguridad y experiencia de usuario. La aplicacion combina catalogo de vehiculos, reservas, pagos online, flujos admin protegidos, automatizacion y soporte con IA en un producto completo.",
            focus:
              "Arquitectura end to end del producto: UI en Angular, API con NestJS, modelo PostgreSQL, entidades TypeORM, autenticacion JWT, permisos RBAC, pagos Stripe, metricas admin, informes n8n y flujos de asistente IA.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "Stripe", "n8n"],
            highlights: [
              "Sistema completo de reservas con validacion de disponibilidad y flujos de usuario protegidos.",
              "Pagos online con Stripe y autenticacion JWT con control de acceso por roles.",
              "Panel administrativo con metricas de negocio, informes automaticos via n8n, asistente IA y chat privado en Telegram con analisis en tiempo real para el administrador.",
            ],
            screenshots: [
              {
                src: "/projects/rentauto-home.png",
                alt: "Pagina principal de RentAuto",
              },
              {
                src: "/projects/rentauto-admin.png",
                alt: "Panel administrativo de RentAuto",
              },
            ],
          },
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "Agente IA para restaurante",
          summary:
            "Asistente IA que responde preguntas, gestiona reservas y trabaja desde una base de conocimiento facil de actualizar.",
          caseStudy: {
            type: "Sistema IA de atencion al cliente",
            overview:
              "Concepto de asistente IA para soporte de restaurante, centrado en responder desde una base de conocimiento mantenible y ayudar con intenciones de reserva.",
            focus:
              "Arquitectura de asistente con base de conocimiento mantenible, flujo backend de conversacion, logica de reserva e integraciones para operacion de restaurante.",
            stack: ["Node.js", "Supabase", "Google Drive", "RAG", "API integrations"],
            highlights: [
              "Base de conocimiento facil de actualizar por usuarios no tecnicos.",
              "Flujo conversacional para FAQs, disponibilidad e intencion de reserva.",
              "Arquitectura preparada para conectar datos del restaurante y respuestas IA.",
            ],
            screenshots: [],
          },
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "Bot de reporting IA",
          summary:
            "Bot que analiza campanas, leads y datos de socios, y crea informes con recomendaciones practicas.",
          caseStudy: {
            type: "Automatizacion y reporting IA",
            overview:
              "Concepto de automatizacion para reporting de campanas: un bot orientado a Telegram que estructura datos de marketing, solicita analisis IA y genera recomendaciones practicas.",
            focus:
              "Workflow de automatizacion con comandos del bot, entrega de datos, estructura de analisis IA y salida tipo Notion para revisiones repetibles.",
            stack: ["Python", "Claude AI", "Telegram Bot API", "Notion", "Automation"],
            highlights: [
              "Workflow en Telegram para pedir informes rapido.",
              "Observaciones generadas por IA con siguientes pasos accionables.",
              "Salida estructurada para revision y seguimiento del equipo.",
            ],
            screenshots: [],
          },
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Preparado para equipo, no solo para proyectos",
      description:
        "Mi perfil combina desarrollo full-stack, soporte IT en produccion, bases de datos, cloud y automatizacion.",
      items: [
        {
          company: "OPINATOR",
          role: "Full-Stack Developer | Tecnico de soporte IT",
          period: "2026 - actualidad",
          summary:
            "Trabajo diario con sistemas de produccion, soporte de infraestructura, debugging, seguridad y apoyo al desarrollo.",
          points: [
            "Gestion y migracion de maquinas virtuales AWS EC2, incluyendo configuracion y mantenimiento en produccion.",
            "Trabajo en entornos Linux mediante terminal con Git para control de versiones y cambios.",
            "Diagnostico de incidencias tecnicas y errores de configuracion identificando la causa raiz.",
            "Apoyo en ciberseguridad: monitorizacion de logs, IAM, accesos, parches y actualizaciones.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Security"],
        },
        {
          company: "Alenta",
          role: "Desarrollador de bases de datos y soporte digital",
          period: "2026",
          summary:
            "Mantenimiento de bases de datos y herramientas internas para optimizar procesos.",
          points: [
            "Mantenimiento de bases de datos corporativas con Microsoft Access.",
            "Creacion de consultas, formularios e informes para procesos internos.",
            "Organizacion de datos empresariales para mejorar la eficiencia operativa.",
          ],
          tags: ["Microsoft Access", "Databases", "Reports"],
        },
        {
          company: "Naturprint Artes Graficas",
          role: "Desarrollador de automatizacion y web",
          period: "2025",
          summary:
            "Soporte web, bases de datos y automatizacion de procesos internos repetitivos.",
          points: [
            "Creacion y gestion de tablas MySQL y consultas SQL.",
            "Automatizacion de procesos internos con Power Automate.",
            "Configuracion de sitios WordPress y optimizacion de tareas de datos.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Skills",
      title: "Capacidades full-stack",
      description:
        "Areas donde puedo aportar en un equipo de producto o en proyectos freelance seleccionados.",
      items: [
        {
          id: "frontend",
          eyebrow: "01",
          title: "Frontend",
          subtitle: "Angular, React, TypeScript",
          description:
            "Construyo interfaces responsive, flujos de aplicacion, paneles admin y paginas de producto con UX clara.",
          includes: [
            "Angular y TypeScript",
            "React y Next.js",
            "HTML, CSS, responsive UI",
            "Arquitectura por componentes",
          ],
        },
        {
          id: "backend",
          eyebrow: "02",
          title: "Backend y APIs",
          subtitle: "NestJS, Node.js, Java, Python",
          description:
            "Trabajo con APIs REST, autenticacion, roles, pagos, validacion de datos e integraciones.",
          includes: [
            "NestJS y Node.js",
            "Backends con Java y Python",
            "REST APIs",
            "JWT, RBAC, Stripe",
          ],
        },
        {
          id: "data-cloud",
          eyebrow: "03",
          title: "Datos y cloud",
          subtitle: "PostgreSQL, MySQL, MongoDB, AWS",
          description:
            "Modelo datos relacionales, escribo SQL, conecto capas de datos y doy soporte a sistemas desplegados.",
          includes: [
            "PostgreSQL y TypeORM",
            "MySQL y MongoDB",
            "Bases de AWS EC2",
            "Linux, logs, Git",
          ],
        },
        {
          id: "automation-ai",
          eyebrow: "04",
          title: "Automatizacion e IA",
          subtitle: "n8n, Make, Power Automate, chatbots",
          description:
            "Conecto herramientas y datos en workflows que reducen trabajo manual, generan informes y ayudan a usuarios.",
          includes: [
            "Workflows n8n y Make",
            "Power Automate",
            "Bots de Telegram",
            "RAG y asistentes IA",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Un full-stack que se adapta rapido",
      description:
        "Tengo formacion en ingenieria de software y experiencia practica en desarrollo web, backend, bases de datos, automatizacion e integraciones IA. Me gusta construir productos completos, pero tambien entiendo la parte operativa: debugging, despliegues, infraestructura, seguridad y sistemas existentes.",
      stackLabel: "Stack",
      stack: [
        "Angular",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Java",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "AWS",
        "Git",
        "n8n",
        "Make",
        "Power Automate",
      ],
      cards: [
        {
          eyebrow: "Perfil",
          title: "Constructor full-stack",
          description:
            "Puedo moverme de UI a API y base de datos manteniendo clara la feature completa.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Fortaleza",
          title: "Mentalidad de produccion",
          description:
            "Experiencia practica con Linux, AWS, logs, IAM, diagnostico de incidencias y actualizaciones.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Extra",
          title: "Automatizacion e IA",
          description:
            "Uso automatizacion e IA para reporting, soporte, workflows internos y asistentes.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Idiomas",
          title: "Comunicacion multilingue",
          description:
            "Ucraniano nativo, espanol C1, ruso C2 e ingles B1. Comodo en equipos internacionales.",
          tags: ["UA", "ES", "EN", "RU"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Abierto a oportunidades full-stack",
      description:
        "Estoy abierto a puestos full-stack, oportunidades junior-mid/practicas y proyectos freelance seleccionados donde web, backend, datos, automatizacion o IA aporten valor real.",
      primaryContact: "Contacto principal",
      telegram: "Escribir en Telegram",
      email: "Enviar email",
    },
    footer: "Portfolio de desarrollador full-stack.",
    accessibility: {
      skipToContent: "Saltar al contenido",
      languageSwitcher: "Selector de idioma",
      home: "Volver arriba",
    },
  },
  uk: {
    navigation: [
      { label: "Проєкти", href: "#projects" },
      { label: "Досвід", href: "#experience" },
      { label: "Навички", href: "#services" },
      { label: "Про мене", href: "#about" },
      { label: "Контакти", href: "#contact" },
    ],
    cta: {
      discuss: "Обговорити проєкт",
      hire: "Зв'язатися зі мною",
      cv: "Дивитись CV",
      viewWork: "Дивитись роботи",
      viewProject: "Дивитись проєкт",
      details: "Відкрити проєкт",
      scroll: "Гортайте вниз",
      previewCase: "Кейс",
      previewMenu: "Меню",
      screenshots: "Скріншоти",
      overview: "Опис",
      focus: "Технічний фокус",
      stack: "Стек",
      highlights: "Що я зробив",
      openOriginal: "Відкрити оригінальний сайт",
      closeCase: "Закрити кейс",
    },
    hero: {
      role: "Full-stack розробник",
      status: "Готовий до нового виклику",
      intro:
        "Створюю повноцінні web-продукти: зрозумілі інтерфейси, надійні API, бази даних, інтеграції та автоматизації. Можу приєднатися до команди або допомогти перетворити ідею на робочий продукт.",
      highlights: [
        "Frontend, backend і база даних, з'єднані в один зрозумілий flow",
        "Практичний досвід з production systems, AWS, Linux, Git і debugging",
        "Automation та AI тільки там, де вони роблять продукт швидшим або кориснішим",
      ],
    },
    projects: {
      eyebrow: "Вибрані роботи",
      title: "Проєкти, які показують стек",
      description:
        "Спочатку full-stack продукти, а автоматизації та AI як додаткова сильна сторона.",
      categories: [
        { id: "all", label: "Усі" },
        { id: "websites", label: "Full-stack і web" },
        { id: "ai", label: "AI-системи" },
        { id: "automation", label: "Автоматизації" },
      ],
      items: [
        {
          ...sharedProjects.rentauto,
          categoryLabel: "Full-stack платформа",
          status: "Live",
          summary:
            "Масштабована платформа оренди авто з перевіркою доступності, JWT, RBAC, оплатами Stripe, admin-метриками, n8n-звітами та AI-асистентом.",
          caseStudy: {
            type: "Full-stack платформа оренди",
            overview:
              "Курсовий full-stack проєкт: платформа оренди авто з сучасною архітектурою, орієнтованою на масштабованість, безпеку та user experience. Застосунок об'єднує каталог авто, бронювання, онлайн-оплати, захищені admin workflows, автоматизацію та AI-підтримку в один цілісний продукт.",
            focus:
              "End-to-end архітектура продукту: Angular UI, NestJS API, PostgreSQL data model, TypeORM entities, JWT authentication, RBAC permissions, Stripe payments, admin metrics, n8n reporting і AI assistant flows.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "Stripe", "n8n"],
            highlights: [
              "Повна система бронювання з перевіркою доступності та захищеними user flows.",
              "Онлайн-оплати через Stripe і JWT authentication з role-based access control.",
              "Admin panel з бізнес-метриками, автоматичними n8n-звітами, AI-асистентом і приватним Telegram-чатом для адміністратора з real-time analysis.",
            ],
            screenshots: [
              {
                src: "/projects/rentauto-home.png",
                alt: "Головна сторінка RentAuto",
              },
              {
                src: "/projects/rentauto-admin.png",
                alt: "Адмін-панель RentAuto",
              },
            ],
          },
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "AI-агент для ресторану",
          summary:
            "AI-асистент відповідає на питання, допомагає з бронюваннями та працює з базою знань, яку легко оновлювати.",
          caseStudy: {
            type: "AI customer support system",
            overview:
              "Концепт AI-асистента для підтримки ресторану: відповіді з підтримуваної бази знань і допомога з booking intent.",
            focus:
              "Архітектура асистента з підтримуваною knowledge base, backend conversation flow, booking intent logic та integration points для ресторанних операцій.",
            stack: ["Node.js", "Supabase", "Google Drive", "RAG", "API integrations"],
            highlights: [
              "Knowledge base, яку можуть оновлювати не технічні користувачі.",
              "Conversation flow для FAQs, availability і booking intent.",
              "Backend-ready architecture для підключення restaurant data та AI responses.",
            ],
            screenshots: [],
          },
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "AI-бот для звітів",
          summary:
            "Бот аналізує рекламу, ліди й партнерські дані, а потім створює звіти з практичними рекомендаціями.",
          caseStudy: {
            type: "Automation and AI reporting",
            overview:
              "Концепт автоматизації для campaign reporting: Telegram-first бот структурує marketing data, запускає AI-аналіз і перетворює його на практичні рекомендації для команди.",
            focus:
              "Automation workflow з bot commands, data handoff, AI analysis structure і Notion-style output для повторюваних campaign reviews.",
            stack: ["Python", "Claude AI", "Telegram Bot API", "Notion", "Automation"],
            highlights: [
              "Telegram-first workflow для швидких reporting requests.",
              "AI-generated campaign observations з actionable next steps.",
              "Структурований output для team review і follow-up.",
            ],
            screenshots: [],
          },
        },
      ],
    },
    experience: {
      eyebrow: "Досвід",
      title: "Готовий до команди, не тільки до проєктів",
      description:
        "Мій профіль поєднує full-stack розробку, production IT support, бази даних, cloud та автоматизацію.",
      items: [
        {
          company: "OPINATOR",
          role: "Full-Stack Developer | IT Support Technician",
          period: "2026 - дотепер",
          summary:
            "Щоденна робота з production-системами, підтримкою інфраструктури, debugging, security tasks і development support.",
          points: [
            "Керування та міграція AWS EC2 virtual machines, включно з конфігурацією та production maintenance.",
            "Робота в Linux terminal environments з Git для version control і change management.",
            "Діагностика configuration issues та technical incidents через пошук root cause.",
            "Підтримка cybersecurity tasks: log monitoring, IAM/access management, patches та security updates.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Security"],
        },
        {
          company: "Alenta",
          role: "Database Developer and Digital Support Intern",
          period: "2026",
          summary:
            "Підтримка баз даних і внутрішніх інструментів для оптимізації бізнес-процесів.",
          points: [
            "Підтримка corporate databases у Microsoft Access.",
            "Створення queries, forms і reports для внутрішніх процесів.",
            "Структурування business data для покращення operational efficiency.",
          ],
          tags: ["Microsoft Access", "Databases", "Reports"],
        },
        {
          company: "Naturprint Artes Graficas",
          role: "Automation and Web Developer Intern",
          period: "2025",
          summary:
            "Web, database і automation support для повторюваних внутрішніх процесів.",
          points: [
            "Створення та керування MySQL tables і SQL queries.",
            "Автоматизація internal processes з Power Automate.",
            "Налаштування WordPress sites і оптимізація repetitive data tasks.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Навички",
      title: "Full-stack capabilities",
      description:
        "Зони, де я можу бути корисним у продуктовій команді або на вибраних freelance-проєктах.",
      items: [
        {
          id: "frontend",
          eyebrow: "01",
          title: "Frontend development",
          subtitle: "Angular, React, TypeScript",
          description:
            "Будую адаптивні інтерфейси, application flows, admin panels і product pages з увагою до UX.",
          includes: [
            "Angular і TypeScript",
            "React і Next.js",
            "HTML, CSS, responsive UI",
            "Component-based architecture",
          ],
        },
        {
          id: "backend",
          eyebrow: "02",
          title: "Backend and APIs",
          subtitle: "NestJS, Node.js, Java, Python",
          description:
            "Працюю з REST APIs, authentication, roles, payments, data validation та integrations.",
          includes: [
            "NestJS і Node.js",
            "Java і Python backends",
            "REST APIs",
            "JWT, RBAC, Stripe",
          ],
        },
        {
          id: "data-cloud",
          eyebrow: "03",
          title: "Data and cloud",
          subtitle: "PostgreSQL, MySQL, MongoDB, AWS",
          description:
            "Моделюю relational data, пишу SQL, підключаю data layers і підтримую deployed systems.",
          includes: [
            "PostgreSQL і TypeORM",
            "MySQL і MongoDB",
            "AWS EC2 basics",
            "Linux, logs, Git",
          ],
        },
        {
          id: "automation-ai",
          eyebrow: "04",
          title: "Automation and AI",
          subtitle: "n8n, Make, Power Automate, chatbots",
          description:
            "З'єдную tools і data у workflows, які зменшують manual work, генерують reports і допомагають users.",
          includes: [
            "n8n і Make workflows",
            "Power Automate",
            "Telegram bots",
            "RAG і AI assistants",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Full-stack, який швидко адаптується",
      description:
        "Маю освіту в software engineering і практичний досвід у web development, backend systems, databases, automation та AI integrations. Мені подобається будувати complete products, але я також розумію operational side: debugging, deployments, infrastructure, security updates і роботу з existing systems.",
      stackLabel: "Стек",
      stack: [
        "Angular",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Java",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "AWS",
        "Git",
        "n8n",
        "Make",
        "Power Automate",
      ],
      cards: [
        {
          eyebrow: "Профіль",
          title: "Full-stack product builder",
          description:
            "Можу рухатись від UI до API та database, зберігаючи цілісне розуміння feature.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Сильна сторона",
          title: "Production mindset",
          description:
            "Практичний досвід з Linux, AWS, logs, IAM, incident diagnosis та security updates.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Додатково",
          title: "Automation and AI",
          description:
            "Використовую automation та AI для reporting, support, internal workflows і assistants.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Мови",
          title: "Multilingual communicator",
          description:
            "Українська native, іспанська C1, російська C2, англійська B1. Комфортно в міжнародних командах.",
          tags: ["UA", "ES", "EN", "RU"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Відкритий до full-stack можливостей",
      description:
        "Я відкритий до full-stack developer roles, junior-mid/internship opportunities і вибраних freelance-проєктів, де web, backend, data, automation або AI дають реальну користь.",
      primaryContact: "Основний контакт",
      telegram: "Написати в Telegram",
      email: "Написати на email",
    },
    footer: "Full-stack developer portfolio.",
    accessibility: {
      skipToContent: "Перейти до вмісту",
      languageSwitcher: "Перемикач мови",
      home: "На початок сторінки",
    },
  },
};

export const defaultLocale: Locale = "en";
