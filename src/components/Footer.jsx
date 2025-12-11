import React from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yuusuf-abdullaahi-7a238a37a/",
  },
  {
    icon: <Twitter size={20} />,
    name: "Twitter",
    href: "https://x.com/JosephAbdullaah",
  },
  {
    icon: <Github size={20} />,
    name: "GitHub",
    href: "https://github.com/Joseph-Abdullaah",
  },
];

function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center gap-6 text-white/80 z-10">
      <h2 className="text-3xl font-bold text-white">Let's Connect!</h2>
      <a
        href="mailto:someone@gmail.com"
        className="flex items-center gap-2 hover:text-white transition-colors"
      >
        <Mail size={20} />
        <span>josephabdullaahi@gmail.com</span>
      </a>
      <div className="flex gap-x-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
