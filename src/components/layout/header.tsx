"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-sm font-semibold text-primary sm:text-base">
          {siteConfig.name}
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-foreground/80 hover:text-primary",
                pathname === item.href && "font-semibold text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact">Plan een kennismaking</ButtonLink>
        </div>

        <button
          className="rounded-md p-2 text-primary hover:bg-muted md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Open navigatiemenu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary",
                  pathname === item.href && "bg-muted font-semibold text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
