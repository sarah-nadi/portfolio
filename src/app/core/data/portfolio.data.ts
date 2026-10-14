export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
 short: string;   
  kind: string;      // الـ chip اللي فوق الكارت
  year: number;
  role: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'najma',
    title: 'Najma E-commerce',
    short: 'Najma', 
    kind: 'Freelance',
    year: 2026,
    role: 'Full Stack — frontend & backend',
    summary:
      'A complete online store built end to end for the brand Tarh. An Angular storefront on top of an ASP.NET Core Web API, with EF Core persistence and Paymob payments.',
    stack: ['Angular 21', '.NET 10', 'Web API', 'EF Core', 'Paymob'],
    links: [
      { label: 'Live site', url: 'https://najma-cwdc.vercel.app/' },
      { label: 'ٌRepo', url: 'https://github.com/sarah-nadi/najma' },
    ],
  },
  {
    id: 'wareed',
    title: 'Wareed — Blood Donation Hub',
    short: 'Wareed',  
    kind: 'ITI Graduation',
    year: 2026,
    role: 'Frontend & model fine-tuning',
    summary:
      'A platform that brings donors, patients and hospitals together. Backed by an AI layer — RAG, a fine-tuned model and an AI agent — with real-time updates over SignalR.',
    stack: ['Angular 21', '.NET 8', 'RAG', 'Fine-tuning', 'AI Agent', 'SignalR'],
    links: [{ label : 'watch demo' , url : 'https://lnkd.in/p/eA6EuiVj'},
      { label: 'Repo', url: 'https://github.com/sarah-nadi/wareed' }],
  },
  {
    id: 'civil-registration',
    title: 'Civil Registration System',
    short: 'Civil Reg.',
    kind: 'Team project',
    year: 2026,
    role: 'Views layer (MVC)',
    summary:
      'An MVC platform connecting citizens with the civil registry, letting them book appointments and obtain official government documents.',
    stack: ['ASP.NET Core MVC', '.NET 8', 'EF Core', 'SQL Server'],
    links: [
      { label : 'watch demo' , url : 'https://lnkd.in/p/eDgwB-Fm'},
      {
        label: 'Repo',
        url: 'https://github.com/MenaMagdyEbied/Civil-Registration-System-Platform',
      },
    ],
  },
  {
    id: 'repairflow',
    title: 'RepairFlow',
    short: 'RepairFlow',
    kind: 'Desktop app',
    year: 2026,
    role: 'Contributed across the whole project',
    summary:
      'A C# desktop application built with Windows Forms, backed by EF Core and SQL Server on .NET 8.',
    stack: ['C#', 'Windows Forms', '.NET 8', 'EF Core', 'SQL Server'],
    links: [{ label : 'watch demo' , url : 'https://lnkd.in/p/ejWegZZD'},
      { label: 'Repo', url: 'https://github.com/MenaMagdyEbied/Repair-Flow' }],
  },
  {
    id: 'fresh-cart',
    title: 'Fresh Cart',
    short: 'Fresh Cart', 
    kind: 'Route Graduation',
    year: 2025,
    role: 'Solo build',
    summary:
      'An e-commerce front end built with Angular 17 as my Route Academy graduation project.',
    stack: ['Angular 17', 'HTML5', 'CSS3', 'Bootstrap'],
    links: [
      { label: 'Live site', url: 'https://fresh-cart-eskm.vercel.app/' },
      { label: 'Repo', url: 'https://github.com/sarah-nadi/fresh-cart' },
    ],
  },
  {
    id: 'yummy',
    title: 'Yummy',
    short: 'Yummy', 
    kind: 'Personal project',
    year: 2024,
    role: 'Solo build',
    summary:
      'A recipe site for browsing meals together with their recipes and the cuisines they come from.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [
      { label: 'Live site', url: 'https://sarah-nadi.github.io/yummy/' },
      { label: 'Repo', url: 'https://github.com/sarah-nadi/yummy' },
    ],
  },
];

export interface PipelineStep {
  phase: string;
  title: string;
  detail: string;
  tag: string;
  core?: boolean;
}

export interface Capability {
  label: string;
  value: string;
}

export const PIPELINE: readonly PipelineStep[] = [
  {
    phase: 'Client plane',
    title: 'Angular SPA',
    detail: 'Angular 21, standalone components and signals, in responsive interfaces.',
    tag: 'Frontend',
  },
  {
    phase: 'Transport',
    title: 'REST · Contracts',
    detail: 'Web APIs with clear contracts between the client and the backend.',
    tag: 'HTTP / JSON',
  },
  {
    phase: 'Central runtime',
    title: 'ASP.NET Core',
    detail: '.NET 10 services shaped by Clean Architecture and CQRS.',
    tag: 'Backend',
    core: true,
  },
  {
    phase: 'Data access',
    title: 'EF Core',
    detail: 'LINQ queries and migrations over a clean persistence layer.',
    tag: 'ORM',
  },
  {
    phase: 'Persistence',
    title: 'SQL Server',
    detail: 'Relational storage for transactional, consistent data.',
    tag: 'Database',
  },
];

export const CAPABILITIES: readonly Capability[] = [
  { label: 'Auth', value: 'JWT & claims-based policies' },
  { label: 'Payments', value: 'Paymob integration' },
  { label: 'Realtime', value: 'SignalR WebSockets' },
  { label: 'AI', value: 'RAG, fine-tuning & AI agents' },
];

export interface Spec {
  label: string;
  value: string;
  accent?: boolean;   
}

export const SPECS: readonly Spec[] = [
  { label: 'Name', value: 'Sara Nadi' },
  { label: 'Location', value: 'Cairo, Egypt (UTC+2)' },
  { label: 'Discipline', value: 'Full Stack Angular + .NET', accent: true },
  { label: 'Patterns', value: 'CQRS / MediatR / 3NF ACID' },
  { label: 'Interface stance', value: 'Quiet Luxury / Zero Bloat' },
  { label: 'Commission status', value: 'Active & Open', accent: true },
];

export const PLEDGE =
  'Deterministic unit/integration coverage, domain-driven boundaries, and zero extraneous dependencies.';


  export interface CareerStage {
  label: string;      // "Stage 01" / "Current"
  year: string;
  title: string;
  detail: string;
  tag: string;
  accent?: boolean;   // tag بوردو
  timeline: string;   // النص في الخط الزمني اللي فوق على اليمين
   points?: { label: string; value: string }[];
   certificateURL?: string;
}

export const CAREER: readonly CareerStage[] = [
   {
    label: 'Stage 01',
    year: '2025',
    title: 'Education',
    detail: 'B.Sc. from the Faculty of Specific Education, Educational Technology department.',
    points: [
      { label: 'Graduation grade', value: 'Excellent with Honors' },
      {
        label: 'Graduation project',
        value: 'Educational e-book, designed and built in Adobe InDesign. Grade: Excellent',
      },
    ],
    tag: 'Educational Tech.',   
    accent: true,
    timeline: '2025 Education',
  },
  {
    label: 'Stage 02',
    year: '2025-26',
    title: 'Frontend Focus',
    detail:
      'Front-end diploma from Route Academy, taught in Angular. TypeScript, component life-cycles, reactive state, and responsive layout foundations.',
    tag: 'Route diploma',
    accent: true,
    timeline: '2025-26 Frontend',
    certificateURL: 'https://drive.google.com/file/d/1XayhQxkJZUg75GQVf79EIjErTcp6d8HL/view?usp=sharing',
  },
  {
    label: 'Stage 03',
    year: '2026',
    title: '.NET & SQL Core',
    detail:
      'Intensive scholarship at Information Technology Institute (ITI). C#, ASP.NET Core, EF Core, and SQL Server.',
    tag: 'ITI scholarship',
    accent: true,
    timeline: '2026 .NET',
    certificateURL: 'https://drive.google.com/file/d/1lYrCqu20xx36fdDJA0eaHy9TVPQlWZpP/view?usp=sharing',
  },
  {
    label: 'Current',
    year: '2026+',
    title: 'Full Stack Freelancer',
    detail:
      'Deploying scalable enterprise commerce, reliable repair streams, and robust web applications.',
    tag: 'Active for hire',
    accent: true,
    timeline: 'Now Full stack',
  },
];

export type WordStyle = 'serif' | 'italic' | 'mono';

export interface StackWord {
  text: string;
  style: WordStyle;
}

export interface StackRow {
  words: StackWord[];
  repeat: number;      
  duration: number;    // in seconds
  reverse?: boolean;
}

export const STACK_ROWS: readonly StackRow[] = [
  {
    duration: 70,
    repeat: 3,
    words: [
      { text: 'Angular', style: 'serif' },
      { text: 'C#', style: 'italic' },
      { text: 'ASP.NET Core', style: 'serif' },
    ],
  },
  {
    duration: 80,
    repeat: 3,
    reverse: true,
    words: [
      { text: 'EF Core', style: 'italic' },
       { text: 'Web API', style: 'serif' },
      { text: 'SQL Server', style: 'mono' },
      { text: 'SignalR', style: 'serif' },
    ],
  },
   {
    duration: 60,
    repeat: 3,
    words: [
      { text: 'Payment Integration', style: 'italic' },
      { text: 'TypeScript', style: 'mono' },
      { text: 'LINQ' , style: 'serif'}
    ],
  },
];

export interface ContactLink {
  label: string;
  url: string;
  external?: boolean;  
}

export const CONTACT = {
  email: 'saranadi411@gmail.com',      
  location: 'Cairo, Egypt (UTC+2)',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sara-nadi-56b5362bb', external: true },   // حطي لينكك هنا
    { label: 'GitHub', url: 'https://github.com/sarah-nadi', external: true },
    { label: 'WhatsApp', url: 'https://wa.me/201142518177', external: true },
    { label: 'Call', url: 'tel:+201142518177' },
  ] as readonly ContactLink[],
  domains: ['Full stack system', '.NET core backend', 'Angular architecture'] as readonly string[],
};

export const CV_URL = 'Sara Nadi_Full Stack Developer_CV.pdf';   