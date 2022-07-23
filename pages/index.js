/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, CheckIcon, ChevronDownIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline';

const features = [
	{
		name: 'Invite team members',
		description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
	},
	{
		name: 'Notifications',
		description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
	},
	{
		name: 'List view',
		description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
	},
	{
		name: 'Boards',
		description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
	},
	{
		name: 'Keyboard shortcuts',
		description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
	},
	{
		name: 'Reporting',
		description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
	},
	{
		name: 'Calendars',
		description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
	},
	{
		name: 'Mobile app',
		description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
	},
];

const faqs = [
	{
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
];

const transferFeatures = [
	{
		id: 1,
		name: 'Competitive exchange rates',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: GlobeAltIcon,
	},
	{
		id: 2,
		name: 'No hidden fees',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: ScaleIcon,
	},
	{
		id: 3,
		name: 'Transfers are instant',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: LightningBoltIcon,
	},
]
const communicationFeatures = [
	{
		id: 1,
		name: 'Mobile notifications',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: AnnotationIcon,
	},
	{
		id: 2,
		name: 'Reminder emails',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: MailIcon,
	},
]

const navigation = [
	{ name: 'Features', href: '#features' },
	{ name: 'FAQ', href: '#faq' },
	{ name: 'Pricing', href: '#pricing' },
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Writer's Blocks</title>
				<meta name="description" content="" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Script src="https://app.lemonsqueezy.com/js/checkout.js" />

			<div>
				<div className="relative overflow-hidden">
					<div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
						<div className="relative h-full">
							<svg
								className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
								width={404}
								height={784}
								fill="none"
								viewBox="0 0 404 784"
							>
								<defs>
									<pattern
										id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
									</pattern>
								</defs>
								<rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
							</svg>
							<svg
								className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
								width={404}
								height={784}
								fill="none"
								viewBox="0 0 404 784"
							>
								<defs>
									<pattern
										id="d2a68204-c383-44b1-b99f-42ccff4e5365"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
									</pattern>
								</defs>
								<rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
							</svg>
						</div>
					</div>

					<div className="relative pt-6 pb-16 sm:pb-24">
						<Popover>
							<div className="max-w-7xl mx-auto px-4 sm:px-6">
								<nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
									<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
										<div className="flex items-center justify-between w-full md:w-auto">
											<Link href="/" passHref>
												<a>
													<span className="sr-only">Writer's Blocks</span>
													<svg width="51" height="25" viewBox="0 0 51 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M28.1197 25L8.56035 0H0L19.5593 25H28.1197Z" fill="currentColor"/>
														<path d="M46.0819 25L26.5217 0H17.9614L37.5216 25H46.0819Z" fill="currentColor"/>
														<path d="M43.5429 9.53137L51 0H36.0859L43.5429 9.53137Z" fill="currentColor"/>
													</svg>
												</a>
											</Link>
											<div className="-mr-2 flex items-center md:hidden">
												<Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800">
													<span className="sr-only">Open main menu</span>
													<MenuIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
									</div>
									<div className="hidden md:flex md:space-x-10">
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<a className="font-medium text-gray-500 hover:text-gray-900">
													{item.name}
												</a>
											</Link>
										))}
									</div>
									<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
										<span className="inline-flex rounded-md shadow">
											<a
												href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
												className="lemonsqueezy-button inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:text-green-600"
											>
												Get Started
											</a>
										</span>
									</div>
								</nav>
							</div>

							<Transition
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
								>
									<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
										<div className="px-5 pt-4 flex items-center justify-between">
											<div>
												<svg width="51" height="25" viewBox="0 0 51 25" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M28.1197 25L8.56035 0H0L19.5593 25H28.1197Z" fill="currentColor"/>
													<path d="M46.0819 25L26.5217 0H17.9614L37.5216 25H46.0819Z" fill="currentColor"/>
													<path d="M43.5429 9.53137L51 0H36.0859L43.5429 9.53137Z" fill="currentColor"/>
												</svg>
											</div>
											<div className="-mr-2">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800">
													<span className="sr-only">Close main menu</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
										<div className="px-2 pt-2 pb-3 space-y-1">
											{navigation.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													passHref
												>
													<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
														{item.name}
													</a>
												</Link>
											))}
										</div>
										<Link
											href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
											passHref
										>
											<a className="lemonsqueezy-button block w-full px-5 py-3 text-center font-medium text-green-800 bg-gray-50 hover:bg-gray-100 hover:text-green-900">
												Get Started
											</a>
										</Link>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
							<div className="text-center">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
									<span className="block">The WordPress editor</span>
									<span className="relative before:absolute before:z-[-1] before:bg-yellow-200 before:h-4/6 before:w-full before:bottom-[-5px] before:left-[-5px] before:rotate-2">
										youv'e
									</span>
									{' '}
									been waiting for
								</h1>
								<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
									fugiat veniam occaecat fugiat aliqua.
								</p>
								<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
									<div className="rounded-md shadow">
										<a
											href="https://usewritersblocks.lemonsqueezy.com/checkout/buy/5b192dd2-ecfc-4510-bb8e-27b680722df3?logo=0dark=1&embed=1"
											className="lemonsqueezy-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900 md:py-4 md:text-lg md:px-10"
										>
											Get started
										</a>
									</div>
									<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
										<Link
											href="/demo"
										>
											<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
												Live demo
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className="max-w-7xl mx-auto py-12 px-6">
							<iframe
								className="rounded-lg shadow-xl"
								id="block-editor"
								title="Block Editor"
								src="https://demo.usewritersblocks.com"
								frameBorder={0}
								width="100%"
								height="800px"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="py-16 overflow-hidden lg:py-24">
				<div className="relative flex flex-col max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
					<svg
						className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
					</svg>

					<div className="relative" id="features">
						<h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							A better way to send money
						</h2>
						<p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
							accusamus quisquam.
						</p>
					</div>

					<div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div className="relative z-10">
							<h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-3xl">
								Transfer funds world-wide
							</h3>
							<p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
								officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
								Totam, velit.
							</p>

							<dl className="mt-10 space-y-10">
								{transferFeatures.map((item) => (
									<div key={item.id} className="relative">
										<dt>
											<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
												<item.icon className="h-6 w-6" aria-hidden="true" />
											</div>
											<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{item.name}</p>
										</dt>
										<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{item.description}</dd>
									</div>
								))}
							</dl>
						</div>

						<div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
							<svg
								className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
								width={784}
								height={404}
								fill="none"
								viewBox="0 0 784 404"
							>
								<defs>
									<pattern
										id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
									</pattern>
								</defs>
								<rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
							</svg>
							<img
								className="relative mx-auto"
								width={490}
								src="https://picsum.photos/490/570?blur=6&grayscale"
								alt=""
							/>
						</div>
					</div>

					<svg
						className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
					</svg>

					<div className="relative mt-12 sm:mt-16 lg:mt-24">
						<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
							<div className="lg:col-start-2">
								<h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-3xl">Always in the loop</h3>
								<p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
									cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
								</p>

								<dl className="mt-10 space-y-10">
									{communicationFeatures.map((item) => (
										<div key={item.id} className="relative">
											<dt>
												<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
													<item.icon className="h-6 w-6" aria-hidden="true" />
												</div>
												<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{item.name}</p>
											</dt>
											<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{item.description}</dd>
										</div>
									))}
								</dl>
							</div>

							<div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
								<svg
									className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
									width={784}
									height={404}
									fill="none"
									viewBox="0 0 784 404"
									aria-hidden="true"
								>
									<defs>
										<pattern
											id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
											x={0}
											y={0}
											width={20}
											height={20}
											patternUnits="userSpaceOnUse"
										>
											<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
										</pattern>
									</defs>
									<rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
								</svg>
								<img
									className="relative mx-auto"
									width={490}
									src="https://picsum.photos/490/374?blur=6&grayscale"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">All-in-one platform</h2>
					<p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
						Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
					</p>
				</div>
				<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
					{features.map((feature) => (
						<div key={feature.name} className="relative">
							<dt>
								<CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
								<p className="ml-9 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.name}</p>
							</dt>
							<dd className="mt-2 ml-9 text-base text-gray-500 dark:text-gray-400">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>

			<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Frequently asked questions</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
												<span className="font-medium text-gray-900 dark:text-gray-200">{faq.question}</span>
												<span className="ml-6 h-7 flex items-center">
													<ChevronDownIcon
														className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-2 pr-12">
											<p className="text-base text-gray-500 dark:text-gray-400">{faq.answer}</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>

			<div className="relative sm:py-16">
				<div aria-hidden="true" className="hidden sm:block">
					<svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
							</pattern>
						</defs>
						<rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
					</svg>
				</div>
				<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="relative rounded-2xl px-6 py-10 bg-green-800 overflow-hidden shadow-xl sm:px-12 sm:py-20">
						<div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
							<svg
								className="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									className="text-green-500 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									className="text-green-700 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<div className="relative">
							<div className="sm:text-center">
								<h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
									Get notified when we&rsquo;re launching.
								</h2>
								<p className="mt-6 mx-auto max-w-2xl text-lg text-green-200">
									Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
									tristique pellentesque.
								</p>
							</div>
							<form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
								<div className="min-w-0 flex-1">
									<label htmlFor="cta-email" className="sr-only">
										Email address
									</label>
									<input
										id="cta-email"
										type="email"
										className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
										placeholder="Enter your email"
									/>
								</div>
								<div className="mt-4 sm:mt-0 sm:ml-3">
									<button
										type="submit"
										className="block w-full rounded-md border border-transparent px-5 py-3 bg-green-500 text-base font-medium text-white shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 sm:px-10"
									>
										Notify me
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>


		</>
	);
}
