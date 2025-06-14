'use client'

import SocialMedia from '@/components/SocialMedia'
import { ThemeToggle } from '@/components/ThemeToggle'
import { AnimateIn } from '@/components/animation/AnimationIn'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const visibleProjects = projects
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false)
  const initialExperienceCount = 2
  const visibleExperience = isExperienceExpanded
    ? experience
    : experience.slice(0, initialExperienceCount)

  return (
    <main className='max-w-xl mx-auto px-4 py-4 mt-16'>
      <AnimateIn variant='fadeUp'>
        <section className='mb-12'>
          <AnimateIn variant='fadeUp' delay={0.2}>
            <h1 className='text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between'>
              <span>Hey, I&apos;m Suryansh</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant='fadeUp' delay={0.4}>
            <p className='text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-6'>
              UK-Based Full-Stack Developer Specialising in .NET & Desktop
              Applications I design and develop robust, scalable, and elegant
              desktop software using C# and modern .NET technologies—delivering
              maintainable solutions with clean architecture and industry-grade
              performance.
            </p>
          </AnimateIn>

          <AnimateIn variant='fadeUp' delay={0.6}>
            <div className='flex items-center gap-5'>
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <AnimateIn variant='fadeUp' delay={0.2}>
        <section className='mb-12'>
          <AnimateIn variant='reveal' delay={0.3}>
            <h2 className='text-lg font-medium tracking-tight mb-4 inline-block'>
              Projects
            </h2>
          </AnimateIn>
          <div className='space-y-8'>
            <ul className='space-y-8'>
              {visibleProjects.map((project, index) => {
                // const delay = 0.3 + (index < initialProjectCount ? index : index - initialProjectCount) * 0.1;
                const delay = 0.3 + index * 0.1
                return (
                  <AnimateIn key={index} variant='fadeLeft' delay={delay}>
                    <li className='group hover:translate-x-1 transition-all duration-300 ease-out'>
                      <div className='flex items-baseline justify-between mb-1'>
                        <h3 className='text-md font-medium'>{project.title}</h3>
                        <div className='flex flex-row gap-2'>
                          {project.github ? (
                            <a
                              href={project.github}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'
                            >
                              GitHub <ExternalLink className='w-3 h-3' />
                            </a>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'
                            >
                              View <ExternalLink className='w-3 h-3' />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-2'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='text-xs text-zinc-400 dark:text-zinc-500'
                          >
                            {tech}
                            {techIndex < project.technologies.length - 1
                              ? ' /'
                              : ''}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                )
              })}
            </ul>
            {}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant='fadeUp' delay={0.4}>
        <section className='mb-12'>
          <AnimateIn variant='reveal' delay={0.5}>
            <h2 className='text-lg font-medium tracking-tight mb-4 inline-block'>
              Experience
            </h2>
          </AnimateIn>
          <div className='space-y-8'>
            <ul className='space-y-8'>
              {visibleExperience.map((job, index) => {
                const delay =
                  0.5 +
                  (index < initialExperienceCount
                    ? index
                    : index - initialExperienceCount) *
                    0.1
                return (
                  <AnimateIn key={index} variant='fadeLeft' delay={delay}>
                    <li className='group hover:translate-x-1 transition-all duration-300 ease-out'>
                      <div className='flex flex-col sm:flex-row sm:items-baseline justify-between mb-1'>
                        <h3 className='text-md font-medium'>
                          {job.role} {job.role === 'Freelance' ? '' : 'at'}{' '}
                          {job.company}
                        </h3>
                        <span className='text-xs text-zinc-400 dark:text-zinc-500'>
                          {job.period}
                        </span>
                      </div>
                      <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-2'>
                        {job.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='text-xs text-zinc-400 dark:text-zinc-500'
                          >
                            {tech}
                            {techIndex < job.technologies.length - 1
                              ? ' /'
                              : ''}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                )
              })}
            </ul>
            {experience.length > initialExperienceCount && (
              <button
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                className='flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto'
              >
                {isExperienceExpanded ? (
                  <>
                    Show Less <ChevronUp className='w-4 h-4' />
                  </>
                ) : (
                  <>
                    Show More Experience <ChevronDown className='w-4 h-4' />
                  </>
                )}
              </button>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant='fadeUp' delay={0.6}>
        <section className='mb-12'>
          <AnimateIn variant='reveal' delay={0.7}>
            <h2 className='text-lg font-medium tracking-tight mb-4 inline-block'>
              Tools & Stack
            </h2>
          </AnimateIn>
          <div className='grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4'>
            {tools.map(({ logo, title }, index) => (
              <AnimateIn key={index} variant='scale' delay={0.7 + index * 0.03}>
                <div className='flex flex-col items-center group'>
                  <div className='relative h-6 w-6 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1'>
                    <Image
                      src={logo}
                      alt={`${title} logo`}
                      fill
                      className='object-contain drop-shadow-md'
                      loading='eager'
                    />
                  </div>
                  <span className='text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap'>
                    {title}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant='fadeUp' delay={0.8}>
        <footer className='pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center'>
          <div>suryansshh.cloud</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  )
}

const projects = [
  {
    title: 'Python-Playwright-StockScraper API',
    description:
      'A Flask-based API that scrapes stock data using Playwright and BeautifulSoup.',
    github: 'https://github.com/SxryxnshS5/Python-Playwright-StockScraper-API',
    technologies: [
      'Python',
      'Flask',
      'Playwright',
      'BeautifulSoup',
      'Github Actions',
    ],
  },
  {
    title: 'Rangined-Image Processing Tool',
    description:
      'Software designed to facilitate various image processing tasks such as loading, saving, grayscale conversion, and batch image compression into a ZIP archive.',
    github: 'https://github.com/SxryxnshS5/Rangined-Image_Processing_Tool',
    technologies: ['C#', 'XAML', 'Multithreading'],
  },
  {
    title: 'Likhaan-Text Editor',
    description:
      'A lightweight, feature-rich text editing tool developed using Windows Forms in C#.',
    github: 'https://github.com/SxryxnshS5/Likhaan-Text_Editor',
    technologies: ['C#', 'Windows Forms', 'Github Actions'],
  },
  {
    title: 'ThreatSnap',
    description:
      'ThreatSnap is an AI-powered backend system that uses YOLOv8 and GPT-4o to detect threats from CCTV footage and send real-time alerts via a simple web interface.',
    github: 'https://github.com/SxryxnshS5/ThreatSnap',
    technologies: ['Python', 'Flask', 'OpenAI gpt-4o', 'Yolo-v8'],
  },
  {
    title: 'FeedForward',
    description:
      'FeedForward is a food sharing website aimed at reducing food waste and fighting hunger by allowing users to create and collect food adverts.',
    github: 'https://github.com/SxryxnshS5/FeedForward',
    technologies: ['Python', 'Flask'],
  },
]

const experience = [
  {
    role: 'Software Engineering Placement Student',
    company: 'Oxford Instruments - Andor',
    period: 'Jul 2025 - Present',
    description:
      'Developing production-grade desktop software in C# and XAML for advanced scientific instruments, with a focus on scalable architecture and precision engineering.',
    technologies: ['C#', 'XAML', 'NUnit', 'Azure DevOps'],
  },
  {
    role: 'Shopify App Developer',
    company: 'HexisLab',
    period: 'Oct 2024 - Mar 2025',
    description:
      'Customized Shopify and WordPress websites, enhancing performance, SEO, and user experience while managing ads and social media remotely.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    role: 'Web Development Intern',
    company: 'Newcastle University',
    period: 'Oct 2023 - May 2024',
    description:
      'Rebranded and improved an academic e-journal site with modern UI/UX design and frontend development using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CMS'],
  },
  {
    role: 'Web Development Intern',
    company: 'The Naked Baking Company',
    period: 'Feb 2023 - Apr 2023',
    description:
      'Designed and built a full e-commerce website with integrated fulfillment APIs, enabling seamless online operations and improved customer experience.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
  },
  {
    role: 'Co-Founder',
    company: 'Zerdence Technologies',
    period: 'May 2020 - Sep 2022',
    description:
      'Co-founded and led full-stack development for 10+ client projects, generating ₹200K+ in revenue through custom websites and software solutions.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'MERN',
      'Shopify',
      'Flutter',
    ],
  },
  {
    role: 'Co-Founder',
    company: 'HopeTides',
    period: 'Apr 2020 - Aug 2022',
    description:
      'Built and managed a COVID-19 resource platform, ran donation drives, and led digital outreach to support underserved communities during crisis periods.',
    technologies: [],
  },
]

const tools = [
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    title: 'C#',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    title: '.NET Core',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
    title: 'Azure DevOps',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    title: 'Python',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    title: 'Flask',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    title: 'Flutter',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    title: 'Firebase',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'Javascript',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    title: 'Typescript',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    title: 'React',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    title: 'NodeJS',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    title: 'TailwindCSS',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    title: 'Git',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    title: 'Github Actions',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    title: 'Docker',
  },
  {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'Figma',
  },
]
