import { DrisdellConsultingServices } from 'components/svg-icons';
import Link from 'next/link';
import { Media } from 'lib/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';

const DrisdellIconConditional = (): JSX.Element => {
	const drIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container justify-center block w-full min-w-full mx-auto transition-transform transform translate-x-aboutHackingFontAwesomePT py-portfolio'
					id='top'
					aria-label='top'
				>
					<DrisdellConsultingServices
						width='18vw'
						height='18vw'
						classNameP1=' fill-primary'
						classNameSvg={` antialised w-svgIcon max-w-svgIcon transform transition-all`}
					/>
				</a>
			</Link>
		</Media>
	);

	const drIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					id='top'
					aria-label='top'
				>
					<DrisdellConsultingServices
						width='15vw'
						height='15vw'
						classNameP1=' fill-primary'
						classNameSvg={` antialised w-svgIcon max-w-svgIcon transform transition-all`}
					/>
				</a>
			</Link>
		</Media>
	);

	const drIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					id='top'
					aria-label='top'
				>
					<DrisdellConsultingServices
						width='12vw'
						height='12vw'
						classNameP1=' fill-primary'
						classNameSvg={` antialised w-svgIcon max-w-svgIcon transform transition-all`}
					/>
				</a>
			</Link>
		</Media>
	);

	const drIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolioRS'
					id='top'
					aria-label='top'
				>
					<DrisdellConsultingServices
						width='10vw'
						height='10vw'
						classNameP1=' fill-primary'
						classNameSvg={` antialised w-svgIcon max-w-svgIcon transform transition-all`}
					/>
				</a>
			</Link>
		</Media>
	);

	const DarkModeToggler = (): JSX.Element => (
		<div className='col-span-4 text-right transition-all transform md:pt-portfolio md:text-customTitle md:-translate-y-mdmxSocial translate-y-portfolioLSMobile -translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	);

	const DrisdellIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative justify-between block w-full min-w-full col-span-2 transition-all lg:w-auto lg:static lg:block lg:justify-start'>
				{drIconXs}
				{drIconSm}
				{drIconMd}
				{drIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='container relative grid justify-between w-full min-w-full grid-cols-6 overflow-x-hidden overflow-y-hidden transform select-none -translate-y-portfolio z-1 navbar-expand-lg'>
				<DrisdellIconsCoalesced />
				<DarkModeToggler />
			</div>
		</Fragment>
	);
};

export default DrisdellIconConditional;
