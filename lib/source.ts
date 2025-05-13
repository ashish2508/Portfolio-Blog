import { loader } from 'fumadocs-core/source'

import { blogs, projects } from '@/.source'

export const blogsSource = loader({
  baseUrl: '/blogs',
  source: blogs.toFumadocsSource(),
})

export const projectsSource = loader({
  baseUrl: '/projects',
  source: projects.toFumadocsSource(),
})
