import { forwardRef } from "react";

const teachingItems = [
  {
    title: "Department / School / University Service",
    details: [
      "Deputy Director, Centre for Computational Social Science and Humanities (https://cssh.nus.edu.sg/), NUS, 2024 - 2026 June",
      "Ph.D. coordinator, Department of Information Systems and Analytics, NUS, 2023 Jan - 2026 June",
      "MComp IS committee member, Department of Information Systems and Analytics, NUS, 2020-2022",
    ],
  },
  {
    title: "Editorship of Journals / Conferences",
    details: [
      "Associate Editor at Management Science, 2026-Present",
      "Associate Editor at MIS Quarterly, 2026-Present",
      "Associate Editor at Decision Sciences Journal, 2026-Present",
      "Editorial Review Board Member of Information Systems Research, 2024-2025",
      "Associate Editor for Special Issue (AI-IA Nexus) of MIS Quarterly",
      "Cluster Chair for eBusiness Community of INFORMS Annual Meeting, 2024",
      "Co-organizer of Feeder Workshop for Workshop on Information Technologies and Systems, 2024",
      "Track Co-Chair for Pacific Asia Conference on Information Systems, 2023",
      "Track Associate Editor for International Conference on Information Systems, 2024, 2023, 2022, 2021, 2020, 2019",
      "Track Associate Editor for Pacific Asia Conference on Information Systems, 2024, 2022, 2021, 2020",
    ],
  },
  {
    title: "Referee for Journals",
    details: [
      "Management Science (MS)",
      "Information Systems Research (ISR)",
      "MIS Quarterly (MISQ)",
      "INFORMS Journal on Computing (JOC)",
      "Journal of Management Information Systems (JMIS)",
      "Production and Operations Management (POM)",
      "Journal of the Association for Information Science and Technology (JAIST)",
    ],
  },
  {
    title: "Referee for Conferences",
    details: [
      "International Conference on Information Systems (ICIS)",
      "Conference on Information Systems and Technology (CIST)",
      "Hawaii International Conference on System Sciences (HICSS)",
      "Workshop on Information Technologies and Systems (WITS)",
      "Pacific Asia Conference on Information Systems (PACIS)",
      "China Summer Workshop on Information Management (CSWIM)",
    ],
  },
];

export const ServicesSection = forwardRef<HTMLElement>(function ServicesSection(_, ref) {
  return (
    <section id="services" ref={ref} className="services-section">
      <div className="section-kicker">
        <span>04</span>
        <p>Services</p>
        <div />
      </div>

      <div className="services-content">
        {teachingItems.map((item) => (
          <div className="services-block" key={item.title}>
            <h2>{item.title}</h2>

            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});
