import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRuby from '@/images/logos/ruby.svg'
import logoEducation from '@/images/logos/lightbulb.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoRecipe from '@/images/logos/recipe.svg'
import logoTimer from '@/images/logos/timer.svg'

const projects = [
  {
    name: 'Recipe Prototype',
    description:
      'A working prototype for how I would like to see recipes presented. This is a prototype for a recipe for Chana Masala. The next step for me is to turn this prototype into a react app using some figma plugins!',
    logo: logoRecipe,
    status: 'Prototype',
    link: 'https://www.figma.com/proto/PQPV2rhp9loOUIdTjpRVzI/Chana-Masala-Recipe?page-id=0%3A1&node-id=6-231&viewport=518%2C-111%2C0.42&t=TW3849QUrnDmjmq2-1&scaling=min-zoom&content-scaling=fixed'
  },
  {
    name: 'Ruby on Rails Deep Dive',
    description:
      'As a Rails developer, I want to hone my craft. The goal is to read the rails guides and build as I go and write about my experience.',
    logo: logoRuby,
    status: 'In Progress'
  },
  {
    name: 'Life Long Learning App',
    description:
      'An app with a scrolling feed where you can explore posts and identify groups working on projects that you can join. These groups often share educational content aimed at solving real-world problems',
    logo: logoPlanetaria,
    status: 'In Design'
  },
  {
    name: 'Contractions App',
    description:
      'An app for women to be able to track their contractions that is well suited for women experiencing bouts of prodormal labour earlier in the third trimester and want to keep track of these bouts over time.',
    logo: logoTimer,
    status: 'In Progress',
    link: 'https://contractions-five.vercel.app/'
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’m working on.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’m working on."
      intro="These are my passion projects. They’re the things I’m working on in my free time. I’m always looking for collaborators, so if you’re interested in any of these projects, please reach out."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}<span className="ml-2 bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-teal-900 dark:text-teal-300">{project.status}</span>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <span className="ml-2">
              {project.link && (
                <Link href={project.link} legacyBehavior>
                  <a className="underline relative z-10 mt-6 flex text-sm font-medium text-teal-500 hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-200">
                    {project.status === 'Prototype' ? 'View Prototype' : 'View App'}
                  </a>
                </Link>
              )}
            </span>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
