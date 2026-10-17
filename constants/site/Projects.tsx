import React from "react";

export type Project = {
  title: string;
  headline: string;
  description: React.ReactNode;
  images: string[];
  tech: string[];
  link: string;
  statuses: string[];
};

export const projects: Project[] = [
  {
    title: "PRC Inspection and Monitoring System",
    headline:
      "Replaces paper-based inspections of schools and hospitals nationwide",
    statuses: ["Production ready", "Pending Pilot Test"],
    description: (
      <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-300">
        <li>
          Built a{" "}
          <b className="font-semibold text-slate-100">multi-tenant platform</b>{" "}
          supporting 5 user roles — PRC Board Members, ACD, Regional Offices,
          Oversight Commissioners, and HEIs/Hospitals — each with separate
          portals.
        </li>
        <li>
          Developed a{" "}
          <b className="font-semibold text-slate-100">
            compliance monitoring workflow
          </b>{" "}
          purpose-built for PRC BOND&apos;s inspection cycles, replacing the
          legacy accreditation system.
        </li>
        <li>
          Delivered{" "}
          <b className="font-semibold text-slate-100">
            real-time inspection tracking
          </b>
          , document submissions, findings, recommendations, and nationwide
          compliance coverage.
        </li>
      </ul>
    ),
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
    title: "Tenelos — Tennis ELO Rating System",
    headline:
      "Player rankings, analytics and match predictions, built from raw match data",
    statuses: ["Production deployed", "Freelance Project"],
    description: (
      <ul className="list-disc list-outside space-y-1.5 pl-4 text-sm text-slate-300">
        <li>
          Processed large volumes of inconsistent Excel records using{" "}
          <b className="font-semibold text-slate-100">Python ETL scripts</b> —
          turning raw tennis data into a clean, structured dataset.
        </li>
        <li>
          Built a complete{" "}
          <b className="font-semibold text-slate-100">player analytics experience</b>{" "}
          — profiles, head-to-head records, match histories, and ELO-based dynamic
          rankings.
        </li>
        <li>
          Implemented{" "}
          <b className="font-semibold text-slate-100">Chart.js visualizations</b>{" "}
          for performance trends, win/loss charts, H2H stats, and ranking changes.
        </li>
        <li>
          Delivered a fullstack platform with{" "}
          <b className="font-semibold text-slate-100">admin interface</b>, auth,
          automated data ingestion, and SEO optimization.
        </li>
      </ul>
    ),
    images: [
      "/assets/tenelos-previews/landing.png",
      "/assets/tenelos-previews/records.png",
      "/assets/tenelos-previews/charts.png",
    ],
    tech: ["MERN Stack", "Tailwind", "MongoDB", "Python", "ETL Pipelines"],
    link: "https://tenelos.com",
  },
];
