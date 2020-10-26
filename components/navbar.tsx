import Link from 'next/link';
import { useState } from 'react';

interface NavRef {
	href: string;
	label: string;
}

const links: NavRef[] = [
	{
		href: '/',
		label: 'Directory'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.label.toLowerCase}`}>
			<Link href={link.href} passHref as={`${link.href}`}>
				<a
					className='flex items-center float-right w-full min-w-full px-3 pb-2 text-xl font-bold leading-tight text-right text-white sm:text-2xl sm:leading-none font-header hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<a
							className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
							href='#pablo'
						>
							indigo Tailwind Starter Kit
						</a>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							{navlist}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}