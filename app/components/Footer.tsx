import { Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-6 text-sm text-secondary-text">
              <a 
                href="mailto:taufiq2004.21@gmail.com" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                taufiq2004.21@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                New Delhi, IN
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/toffee-k21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/taufiq-hassan-311221295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://leetcode.com/u/tfq21/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-foreground transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <ThemeToggle />
            <div className="text-xs text-secondary-text space-y-1 text-left md:text-right">
              <p>Built with Next.js & Tailwind CSS</p>
              <p>Last updated {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
