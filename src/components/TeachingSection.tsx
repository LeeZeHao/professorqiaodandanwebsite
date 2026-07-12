import { forwardRef } from "react";

const teachingItems = [
  {
    title: "Teaching Interests",
    details: [
      "Business Analytics",
      "Platform Design",
      "Computational Social Science",
    ],
  },
  {
    title: "Class Instructor / Teaching Assistant",
    details: [
      "Computational Social Science (IS6006), PhD lelvel, National University of Singapore",
      "Mining Business Insights from Web Data (BT4222), Undergraduate lelvel, National University of Singapore",
      "Analytics Driven Design of Adaptive Systems (BT4014), Undergraduate lelvel, National University of Singapore",
    ],
  },
];

export const TeachingSection = forwardRef<HTMLElement>(function TeachingSection(_, ref) {
  return (
    <section id="teaching" ref={ref} className="teaching-section">
      <div className="section-kicker">
        <span>03</span>
        <p>Teaching</p>
        <div />
      </div>

      <div className="teaching-content">
        {teachingItems.map((item) => (
          <div className="teaching-block" key={item.title}>
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