"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from '@tabler/icons-react';

export function ProjectsNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <div className="mx-auto max-w-5xl px-4">
        <div className="h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="text-white/60 hover:text-white">
            <Link href="/" className="flex items-center gap-2">
              <IconArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 