"use client";

import { motion } from "framer-motion";
import { IconCircle, IconMapPin, IconMail, IconPhone } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: IconPhone,
    title: "WhatsApp",
    value: "+27 72 549 9394",
    href: "https://wa.me/27725499394",
  },
  {
    icon: IconMail,
    title: "Email",
    value: "contact@godfreysiaga.co.za",
    href: "mailto:contact@godfreysiaga.co.za",
  },
  {
    icon: IconMapPin,
    title: "Location",
    value: "South Africa",
    href: null,
  },
];

function ContactCard({ info, index }: { info: typeof contactInfo[0], index: number }) {
  const Content = () => (
    <div className={cn(
      "p-6 rounded-xl",
      "bg-white/[0.03] border border-white/[0.08]",
      "transform transition-all duration-300 hover:-translate-y-1",
      "group flex items-start gap-4"
    )}>
      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
        <info.icon className="w-6 h-6 text-rose-500/80" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1 text-white/90">{info.title}</h3>
        <p className="text-white/60 group-hover:text-white/80 transition-colors">
          {info.value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {info.href ? (
        <a href={info.href} target="_blank" rel="noopener noreferrer">
          <Content />
        </a>
      ) : (
        <Content />
      )}
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <div className="relative w-full bg-[#030303] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <IconCircle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Let&apos;s Work Together
          </h2>
          
          <p className="text-white/40">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} info={info} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}