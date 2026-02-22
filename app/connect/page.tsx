"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";
import * as styles from "./page.css";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/raju6991", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Email", url: "mailto:hello@example.com", icon: Mail },
];

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.page}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Let&apos;s Connect</h1>
        <p className={styles.subtitle}>
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you.
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Send a Message</h2>

          {submitted ? (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className={styles.successIcon}>✓</span>
              <p>Message sent successfully! I&apos;ll get back to you soon.</p>
              <button
                className={styles.resetButton}
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  required
                  rows={5}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div
          className={styles.infoSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoText}>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>

            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              <span>Available for new opportunities</span>
            </div>

            <div className={styles.responseTime}>
              <span className={styles.responseIcon}>⚡</span>
              <span>Usually responds within 24 hours</span>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Or find me on</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>
                    <link.icon size={18} />
                  </span>
                  <span className={styles.socialName}>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
