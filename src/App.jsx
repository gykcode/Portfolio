import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'Python', 'Django', 'TypeScript', 'GraphQL'];

const experiences = [
  {
    title: 'Software Developer / Full Stack Engineer',
    company: 'Microgenesis Business Systems',
    range: '2022 – Present',
    achievements: [
      'Business Automation & Compliance: Engineered the Chronos workforce management system, automating payroll computation to ensure 100% alignment with labor regulations and optimizing resource allocation.',
      'Financial Data Security: Developed a high-security data pipeline for China Bank using FastAPI and SFTP, protecting sensitive attendance records via encryption and eliminating system noise to ensure data integrity.',
      'Operational Efficiency: Architected a real-time Queueing Management System using Socket.IO, reducing manual oversight by synchronizing kiosks and monitors to orchestrate civic service flows end-to-end.',
      'System Modernization: Spearheaded the refactoring of legacy applications, resulting in significant gains in performance and scalability while implementing cloud-based deployment to support continuous delivery.',
      'Facility Security: Designed and deployed a Park Access Management System to monitor and log vehicle/personnel transit, enhancing facility security through automated entry/exit tracking.',
      'Cross-Functional Leadership: Partnered with UI/UX and backend teams within an Agile framework to transform complex design concepts into high-performance, accessible web applications for diverse platforms.',
    ],
  },
  {
    title: 'IT Staff',
    company: 'Catanduanes State University',
    range: '2021 – 2022',
    achievements: [
      'Workflow Optimization: Boosted departmental productivity by implementing software solutions to centralize bug tracking and feature requests, replacing fragmented manual processes.',
      'Regulatory Transparency: Ensured 100% compliance with government procurement standards by managing project disclosures on the PhilGEPS platform.',
      'Technical Support Excellence: Maintained high user retention and satisfaction by resolving critical technical issues and securing bidder data within the BAC databases.',
    ],
  },
];

const projects = [
  {
    title: 'Chronos Time Tracking System',
    isPrivate: true,
    description:
    "Internal project and workforce management system with task/time tracking, resource allocation, and reporting features to optimize team productivity and project delivery, and compliance-based payroll computation with labor regulations, and with realtime notifications and alerts to keep teams on track and informed.",
    tech: ['React', 'TypeScript', 'Django', 'Tailwind CSS', 'PostgreSQL'],
    githubLink: 'https://github.com/gykcode/chronos-time-tracking-system',
    demoLink: 'https://chronos-demo.example.com',
  },
  {
    title: 'Research and Document Management System',
    isPrivate: true,
    description:
      'Django-based document and workflow management system for NDCP, supporting document lifecycle tracking, role-based access control, OTP-secured authentication, activity/session logging, and SharePoint integrated storage with real-time notifications and alerts.',
    tech: ['Django', 'Bootstrap', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: null, // kept private until ready
    demoLink: null,
  },
  {
    title: 'Queueing Management System',
    isPrivate: true,
    description:
    'Designed and implemented an Express/MongoDB/EJS administrative dashboard that keeps counters, kiosks, and monitors in sync via Socket.IO while guarding CRUD transaction-type workflows behind role-based sessions and OTP-backed email recovery—enabling operators to orchestrate civic service queues end to end.',
    tech: ['Express', 'Node', 'MongoDB', 'EJS(Embedded JavaScript)'],
    githubLink: null,
    demoLink: null,
  },
  {
    title: 'China Bank Company Data Integration Project',
    isPrivate: true,
    description:
      'Built a FastAPI-based callback receiver that normalises HCP access-controller events, gates out heartbeat noise, and batches meaningful attendance records into encrypted Excel reports delivered to partners over SFTP.',
    tech: ['Python', 'FastAPI'],
    githubLink: null,
    demoLink: null,
  },
  {
    title: 'Park Access Management System',
    isPrivate: true,
    description:
      'A Park Access Management System that controls, monitors, and logs the entry and exit of people or vehicles within a facility.',
    tech: ['Django', 'Bootstrap', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: null,
    demoLink: null,
  },
  {
    title: 'Personal Projects Collection',
    isPrivate: false,
    description:
      'A travel-focused showcase framing destinations, itineraries, and mini experiences with immersive hero art and animated cards.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubLink: null,
    demoLink: 'https://gykcode.github.io/Personal_Projects/',
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/gykcode/',
    icon: (
      <path d="M12 .5C5.65.5.5 5.8.5 12.35c0 5.24 3.3 9.68 7.87 11.25.58.11.79-.26.79-.58 0-.29-.01-1.04-.02-2.05-3.2.71-3.88-1.58-3.88-1.58-.53-1.37-1.28-1.73-1.28-1.73-1.05-.74.08-.73.08-.73 1.16.09 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.77.4-1.28.72-1.57-2.56-.3-5.25-1.31-5.25-5.83 0-1.29.45-2.34 1.19-3.16-.12-.3-.52-1.51.11-3.14 0 0 .97-.32 3.18 1.21a10.8 10.8 0 0 1 5.8 0c2.2-1.53 3.17-1.21 3.17-1.21.63 1.63.23 2.84.11 3.14.74.82 1.19 1.87 1.19 3.16 0 4.53-2.69 5.52-5.26 5.82.41.37.78 1.1.78 2.21 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.8.58 4.56-1.57 7.86-6.01 7.86-11.25C23.5 5.8 18.35.5 12 .5Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iggymendoza',
    icon: (
      <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46 2.48 2.48 0 0 1 4.98 3.5ZM2.75 9.75h4.46v11.75H2.75Zm7.25 0h4.28v1.6h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86v7.61h-4.46v-6.74c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.6 1.76-2.6 3.57v6.86H10Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kumander.cobra',
    icon: (
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4Zm8.88 1.62a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    ),
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [pointerGlow, setPointerGlow] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (topVisible) {
          setActiveSection(topVisible.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPointerGlow({
        x: event.clientX,
        y: event.clientY,
        active: true,
      });
    };

    const handlePointerLeave = () => {
      setPointerGlow((current) => ({ ...current, active: false }));
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 ${
          pointerGlow.active ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(
              800px circle at ${pointerGlow.x}px ${pointerGlow.y}px,
              rgba(31, 60, 139, 0.16),
              rgba(31, 75, 170, 0.1) 18%,
              rgba(3, 39, 54, 0.06) 32%,
              transparent 52%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 lg:flex-row lg:px-10">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[320px] lg:flex-col lg:justify-between lg:py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
                Software Developer
              </p>
                <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-lightestSlate sm:text-3xl">
                  Iggy Francis Mendoza
                </h1>
                <p className="mt-3 max-w-xs text-base leading-7 text-lightSlate">
                  Building thoughtful digital experiences with clean code, accessible systems, and modern UI.
                </p>
              </div>
            </div>

            <nav className="hidden lg:block">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                      href={`#${item.id}`}
                    >
                      <span className="nav-link-line" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 lg:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                aria-label={link.label}
                className="text-lightSlate transition-all duration-300 hover:-translate-y-0.5 hover:text-lightestSlate"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 lg:pl-16 lg:pt-16">
          <div className="space-y-28">
            <section className="scroll-mt-24" id="about">
              {/* <h2 className="section-title">About</h2> */}
              <div className="mt-12 grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
                <div className="space-y-5 text-base leading-8 text-slate">
                  <p>
                    I build digital interfaces that are calm, precise, and engineered for high-stakes utility. My work sits at the intersection of frontend architecture, secure backend logic, and business automation, with a strict bias toward accessibility and data integrity from the start.
                  </p>
                  <p>
                   Over the past few years, I’ve helped organizations transform complex business requirements—from labor law compliance to encrypted banking integrations—into intuitive experiences for real users. I care about details that scale, whether it’s a resilient component API in React or a mission-critical data pipeline in Python.
                  </p>
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-lightSlate">
                      Technologies I enjoy working with
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card mx-auto w-full max-w-sm p-5">
                  <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-slate/10">
                    <img
                      src="/dp2.jpg"
                      alt="Iggy Francis Mendoza"
                      className="aspect-[4/5] w-full object-cover transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-24" id="experience">
              <h2 className="section-title">Experience</h2>
              <div className="mt-12 space-y-8 border-l border-white/10 pl-6">
                {experiences.map((job) => (
                  <article
                    key={`${job.company}-${job.range}`}
                    className="experience-entry group relative rounded-2xl p-6"
                  >
                    <span className="experience-dot absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-navy bg-accent" />
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="experience-heading text-xl font-semibold text-lightestSlate">
                          {job.title}
                        </h3>
                        <p className="experience-company text-accent">{job.company}</p>
                      </div>
                      <p className="experience-range text-sm uppercase tracking-[0.25em] text-lightSlate">
                        {job.range}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate transition-colors duration-300 group-hover:text-lightSlate sm:text-base">
                      {job.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="scroll-mt-24" id="projects">
              <h2 className="section-title">Projects</h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.title} className="card flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-lightestSlate">{project.title}</h3>
                      <div className="flex shrink-0 items-center gap-3">
                        {project.isPrivate ? (
                          <div className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate">
                            Private
                          </div>
                        ) : (
                          <>
                            {project.githubLink && (
                              <a
                                className="text-sm text-slate transition-colors duration-300 hover:text-accent"
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.title} GitHub link`}
                              >
                                GitHub
                              </a>
                            )}
                            {project.demoLink && (
                              <a
                                className="text-sm text-slate transition-colors duration-300 hover:text-accent"
                                href={project.demoLink}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.title} demo link`}
                              >
                                Demo
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <p className="flex-1 text-sm leading-7 text-slate sm:text-base">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="scroll-mt-24 pb-10" id="contact">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-accent">What&apos;s Next?</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-lightestSlate sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate">
                  I&apos;m always open to discussing new products, creative collaborations, or
                  frontend roles where thoughtful user experience matters. If you have something in
                  mind, let&apos;s talk.
                </p>
                <a className="primary-button mt-10" href="mailto:mendozo.iggyfrancis@gmail.com">
                  Say Hello
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
