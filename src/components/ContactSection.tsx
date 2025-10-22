"use client";

import { cn } from "@/lib/utils";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(
        "Message sent successfully! I will review your message and get back to you soon."
      );

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          🚀 Looking to collaborate or hire? Let’s connect and explore
          opportunities to build impactful projects together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <Link
                    href="mailto:adityashiyale20@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    adityashiyale20@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <Link
                    href="tel:+917219370887"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7219370887
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Warud, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Twitter className="h-5 w-5 text-primary" />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Github className="h-5 w-5 text-primary" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
