import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Award,
  Send
} from 'lucide-react';
import { ImageWithFallback } from './components/effect/ImageWithFallback';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr,auto] gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl text-foreground">
                  Taufiq Hassan
                </h1>
                <h2 className="text-2xl md:text-3xl text-foreground">
                  Full-Stack Cloud Engineer building scalable real-time systems
                </h2>
                <p className="text-lg text-secondary-text max-w-2xl">
                  Founder of Velyx, a real-time SaaS platform. Specializing in cloud-native architectures,
                  WebSocket infrastructure, and production-grade distributed systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#velyx"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors"
                >
                  View Velyx
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-card-border shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1562228802-4b1052d0f845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjA3NDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Taufiq Hassan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-sm uppercase tracking-wider text-secondary-text">
              Overview
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Full-stack engineer with deep expertise in cloud-native backend systems and real-time architectures.
              I build production-ready SaaS platforms that prioritize scalability, performance, and maintainability.
              My work spans from WebSocket infrastructure and distributed event streaming to serverless deployment
              and API design. I bring a product mindset to technical problems, ensuring systems are not just
              functional but delight users and support business goals.
            </p>

            <div className="flex items-start gap-3 pt-4">
              <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground">
                  AWS Certified Cloud Practitioner (CLF-C02)
                </p>
                <p className="text-sm text-secondary-text">
                  Score: 914/1000 · Verified credential
                </p>
              </div>
            </div>

            <p className="text-secondary-text">
              Active open-source contributor · Passionate about system design, clean architecture, and developer experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work - Velyx */}
      <section id="velyx" className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Featured Work
              </h3>
              <h2 className="text-4xl text-foreground">Velyx</h2>
              <p className="text-xl text-secondary-text">
                Real-time collaboration platform for distributed teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-xl overflow-hidden border border-card-border shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MTIwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Velyx Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-foreground">The Challenge</h4>
                  <p className="text-secondary-text leading-relaxed">
                    Modern teams need instant synchronization across documents, presence awareness, and
                    low-latency updates without browser refreshes. Traditional request-response patterns
                    can't deliver this experience at scale.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-foreground">Technical Approach</h4>
                  <ul className="space-y-3 text-secondary-text">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>WebSocket-first architecture with Redis pub/sub for horizontal scaling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Operational transformation for conflict-free concurrent editing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>JWT-based authentication with refresh token rotation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>AWS Lambda + API Gateway for serverless REST endpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>PostgreSQL with read replicas and connection pooling (PgBouncer)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Docker containerization with NGINX reverse proxy</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-foreground">Impact</h4>
                  <p className="text-secondary-text leading-relaxed">
                    Deployed to production serving 2,000+ concurrent connections with sub-100ms message
                    latency. System maintains 99.9% uptime with automated health checks and graceful degradation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://velyx.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Product
                  </a>
                  <a
                    href="https://github.com/toffee-k21/velyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Architecture
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="work" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Selected Projects
              </h3>
              <h2 className="text-4xl text-foreground">Additional Work</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="space-y-4 p-6 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-colors">
                <div className="aspect-video rounded-lg overflow-hidden border border-card-border">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjYwMzkxODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CloudStream Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-foreground">CloudStream Analytics</h4>
                <p className="text-secondary-text">
                  Real-time data pipeline processing 50K events/second using Kafka, Apache Flink,
                  and TimescaleDB. Built custom dashboards with React and WebSocket streaming.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Kafka</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Flink</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">TimescaleDB</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">React</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    GitHub <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="space-y-4 p-6 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-colors">
                <div className="aspect-video rounded-lg overflow-hidden border border-card-border">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NjYxMjQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Microservices Orchestrator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-foreground">Microservices Orchestrator</h4>
                <p className="text-secondary-text">
                  Service mesh for 15+ microservices with automated deployment, circuit breakers,
                  and distributed tracing. Reduced deployment time by 70% with zero-downtime releases.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Docker</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Kubernetes</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Istio</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Prometheus</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    Case Study <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    GitHub <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="space-y-4 p-6 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-colors">
                <div className="aspect-video rounded-lg overflow-hidden border border-card-border bg-muted flex items-center justify-center">
                  <code className="text-accent">{"{ API }"}</code>
                </div>
                <h4 className="text-foreground">GraphQL Federation Gateway</h4>
                <p className="text-secondary-text">
                  Unified API layer aggregating 8 backend services with intelligent caching,
                  rate limiting, and request batching. Achieved 40% reduction in API calls.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">GraphQL</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Apollo</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Redis</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Node.js</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    Documentation <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    GitHub <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="space-y-4 p-6 rounded-xl border border-card-border bg-card hover:border-accent/50 transition-colors">
                <div className="aspect-video rounded-lg overflow-hidden border border-card-border bg-muted flex items-center justify-center">
                  <code className="text-accent">{"<ML />"}</code>
                </div>
                <h4 className="text-foreground">ML Inference Pipeline</h4>
                <p className="text-secondary-text">
                  Serverless ML inference service on AWS Lambda processing 100K+ predictions daily.
                  Integrated TensorFlow models with S3, SQS, and DynamoDB for scalable predictions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">AWS Lambda</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">TensorFlow</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">Python</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-secondary-text">SQS</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    Architecture <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    GitHub <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Technical Skills
              </h3>
              <h2 className="text-4xl text-foreground">Core Capabilities</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-foreground">Frontend</h4>
                <p className="text-secondary-text leading-relaxed">
                  React, Next.js, TypeScript, Tailwind CSS, Redux, React Query,
                  Zustand, Vitest, Playwright
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground">Backend</h4>
                <p className="text-secondary-text leading-relaxed">
                  Node.js, Express, NestJS, GraphQL, REST APIs, WebSockets,
                  Socket.io, tRPC, Prisma, TypeORM
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground">Cloud & Infrastructure</h4>
                <p className="text-secondary-text leading-relaxed">
                  AWS (EC2, Lambda, S3, RDS, API Gateway, CloudWatch),
                  Docker, Kubernetes, Terraform, NGINX, Cloudflare
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground">Data & Streaming</h4>
                <p className="text-secondary-text leading-relaxed">
                  PostgreSQL, MongoDB, Redis, Apache Kafka, RabbitMQ,
                  TimescaleDB, Elasticsearch, DynamoDB
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground">DevOps & Monitoring</h4>
                <p className="text-secondary-text leading-relaxed">
                  CI/CD (GitHub Actions, GitLab), Datadog, Grafana,
                  Prometheus, Sentry, PagerDuty
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground">Tools & Practices</h4>
                <p className="text-secondary-text leading-relaxed">
                  Git, Agile/Scrum, System Design, Microservices,
                  Event-Driven Architecture, TDD, API Design
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Journey */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Journey
              </h3>
              <h2 className="text-4xl text-foreground">Professional Evolution</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-3 pb-8 border-b border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-foreground">Founder & Lead Engineer</h4>
                    <p className="text-secondary-text">Velyx</p>
                  </div>
                  <span className="text-sm text-secondary-text">2023 – Present</span>
                </div>
                <p className="text-secondary-text leading-relaxed">
                  Building a real-time collaboration SaaS from concept to production. Architected scalable
                  WebSocket infrastructure, implemented authentication systems, and deployed to AWS with
                  monitoring and CI/CD pipelines.
                </p>
              </div>

              <div className="space-y-3 pb-8 border-b border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-foreground">Backend Engineer</h4>
                    <p className="text-secondary-text">TechFlow Systems</p>
                  </div>
                  <span className="text-sm text-secondary-text">2021 – 2023</span>
                </div>
                <p className="text-secondary-text leading-relaxed">
                  Developed microservices for e-commerce platform handling 1M+ daily transactions.
                  Built event-driven systems with Kafka, optimized database queries reducing latency by 60%,
                  and mentored junior engineers.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-foreground">Full-Stack Developer</h4>
                    <p className="text-secondary-text">StartupLab</p>
                  </div>
                  <span className="text-sm text-secondary-text">2019 – 2021</span>
                </div>
                <p className="text-secondary-text leading-relaxed">
                  Shipped features across the stack for B2B SaaS products. Developed REST APIs,
                  React dashboards, and integrated third-party services. Participated in system
                  design reviews and sprint planning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Resume
              </h3>
              <h2 className="text-4xl text-foreground">Full Experience</h2>
            </div>
            <p className="text-secondary-text max-w-xl mx-auto">
              Download my complete resume with detailed project descriptions, technical skills,
              education, and references.
            </p>
            <a
              href="/taufiq-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-2 text-center">
              <h3 className="text-sm uppercase tracking-wider text-secondary-text">
                Get In Touch
              </h3>
              <h2 className="text-4xl text-foreground">Let's Connect</h2>
              <p className="text-secondary-text max-w-xl mx-auto">
                Open to full-time engineering roles, consulting opportunities, and technical discussions.
                Available for remote or hybrid positions.
              </p>
            </div>

            <div className="max-w-lg mx-auto space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors">
                <Send className="w-4 h-4" />
                Send Message
              </button>

              <p className="text-sm text-center text-secondary-text">
                Or email directly at{' '}
                <a href="mailto:taufiq2004.21@gmail.com" className="text-accent hover:text-accent-hover">
                  taufiq2004.21@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
