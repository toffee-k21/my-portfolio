import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg text-foreground hover:text-accent transition-colors"
          >
            Taufiq Hassan
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('work')}
              className="text-sm text-secondary-text hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('velyx')}
              className="text-sm text-secondary-text hover:text-foreground transition-colors"
            >
              Velyx
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="text-sm text-secondary-text hover:text-foreground transition-colors"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-secondary-text hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
