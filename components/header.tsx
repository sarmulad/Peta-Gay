"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";
import Link from "next/link";
import clsx from "clsx";

interface HeaderProps {
  textColor?: string;
}

export function Header({ textColor = "text-foreground" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTextColor = scrolled ? "text-black" : textColor;

  const linkClasses = clsx(
    "text-sm hover:text-primary transition-colors",
    activeTextColor
  );

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "bg-white border-gray-200 shadow-sm"
            : "backdrop-blur-sm border-border"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1
                  className={clsx(
                    "font-serif text-2xl lg:text-3xl italic transition-colors duration-300",
                    activeTextColor
                  )}
                >
                  Peta-Gay Roberts
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className={linkClasses}>
                Home
              </Link>
              <Link href="/about" className={linkClasses}>
                About
              </Link>
              <Link href="/services" className={linkClasses}>
                Services
              </Link>
              <Link href="/events" className={linkClasses}>
                Events
              </Link>
              <Link href="/contact" className={linkClasses}>
                Contact
              </Link>
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                BOOK APPOINTMENT
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={clsx("h-6 w-6", activeTextColor)} />
              ) : (
                <Menu className={clsx("h-6 w-6", activeTextColor)} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border bg-white">
              <div className="flex flex-col gap-4">
                {["Home", "About", "Services", "Events", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/${
                        item.toLowerCase() === "home" ? "" : item.toLowerCase()
                      }`}
                      className={clsx(
                        "text-sm hover:text-primary transition-colors text-black"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}
                <Button
                  onClick={() => {
                    setBookingModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                >
                  BOOK APPOINTMENT
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
    </>
  );
}
