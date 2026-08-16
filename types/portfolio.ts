export type Locale = "en" | "es" | "uk";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type ProjectCategory = "all" | "websites" | "ai" | "automation";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  status?: string;
  summary: string;
  tags: string[];
  preview: "website" | "chat" | "workflow";
  previewLabel: string;
  nodes?: string[];
  href?: string;
  caseStudy: {
    type: string;
    overview: string;
    focus: string;
    stack: string[];
    highlights: string[];
    screenshots: Array<{
      src: string;
      alt: string;
    }>;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
};

export type FeatureCard = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export type SiteCopy = {
  navigation: NavItem[];
  cta: {
    discuss: string;
    hire: string;
    cv: string;
    viewWork: string;
    viewProject: string;
    details: string;
    scroll: string;
    previewCase: string;
    previewMenu: string;
    screenshots: string;
    overview: string;
    focus: string;
    stack: string;
    highlights: string;
    openOriginal: string;
    closeCase: string;
  };
  hero: {
    role: string;
    status: string;
    intro: string;
    highlights: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Array<{
      id: ProjectCategory;
      label: string;
    }>;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    stackLabel: string;
    stack: string[];
    cards: FeatureCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    primaryContact: string;
    telegram: string;
    email: string;
  };
  footer: string;
  accessibility: {
    skipToContent: string;
    languageSwitcher: string;
    home: string;
  };
};
