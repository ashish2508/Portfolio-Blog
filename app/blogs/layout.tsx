import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'

import { baseOptions } from '@/app/layout.config'
import { blogsSource } from '@/lib/source'

export default function BlogsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <DocsLayout tree={blogsSource.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  )
}
