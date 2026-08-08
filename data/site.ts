import type { Locale, SiteCopy, SocialLink } from "@/types/portfolio";

export const owner = {
  initials: "AA",
  name: "Artur",
  fullName: "Artur",
  surname: "Azizbekov",
  role: "Full-stack developer",
  email: "artur.azizbekov.dam@gmail.com",
  telegram: "https://t.me/tonn_19",
};

export const locales: Locale[] = ["en", "es", "uk"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  uk: "UA",
};

export const socialLinks: SocialLink[] = [
  { label: "Telegram", href: owner.telegram, icon: "TG" },
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
  { label: "GitHub", href: "https://github.com/Arturoo19", icon: "GH" },
  { label: "Email", href: `mailto:${owner.email}`, icon: "ML" },
];

const sharedProjects = {
  barrios: {
    slug: "barrios-barber",
    title: "Barrios Barber",
    year: "2026",
    category: "websites" as const,
    tags: ["React", "Tailwind", "Mobile-first"],
    preview: "website" as const,
    previewLabel: "Mas que un corte",
  },
  icafe: {
    slug: "icafe-sotogrande",
    title: "iCafe Sotogrande",
    year: "2026",
    category: "websites" as const,
    tags: ["React", "Framer Motion", "Glassmorphism"],
    preview: "website" as const,
    previewLabel: "A place to feel at home",
  },
  chat: {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    year: "2026",
    category: "ai" as const,
    tags: ["Node.js", "Supabase", "Google Drive", "+1"],
    preview: "chat" as const,
  },
  research: {
    slug: "university-research-agent",
    title: "University Research Agent",
    year: "2026",
    category: "automation" as const,
    tags: ["n8n", "Telegram Bot API", "Perplexity AI", "+1"],
    preview: "workflow" as const,
    nodes: ["Profile", "AI", "Sheets"],
  },
  knowledge: {
    slug: "personal-knowledge-base",
    title: "Personal Knowledge Base",
    year: "2026",
    category: "ai" as const,
    tags: ["n8n", "Supabase", "pgvector"],
    preview: "workflow" as const,
    nodes: ["Telegram", "Embed", "pgvector"],
  },
  ads: {
    slug: "meta-ads-analyzer-bot",
    title: "Meta Ads Analyzer Bot",
    year: "2026",
    category: "automation" as const,
    tags: ["Python", "Claude AI", "Telegram Bot API", "+1"],
    preview: "workflow" as const,
    nodes: ["Metrics", "Claude", "Notion"],
  },
  assistant: {
    slug: "personal-ai-assistant",
    title: "Personal AI Assistant",
    year: "2026",
    category: "automation" as const,
    tags: ["OpenAI", "Telegram", "MCP Tools"],
    preview: "chat" as const,
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    navigation: [
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      discuss: "Discuss a project",
      viewWork: "View work",
      viewProject: "View project",
      details: "Details",
      scroll: "Scroll down",
      previewCase: "Case",
      previewMenu: "Menu",
    },
    hero: {
      role: "Full-stack developer",
      status: "Open to new projects",
      intro:
        "Websites and AI systems that save time, automate routine processes, and help businesses grow.",
      highlights: [
        "Websites that turn visitors into clients",
        "AI systems trained on your business",
        "Automations and bots that save hours every week",
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      description:
        "A collection of web development, business automation, AI systems, and agent projects.",
      categories: [
        { id: "all", label: "All" },
        { id: "websites", label: "Websites" },
        { id: "ai", label: "AI systems" },
        { id: "automation", label: "Automations and bots" },
      ],
      items: [
        {
          ...sharedProjects.barrios,
          categoryLabel: "Barbershop website",
          status: "Online",
          summary:
            "A premium website for a barbershop, built to present services, simplify booking, and feel comfortable on mobile.",
        },
        {
          ...sharedProjects.icafe,
          categoryLabel: "Marina cafe website",
          status: "Online",
          summary:
            "A modern animated cafe website that communicates the brand atmosphere and helps guests explore the place, menu, and events.",
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "Restaurant AI agent",
          previewLabel: "Restaurant AI agent",
          summary:
            "An AI assistant that answers customer questions, manages bookings, and provides 24/7 support from an easy-to-update knowledge base.",
        },
        {
          ...sharedProjects.research,
          categoryLabel: "Telegram AI agent",
          previewLabel: "Telegram AI agent",
          summary:
            "An AI agent that analyzes student profiles and automatically recommends the most relevant universities.",
        },
        {
          ...sharedProjects.knowledge,
          categoryLabel: "Semantic knowledge base",
          previewLabel: "Semantic knowledge base",
          summary:
            "A searchable second brain for messages, videos, links, and materials using a RAG-style knowledge base.",
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "AI ads audit bot",
          previewLabel: "AI ads audit bot",
          summary:
            "A bot that analyzes ad campaigns, leads, and partner data, then creates reports and practical recommendations.",
        },
        {
          ...sharedProjects.assistant,
          categoryLabel: "Telegram AI assistant",
          previewLabel: "Telegram AI assistant",
          summary:
            "A personal AI assistant that remembers context, automates tasks, and helps throughout the day.",
        },
      ],
    },
    services: {
      eyebrow: "What I do",
      title: "Services",
      description: "Four ways I help businesses save time and grow.",
      items: [
        {
          id: "web",
          eyebrow: "01",
          title: "Custom websites",
          subtitle: "Modern and responsive",
          description:
            "A custom website built around your business goals, not a generic template.",
          includes: [
            "Design and development for your business",
            "Responsive layouts for every device",
            "Animations and micro-interactions",
            "Multilingual setup when needed",
            "Basic SEO optimization",
            "Performance optimization",
            "Post-launch support",
          ],
        },
        {
          id: "automation",
          eyebrow: "02",
          title: "Automation",
          subtitle: "Business processes on autopilot",
          description:
            "I connect tools, data, and notifications into one clear workflow.",
          includes: [
            "Manual process audit",
            "CRM, spreadsheet, and messenger integrations",
            "Automatic reports",
            "Workflow testing",
          ],
        },
        {
          id: "ai",
          eyebrow: "03",
          title: "AI solutions",
          subtitle: "Assistants, chatbots, and agents",
          description:
            "AI tools that work with your data and help your team answer customers faster.",
          includes: [
            "AI chatbots",
            "RAG knowledge bases",
            "Google Drive or Notion connections",
            "Prompting and answer testing",
          ],
        },
        {
          id: "telegram",
          eyebrow: "04",
          title: "Telegram bots",
          subtitle: "Bots that handle routine work",
          description:
            "Bots for requests, consultations, notifications, internal processes, and support.",
          includes: [
            "Conversation scenarios",
            "Admin panel or data table",
            "AI integrations",
            "Post-launch support",
          ],
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "A developer who builds around the task",
      description:
        "This section is ready for your story, stack, approach, and strengths. We can replace it with your real background later.",
      stackLabel: "Stack",
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "n8n",
        "Claude AI",
        "Python",
      ],
      cards: [
        {
          eyebrow: "Service",
          title: "Websites and web apps",
          description: "Custom solutions for your business goals.",
          tags: ["React", "Node.js"],
          href: "#services",
        },
        {
          eyebrow: "Service",
          title: "AI and automation",
          description: "AI automation that works 24/7.",
          tags: ["n8n", "Claude", "Telegram"],
          href: "#services",
        },
        {
          eyebrow: "Approach",
          title: "Clear process",
          description:
            "I analyze the business, suggest practical solutions, and launch a tested system with support.",
          tags: ["Audit", "Development", "Testing", "Launch"],
          href: "#contact",
        },
        {
          eyebrow: "Approach",
          title: "Fast communication",
          description: "Direct contact and clear stages from idea to launch.",
          tags: ["Fast", "Clear"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss your project",
      description:
        "Write briefly what you need: a website, AI assistant, automation, or bot. Then we can define the task, budget, and timeline.",
      primaryContact: "Main contact",
      telegram: "Message on Telegram",
      email: "Send an email",
    },
    footer: "Portfolio structure for a custom developer site.",
    accessibility: {
      skipToContent: "Skip to content",
      languageSwitcher: "Language switcher",
      home: "Back to top",
    },
  },
  es: {
    navigation: [
      { label: "Proyectos", href: "#projects" },
      { label: "Servicios", href: "#services" },
      { label: "Sobre mi", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: {
      discuss: "Hablar del proyecto",
      viewWork: "Ver trabajos",
      viewProject: "Ver proyecto",
      details: "Detalles",
      scroll: "Desplazate abajo",
      previewCase: "Caso",
      previewMenu: "Menu",
    },
    hero: {
      role: "Desarrollador full-stack",
      status: "Abierto a nuevos proyectos",
      intro:
        "Sitios web y sistemas de IA que ahorran tiempo, automatizan procesos repetitivos y ayudan a crecer a los negocios.",
      highlights: [
        "Sitios web que convierten visitantes en clientes",
        "Sistemas de IA entrenados para tu negocio",
        "Automatizaciones y bots que ahorran horas cada semana",
      ],
    },
    projects: {
      eyebrow: "Trabajos seleccionados",
      title: "Proyectos",
      description:
        "Una coleccion de proyectos de desarrollo web, automatizacion de negocios, sistemas de IA y agentes.",
      categories: [
        { id: "all", label: "Todos" },
        { id: "websites", label: "Sitios web" },
        { id: "ai", label: "Sistemas de IA" },
        { id: "automation", label: "Automatizaciones y bots" },
      ],
      items: [
        {
          ...sharedProjects.barrios,
          categoryLabel: "Sitio para barberia",
          status: "Online",
          summary:
            "Un sitio premium para una barberia, creado para presentar servicios, facilitar reservas y funcionar perfecto en movil.",
        },
        {
          ...sharedProjects.icafe,
          categoryLabel: "Sitio de cafe en la marina",
          status: "Online",
          summary:
            "Un sitio moderno y animado para un cafe, que transmite la atmosfera de la marca y ayuda a explorar el lugar, el menu y los eventos.",
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "Agente de IA para restaurante",
          previewLabel: "Agente de IA para restaurante",
          summary:
            "Un asistente de IA que responde preguntas de clientes, gestiona reservas y ofrece soporte 24/7 desde una base de conocimiento facil de actualizar.",
        },
        {
          ...sharedProjects.research,
          categoryLabel: "Agente de IA en Telegram",
          previewLabel: "Agente de IA en Telegram",
          summary:
            "Un agente de IA que analiza perfiles de estudiantes y recomienda automaticamente las universidades mas relevantes.",
        },
        {
          ...sharedProjects.knowledge,
          categoryLabel: "Base de conocimiento semantica",
          previewLabel: "Base de conocimiento semantica",
          summary:
            "Un segundo cerebro con busqueda para mensajes, videos, enlaces y materiales usando una base de conocimiento tipo RAG.",
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "Bot de auditoria de anuncios",
          previewLabel: "Bot de auditoria de anuncios",
          summary:
            "Un bot que analiza campanas publicitarias, leads y datos de socios, y crea informes con recomendaciones practicas.",
        },
        {
          ...sharedProjects.assistant,
          categoryLabel: "Asistente de IA en Telegram",
          previewLabel: "Asistente de IA en Telegram",
          summary:
            "Un asistente personal de IA que recuerda el contexto, automatiza tareas y ayuda durante el dia.",
        },
      ],
    },
    services: {
      eyebrow: "Que hago",
      title: "Servicios",
      description:
        "Cuatro formas en las que ayudo a negocios a ahorrar tiempo y crecer.",
      items: [
        {
          id: "web",
          eyebrow: "01",
          title: "Sitios web a medida",
          subtitle: "Modernos y adaptables",
          description:
            "Un sitio web creado alrededor de los objetivos de tu negocio, no una plantilla generica.",
          includes: [
            "Diseno y desarrollo para tu negocio",
            "Diseno responsive para todos los dispositivos",
            "Animaciones y microinteracciones",
            "Configuracion multilingue si hace falta",
            "SEO basico",
            "Optimizacion de rendimiento",
            "Soporte despues del lanzamiento",
          ],
        },
        {
          id: "automation",
          eyebrow: "02",
          title: "Automatizacion",
          subtitle: "Procesos de negocio en piloto automatico",
          description:
            "Conecto herramientas, datos y notificaciones en un flujo de trabajo claro.",
          includes: [
            "Auditoria de procesos manuales",
            "Integraciones con CRM, hojas de calculo y mensajeria",
            "Informes automaticos",
            "Pruebas de los flujos",
          ],
        },
        {
          id: "ai",
          eyebrow: "03",
          title: "Soluciones de IA",
          subtitle: "Asistentes, chatbots y agentes",
          description:
            "Herramientas de IA que trabajan con tus datos y ayudan a tu equipo a responder mas rapido.",
          includes: [
            "Chatbots con IA",
            "Bases de conocimiento RAG",
            "Conexiones con Google Drive o Notion",
            "Prompts y pruebas de respuestas",
          ],
        },
        {
          id: "telegram",
          eyebrow: "04",
          title: "Bots de Telegram",
          subtitle: "Bots que se encargan de la rutina",
          description:
            "Bots para solicitudes, consultas, notificaciones, procesos internos y soporte.",
          includes: [
            "Escenarios de conversacion",
            "Panel de administracion o tabla de datos",
            "Integraciones con IA",
            "Soporte despues del lanzamiento",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Un desarrollador que construye segun la tarea",
      description:
        "Esta seccion esta preparada para tu historia, stack, enfoque y puntos fuertes. Luego la reemplazamos con tu informacion real.",
      stackLabel: "Stack",
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "n8n",
        "Claude AI",
        "Python",
      ],
      cards: [
        {
          eyebrow: "Servicio",
          title: "Sitios y apps web",
          description: "Soluciones a medida para los objetivos de tu negocio.",
          tags: ["React", "Node.js"],
          href: "#services",
        },
        {
          eyebrow: "Servicio",
          title: "IA y automatizacion",
          description: "Automatizacion con IA que trabaja 24/7.",
          tags: ["n8n", "Claude", "Telegram"],
          href: "#services",
        },
        {
          eyebrow: "Enfoque",
          title: "Proceso claro",
          description:
            "Analizo el negocio, propongo soluciones practicas y lanzo un sistema probado con soporte.",
          tags: ["Auditoria", "Desarrollo", "Pruebas", "Lanzamiento"],
          href: "#contact",
        },
        {
          eyebrow: "Enfoque",
          title: "Comunicacion rapida",
          description:
            "Contacto directo y etapas claras desde la idea hasta el lanzamiento.",
          tags: ["Rapido", "Claro"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu proyecto",
      description:
        "Escribe brevemente que necesitas: un sitio web, asistente de IA, automatizacion o bot. Despues definimos tarea, presupuesto y plazo.",
      primaryContact: "Contacto principal",
      telegram: "Escribir en Telegram",
      email: "Enviar email",
    },
    footer:
      "Estructura de portfolio para un sitio personalizado de desarrollador.",
    accessibility: {
      skipToContent: "Saltar al contenido",
      languageSwitcher: "Selector de idioma",
      home: "Volver arriba",
    },
  },
  uk: {
    navigation: [
      { label: "Проєкти", href: "#projects" },
      { label: "Послуги", href: "#services" },
      { label: "Про мене", href: "#about" },
      { label: "Контакти", href: "#contact" },
    ],
    cta: {
      discuss: "Обговорити проєкт",
      viewWork: "Дивитись роботи",
      viewProject: "Дивитись проєкт",
      details: "Деталі",
      scroll: "Гортайте вниз",
      previewCase: "Кейс",
      previewMenu: "Меню",
    },
    hero: {
      role: "Full-stack розробник",
      status: "Відкритий до нових проєктів",
      intro:
        "Вебсайти та AI-системи, що заощаджують ваш час, автоматизують рутинні процеси та допомагають бізнесу зростати.",
      highlights: [
        "Сайти, які перетворюють відвідувачів на клієнтів",
        "AI-системи, навчені на вашому бізнесі",
        "Автоматизації та боти, що економлять години щотижня",
      ],
    },
    projects: {
      eyebrow: "Вибрані роботи",
      title: "Проєкти",
      description:
        "Добірка проєктів у сфері веб-розробки, автоматизацій бізнесу, AI-систем та агентів.",
      categories: [
        { id: "all", label: "Усі" },
        { id: "websites", label: "Сайти" },
        { id: "ai", label: "AI-системи" },
        { id: "automation", label: "Автоматизації та боти" },
      ],
      items: [
        {
          ...sharedProjects.barrios,
          categoryLabel: "Сайт барбершопу",
          status: "Онлайн",
          summary:
            "Преміальний сайт для барбершопу, створений для презентації послуг, зручного бронювання та комфортного мобільного користування.",
        },
        {
          ...sharedProjects.icafe,
          categoryLabel: "Сайт кав'ярні в марині",
          status: "Онлайн",
          summary:
            "Сучасний анімований сайт кафе, що передає атмосферу бренду та допомагає гостям ознайомитися із закладом, меню та подіями.",
        },
        {
          ...sharedProjects.chat,
          categoryLabel: "AI-агент для ресторану",
          previewLabel: "AI-агент для ресторану",
          summary:
            "AI-асистент, який відповідає на запитання клієнтів, керує бронюваннями та забезпечує підтримку 24/7.",
        },
        {
          ...sharedProjects.research,
          categoryLabel: "Telegram AI-агент",
          previewLabel: "Telegram AI-агент",
          summary:
            "AI-агент аналізує профілі абітурієнтів та автоматично рекомендує найбільш відповідні університети.",
        },
        {
          ...sharedProjects.knowledge,
          categoryLabel: "База знань із семантичним пошуком",
          previewLabel: "База знань із семантичним пошуком",
          summary:
            "Другий мозок для повідомлень, відео, посилань і матеріалів з пошуком по базі знань у RAG-форматі.",
        },
        {
          ...sharedProjects.ads,
          categoryLabel: "AI-бот для аудиту реклами",
          previewLabel: "AI-бот для аудиту реклами",
          summary:
            "Бот аналізує рекламні кампанії, ліди та партнерські дані, а також автоматично створює звіти й рекомендації.",
        },
        {
          ...sharedProjects.assistant,
          categoryLabel: "Telegram AI-асистент",
          previewLabel: "Telegram AI-асистент",
          summary:
            "Персональний AI-асистент, який запам'ятовує контекст, автоматизує завдання та допомагає протягом дня.",
        },
      ],
    },
    services: {
      eyebrow: "Що я роблю",
      title: "Послуги",
      description:
        "Чотири способи, як я допомагаю бізнесу заощаджувати час і зростати.",
      items: [
        {
          id: "web",
          eyebrow: "01",
          title: "Кастомні сайти",
          subtitle: "Сучасні та адаптивні",
          description:
            "Індивідуальний сайт, створений відповідно до цілей вашого бізнесу, а не шаблонна сторінка.",
          includes: [
            "Дизайн і верстка під ваш бізнес",
            "Адаптивність для всіх пристроїв",
            "Анімації та мікровзаємодії",
            "Багатомовність за потреби",
            "Базова SEO-оптимізація",
            "Оптимізація продуктивності",
            "Підтримка після запуску",
          ],
        },
        {
          id: "automation",
          eyebrow: "02",
          title: "Автоматизація",
          subtitle: "Бізнес-процеси на автопілоті",
          description:
            "Зв'язую інструменти, дані та сповіщення в один зрозумілий робочий процес.",
          includes: [
            "Аудит ручних процесів",
            "Інтеграції CRM, таблиць і месенджерів",
            "Автоматичні звіти",
            "Тестування сценаріїв",
          ],
        },
        {
          id: "ai",
          eyebrow: "03",
          title: "AI-рішення",
          subtitle: "Асистенти, чатботи та агенти",
          description:
            "AI-інструменти, які працюють з вашими даними та допомагають команді швидше відповідати клієнтам.",
          includes: [
            "AI-чатботи",
            "RAG-бази знань",
            "Підключення до Google Drive або Notion",
            "Промптинг і тестування відповідей",
          ],
        },
        {
          id: "telegram",
          eyebrow: "04",
          title: "Telegram-боти",
          subtitle: "Боти, які беруть рутину на себе",
          description:
            "Боти для заявок, консультацій, повідомлень, внутрішніх процесів і підтримки.",
          includes: [
            "Сценарії діалогів",
            "Панель або таблиця для керування даними",
            "Інтеграції з AI",
            "Підтримка після запуску",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Розробник, який будує під задачу",
      description:
        "Цей блок підготовлений як основа для твоєї історії, стеку, підходу та сильних сторін. Потім замінимо його на реальну інформацію.",
      stackLabel: "Стек",
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "n8n",
        "Claude AI",
        "Python",
      ],
      cards: [
        {
          eyebrow: "Послуга",
          title: "Сайти та веб-застосунки",
          description: "Індивідуальні рішення для цілей вашого бізнесу.",
          tags: ["React", "Node.js"],
          href: "#services",
        },
        {
          eyebrow: "Послуга",
          title: "AI та автоматизація",
          description: "AI-автоматизація, що працює 24/7.",
          tags: ["n8n", "Claude", "Telegram"],
          href: "#services",
        },
        {
          eyebrow: "Підхід",
          title: "Зрозумілий процес",
          description:
            "Аналізую бізнес, пропоную вигідні рішення та запускаю готову систему з підтримкою.",
          tags: ["Аудит", "Розробка", "Тестування", "Запуск"],
          href: "#contact",
        },
        {
          eyebrow: "Підхід",
          title: "Швидка комунікація",
          description: "Прямий контакт і чіткі етапи від ідеї до запуску.",
          tags: ["Швидко", "Без затримок"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Обговоримо ваш проєкт",
      description:
        "Напишіть коротко, що потрібно створити: сайт, AI-асистента, автоматизацію або бот. Далі можна деталізувати задачу, бюджет і дедлайн.",
      primaryContact: "Основний контакт",
      telegram: "Написати в Telegram",
      email: "Написати на email",
    },
    footer: "Структура портфоліо для кастомного сайту розробника.",
    accessibility: {
      skipToContent: "Перейти до вмісту",
      languageSwitcher: "Перемикач мови",
      home: "На початок сторінки",
    },
  },
};

export const defaultLocale: Locale = "en";
