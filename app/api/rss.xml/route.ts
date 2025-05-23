import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';



import { getBaseUrl } from '@/lib/metadata';
import { blogsSource, projectsSource } from '@/lib/source';


export function GET(_request: NextRequest) {
  const blogPosts = blogsSource.getPages()
  const projects = projectsSource.getPages()

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Ashish</title>
  <link>https://Ashish-Pid-vercel.app</link>
  <description>My personal portfolio and blog</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <ttl>1800</ttl>
  <image>
    <url>https://Ashish-Pid-vercel.app/assets/logo.svg</url>
    <title>Ashish</title>
    <link>https://Ashish-Pid-vercel.app</link>
  </image>
  ${blogPosts
    .map(
      (post) => `
    <item>
      <title>${post.data.title}</title>
      <link>${post.url}</link>
      <description>${post.data.description}</description>
      <pubDate>${new Date(post.data.published).toUTCString()}</pubDate>
      <guid isPermaLink="true">${getBaseUrl()}${post.url}</guid>
    </item>`,
    )
    .join('')}
  ${projects
    .map(
      (project) => `
    <item>
      <title>${project.data.title}</title>
      <link>${project.url}</link>
      <description>${project.data.description}</description>
      <guid isPermaLink="true">${getBaseUrl()}${project.url}</guid>
    </item>`,
    )
    .join('')}
</channel>
</rss>`

  return new NextResponse(feed, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  })
}
