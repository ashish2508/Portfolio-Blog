import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Link from 'next/link';



import { XIcon } from '@/components/ui/icons';
import title from '@/public/assets/Title.png';


/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Image
        src={title}
        alt="Logo"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
        className="h-13 w-auto"
      />
    ),
  },
  githubUrl: 'http://github.com/ashish2508',
  links: [
    {
      text: 'Blogs',
      url: '/blogs',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'X',
      url: 'https://www.x.com/an_axsh',
      icon: <XIcon />,
      type: 'icon',
    },
  ],
}

export const Footer: React.FC = () => {
  const navs = [
    { href: '/', title: 'Home' },
    { href: '/projects', title: 'Projects' },
    { href: '/blogs', title: 'Blogs' },
  ]

  return (
    <footer className="text-fd-muted-foreground border-t py-6 text-sm">
      <div className="container flex flex-col gap-4">
        <nav className="flex items-center gap-4">
          <Link href="/">
            <Image
              src={title}
              width={24}
              height={24}
              alt="Ashish Logo"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
              className="h-13 w-auto"
              priority
            />
            <span className="sr-only">Ashish</span>
          </Link>

          {navs.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="hover:text-fd-foreground"
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ashish</p>

          <nav className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-fd-foreground">
              Sitemap
            </Link> 
          </nav>
        </div>
      </div>
    </footer>
  )
}
