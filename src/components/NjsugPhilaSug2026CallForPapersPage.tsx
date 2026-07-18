import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

import { Navbar } from '@/components/Navbar'

export const SITE_URL = 'https://www.njsug.org'
export const CFP_PATH = '/events/njsug-philasug-2026-call-for-papers'
export const CFP_URL = `${SITE_URL}${CFP_PATH}`
export const CFP_EVENT_NAME = 'NJSUG & PhilaSUG Joint Event'
export const CFP_EVENT_DATE = 'Friday, October 9, 2026'
export const CFP_EVENT_START = '2026-10-09'
export const CFP_EVENT_COST = 'Free'
export const CFP_ABSTRACT_OPEN_DATE = 'Friday, July 17, 2026'
export const CFP_ABSTRACT_DEADLINE = 'Friday, August 21, 2026'
export const CFP_SELECTION_DEADLINE = 'Monday, August 31, 2026'
export const CFP_CONTACT_EMAIL = 'njsugcontact@gmail.com'
export const CFP_LOCATION_NAME = 'NJHA Conference and Event Center'
export const CFP_LOCATION_STREET = '760 Alexander Rd'
export const CFP_LOCATION_CITY = 'Princeton'
export const CFP_LOCATION_REGION = 'NJ'
export const CFP_LOCATION_POSTAL_CODE = '08543'
export const CFP_LOCATION_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=NJHA%20Conference%20and%20Event%20Center%20760%20Alexander%20Rd%20Princeton%20NJ%2008543'

const submissionSubject = 'NJSUG & PhilaSUG Joint Event Abstract Submission'
const submissionBody = [
  'Hello NJSUG and PhilaSUG team,',
  '',
  'I would like to submit an abstract for the October 9, 2026 joint event.',
  '',
  'Paper/presentation title:',
  'Presenter name(s):',
  'Affiliation(s):',
  'Contact email:',
  'Abstract:',
  'Short presenter bio:',
  'Notes or special requests:',
  '',
  'Thank you.',
].join('\n')

export const CFP_SUBMISSION_MAILTO = `mailto:${CFP_CONTACT_EMAIL}?subject=${encodeURIComponent(
  submissionSubject,
)}&body=${encodeURIComponent(submissionBody)}`

type ImportantDate = {
  label: string
  date: string
  note: string
}

const importantDates: ImportantDate[] = [
  {
    label: 'Call for Abstracts Opens',
    date: CFP_ABSTRACT_OPEN_DATE,
    note: 'Begin preparing and submitting abstracts for the joint event.',
  },
  {
    label: 'Abstracts Due',
    date: CFP_ABSTRACT_DEADLINE,
    note: 'Submit your presentation abstract for review by the deadline.',
  },
  {
    label: 'Selections By',
    date: CFP_SELECTION_DEADLINE,
    note: 'Paper and presentation review decisions are planned by this date.',
  },
  {
    label: 'Event Date',
    date: CFP_EVENT_DATE,
    note: 'In-person joint meeting in Princeton, New Jersey.',
  },
]

const submissionChecklist = [
  'Paper or presentation title',
  'Presenter name, affiliation, and contact email',
  'A clear abstract describing the topic, audience, and takeaways',
  'A short presenter biography',
  'Any notes about format, demo needs, or timing constraints',
]

export const CFP_KEYWORDS = [
  'NJSUG call for papers',
  'PhilaSUG call for papers',
  'NJSUG PhilaSUG 2026 joint event',
  'SAS user group presentation',
  'statistical programming conference',
  'Princeton NJ SAS event',
  'October 2026 SAS event',
  'clinical programming presentation',
]

export function getNjsugPhilaSug2026CfpMetadata(): Metadata {
  return {
    title: 'Call for Papers - NJSUG & PhilaSUG Joint Event',
    description:
      'Submit an abstract for the NJSUG & PhilaSUG Joint Event on Friday, October 9, 2026, at the NJHA Conference and Event Center in Princeton, NJ.',
    keywords: CFP_KEYWORDS,
    category: 'Event',
    alternates: {
      canonical: CFP_URL,
    },
    openGraph: {
      title: 'Call for Papers - NJSUG & PhilaSUG Joint Event',
      description:
        'Abstracts are due Friday, August 21, 2026, for the NJSUG & PhilaSUG Joint Event in Princeton, NJ.',
      url: CFP_URL,
      type: 'website',
      siteName: 'NJSUG - New Jersey SAS Users Group',
      locale: 'en_US',
      images: [
        {
          url: `${SITE_URL}/images/NJSUGBanner.svg`,
          width: 1200,
          height: 630,
          alt: 'NJSUG banner',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Call for Papers - NJSUG & PhilaSUG Joint Event',
      description:
        'Submit an abstract by Friday, August 21, 2026, for the October 9, 2026 joint event.',
      images: [`${SITE_URL}/images/NJSUGBanner.svg`],
    },
  }
}

export function getNjsugPhilaSug2026CfpStructuredData() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${CFP_URL}#event`,
    name: CFP_EVENT_NAME,
    description:
      'A joint in-person event from NJSUG and PhilaSUG. The call for papers invites abstracts from SAS users, statistical programmers, data scientists, and analytics professionals.',
    startDate: CFP_EVENT_START,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: CFP_LOCATION_NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CFP_LOCATION_STREET,
        addressLocality: CFP_LOCATION_CITY,
        addressRegion: CFP_LOCATION_REGION,
        postalCode: CFP_LOCATION_POSTAL_CODE,
        addressCountry: 'US',
      },
    },
    organizer: [
      {
        '@type': 'Organization',
        name: 'NJSUG - New Jersey SAS Users Group',
        url: SITE_URL,
        email: CFP_CONTACT_EMAIL,
      },
      {
        '@type': 'Organization',
        name: 'PhilaSUG',
      },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'SAS users, statistical programmers, data scientists, and analytics professionals',
    },
    keywords: CFP_KEYWORDS.join(', '),
    image: `${SITE_URL}/images/NJSUGBanner.svg`,
    url: CFP_URL,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: CFP_URL,
    },
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Call for Papers - NJSUG & PhilaSUG Joint Event',
    description:
      'Call for papers page for the NJSUG & PhilaSUG Joint Event, including event date, location, abstract deadline, and review timeline.',
    url: CFP_URL,
    about: {
      '@id': `${CFP_URL}#event`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NJSUG - New Jersey SAS Users Group',
      url: SITE_URL,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Events',
        item: `${SITE_URL}/events`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Call for Papers',
        item: CFP_URL,
      },
    ],
  }

  return [eventJsonLd, webPageJsonLd, breadcrumbJsonLd]
}

export function NjsugPhilaSug2026CallForPapersPage() {
  const structuredDataSchemas = getNjsugPhilaSug2026CfpStructuredData()

  return (
    <>
      {structuredDataSchemas.map((schema, index) => (
        <script
          key={`njsug-philasug-2026-cfp-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-[#0A6F69] text-white">
        <Navbar />

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <Image
            src="/images/event-photos/Group_1.jpg"
            alt="NJSUG community event attendees"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#073f3c]/75" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A6F69]/25 via-[#0A6F69]/70 to-[#0A6F69]" />

          <div className="container mx-auto px-4 pb-16 pt-14 md:pb-24 md:pt-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">
                Call for Papers
              </p>
              <div className="mt-4 inline-flex rounded-full border border-[#E7FF7A]/50 bg-[#E7FF7A] px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20">
                Free Event
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                NJSUG &amp; PhilaSUG Joint Event
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
                Share your work with the regional SAS community at our upcoming
                in-person joint event in Princeton, New Jersey.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CFP_SUBMISSION_MAILTO}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-[#F2FFA8]"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Submit Abstract
                </a>
                <Link
                  href="#details"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <CalendarDays className="size-4" aria-hidden="true" />
                  View Key Dates
                </Link>
              </div>

              <div className="mt-10 grid max-w-4xl gap-3 text-sm font-medium text-white sm:grid-cols-2 lg:grid-cols-4">
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Call opens: {CFP_ABSTRACT_OPEN_DATE}
                </p>
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Abstracts due: {CFP_ABSTRACT_DEADLINE}
                </p>
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Selections by: {CFP_SELECTION_DEADLINE}
                </p>
                <p className="border-l-2 border-[#E7FF7A] pl-4">
                  Event date: {CFP_EVENT_DATE}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="container mx-auto px-4 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/75">
              Event Details
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Important dates for presenters
            </h2>
          </div>

          <ol className="mt-8 max-w-4xl overflow-hidden rounded-lg border border-white/15 bg-white/10">
            {importantDates.map((item, index) => (
              <li
                key={item.label}
                className="grid gap-3 border-b border-white/10 p-5 last:border-b-0 md:grid-cols-[12rem_1fr]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-7 flex-none items-center justify-center rounded-full bg-[#E7FF7A] text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-100/75">
                    {item.label}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.date}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/85">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 rounded-lg border border-white/15 bg-black/10 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/70">
                  Location
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {CFP_LOCATION_NAME}
                </h3>
                <p className="mt-2 text-base leading-7 text-emerald-50/90">
                  {CFP_LOCATION_STREET}, {CFP_LOCATION_CITY}, {CFP_LOCATION_REGION}{' '}
                  {CFP_LOCATION_POSTAL_CODE}
                </p>
              </div>
              <a
                href={CFP_LOCATION_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Open Map
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F6FBF4] py-14 text-slate-950 md:py-16">
          <div className="container mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              What to Submit
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              Send an abstract for a paper or presentation
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              We welcome practical, technical, case-study, and professional practice
              presentations for SAS users, statistical programmers, analysts, data
              scientists, and related teams. Abstracts should make the topic, audience,
              and expected takeaways clear.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {submissionChecklist.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <CheckCircle2
                    className="mt-0.5 size-5 flex-none text-emerald-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/75">
                Ready to Participate
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Abstract submissions are due {CFP_ABSTRACT_DEADLINE}.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-50/90">
                Submit your abstract by email or contact NJSUG with questions about the
                call for papers, the review timeline, or the upcoming joint event.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={CFP_SUBMISSION_MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E7FF7A] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#F2FFA8]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Submit by Email
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact NJSUG
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
