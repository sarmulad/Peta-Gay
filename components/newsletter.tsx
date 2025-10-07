"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground mb-4 leading-tight">
                Get My Free Essential Mindset Exercises
              </h2>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-foreground border-0 flex-1 h-12 px-4"
                  required
                />
                <Button
                  type="submit"
                  className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 whitespace-nowrap"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
