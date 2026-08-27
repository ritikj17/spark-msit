"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-full border border-accent bg-accent/15 text-accent shadow-glow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-7" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">
          Message Prepared
        </h3>
        <p className="text-sm text-ink-secondary max-w-sm">
          Thank you for reaching out! You can also connect directly with us through our official WhatsApp community or Instagram.
        </p>
        <Button
          type="button"
          variant="outline-accent"
          size="sm"
          onClick={() => setFormSubmitted(false)}
          className="mt-2"
        >
          Send Another Note
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-xs uppercase tracking-wider text-ink-secondary">
            Your Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="bg-base border-line focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-wider text-ink-secondary">
            Your Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="bg-base border-line focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-ink-secondary">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="bg-base border-line focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-xs uppercase tracking-wider text-ink-secondary">
          Your Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="bg-base border-line focus:border-accent resize-none"
        />
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Send Message →
        </Button>
      </div>
    </form>
  );
}
