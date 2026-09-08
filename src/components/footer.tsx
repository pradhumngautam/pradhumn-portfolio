import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/pradhumngautam", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pradhumngautam/", icon: Linkedin },
  { label: "X", href: "https://x.com/iPradhumnGautam", icon: Twitter },
  { label: "Email", href: "mailto:pradhumngautam0506@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <>
      <footer className="portfolio-footer">
        <div>
          {socials.map(({ label, href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon /> {label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Pradhumn Gautam. All rights reserved.</p>
      </footer>
      <div className="dock-fade" />
      <nav className="social-dock" aria-label="Social links">
        {socials.map(({ label, href, icon: Icon }) => (
          <a aria-label={label} href={href} target="_blank" rel="noreferrer" key={label}>
            <Icon />
          </a>
        ))}
      </nav>
    </>
  );
};

export default Footer;
