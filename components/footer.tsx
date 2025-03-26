"use client";

import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconMapPin } from '@tabler/icons-react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#030303]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Gvsiaga Logo" width={32} height={32} />
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Full Stack Developer & Graphic Designer passionate about creating innovative digital solutions that combine functionality with stunning design.
              </p>
              <div className="flex items-center gap-2 text-white/40">
                <IconMapPin className="h-4 w-4" />
                <span>Gauteng, South Africa</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="px-0 md:px-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-white/60 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#certifications" className="text-white/60 hover:text-white transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="px-0 md:px-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
              <div className="space-y-4">
                <Button className="w-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] text-white" asChild>
                  <Link href="mailto:godfreysiaga@icloud.com">
                    <IconMail className="h-4 w-4 mr-2" />
                    Email Me
                  </Link>
                </Button>
                <div className="flex gap-4">
                  <Link 
                    href="https://github.com/GodfreyCreates/" 
                    target="_blank"
                    className="bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] p-2 rounded-lg transition-colors"
                  >
                    <IconBrandGithub className="h-5 w-5 text-white" />
                  </Link>
                  <Link 
                    href="https://za.linkedin.com/in/godfrey-siaga-b478682b6" 
                    target="_blank"
                    className="bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] p-2 rounded-lg transition-colors"
                  >
                    <IconBrandLinkedin className="h-5 w-5 text-white" />
                  </Link>
                  <Link 
                    href="https://wa.me/27725499394" 
                    target="_blank"
                    className="bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] p-2 rounded-lg transition-colors"
                  >
                    <IconBrandWhatsapp className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] text-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Godfrey Siaga. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}