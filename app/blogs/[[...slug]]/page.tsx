import { notFound } from 'next/navigation'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'

import { Giscus } from '@/components/giscus'
import { createMetadata } from '@/lib/metadata'
import { blogsSource } from '@/lib/source'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = blogsSource.getPage(params.slug)

  
  if (!page) notFound()

  const lastModified = page.data.lastModified
  const isoDate = lastModified
    ? new Date(lastModified).toISOString()
    : undefined

  // ✅ Ensure tags is always an array
  const tags = Array.isArray(page.data.tags)
    ? page.data.tags
    : []

  const MDXContent = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>

      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>

      {isoDate && (
        <time className="text-fd-muted-foreground text-sm">
          {isoDate}
        </time>
      )}

      {tags.length > 0 && (
        <ul className="flex gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-fd-primary text-fd-primary-foreground rounded-md px-2 py-1 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(blogsSource, page),
            Tabs,
            Tab,
          }}
        />

        {page.url !== '/blogs' && <Giscus />}
      </DocsBody>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return blogsSource.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = blogsSource.getPage(params.slug)

  if (!page) notFound()

  const tags = Array.isArray(page.data.tags)
    ? page.data.tags
    : []

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    keywords: tags,
    openGraph: {
      url: page.url,
      images: {
        url:
          page.data.image ??
          `/api/og?title=${encodeURIComponent(page.data.title)}&description=${encodeURIComponent(page.data.description)}`,
        alt: page.data.title,
      },
      type: 'article',
    },
  })
}
