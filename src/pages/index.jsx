import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`${article.url}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Link href={`${article.url}`}>
        <Card.Cta>Read article</Card.Cta>
      </Link>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Codemuse Technologies',
      title: 'Frontend Developer',

      start: 'Nov 2022',
      end: 'June 2023',
    },
    {
      company: 'iNeuron.ai',
      title: 'Software Engineer',

      start: 'May 2022',
      end: 'Oct 2022',
    },
    {
      company: 'LearnCodeOnline.in',
      title: 'Frontend Developer',

      start: 'Jan 2022',
      end: 'May 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="react"
              >
                <path
                  fill="#6563ff"
                  d="M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Z"
                ></path>
              </svg>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <Link href="/PrasadNarkhedkarResume (1).pdf" target="_blank" download>
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </Link>
    </div>
  )
}

export default function Home({ articles }) {
  function ChevronRightIcon(props) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  function LinkButton({ children }) {
    return (
      <div
        aria-hidden="true"
        className="relative z-10 flex items-center text-sm font-medium text-teal-500"
      >
        {children}
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Prasad - Software developer</title>
        <meta
          name="description"
          content="I'm Prasad, an innovative professional adept in utilizing
          diverse technologies and programming languages to provide
          comprehensive support to organizations in delivering exceptional
          user experiences"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-wide text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey, I&apos;m Prasad 👋🏻
          </h1>
          <h6 className="mt-2 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
            Software Engineer - 💛 Javascript 💙 Typescript
          </h6>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Prasad, an innovative professional adept in utilizing
            diverse technologies and programming languages to provide
            comprehensive support to organizations in delivering exceptional
            user experiences.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/iprasadn"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/prasad123-hub"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/prasadnarkhedkar"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div>
          <h4 className="mt-2 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
            Recent Projects
          </h4>
          <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center rounded-md border-2 border-zinc-100 p-2 dark:border-zinc-700/40">
              <Image
                src="/revel.png"
                height={200}
                width={300}
                alt="revel"
                className="h-auto w-full rounded-md object-cover"
              />
              <h1 className="mt-2 font-semibold text-zinc-800 dark:text-zinc-100">
                Revel | Testimonial Management Tool
              </h1>
              <div className="mt-2 inline-flex items-center space-x-3">
                <Link
                  href="https://github.com/prasad123-hub/revel-builder"
                  target="_blank"
                >
                  <LinkButton>View Code</LinkButton>
                </Link>
                <Link href="https://revel.npmstack.com" target="_blank">
                  <LinkButton>View Demo</LinkButton>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-md border-2 border-zinc-100 p-2 dark:border-zinc-700/40">
              <Image
                src="/snap.png"
                height={200}
                width={300}
                alt="revel"
                className="h-auto w-full rounded-md object-cover"
              />
              <h1 className="mt-2 font-semibold text-zinc-800 dark:text-zinc-100">
                Snap | A SaaS Platform
              </h1>
              <div className="mt-2 inline-flex items-center space-x-3">
                <Link href="https://github.com/prasad123-hub/snap">
                  <LinkButton>View Code</LinkButton>
                </Link>
                <Link href="https://snap.npmstack.com" target="_blank">
                  <LinkButton>View Demo</LinkButton>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-md border-2 border-zinc-100 p-2 dark:border-zinc-700/40">
              <Image
                src="/devui.png"
                height={200}
                width={300}
                alt="revel"
                className="h-auto w-full rounded-md object-cover"
              />
              <h1 className="mt-2 font-semibold text-zinc-800 dark:text-zinc-100">
                DevUI | Component Library
              </h1>
              <div className="mt-2 inline-flex items-center space-x-3">
                <Link href="https://github.com/prasad123-hub/devui-test">
                  <LinkButton>View Code</LinkButton>
                </Link>
                <Link href="https://devui.io" target="_blank">
                  <LinkButton>View Demo</LinkButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
