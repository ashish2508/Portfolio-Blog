import Image from 'next/image'

import left from '@/public/assets/left.png'
import right from '@/public/assets/right.png'

export const Introduction = () => (
  <section className="container mx-auto py-12">
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
      {/* Main content area */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Let me <span className="text-yuki">introduce</span> myself
        </h2>

        <div className="prose max-w-none text-lg">
          <p className="leading-7 text-pretty">
            I fell in love with programming and anime and am fluent in{' '}
            <strong className="text-yuki">Typescript</strong> and{' '}
            <strong className="text-yuki">Go</strong>.
          </p>
          <p className="leading-7 text-pretty">
            My field of interest is building new{' '}
            <strong className="text-yuki">web applications</strong> and
            exploring areas related to{' '}
            <strong className="text-yuki">New Tech</strong>.
          </p>
          <p className="leading-7 text-pretty">
            Whenever possible, I contribute to the open-source community with{' '}
            <strong className="text-yuki">Next.js</strong> and{' '}
            <strong className="text-yuki">GoLang</strong> projects.
          </p>
        </div>

        {/* Personal info with left image */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex-shrink-0">
            <Image
              src={left}
              alt="Profile"
              width={180}
              height={180}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>

          <div className="flex-grow">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Name:</strong> Ashish Jha
              </li>
              <li>
                <strong>Date of Birth:</strong> August 25, 2005
              </li>
              <li>
                <strong>Location:</strong> Delhi, India
              </li>
              <li>
                <strong>Languages:</strong> English, Hindi
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-shrink-0 md:w-2/5 lg:w-1/3">
        <Image
          src={right}
          alt="Profile"
          width={400}
          height={400}
          className="w-400 rounded-lg object-cover shadow-lg"
          priority
        />
      </div>
    </div>
  </section>
)
