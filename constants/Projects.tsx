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
  //PRC Inspection and Monitoring System
  {
    title: "PRC Inspection and Monitoring System",
    headline:
      "Designed and developed an automated Inspection & Monitoring system for the Professional Regulation Commission (PRC) in collaboration with the Board of Nutrition and Dietetics (BOND). This was my thesis project, built to replace the manual, fragmented workflows used to inspect and evaluate compliance among HEIs and hospitals nationwide.",
    statuses: ["Production ready", "Pending Pilot Test"],
    description: (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>
            Built a <b>multi-tenant web platform</b> supporting five user roles
            — PRC Board Members, ACD, Regional Offices, Oversight Commissioners,
            and HEIs/Hospitals — each with separate portals.
          </li>
          <li>
            Developed a robust <b>compliance monitoring workflow</b> tailored
            for PRC BOND&apos;s needs, replacing the accreditation-focused
            legacy system with one optimized for inspection cycles.
          </li>
          <li>
            Implemented tools for <b>real-time inspection tracking</b>, document
            submissions, findings, recommendations, and nationwide compliance
            coverage.
          </li>
          <li>
            Improved operational efficiency by enabling board members to
            complete their three-year inspection cycle across all regions more
            effectively.
          </li>
          <li>
            Provided direct access to <b>stakeholders and board members</b>{" "}
            throughout development, ensuring the system aligned with real-world
            workflows and department needs.
          </li>
        </ul>

        <p className="text-slate-300 pt-2">
          The system includes five separate deployments, each with role-specific
          features:
        </p>

        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>
            <b>Client</b>: prc-iam-client.vercel.app
          </li>
          <li>
            <b>PRC Board Members / Secretaries</b>: prc-iam-prb.vercel.app
          </li>
          <li>
            <b>Accreditation Compliance Department (ACD)</b>:
            prc-iam-acd.vercel.app
          </li>
          <li>
            <b>Regional Office (RO)</b>: prc-iam-ro.vercel.app
          </li>
          <li>
            <b>Oversight Commissioner (OC)</b>: prc-iam-oc.vercel.app
          </li>
        </ul>
      </div>
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
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "NoSQL (Firebase)",
      "NextAuth",
      "SMTP",
      "Vercel",
      "GitBook",
      "Problem Solving",
      "Client Communication",
    ],
    link: "https://prc-inspection-and-monitoring.gitbook.io/product-docs",
  },

  //Tenelos - Tennis ELO rating system
  {
    title: "Tenelos — Tennis ELO Rating System",
    headline:
      "Built Tenelos, a complete tennis ELO rating and match analytics system. I handled everything from complex data transformation to developing the fullstack platform that powers player rankings, statistics, and match predictions.",
    statuses: ["Production deployed", "Freelance Project"],
    description: (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>
            Processed and cleaned large volumes of inconsistent Excel match
            records using <b>Python ETL scripts</b>, turning raw tennis data into
            a structured, usable dataset.
          </li>

          <li>
            Worked closely with the client to <b>prototype</b> the system —
            iterating on wireframes, ranking logic, and UX through multiple
            feedback cycles.
          </li>

          <li>
            Developed a complete <b>player analytics experience</b> including
            profiles, head-to-head records, match histories, and performance
            summaries.
          </li>

          <li>
            Implemented <b>ELO-based player rankings</b> with dynamic updates
            after each recorded match.
          </li>

          <li>
            Added <b>data visualizations</b> using Chart.js to display player
            performance trends, win/loss charts, H2H statistics, and ranking
            changes.
          </li>

          <li>
            Built a full <b>admin interface</b> for managing players, match
            data, ranking updates, and overall site configuration.
          </li>

          <li>
            Improved platform visibility by implementing{" "}
            <b>SEO optimizations</b> and enabling <b>web crawling</b> for public
            rankings, player profiles, and match records.
          </li>

          <li>
            Delivered a polished <b>fullstack platform</b> with authentication,
            dashboards, automated data ingestion, and production deployment.
          </li>
        </ul>
      </div>
    ),
    images: ["/assets/tenelos-previews/landing.png", "/assets/tenelos-previews/records.png", "/assets/tenelos-previews/charts.png"],
    tech: [
      "MERN Stack",
      "Tailwind",
      "MongoDB",
      "Python",
      "Data Analysis",
      "ETL Pipelines",
    ],
    link: "https://tenelos.com",
  },
];
