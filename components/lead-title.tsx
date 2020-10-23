import { Media } from 'lib/window-width';
import { Fragment } from 'react';
import SiteDivider from 'components/site-divider';

const LeadTitle = (): JSX.Element => {
	const TitleMobile = () => (
		<Media lessThan='md'>
			<div className=''>
				<h1
					className='font-head relative inline-block text-center justify-center tracking-wider leading-headerP font-light cursor-default w-full min-w-full transform -translate-y-portfolioLS pb-portfolio transition-all ease-in-out'
					style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
				>
					<a className=' text-customWcd block pb-aboutHackingFontAwesomePT'>
						Drisdell
					</a>
					<a className='text-customWcdMobile block pb-aboutHackingFontAwesomePT'>
						Consulting Services
					</a>
				</h1>
			</div>
		</Media>
	);

	const TitleDesktop = () => (
		<Media greaterThanOrEqual='md'>
			<div className='tracking-wider'>
				<h1
					className='font-head text-customWcd relative flex-grow text-center justify-center tracking-tight leading-headerP font-light cursor-default w-full min-w-full transform -translate-y-portfolioLS transition-all ease-in-out'
					style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
				>
					<a className='text-customWcd block pb-aboutHackingFontAwesomePT'>
						Drisdell
					</a>
					<a className='text-customWcdMobile block'>Consulting Services</a>
				</h1>
			</div>
		</Media>
	);

	return (
		<Fragment>
			<TitleMobile />
			<TitleDesktop />
		</Fragment>
	);
};

export default LeadTitle;
