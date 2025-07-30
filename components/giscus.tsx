'use client'

import UnthemedGiscus from '@giscus/react'
import { useTheme } from 'next-themes'

export const Giscus: React.FC = () => {
  const { theme } = useTheme()

  return (
    <UnthemedGiscus
      id="comments"
      repo="ashish2508/Portfolio-Blog"
      repoId="R_kgDOOpU-Eg"
      category="General"
      categoryId="DIC_kwDOOpU-Es4CrNcl"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="1"
      inputPosition="bottom"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  )
}
