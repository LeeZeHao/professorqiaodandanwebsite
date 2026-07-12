import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { forwardRef } from "react";
import type { SectionId } from "../data/siteData";

type AboutSectionProps = {
  onNavigate: (id: SectionId) => void;
};

export const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  function AboutSection({ onNavigate }, ref) {
    return (
      <section id="about" ref={ref} className="about-hero">
        <div className="portrait-wrap">
          <img
            src="profile.jpg"
            alt="Qiao Dandan"
            className="portrait-image"
          />
        </div>

        <div className="status-pill">
          <span className="status-dot" />
          Associate Professor, Information Systems & Analytics @ National University of Singapore
        </div>

        <h1 className="about-title">Qiao Dandan</h1>

        <div className="about-content">
          <div className="about-block">
            <h2>Position</h2>
            <ul>
              <li>
                Associate Professor, Information Systems & Analytics, National University
                of Singapore, 2024.07–Present
              </li>
              <li>
                Assistant Professor, Information Systems & Analytics, National University
                of Singapore, 2018.07–2024.06
              </li>
            </ul>
          </div>

          <div className="about-block">
            <h2>Education</h2>
            <ul>
              <li>Ph.D., Information Systems, Tsinghua University, 2018</li>
              <li>
                Visiting Student, Information Systems, The University of Texas at Austin,
                2015.08–2017.09
              </li>
              <li>
                B.S., Information Systems, Beijing University of Posts and
                Telecommunications, 2012
              </li>
            </ul>
          </div>

          <div className="about-block">
            <h2>Research Interests</h2>
            <ul>
              <li>
                <b>Topics:</b> Digital Platform Design, AI and Business Application, Computatioinal Social Science
              </li>
              <li>
                <b>Methodologies:</b> Computational Methods, Econometric Analysis, Field Experiments
              </li>
            </ul>
          </div>
        </div>

        <div className="about-actions">
          <button
            className="primary-about-action"
            onClick={() => onNavigate("research")}
          >
            <ArrowUpRight size={17} />
            Research
          </button>

          <a
            className="secondary-about-action"
            href="https://www.google.com/maps/place/COM+2/@1.2942824,103.7741012,15z/data=!4m6!3m5!1s0x31da1af8b4dca745:0x138ac77cdd89a8f1!8m2!3d1.2942824!4d103.7741012!16s%2Fg%2F11c6lw2s04?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={17} />
            COM2-04-15
          </a>

          <a
            className="secondary-about-action"
            href="https://www.comp.nus.edu.sg/disa/people/qiaodd/"
            target="_blank"
            rel="noreferrer"
          >
            <ArrowUpRight size={17} />
            School Page
          </a>

          <a
            className="secondary-about-action"
            href="mailto:qiaodd@nus.edu.sg"
          >
            <Mail size={17} />
            qiaodd@nus.edu.sg
          </a>

          <a
            className="secondary-about-action"
            href="https://scholar.google.com/citations?user=2ESyqbEAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <ArrowUpRight size={17} />
            Google Scholar
          </a>
        </div>
      </section>
    );
  }
);