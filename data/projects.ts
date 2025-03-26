export interface Project {
  id: number;
  title: string;
  Client: string;
  description: string;
  tags: string[];
  image: string;
  type: "web" | "graphic";
  liveDemo?: string;
  github?: string;
}

export const projects: { web: Project[]; graphic: Project[] } = {
  web: [
    {
      id: 5,
      title: "Signature Studio",
      Client: "PERSONAL PROJECT",
      description: "Web application enabling users to create and customize digital signatures for documents.",
      tags: ["React", "Tailwind", "TypeScript", "ShadCN", "Lucid", "Framer Motion"],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739116768/Signature_dnjwwp.png",
      type: "web",
      liveDemo: "https://signature-studio-i4oji52qo-godfreycreates-projects.vercel.app/",
    },
    {
      id: 1,
      title: "Invoice System",
      Client: "MT LEGACY LOGISTICS",
      description: "Full-stack system for invoice generation, client management, and analytics with automated PDF creation.",
      tags: [
        "React Vite",
        "Node.js",
        "php",
        "PostgreSQL",
        "ShadCN",
        "Tailwind",
        "Supabase",
        "Lucid",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739116761/mtinvoice_bo6sfd.png",
      type: "web",
      liveDemo: "https://mtlegacylogistics.co.za/",
    },
    {
      id: 3,
      title: "Accommodation Booking Web App",
      Client: "HLENGWE RESEARCH AND TRAINING EXPERTS",
      description: "Modern booking platform with real-time availability, secure payments, and SEO-optimized responsive design.",
      tags: [
        "Next.js",
        "Node.js",
        "Tailwind",
        "ShadCN",
        "Lucid",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1736669212/Screenshot_2025-01-11_204233_zdrbxi.png",
      type: "web",
      liveDemo: "https://elimpinkhouse.com/",
    },
    {
      id: 4,
      title: "News Website",
      Client: "Anonymous",
      description: "Custom WordPress news site with responsive design, content management, and social media integration.",
      tags: [
        "WordPress",
        "php",
        "MySQL",
        "Elementor",
        "Many more",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739116773/news_qe2o5g.png",
      type: "web",
      liveDemo: "http://thembisiaga.com/",
    },
    {
      id: 6,
      title: "My Portfolio",
      Client: "PERSONAL PROJECT",
      description: "Modern portfolio showcasing web development and design projects with clean dark mode interface.",
      tags: ["Next.js", "Tailwind", "TypeScript", "ShadCN", "Lucid", "Framer Motion"],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739116750/Screenshot_2025-02-09_175645_tojnvj.png",
      type: "web",
      liveDemo: "https://godfreysiaga.my.id",
    },
    {
      id: 11,
      title: "Invoice System",
      Client: "PERSONAL PROJECT",
      description: "Modern portfolio showcasing web development and design projects with clean dark mode interface.",
      tags: ["Next.js", "Tailwind", "TypeScript", "ShadCN", "Lucid", "Framer Motion"],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739117793/Screenshot_2025-02-09_181557_gyq51x.png",
      type: "web",
      liveDemo: "https://invoice.godfreysiaga.my.id",
    },
  ],
  graphic: [
    {
      id: 7,
      title: "Church Poster",
      Client: "FULLNESS OFCHRIST MINISTRY",
      description: "Vibrant church poster design with effective visual hierarchy and engaging spiritual aesthetic elements.",
      tags: [
        "Poster",
        "Flyer Design",
        "Typography",
        "Photoshop",
        "Illustrator",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1736727008/FB_IMG_1666166686291_qlqurt.jpg",
      type: "graphic",
    },
    {
      id: 8,
      title: "Elim Pink House Logo",
      Client: "HLENGWE RESEARCH AND TRAINING EXPERTS",
      description: "Modern luxury guest house logo incorporating pink hues and sophisticated typography elements.",
      tags: [
        "Branding",
        "Logo Design",
        "Typography",
        "Photoshop",
        "Illustrator",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1735640409/3d_glass_1.jpg",
      type: "graphic",
    },
    {
      id: 9,
      title: "MT Legacy Logistics Logo",
      Client: "MT LEGACY LOGISTICS",
      description: "Professional logistics company logo featuring transport elements and bold typography for brand.",
      tags: [
        "Branding",
        "Logo Design",
        "Typography",
        "Photoshop",
        "Illustrator",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739174929/logo-no-background-2_ewlenr.png",
      type: "graphic",
    },
    {
      id: 10,
      title: "My Logo",
      Client: "PERSONAL PROJECT",
      description: "Minimalist personal logo combining clean typography and geometric shapes for professional identity.",
      tags: [
        "Branding",
        "Logo Design",
        "Typography",
        "Photoshop",
        "Illustrator",
      ],
      image: "https://res.cloudinary.com/dnuapiuok/image/upload/v1739116776/app-logo-2_bzxwzn.png",
      type: "graphic",
    },
  ],
}; 