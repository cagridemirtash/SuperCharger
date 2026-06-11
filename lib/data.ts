export const siteConfig = {
  name: "Çağrı Demirtaş",
  nickname: "SuperCharger",
  title: "System & Network Engineer | DevOps Enthusiast",
  description:
    "Son kullanıcı desteğinden sistem ve network mühendisliğine uzanan yolculuğumda; altyapı, otomasyon, CI/CD, servis mimarileri ve modern web teknolojileri üzerine kendimi sürekli geliştiren bir teknoloji profesyoneliyim.",
  url: "https://supercharger.dev", // TODO: Deploy sonrası gerçek domain ile güncelle
  location: "Adana, Türkiye",
  linkedin: "https://www.linkedin.com/in/hanificagridemirtas/",
  github: "https://github.com/cagridemirtash",
  email: "your.email@example.com", // TODO: Gerçek e-posta adresi ile güncelle
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const heroRoles = [
  "System & Network Engineer",
  "DevOps Enthusiast",
  "Full-stack Project Builder",
];

export const heroBadges = [
  "Fortinet",
  "CI/CD",
  "Jenkins",
  ".NET Core",
  "Next.js",
  "Kubernetes",
];

export const aboutContent = {
  paragraphs: [
    "Ben Çağrı Demirtaş. Müzik üretimiyle bağ kurduğum SuperCharger lakabını, teknoloji tarafında da üretme enerjisi ve akış disiplini olarak taşıyorum.",
    "2 yıl son kullanıcı tarafında çalıştım; bu süre bana teknik problemleri kullanıcı perspektifinden anlamayı, operasyon disiplinini ve güçlü iletişimi öğretti. Son 1 yıldır Sistem ve Network Mühendisi olarak altyapı, güvenlik ve süreklilik konularında aktif sorumluluk alıyorum.",
    "Son 2 yıldır DevOps üzerine araştırmalar yapıyorum — Jenkins pipeline'ları, GitHub hook'ları ve otomatik deployment süreçleriyle çalışan gerçek bir mikroservis projesi geliştiriyorum. Hem altyapı hem yazılım geliştirme tarafında kendimi sürekli geliştiriyorum.",
    "Teknik problemlere bütünsel bakıyorum: kullanıcı, sistem, network, deployment ve uygulama tarafını birlikte değerlendiriyorum. Amacım sadece sorun çözmek değil; süreçleri daha otomatik, izlenebilir ve sürdürülebilir hale getirmek.",
  ],
  highlights: [
    { label: "Toplam Deneyim", value: "3+ yıl" },
    { label: "Eğitim", value: "Bilgisayar Mühendisliği" },
    { label: "Konum", value: "Adana, TR" },
    { label: "Sertifikalar", value: "8+" },
  ],
};

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  description: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Computer Engineer",
    company: "AOSB Bölge Müdürlüğü",
    companyUrl:
      "https://www.linkedin.com/company/adana-organize-sanayi-b%c3%b6lge-m%c3%bcd%c3%bcrl%c3%bc%c4%9f%c3%bc",
    period: "Oca 2026 – Günümüz",
    location: "Adana, Türkiye",
    current: true,
    description: [
      "Sistem ve network altyapıları üzerinde aktif çalışma",
      "Sunucu, ağ, kullanıcı ve operasyon süreçlerinde sorumluluk",
      "Altyapı sürekliliği, erişilebilirlik ve teknik problem çözme",
      "DevOps yaklaşımıyla süreçleri daha otomatik, izlenebilir ve sürdürülebilir hale getirme hedefi",
    ],
  },
  {
    title: "Assistant IT Manager",
    company: "AOSB Bölge Müdürlüğü",
    companyUrl:
      "https://www.linkedin.com/company/adana-organize-sanayi-b%c3%b6lge-m%c3%bcd%c3%bcrl%c3%bc%c4%9f%c3%bc",
    period: "Ağu 2022 – Şub 2026",
    location: "Adana, Türkiye",
    description: [
      "Fortinet güvenlik ürünleri (FortiNAC, FortiSIEM, FortiMAIL, FortiSASE, FortiDECEPTOR, FortiWEB) yönetimi ve konfigürasyonu",
      "HP, Ruijie ve Planet network switch'lerinin yönetimi, VLAN segmentasyonu ve güvenli ağ mimarisi",
      "Güvenlik politikaları, sistem izleme ve olay analizi ile kritik altyapının korunması",
      "Endüstriyel modemler (Z Telemetry, Robustel) ve SCADA iletişim altyapısı",
      "PowerProtect Data Manager (PPDM) ve Veeam Backup & Replication ile yedekleme ve kurtarma operasyonları",
      "Cross-functional ekiplerle karmaşık network ve güvenlik sorunlarının çözümü",
    ],
  },
  {
    title: "Technical Help Desk",
    company: "AOSB Bölge Müdürlüğü",
    companyUrl:
      "https://www.linkedin.com/company/adana-organize-sanayi-b%c3%b6lge-m%c3%bcd%c3%bcrl%c3%bc%c4%9f%c3%bc",
    period: "Tem 2022 – Ağu 2022",
    location: "Adana, Türkiye",
    description: [
      "Son kullanıcı problemlerinin analizi ve çözümü",
      "Donanım, yazılım, erişim ve operasyonel destek süreçleri",
      "Kullanıcı deneyimini anlayarak teknik çözüm üretme",
      "Teknik iletişim, problem çözme ve operasyon disiplini kazanımı",
    ],
  },
  {
    title: "Research & Development Intern",
    company: "Kodluyoruz",
    companyUrl: "https://www.linkedin.com/company/kodluyoruz",
    period: "Eyl 2021 – Kas 2021",
    description: [
      "Araştırma ve geliştirme süreçlerinde aktif katılım",
      "Teknoloji ekosisteminde proje tabanlı öğrenme deneyimi",
    ],
  },
];

export const devOpsProject = {
  title: "DevOps Odaklı Mikroservis Projesi",
  subtitle: "Çalışan pipeline, gerçek mimari, aktif geliştirme",
  description:
    "Son 2 yıldır DevOps üzerine araştırmalar yapıyorum ve şu anda aktif olarak çalışan bir projem var. Bu proje, .NET Core ile yazılmış 8 adet backend servisi ve Next.js ile geliştirilmiş bir frontend uygulamasından oluşuyor.",
  architecture: {
    backend: {
      title: "Backend",
      items: ["8 adet .NET Core servis", "REST API", "Service-based Architecture"],
    },
    frontend: {
      title: "Frontend",
      items: ["Next.js", "TypeScript", "Modern UI"],
    },
    devops: {
      title: "DevOps",
      items: ["CI/CD Pipeline", "GitHub Hooks", "Jenkins", "Otomatik Deployment"],
    },
  },
  highlights: [
    "Sadece teorik DevOps bilgisi değil, çalışan gerçek bir pipeline deneyimi",
    "Backend ve frontend tarafında aktif geliştirme",
    "Otomatik build/deploy mantığı",
    "Servis tabanlı mimari",
    "Süreç otomasyonu",
    "Yazılım geliştirme ve operasyon tarafını birlikte ele alma",
  ],
  pipelineSteps: [
    { step: 1, title: "Commit", description: "Developer main branch'e commit atar", icon: "git" },
    { step: 2, title: "Hook", description: "GitHub hook tetiklenir", icon: "github" },
    { step: 3, title: "Pipeline", description: "Jenkins pipeline başlar", icon: "jenkins" },
    { step: 4, title: "Backend Build", description: "Backend servisleri build edilir", icon: "server" },
    { step: 5, title: "Frontend Build", description: "Frontend build edilir", icon: "layout" },
    { step: 6, title: "Test", description: "Test / kontrol aşamaları çalışır", icon: "check" },
    { step: 7, title: "Deploy", description: "Deployment süreci otomatik ilerler", icon: "rocket" },
  ],
};

export const skillCategories = [
  {
    title: "Infrastructure & Network",
    skills: [
      "System Administration",
      "Network Operations",
      "Server Management",
      "Fortinet Security",
      "VLAN & Switching",
      "SCADA & Industrial Modems",
      "Troubleshooting",
      "IT Operations",
      "Veeam & PPDM Backup",
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      "CI/CD",
      "Jenkins",
      "GitHub Hooks",
      "Pipeline Design",
      "Deployment Automation",
      "DevOps Research",
      "Process Automation",
      "Kubernetes",
    ],
  },
  {
    title: "Backend",
    skills: [
      ".NET Core",
      "REST API",
      "Service-based Architecture",
      "Backend Development",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive UI",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Technical Communication",
      "Ownership",
      "Continuous Learning",
      "Cross-functional Collaboration",
    ],
  },
];

export const projects = [
  {
    title: "DevOps Mikroservis Platformu",
    description:
      "8 .NET Core backend servisi ve Next.js frontend ile çalışan, Jenkins pipeline ve GitHub hook'ları üzerinden otomatik deploy edilen mikroservis mimarisi.",
    tags: [".NET Core", "Next.js", "Jenkins", "CI/CD", "Microservices"],
    featured: true,
  },
  {
    title: "Network & System Operations",
    description:
      "Fortinet güvenlik ürünleri, enterprise switching, SCADA modem konfigürasyonu ve yedekleme sistemleri (PPDM, Veeam) ile kurumsal altyapı yönetimi.",
    tags: ["Fortinet", "VLAN", "Veeam", "SCADA", "Network Security"],
    featured: false,
  },
  {
    title: "SuperCharger — Müzik & Kimlik",
    description:
      "Müzik üretimiyle gelen ritim, akış ve üretim disiplini; teknoloji tarafında otomasyon, sistem düzeni ve sürdürülebilir süreçlere olan yaklaşımımı besliyor.",
    tags: ["Music Production", "Personal Brand", "Creative Identity"],
    featured: false,
  },
];

export const personalBrand = {
  title: "SuperCharger: Energy Behind the Systems",
  description:
    "SuperCharger, sadece bir lakap değil; üretme, enerji verme ve sistemleri daha güçlü hale getirme yaklaşımımı temsil ediyor. Müzikte ritim ve akış neyse, teknoloji tarafında da otomasyon, stabilite ve doğru mimari benim için aynı anlama geliyor.",
};

export const education = [
  {
    degree: "Lisans — Bilgisayar Mühendisliği",
    school: "Adana Bilim ve Teknoloji Üniversitesi",
    period: "2017 – 2023",
  },
];

export const certifications = [
  { name: "DevOps Çözümleri (Jenkins)", issuer: "BTK Akademi", date: "Şub 2023" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "Eki 2022" },
  { name: "SQL (Intermediate)", issuer: "HackerRank", date: "Eyl 2022" },
  { name: "JavaScript (Basic)", issuer: "HackerRank", date: "Ağu 2022" },
  { name: "SQL (Basic)", issuer: "HackerRank", date: "Ağu 2022" },
  { name: "Full Stack Web Development Bootcamp", issuer: "Kodluyoruz", date: "Mar 2021" },
];

export const languages = [
  { name: "Türkçe", level: "Native" },
  { name: "İngilizce", level: "Professional Working" },
  { name: "Almanca", level: "Elementary" },
];
