'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient mb-2">
              Your Name
            </h3>
            <p className="text-[var(--text-secondary)]">
              © 2026 Your Name. Made with{' '}
              <span className="text-red-500">♥</span>
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[var(--text-secondary)] mb-2">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
            <a
              href="#"
              className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
