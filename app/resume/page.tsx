import Link from 'next/link';
import './resume.css';

const roles = [
  {
    period: '2024 — Present',
    title: 'Senior Product Manager & Business Operator',
    company: 'IranHotelOnline',
    description:
      'Leading product systems and supply operations across pricing, inventory, provider integrations, CRM, dashboards and cross-functional execution in TravelTech.',
  },
  {
    period: '2019 — 2023',
    title: 'Founding Product & Project Lead',
    company: 'SmartSync / JRLead',
    description:
      'Built CRM products, internal business tools and tailored digital systems from discovery and product definition through delivery and iteration.',
  },
  {
    period: '2018 — 2021',
    title: 'Co-founder & Operations Manager',
    company: 'Brace',
    description:
      'Designed operating processes, managed delivery and helped build teams around digital products and service operations.',
  },
];

const skills = [
  'Product strategy',
  'Product operations',
  'TravelTech & marketplaces',
  'CRM & workflow design',
  'Dashboards & KPI systems',
  'Supply-chain operations',
  'AI-assisted automation',
  'Cross-functional leadership',
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-nav">
        <Link href="/">MBZ / Portfolio</Link>
        <a href="mailto:mbz1372@gmail.com">mbz1372@gmail.com</a>
      </header>

      <section className="resume-hero">
        <p>PRODUCT × OPERATIONS × TRAVELTECH</p>
        <h1>Mohammad Bagher Zolfaghari</h1>
        <h2>Senior Product Manager & Business Operator</h2>
        <div className="resume-meta">
          <span>Mashhad, Iran</span>
          <a href="https://www.linkedin.com/in/mbzolfaghari">LinkedIn</a>
          <a href="https://github.com/mbz1372">GitHub</a>
          <a href="mailto:mbz1372@gmail.com">Email</a>
        </div>
      </section>

      <section className="resume-summary">
        <h3>Profile</h3>
        <p>
          Product and operations leader with a strong background in hospitality, marketplaces and operationally intensive products. I connect product strategy, data, workflow design and cross-functional delivery to build systems that improve visibility, execution and business outcomes.
        </p>
      </section>

      <section className="resume-grid">
        <div>
          <h3>Experience</h3>
          <div className="resume-roles">
            {roles.map((role) => (
              <article key={role.period}>
                <span>{role.period}</span>
                <div>
                  <small>{role.company}</small>
                  <h4>{role.title}</h4>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <h3>Core capabilities</h3>
          <div className="resume-skills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="resume-education">
            <h3>Education</h3>
            <strong>B.Sc. Mechanical Engineering</strong>
            <p>Ferdowsi University of Mashhad</p>
          </div>
        </aside>
      </section>

      <footer className="resume-footer">
        <strong>Open to remote product and business operations roles.</strong>
        <Link href="/">Back to portfolio</Link>
      </footer>
    </main>
  );
}
