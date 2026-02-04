'use client'

import { motion } from 'framer-motion'

export default function About() {
  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Node.js',
    'Git',
    'Figma',
    'Vercel',
    'VS Code',
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">Who I Am</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center text-9xl card-glow">
              👨‍💻
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              안녕하세요, <span className="text-gradient">Your Name</span>입니다
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 모던 웹 기술과 세련된 인터랙션을 통해 기억에 남는 디지털 경험을 만들어가는 것에 열정을 가지고 있습니다.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              React, Next.js, TypeScript를 주력으로 사용하며, 최신 웹 표준과 접근성을 준수하는 고품질 코드를 작성합니다. 지속적인 학습과 성장을 추구하며, 팀과의 협업을 통해 더 나은 결과물을 만들어냅니다.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-[var(--bg-secondary)] p-6 rounded-2xl text-center card-glow hover:shadow-[0_0_40px_rgba(255,77,166,0.3)] transition-all cursor-pointer"
              >
                <p className="font-display font-semibold">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
