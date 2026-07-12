import { forwardRef, type ReactNode } from "react";

type JournalPublication = {
  year: string;
  text: ReactNode;
  href: string;
};

type ConferencePublication = {
  year: string;
  text: ReactNode;
};

const journalPublications: JournalPublication[] = [
  {
    year: "2026",
    text: (
      <>
        Jinghui Zhang, Mochen Yang, <b>Dandan Qiao</b>, Qiang Wei. "Regurgitative Training: The Value of Real Data in Training Large Language Models". <i>Management Science</i>, Forthcoming.
      </>
    ),
    href: "https://arxiv.org/abs/2407.12835",
  },
  {
    year: "2026",
    text: (
      <>
        <b>Dandan Qiao</b>, Huaxia Rui, Qian Xiong. (2026). "AI and Jobs: Has the Inflection Point Arrived? Evidence from an Online Labor Platform". <i>Journal of Management Information Systems</i>, 43(1), 5-37.
      </>
    ),
    href: "https://www.tandfonline.com/doi/abs/10.1080/07421222.2025.2602400",
  },
  {
    year: "2025",
    text: (
      <>
        Ying Lu, <b>Dandan Qiao</b>, Shu He, Bernard C Y Tan. (2025). “How Search Technology Breeds Illegal Transactions: Empirical Evidence from the Darknet”, <i>Management Science</i>. 72(5), 4319-4340..
      </>
    ),
    href: "https://pubsonline.informs.org/doi/10.1287/mnsc.2022.04133",
  },
  {
    year: "2024",
    text: (
      <>
        Lin Qiu, <b>Dandan Qiao</b>, Bernard CY Tan, and Andrew B. Whinston. (2024). "Leading the Horse to Water? Investigating the Impact of Ride-hailing Services on Hate Crimes", <i>Production and Operations Management</i>, 33(1), 342-363.
      </>
    ),
    href: "https://journals.sagepub.com/doi/abs/10.1177/10591478231224944",
  },
  {
    year: "2024",
    text: (
      <>
        Warut Khern-am-nuai, Hossein Ghasemkhani, <b>Dandan Qiao</b>, Karthik Natarajan Kannan. (2024) “The Impact of Online Q&As on Product Sales: The Case of Amazon Answer”, <i>Information Systems Research</i>, 35(2), 747-765.
      </>
    ),
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2794149",
  },
  {
    year: "2024",
    text: (
      <>
        Jason Chan, Shu He, <b>Dandan Qiao</b>. Andrew B. Whinston. (2024). “Shedding Light on the Dark: The Impact of Legal Enforcement on Darknet Transactions”, <i>Information Systems Research</i>, 35(1), 145-164.
      </>
    ),
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3468426",
  },
  {
    year: "2023",
    text: (
      <>
        <b>Dandan Qiao</b>, & Huaxia Rui. (2023) “Text Performance on the Vine Stage? The Effect of Incentive on Product Review Text Quality”. <i>Information Systems Research</i>, 34(2), pp.676-697.
      </>
    ),
    href: "https://pubsonline.informs.org/doi/abs/10.1287/isre.2022.1146",
  },
  {
    year: "2021",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, (2021). “Mitigating the Adverse Effect of Monetary Incentives on Voluntary Contributions Online”. <i>Journal of Management Information Systems</i>, 38(1), pp.82-107.
      </>
    ),
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3954687",
  },
  {
    year: "2020",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, (2020). “Financial Incentives Dampen Altruism in Online Prosocial Contributions: A Study of Online Reviews”. <i>Information Systems Research</i>, 31(4), pp.1361-1375.
      </>
    ),
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3683253",
  },
  {
    year: "2020",
    text: (
      <>
        Liye Wang, Jin Zhang, Guoqing Chen, <b>Dandan Qiao</b>. (2020). “Identifying Comparable Entities with Indirectly Associative Relations and Word Embeddings from Web Search Logs”. <i>Decision Support Systems</i>, p.113465.
      </>
    ),
    href: "https://doi.org/10.1016/j.dss.2020.113465",
  },
  {
    year: "2017",
    text: (
      <>
        Xunhua Guo, Qiang Wei, Guoqing Chen, Jin Zhang, <b>Dandan Qiao</b>. (2017). “Extracting Representative Information on Intra-Organizational Blogging Platforms”. <i>MIS Quarterly</i>, 41(4), pp.1105-1127.
      </>
    ),
    href: "https://misq.umn.edu/extracting-representative-information-on-intra-organizational-blogging-platforms.html",
  },
  {
    year: "2017",
    text: (
      <>
        <b>Dandan Qiao</b>, Jin Zhang, Qiang Wei, Guoqing Chen. (2017). “Finding Competitive Keywords from Query Logs to Enhance Search Engine Advertising”. <i>Information & Management</i>, 54(4), pp.531-543.
      </>
    ),
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0378720616303330",
  },
  {
    year: "2016",
    text: (
      <>
        Qiang Wei, <b>Dandan Qiao</b>, Jin Zhang, Guoqing Chen, Xunhua Guo. (2016). “A Novel Bipartite Graph based Competitiveness Degree Analysis from Query Logs”. <i>ACM Transactions on Knowledge Discovery from Data</i> (TKDD), 11(2), pp.1-25
      </>
    ),
    href: "https://dl.acm.org/doi/10.1145/2996196",
  },
];

const conferencePublications: ConferencePublication[] = [
  {
    year: "2024",
    text: (
      <>
        Haoyu Yuan, <b>Dandan Qiao</b>, Qiang Wei, “When Crowdfunding Meets InDemand: A Dynamic Analysis Using Hidden Markov Model, ” <i>International Conference on Information Systems</i> (ICIS), Bangkok, Thailand, 2024.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Dinghao Xi, Ying Lu, <b>Dandan Qiao</b>, Wei Xu, “Unveiling the Secrets of Collaboration on Video-Sharing Platforms” <i>International Conference on Information Systems</i> (ICIS), Hyderabad, India, 2023.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Dinghao Xi, Ying Lu, <b>Dandan Qiao</b>, Wei Xu, “Unveiling the Secrets of Collaboration on Video-Sharing Platforms” <i>INFORMS Conference on Information Systems and Technology</i> (CIST), Arizona, United States, 2023.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Haoyu Yuan, <b>Dandan Qiao</b>, Qiang Wei, “Decoding Persuasion: A Hierarchical Deep Learning Framework for Predicting Crowdfunding Success, ” <i>INFORMS Workshop on Data Science </i>(WDS), Arizona, United States, 2023.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Jingyuan Deng, <b>Dandan Qiao</b>, Warut Khern-Am-Nuai, “An Empirical Study about the Impact of Incentivized Reviews on Product Sales: The Case of Amazon Vine Program” The 16th China Summer Workshop on Information Management (CSWIM), Changsha, China, 2023.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Ying Lu, <b>Dandan Qiao</b>, Shu He, Xiaoying Xu, Bernard C Y Tan, “Exploration or Solidification: Modeling Users’ Dynamics of Collusive Behavior in Decentralized Online Communities” The 16th China Summer Workshop on Information Management (CSWIM), Changsha, China, 2023.
      </>
    ),
  },
  {
    year: "2023",
    text: (
      <>
        Tong Yang, Benjiang Lu, <b>Dandan Qiao</b>, “The Impact of Vehicle Purchase Tax: A Construal Level Analysis of Consumer Reviews” The annual Pacific Asia Conference on Information Systems (PACIS), Nanchang, China, 2023
      </>
    ),
  },
  {
    year: "2022",
    text: (
      <>
        Ying Lu, <b>Dandan Qiao</b>, Shu He, Bernard C Y Tan, “Secrets of Bellwethers: The Effect of Search Intermediary on Market Structure and Vendor Strategy in Darknet,” <i>INFORMS Conference on Information Systems and Technology</i> (CIST), Indianapolis, United States, 2022.
      </>
    ),
  },
  {
    year: "2022",
    text: (
      <>
        Jingyuan Deng, Grace Gu, <b>Dandan Qiao</b>, “Wisdom Overlooked: Spillover Effects of Firm-Driven Contest on User Innovation and Crowd Education,” <i>INFORMS Conference on Information Systems and Technology</i> (CIST), Indianapolis, United States, 2022.
      </>
    ),
  },
  {
    year: "2022",
    text: (
      <>
        Jingyuan Deng, Grace Gu, <b>Dandan Qiao</b>, “Whom to Listen to and When? Empirically Studying User Innovation over Product Development Life Cycle,” <i>Seventeenth Symposium on Statistical Challenges in Electronic Commerce Research</i> (SCECR), Madrid, Spain, June 2022.
      </>
    ),
  },
  {
    year: "2020",
    text: (
      <>
        Lin Qiu, <b>Dandan Qiao</b>, Bernard C Y Tan, Andrew B. Whinston, “More than a Ride: An Investigation on Ride-Hailing Services and Racial Hate Crimes,” <i>Sixteenth Symposium on Statistical Challenges in Electronic Commerce Research</i> (SCECR), Madrid, Spain, June 2020.
      </>
    ),
  },
  {
    year: "2019",
    text: (
      <>
        Jason Chan, Shu He, <b>Dandan Qiao</b>, Andrew B. Whinston, “Shedding Light on the Dark: The Impact of Legal Enforcement on Darknet Transactions,” <i>Workshop on Information Systems and Economics</i> (WISE), Munich, Germany, December 2019.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, “Overcoming the Crowding-Out Effect of Monetary Incentive on Pro-Social Behavior,” <i>International Conference on Information Systems</i>, Seoul, South Korea, December 2017.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        <b>Dandan Qiao</b>, “Applying Financial Incentives in Online Pro-social Contexts: Crowdingout Effects and Overcoming Strategies,” <i>International Conference on Information Systems Doctoral Consortium</i>, Seoul, South Korea, December 2017.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, “Crowding-Out Effect Mitigation through Intervention Strategies,” <i>INFORMS Conference on Information Systems and Technology</i> (CIST), Houston, TX, October 2017.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        Samuel L. Blazek, <b>Dandan Qiao</b>, Andrew B. Whinston Guoqing Chen, “Dark Net Markets: Protect Your Privacy in Future E-commerce,” <i>Workshop on Information Systems and Economics</i> (WISE), Seoul, South Korea, December 2017.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        Samuel L. Blazek, <b>Dandan Qiao</b>, Deepayan Chakrabarti, Andrew B. Whinston, “The Price of Privacy: Insights from Anonymous Marketplace,” <i>Annual Digital Information Policy Scholars Conference</i>, George Mason University, Arlington, VA, April 2017.
      </>
    ),
  },
  {
    year: "2017",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, “Incentive Provision and Pro-Social Behaviors,” <i>Hawaii International Conference on System Sciences</i> (HICSS), Big Island, HI, January 2017.
      </>
    ),
  },
  {
    year: "2016",
    text: (
      <>
        <b>Dandan Qiao</b>, Shun-Yang Lee, Andrew B. Whinston, Qiang Wei, “Incentive Provision and Pro-Social Behaviors,” <i>INFORMS Conference on Information Systems and Technology</i> (CIST), Nashville, TN, November 2016.
      </>
    ),
  },
  {
    year: "2015",
    text: (
      <>
        <b>Dandan Qiao</b>, Jin Zhang, “A Novel Keyword Suggestion Method to Achieve Competitive Advertising on Search Engines,” <i>The Pacific Asia Conference on Information Systems</i> (PACIS), Singapore, July 2015.
      </>
    ),
  },
  {
    year: "2015",
    text: (
      <>
        <b>Dandan Qiao</b>, Qiang Wei, Jin Zhang, Guoqing Chen, “A Bipartite Graph Based Competitiveness Degrees Analysis with Query Logs on Search Engine,” <i>Conference of the International Fuzzy Systems Association and the European Society for Fuzzy Logic and Technology</i> (IFSA-EUSFLAT), Gij´on, Spain, June 2015.
      </>
    ),
  },
];

export const ResearchSection = forwardRef<HTMLElement>(function ResearchSection(_, ref) {
  return (
    <section id="research" ref={ref} className="research-section">
      <div className="section-kicker">
        <span>02</span>
        <p>Research</p>
        <div />
      </div>

      <PublicationTimeline
        title="Journal Publications"
        items={journalPublications}
        clickable
      />

      <PublicationTimeline
        title="Conference Publications"
        items={conferencePublications}
      />
    </section>
  );
});

type PublicationTimelineProps = {
  title: string;
  items: Array<{
    year: string;
    text: ReactNode;
    href?: string;
  }>;
  clickable?: boolean;
};

function PublicationTimeline({
  title,
  items,
  clickable = false,
}: PublicationTimelineProps) {
  return (
    <div className="publication-block">
      <h3 className="publication-heading">{title}</h3>

      <div className="publication-timeline">
        {items.map((item, index) => {
          const cardContent = (
            <>
              <p>{item.text}</p>
              <span>{item.year}</span>
            </>
          );

          return (
            <div className="publication-row" key={`${item.year}-${index}`}>
              <div className="timeline-marker">
                <span>{item.year}</span>
                <i />
              </div>

              {clickable && item.href ? (
                <a
                  className="publication-card publication-card-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cardContent}
                </a>
              ) : (
                <article className="publication-card">{cardContent}</article>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}