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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/artur-azizbekov-342134399/",
    icon: "IN",
  },
  { label: "GitHub", href: "https://github.com/Arturoo19", icon: "GH" },
  { label: "Email", href: `mailto:${owner.email}`, icon: "ML" },
  { label: "Telegram", href: owner.telegram, icon: "TG" },
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
  girex: {
    slug: "girex-support-agent",
    title: "Girex Support Agent",
    year: "2026",
    category: "ai" as const,
    tags: ["n8n", "Telegram Bot API", "AI Agent", "PostgreSQL", "Ticketing"],
    preview: "workflow" as const,
    previewLabel: "Telegram support agent",
    nodes: ["Telegram", "AI", "Support"],
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
      highlights: "Key features",
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
            "A digital vehicle rental platform with catalog filters, availability checks, bookings, Stripe payments, admin tools, analytics, and AI/n8n automations.",
          caseStudy: {
            type: "Full-stack rental platform",
            overview:
              "RentAuto is an intelligent full-stack web platform for managing vehicle rental online. It centralizes the customer journey from browsing and filtering cars to checking availability, calculating the final rental price, creating reservations, paying online, and reviewing personal booking history. The product also includes a protected admin area for managing the fleet, reviewing reservations, and analyzing business activity.",
            focus:
              "Layered architecture with Angular for the user interface, NestJS for the REST API and business logic, PostgreSQL with TypeORM for users, cars and rentals, JWT and bcrypt for authentication, guards and role-based access for protected routes, Stripe for payments, Docker-ready deployment, and n8n/AI automations connected to Telegram, email, Stripe and the database.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "bcrypt", "Stripe", "n8n", "AI", "Docker"],
            highlights: [
              "Customer flow with registration, login, vehicle catalog, filters by dates, city, category and price, reservation history, availability validation and automatic price calculation.",
              "Admin dashboard with fleet management, protected administrative actions, reservation control, income metrics, new users, active cars, cancellations and most profitable vehicles.",
              "Automation layer with web AI assistant, daily and weekly Telegram reports, admin Telegram bot for quick statistics, data-based recommendations, and recovery emails for unfinished payments.",
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
          ...sharedProjects.girex,
          categoryLabel: "AI support automation",
          status: "Client request",
          summary:
            "Telegram AI support bot for Girex that classifies requests, answers from a knowledge base, escalates urgent cases, alerts the admin team, and creates tickets.",
          caseStudy: {
            type: "Telegram AI support and ticketing",
            overview:
              "Girex Support Agent is an AI support solution developed for Girex as a client request focused on automating the first line of support in Telegram. The system classifies requests, answers from a knowledge base, and creates structured tickets when a case needs follow-up. For urgent, financial, compliance, or security issues, the bot notifies the team in a private admin group and escalates the conversation to human support.",
            focus:
              "n8n workflow connecting Telegram Bot API, an AI agent, knowledge-base logic, PostgreSQL conversation memory, ticket creation, human escalation, admin group notifications, and safety rules so the bot avoids risky financial or legal promises and hands off doubtful cases to support.",
            stack: ["n8n", "Telegram Bot API", "AI Agent", "PostgreSQL", "Google Sheets", "Ticketing", "Escalation"],
            highlights: [
              "Request triage for registration, KYC, P2P deals, escrow, deposits/withdrawals, errors, merchants, security, compliance and general questions.",
              "Ticket flow that stores user ID, email, deal number, screenshots, message description, category, priority and conversation history.",
              "Human-in-the-loop escalation with admin Telegram alerts for urgent, financial, compliance, security or unclear cases.",
            ],
            screenshots: [
              {
                src: "/projects/girex-workflow.png",
                alt: "Girex n8n workflow",
              },
              {
                src: "/projects/girex-admin-alert.png",
                alt: "Girex admin Telegram alert",
              },
              {
                src: "/projects/girex-bot-chat.png",
                alt: "Girex support bot conversation",
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
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "From code to production: experience that solves problems",
      description:
        "I connect development, data, automation, and production systems: building useful tools, fixing real incidents, and keeping technical work moving.",
      items: [
        {
          company: "OPINATOR",
          role: "IT Support Technician",
          period: "2026 - Present",
          summary:
            "Hands-on production support across AWS, Linux, Git, security tasks, and developer tooling.",
          points: [
            "Managed and migrated AWS EC2 virtual machines, including instance configuration and infrastructure maintenance in production.",
            "Worked daily in Linux terminal environments, using Git for version control and change management.",
            "Diagnosed and fixed configuration errors and technical incidents by identifying root causes and reducing operational impact.",
            "Contributed to cybersecurity tasks: log and incident monitoring, access and IAM management, patches, and security updates.",
            "Used Claude Code in the terminal to speed up development and technical support tasks.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Claude Code"],
        },
        {
          company: "Alenta",
          role: "Database Developer and Digital Support Intern",
          period: "2026",
          summary:
            "Database and internal process support focused on making business information easier to manage.",
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
            "Web, database, and automation work for internal processes where repetitive tasks could be simplified.",
          points: [
            "Created and managed MySQL tables and SQL queries.",
            "Automated internal processes with Power Automate.",
            "Created and configured WordPress websites.",
            "Optimized repetitive tasks related to data processing.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Skills",
      title: "Full-stack capabilities",
      description:
        "The areas where I can contribute to product teams, companies, and selected technical projects.",
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
      title: "I connect product, code, and operations",
      description:
        "I work across web development, backend, databases, automation, cloud, and AI integrations. My value is not only writing code, but understanding the whole technical flow: from a user-facing feature to the systems, data, and infrastructure behind it.",
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
          title: "End-to-end thinking",
          description:
            "I can move from interface to API, database, and deployment without losing the goal of the feature.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Strength",
          title: "Real systems experience",
          description:
            "Hands-on work with Linux, AWS, logs, IAM, incident diagnosis, updates, and existing production environments.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Extra",
          title: "Automation where it pays off",
          description:
            "I use automation and AI for reporting, support, internal workflows, and assistants when they save real time.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Way of working",
          title: "Clear technical communication",
          description:
            "I explain decisions, ask the right questions, and keep technical work understandable for teams and business owners.",
          tags: ["Clarity", "Teamwork", "Ownership"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Available for roles and technical projects",
      description:
        "Available for roles, collaborations, and selected business projects across web development, backend, data, automation, cloud, and AI.",
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
      highlights: "Funcionalidades clave",
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
            "Plataforma digital de alquiler de vehiculos con filtros, disponibilidad, reservas, pagos Stripe, administracion, estadisticas y automatizaciones IA/n8n.",
          caseStudy: {
            type: "Plataforma full-stack de alquiler",
            overview:
              "RentAuto es una plataforma web inteligente full-stack para gestionar el alquiler de vehiculos de forma digital. Centraliza el recorrido del cliente: consultar y filtrar coches, comprobar disponibilidad, calcular el precio final, crear reservas, avanzar en el pago online y revisar el historial personal. Tambien incluye una zona de administracion protegida para gestionar la flota, revisar reservas y analizar la actividad del negocio.",
            focus:
              "Arquitectura por capas con Angular para la interfaz, NestJS para la API REST y la logica de negocio, PostgreSQL con TypeORM para usuarios, coches y reservas, JWT y bcrypt para autenticacion, guards y control de roles para rutas protegidas, Stripe para pagos, despliegue preparado con Docker y automatizaciones n8n/IA conectadas con Telegram, correo, Stripe y base de datos.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "bcrypt", "Stripe", "n8n", "IA", "Docker"],
            highlights: [
              "Flujo de cliente con registro, login, catalogo de vehiculos, filtros por fechas, ciudad, categoria y precio, historial de reservas, validacion de disponibilidad y calculo automatico del precio final.",
              "Dashboard administrativo con gestion de flota, acciones protegidas, control de reservas, ingresos, nuevos usuarios, coches activos, cancelaciones y vehiculos mas rentables.",
              "Capa de automatizacion con asistente IA web, informes diarios y semanales en Telegram, bot administrativo para estadisticas rapidas, recomendaciones basadas en datos y correos para recuperar pagos no finalizados.",
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
          ...sharedProjects.girex,
          categoryLabel: "Automatizacion de soporte IA",
          status: "Pedido de cliente",
          summary:
            "Bot IA de soporte para Telegram que clasifica consultas, responde desde la base de conocimiento, escala casos urgentes, avisa al equipo y crea tickets.",
          caseStudy: {
            type: "Soporte IA en Telegram y ticketing",
            overview:
              "Girex Support Agent es una solucion de soporte IA desarrollada para Girex como un encargo orientado a automatizar la primera linea de atencion en Telegram. El sistema clasifica consultas, responde desde una base de conocimiento y crea tickets estructurados cuando el caso requiere seguimiento. Para incidencias urgentes, financieras, de compliance o seguridad, el bot notifica al equipo en un grupo privado y deriva la conversacion a soporte humano.",
            focus:
              "Workflow n8n conectado con Telegram Bot API, agente IA, logica de base de conocimiento, memoria de conversacion en PostgreSQL, creacion de tickets, escalado humano, avisos al grupo de administradores y reglas de seguridad para evitar promesas financieras o legales arriesgadas.",
            stack: ["n8n", "Telegram Bot API", "AI Agent", "PostgreSQL", "Google Sheets", "Ticketing", "Escalation"],
            highlights: [
              "Clasificacion de consultas sobre registro, KYC, operaciones P2P, escrow, depositos/retiros, errores, merchants, seguridad, compliance y preguntas generales.",
              "Flujo de tickets con user ID, email, numero de operacion, capturas, descripcion, categoria, prioridad e historial de conversacion.",
              "Escalado human-in-the-loop con alertas en Telegram para casos urgentes, financieros, compliance, seguridad o situaciones poco claras.",
            ],
            screenshots: [
              {
                src: "/projects/girex-workflow.png",
                alt: "Workflow n8n de Girex",
              },
              {
                src: "/projects/girex-admin-alert.png",
                alt: "Alerta de Girex en Telegram para administradores",
              },
              {
                src: "/projects/girex-bot-chat.png",
                alt: "Conversacion del bot de soporte Girex",
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
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Del codigo a produccion: experiencia que resuelve problemas",
      description:
        "Conecto desarrollo, datos, automatizacion y sistemas en produccion: creo herramientas utiles, resuelvo incidencias reales y ayudo a que el trabajo tecnico avance.",
      items: [
        {
          company: "OPINATOR",
          role: "Tecnico de soporte IT",
          period: "2026 - actualidad",
          summary:
            "Soporte practico en produccion con AWS, Linux, Git, tareas de seguridad y herramientas para desarrollo.",
          points: [
            "Gestion y migracion de maquinas virtuales en AWS EC2, incluyendo configuracion de instancias y mantenimiento de infraestructura en entorno de produccion.",
            "Trabajo diario en entornos Linux mediante terminal, con uso de Git para control de versiones y gestion de cambios.",
            "Diagnostico y correccion de errores de configuracion e incidencias tecnicas, identificando la causa raiz para minimizar impacto operativo.",
            "Participacion en tareas de ciberseguridad: monitorizacion de logs e incidencias, gestion de accesos e IAM, y aplicacion de parches y actualizaciones de seguridad.",
            "Uso de Claude Code en terminal para agilizar tareas de desarrollo y soporte tecnico.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Claude Code"],
        },
        {
          company: "Alenta",
          role: "Desarrollador de Bases de Datos y Soporte Digital (Practicas)",
          period: "2026",
          summary:
            "Soporte a bases de datos y procesos internos para que la informacion empresarial sea mas clara y util.",
          points: [
            "Gestion y mantenimiento de bases de datos corporativas mediante Microsoft Access.",
            "Creacion de consultas, formularios e informes para optimizar procesos internos.",
            "Organizacion y estructuracion de datos empresariales mejorando la eficiencia operativa.",
          ],
          tags: ["Microsoft Access", "Databases", "Reports"],
        },
        {
          company: "Naturprint Artes Graficas",
          role: "Desarrollador de Automatizacion y Web (Practicas)",
          period: "2025",
          summary:
            "Trabajo web, bases de datos y automatizacion para reducir tareas repetitivas y ordenar procesos internos.",
          points: [
            "Desarrollo y gestion de bases de datos MySQL mediante creacion de tablas y consultas SQL.",
            "Automatizacion de procesos internos utilizando Power Automate.",
            "Creacion y configuracion de sitios web en WordPress.",
            "Optimizacion de tareas repetitivas relacionadas con tratamiento de datos.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Skills",
      title: "Capacidades full-stack",
      description:
        "Areas donde puedo aportar en equipos de producto, empresas y proyectos tecnicos seleccionados.",
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
      title: "Conecto producto, codigo y operacion",
      description:
        "Trabajo en desarrollo web, backend, bases de datos, automatizacion, cloud e integraciones IA. Mi valor no esta solo en escribir codigo, sino en entender el flujo tecnico completo: desde una funcionalidad visible para el usuario hasta los sistemas, datos e infraestructura que la sostienen.",
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
          title: "Vision end-to-end",
          description:
            "Puedo moverme de interfaz a API, base de datos y despliegue sin perder el objetivo de la funcionalidad.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Fortaleza",
          title: "Experiencia con sistemas reales",
          description:
            "Trabajo practico con Linux, AWS, logs, IAM, diagnostico de incidencias, actualizaciones y entornos existentes.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Extra",
          title: "Automatizacion con impacto",
          description:
            "Uso automatizacion e IA para reporting, soporte, workflows internos y asistentes cuando ahorran tiempo real.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Forma de trabajo",
          title: "Comunicacion tecnica clara",
          description:
            "Explico decisiones, hago las preguntas correctas y mantengo el trabajo tecnico claro para equipos y propietarios de negocio.",
          tags: ["Claridad", "Equipo", "Ownership"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Disponible para puestos y proyectos tecnicos",
      description:
        "Disponible para puestos, colaboraciones y proyectos seleccionados para empresas en desarrollo web, backend, datos, automatizacion, cloud e IA.",
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
      highlights: "Ключові можливості",
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
            "Digital платформа оренди авто з filters, availability checks, bookings, Stripe payments, admin tools, statistics і AI/n8n automations.",
          caseStudy: {
            type: "Full-stack платформа оренди",
            overview:
              "RentAuto - це intelligent full-stack web platform для digital management оренди автомобілів. Вона централізує customer journey: browsing і filtering cars, availability check, automatic price calculation, reservations, online payment flow та personal booking history. Також є protected admin area для fleet management, reservation review і business activity analysis.",
            focus:
              "Layered architecture: Angular для user interface, NestJS для REST API і business logic, PostgreSQL з TypeORM для users, cars і rentals, JWT і bcrypt для authentication, guards і role-based access для protected routes, Stripe payments, Docker-ready deployment і n8n/AI automations з Telegram, email, Stripe та database.",
            stack: ["Angular", "NestJS", "PostgreSQL", "TypeORM", "JWT/RBAC", "bcrypt", "Stripe", "n8n", "AI", "Docker"],
            highlights: [
              "Customer flow з registration, login, vehicle catalog, filters by dates, city, category and price, reservation history, availability validation і automatic final price calculation.",
              "Admin dashboard з fleet management, protected administrative actions, reservation control, income metrics, new users, active cars, cancellations і most profitable vehicles.",
              "Automation layer з web AI assistant, daily/weekly Telegram reports, admin Telegram bot для quick statistics, data-based recommendations і recovery emails для unfinished payments.",
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
          ...sharedProjects.girex,
          categoryLabel: "AI support automation",
          status: "Client request",
          summary:
            "Telegram AI support bot для Girex: класифікує звернення, відповідає з бази знань, ескалує urgent cases, сповіщає команду і створює tickets.",
          caseStudy: {
            type: "Telegram AI support and ticketing",
            overview:
              "Girex Support Agent - це AI support solution, розроблена для Girex як client request для автоматизації першої лінії підтримки в Telegram. System класифікує requests, відповідає з knowledge base і створює structured tickets, коли case потребує follow-up. Для urgent, financial, compliance або security issues bot сповіщає команду в private admin group і передає conversation human support.",
            focus:
              "n8n workflow, який з'єднує Telegram Bot API, AI agent, knowledge-base logic, PostgreSQL conversation memory, ticket creation, human escalation, admin group notifications і safety rules, щоб bot не давав risky financial/legal promises та передавав сумнівні cases support-команді.",
            stack: ["n8n", "Telegram Bot API", "AI Agent", "PostgreSQL", "Google Sheets", "Ticketing", "Escalation"],
            highlights: [
              "Request triage для registration, KYC, P2P deals, escrow, deposits/withdrawals, errors, merchants, security, compliance і general questions.",
              "Ticket flow з user ID, email, deal number, screenshots, message description, category, priority і conversation history.",
              "Human-in-the-loop escalation з Telegram alerts для urgent, financial, compliance, security або unclear cases.",
            ],
            screenshots: [
              {
                src: "/projects/girex-workflow.png",
                alt: "Girex n8n workflow",
              },
              {
                src: "/projects/girex-admin-alert.png",
                alt: "Girex admin Telegram alert",
              },
              {
                src: "/projects/girex-bot-chat.png",
                alt: "Girex support bot conversation",
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
      ],
    },
    experience: {
      eyebrow: "Досвід",
      title: "Від коду до production: досвід, який вирішує проблеми",
      description:
        "Я поєдную розробку, дані, автоматизацію та production-системи: створюю корисні інструменти, вирішую реальні інциденти й допомагаю технічній роботі рухатися швидше.",
      items: [
        {
          company: "OPINATOR",
          role: "IT Support Technician",
          period: "2026 - дотепер",
          summary:
            "Практична підтримка production-систем з AWS, Linux, Git, security tasks і developer tooling.",
          points: [
            "Керування та міграція AWS EC2 virtual machines, включно з configuration of instances та infrastructure maintenance у production.",
            "Щоденна робота в Linux terminal environments з Git для version control і change management.",
            "Діагностика та виправлення configuration errors і technical incidents через пошук root cause та зменшення operational impact.",
            "Участь у cybersecurity tasks: log та incident monitoring, access/IAM management, patches і security updates.",
            "Використання Claude Code у terminal для прискорення development і technical support tasks.",
          ],
          tags: ["AWS EC2", "Linux", "Git", "IAM", "Logs", "Claude Code"],
        },
        {
          company: "Alenta",
          role: "Database Developer and Digital Support Intern",
          period: "2026",
          summary:
            "Підтримка баз даних і внутрішніх процесів, щоб бізнес-дані були зрозумілішими й кориснішими.",
          points: [
            "Керування та підтримка corporate databases у Microsoft Access.",
            "Створення queries, forms і reports для оптимізації internal workflows.",
            "Організація та структурування business data для покращення operational efficiency.",
          ],
          tags: ["Microsoft Access", "Databases", "Reports"],
        },
        {
          company: "Naturprint Artes Graficas",
          role: "Automation and Web Developer Intern",
          period: "2025",
          summary:
            "Web, database і automation work для скорочення repetitive tasks та впорядкування internal processes.",
          points: [
            "Розробка та керування MySQL databases через створення tables і SQL queries.",
            "Автоматизація internal processes з Power Automate.",
            "Створення та налаштування WordPress websites.",
            "Оптимізація repetitive tasks related to data processing.",
          ],
          tags: ["MySQL", "Power Automate", "WordPress", "SQL"],
        },
      ],
    },
    services: {
      eyebrow: "Навички",
      title: "Full-stack capabilities",
      description:
        "Зони, де я можу бути корисним продуктовим командам, компаніям і вибраним технічним проєктам.",
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
      title: "Поєдную продукт, код і операційну частину",
      description:
        "Працюю з web development, backend, databases, automation, cloud та AI integrations. Моя цінність не тільки в написанні коду, а в розумінні всього технічного потоку: від user-facing feature до systems, data та infrastructure за нею.",
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
          title: "End-to-end мислення",
          description:
            "Можу рухатись від interface до API, database і deployment, не втрачаючи ціль functionality.",
          tags: ["Frontend", "Backend", "Database"],
          href: "#projects",
        },
        {
          eyebrow: "Сильна сторона",
          title: "Досвід з реальними системами",
          description:
            "Практична робота з Linux, AWS, logs, IAM, incident diagnosis, updates і existing production environments.",
          tags: ["AWS", "Linux", "Support"],
          href: "#experience",
        },
        {
          eyebrow: "Додатково",
          title: "Automation з реальним ефектом",
          description:
            "Використовую automation та AI для reporting, support, internal workflows і assistants, коли це реально економить час.",
          tags: ["n8n", "AI", "Bots"],
          href: "#services",
        },
        {
          eyebrow: "Підхід до роботи",
          title: "Зрозуміла технічна комунікація",
          description:
            "Пояснюю рішення, ставлю правильні питання й тримаю технічну роботу зрозумілою для команд і власників бізнесу.",
          tags: ["Clarity", "Teamwork", "Ownership"],
          href: "#contact",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Доступний для ролей і технічних проєктів",
      description:
        "Доступний для ролей, співпраці та вибраних бізнес-проєктів у web development, backend, data, automation, cloud та AI.",
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
