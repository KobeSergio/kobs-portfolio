export type Project = {
  slug: string;
  title: string;
  headline: string;
  // "How I built it" bullets. **text** renders bold.
  bullets: string[];
  images: string[];
  tech: string[];
  link: string;
  statuses: string[];
};

export const projects: Project[] = [
  {
    slug: "prc-inspection-monitoring",
    title: "PRC Inspection and Monitoring System",
    headline:
      "Replaces paper-based inspections of schools and hospitals nationwide",
    statuses: ["Production ready", "Pending Pilot Test"],
    bullets: [
      "Built a **multi-tenant platform** supporting 5 user roles (PRC Board Members, ACD, Regional Offices, Oversight Commissioners, and HEIs/Hospitals), each with separate portals.",
      "Developed a **compliance monitoring workflow** purpose-built for PRC BOND's inspection cycles, replacing the legacy accreditation system.",
      "Delivered **real-time inspection tracking**, document submissions, findings, recommendations, and nationwide compliance coverage.",
    ],
    images: [
      "/assets/prc-previews/login.avif",
      "/assets/prc-previews/dashboard.avif",
      "/assets/prc-previews/imwpr.png",
      "/assets/prc-previews/task-list.avif",
      "/assets/prc-previews/compliance-page.png",
      "/assets/prc-previews/email.png",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Firebase",
      "NextAuth",
      "SMTP",
      "Vercel",
    ],
    link: "https://prc-inspection-and-monitoring.gitbook.io/product-docs",
  },

  {
    slug: "tenelos",
    title: "Tenelos: Tennis ELO Rating System",
    headline:
      "Player rankings, analytics and match predictions, built from raw match data",
    statuses: ["Production deployed", "Freelance Project"],
    bullets: [
      "Processed large volumes of inconsistent Excel records using **Python ETL scripts**, turning raw tennis data into a clean, structured dataset.",
      "Built a complete **player analytics experience**: profiles, head-to-head records, match histories, and ELO-based dynamic rankings.",
      "Implemented **Chart.js visualizations** for performance trends, win/loss charts, H2H stats, and ranking changes.",
      "Delivered a fullstack platform with **admin interface**, auth, automated data ingestion, and SEO optimization.",
    ],
    images: [
      "/assets/tenelos-previews/landing.png",
      "/assets/tenelos-previews/records.png",
      "/assets/tenelos-previews/charts.png",
    ],
    tech: ["MERN Stack", "Tailwind", "MongoDB", "Python", "ETL Pipelines"],
    link: "https://tenelos.com",
  },
];
