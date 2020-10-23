import Nav from 'components/navbar';
import { MediaContextProvider } from 'lib/window-width';
import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadSub from 'components/lead-sub';

interface AboutProps {
	title: string;
}

const About = ({ title }: AboutProps) => {
	return (
		<Fragment>
			<MediaContextProvider>
				<Meta />
				<Nav />
				<LeadSub title={title} />
				<p className='block font-thin tracking-tighter text-justify justify-center transition-all ease-in-out transform -translate-y-landingOverviewTranslation text-customExcerptMobile md:text-customS md:p-portfolioLS pl-portfolioLSMobile leading-headerP font-somaRoman'>
					Drisdell Consulting Services, Inc. provides expert professional services
					for all areas of IT system implementation and support.  Since 1995, we have
					provided quality services and custom application development solutions to
					our customers.  And as hard as it is to accomplish in this day and age, we
					have realized a 100% on time, on budget project completion record on all of
					our client projects. We successfully manage projects, implement systems and
					solve business problems—just ask any of our clients!
				</p>
			</MediaContextProvider>
		</Fragment>
	);
};

export default About;
