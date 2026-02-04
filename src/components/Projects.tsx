'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Next.js와 Stripe를 활용한 현대적인 이커머스 플랫폼. 서버 컴포넌트와 스트리밍 SSR로 최적화된 성능을 제공합니다.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      category: 'Web',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '드래그앤드롭 칸반 보드와 실시간 협업 기능을 갖춘 태스크 관리 애플리케이션. WebSocket 기반 실시간 동기화.',
      tags: ['React', 'DnD-kit', 'Supabase', 'Framer Motion'],
      category: 'Web',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 데이터와 7일 예보를 제공하는 대시보드. 아름다운 데이터 시각화와 위치 기반 서비스.',
      tags: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      category: 'Web',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'React Native로 개발한 피트니스 트래킹 앱. 운동 기록, 통계 분석, 목표 설정 기능 제공.',
      tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
      category: 'Mobile',
      featured: false,
    },
  ]

  const categories = ['All', 'Web', 'Mobile']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Featured Projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-display font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-[var(--bg-secondary)] rounded-3xl overflow-hidden card-glow hover:shadow-[0_0_60px_rgba(77,159,255,0.3)] transition-all ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="p-8">
                {project.featured && (
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full text-sm font-semibold mb-4">
                    Featured
                  </span>
                )}
                
                <h3 className="text-3xl font-display font-bold mb-4">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[var(--bg-primary)] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors font-semibold"
                  >
                    View Project →
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/earhart123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--bg-secondary)] rounded-full font-display font-semibold hover:shadow-[0_0_40px_rgba(255,77,166,0.3)] transition-all"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
