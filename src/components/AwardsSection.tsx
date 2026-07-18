import { forwardRef } from "react";

const teachingItems = [
  {
    title: "Grants",
    details: [
      "Ministry of Education Academic Research Fund Tier-2, 2025.06 ~ 2028.06",
      "Ministry of Education Academic Research Fund Tier-1, 2024.01 ~ 2026.12",
      "Ministry of Education Academic Research Fund Start-up",
      "NET Institute Summer Grant, Summer 2019",
    ],
  },
  {
    title: "Awards",
    details: [
      "Robert Brown Promising Researcher Award, 2025",
      "AIS Early Career Award, 2024",
      "INFORMS ISS Gordon Davis Young Scholar Award, 2023",
      "17th Beijing Philosophy and Social Sciences Outstanding Achievement Awards, 2019",
      "Outstanding Graduate of Beijing, 2018, 2012",
      "Outstanding Doctoral Thesis, 2018",
      "China National Scholarship, 2016, 2009",
      "Tsinghua-Jiangzhen Scholarship, 2015, 2014",
    ],
  },
];

export const AwardsSection = forwardRef<HTMLElement>(function AwardsSection(_, ref) {
  return (
    <section id="awards" ref={ref} className="awards-section">
      <div className="section-kicker">
        <span>05</span>
        <p>Awards</p>
        <div />
      </div>

      <div className="awards-content">
        {teachingItems.map((item) => (
          <div className="awards-block" key={item.title}>
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
