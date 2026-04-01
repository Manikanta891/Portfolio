import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Briefcase, GraduationCap, Wrench, Mail } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-12">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Manikanta Sandula
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-1">
              <span className="text-foreground font-medium">Full Stack Developer | AI Explorer</span>
            </p>
            <p className="text-sm sm:text-base text-foreground">
              Building solutions with code and clarity
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              📍 India
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-foreground text-sm sm:text-base leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a focus on building scalable web applications
              and exploring the intersection of AI and software development. I specialize in creating
              efficient backend systems, responsive frontend interfaces, and AI-powered solutions.
            </p>
            <p>
              Currently exploring opportunities as a Full Stack Developer, where I bring experience
              in modern technologies like React, Node.js, Python, and AI/ML frameworks.
              I'm deeply interested in building intelligent applications and clean, maintainable code.
            </p>
            <p>
              I believe great software comes from understanding both the business needs and technical excellence.
              When I'm not coding, I'm learning new technologies and sharing knowledge through technical writing.
            </p>
          </div>

          {/* Experience */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              Experience
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  role: "Intern",
                  company: "OSI Digital",
                  period: "Jan 2026 - Mar 2026",
                  // type: "Looking for roles",
                  description:
                    "Built an E-Request Ticketing System to streamline request handling, track issues efficiently, and improve response time through structured workflows.",
                  skills: ["SQL", "Linux", "Java", "Git", "Coding Principles"]
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="relative pl-5 border-l border-border animate-fade-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute left-[-3px] top-1 w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-xs font-mono text-primary mb-1.5 font-medium">{job.period}</p>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    @ {job.company} 
                    {/* <span className="text-xs font-normal">· {job.type}</span> */}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary/70 text-secondary-foreground font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              Education
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  degree: "Bachelor of Technology / Engineering",
                  field: "Computer Science and Engineering",
                  school: "SRKR Engineering College",
                  period: "2022 — 2026",
                  location: "Bhimavaram, Andhra Pradesh"
                },
              ].map((edu, i) => (
                <div key={i} className="border-l border-border pl-5">
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{edu.field}</p>
                  <p className="text-xs sm:text-sm text-foreground mt-1">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
              Skills & Technologies
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {["Java", "SQL", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "REST APIs", "FastAPI"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Backend & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB","MySQL", "Git", "Shell Scripting", "Postman"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "LLM", "RAG"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "Redis", "Docker", "Git", "Postman"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg border border-border/50 bg-card/50">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in touch
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Open to collaborations, project opportunities, or just a friendly chat about tech!
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=manikantacsec@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Email
            </a>
              <a 
                href="https://github.com/Manikanta891" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/manikanta-sandula/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
