import type { Metadata } from 'next'
import Script from 'next/script'
import { type SoftwareApplication, type WithContext } from 'schema-dts'

import config from '~/core/constant/config'

export type SeoMeta = {
	canonicalUrlRelative?: string
	extraTags?: Record<string, never>
} & Metadata

// for generating openGraph (OG) Image https://imgsrc.io/
// for getting favicon https://favicon.io/

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can customize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)

export const getSEOTags = ({
	title,
	description,
	keywords,
	openGraph,
	canonicalUrlRelative,
	extraTags,
}: SeoMeta = {}): SeoMeta => {
	return {
		// up to 50 characters (what does your app do for the user?) > your main should be here
		title: config.appName ?? title,
		// up to 160 characters (how does your app help the user?)
		description: description ?? config.appDescription,
		// some keywords separated by commas. by default it will be your app name
		keywords: keywords ?? [config.appName],
		applicationName: config.appName,
		// set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
		metadataBase: new URL(
			process.env.NODE_ENV === 'development'
				? 'http://localhost:3000/'
				: `https://${config.domainName}/`,
		),

		openGraph: {
			title: openGraph?.title ?? config.appName,
			description: openGraph?.description ?? config.appDescription,
			url: openGraph?.url ?? `https://${config.domainName}/`,
			// siteName: openGraph?.title ?? config.appName,
			siteName: (openGraph?.title as string) ?? config.appName,
			// If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
			// images: [
			//   {
			//     url: `https://${config.domainName}/share.png`,
			//     width: 1200,
			//     height: 660,
			//   },
			// ],
			locale: 'en_US',
			type: 'website',
		},

		twitter: {
			title: openGraph?.title ?? config.appName,
			description: openGraph?.description ?? config.appDescription,
			// If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
			// images: [openGraph?.image ?? defaults.og.image],
			card: 'summary_large_image',
			creator: '@FaisalTari78554',
		},

		// If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
		...(canonicalUrlRelative && {
			alternates: {
				canonical: canonicalUrlRelative,
			},
		}),

		// If you want to add extra tags, you can pass them here
		...extraTags,
	}
}

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data

export const jsonLd: WithContext<SoftwareApplication> = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: config.appName,
	description: config.appDescription,
	image: 'https://yourdomain.com/icon.png',
	url: `https://${config.domainName}/`,
	author: {
		'@type': 'Person',
		name: config.author,
	},
	datePublished: '2024-01-01',
	applicationCategory: 'WebApplication',
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.5',
		ratingCount: '50',
	},
	offers: [
		{
			'@type': 'Offer',
			price: '0.00',
			priceCurrency: 'USD',
		},
	],
	operatingSystem: 'Windows, macOS, Linux',
	softwareVersion: '1.0.0',
	license: 'https://opensource.org/licenses/MIT',
}

export const renderJsonLd = () => {
	return (
		<Script
			id="jsonLd-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}
