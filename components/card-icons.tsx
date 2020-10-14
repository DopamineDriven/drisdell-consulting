import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCustomWebsite } from '../lib/fas-custom-integration';
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// interface CardIconProps {
// 	social: {
// 		facebook: string;
// 		instagram: string;
// 		twitter: string;
// 		linkedin: string;
// 		website: string;
// 		github: string;
// 	};
// }

// interface Social {
// 	social: string[];
// }

// interface CardIconProps {
// 	facebook: string;
// 	instagram: string;
// 	twitter: string;
// 	linkedin: string;
// 	github: string;
// 	website: string;
// }

// interface faProps {
// 	faFacebook: IconProp;
// 	faInstagram: IconProp;
// 	faTwitter: IconProp;
// 	faCustomWebsite: IconProp;
// }

// const faPropsMapped: faProps[] = [{
// 	faFacebook: faFacebook
// }]

interface Social {
	social: any;
}

// to edit icon size, target iconClass
const CardIcons = ({ social }: Social) => {
	const anchorClassNull =
		' items-center justify-center mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitletMobile inline-block leading-relaxed text-center align-middle transition-all duration-1000  fill-current bg-primary text-quinary focus:outline-none transform translate-x-portfolioDivider';
	const anchorClass =
		' items-center justify-center inline-block mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitleMobile leading-relaxed text-center align-middle transition-all duration-500 bg-primary hover:text-primary focus:outline-none transform translate-x-portfolioDivider';
	const iconClassNull =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out  transform lg:text-customTitle sm:text-customExcerptMobile text-customTitleMobile fa-portfolioDivider';
	const iconClass =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out  transform lg:text-customTitle sm:text-customExcerptMobile text-customTitleMobile hover:text-tertiary fa-portfolioDivider';
	return (
		<div className='block text-right align-middle'>
			<ul className='block align-middle'>
				<li className='align-middle'>
					{social.linkedin === null ? (
						<a
							aria-label='linkedin'
							target='__blank'
							href={social.linkedin}
							className={anchorClassNull}
						>
							{social.linkedin === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faLinkedin} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='linkedin'
							target='__blank'
							href={social.linkedin}
							className={anchorClass}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faLinkedin} className={iconClass} />
							)}
						</a>
					)}
					{social.facebook === null ? (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className={anchorClassNull}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faFacebook} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className={anchorClass}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faFacebook} className={iconClass} />
							)}
						</a>
					)}
					{social.twitter === null ? (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClassNull}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClass}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClass} />
							)}
						</a>
					)}
					{social.instagram === null ? (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className={anchorClassNull}
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faInstagram} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className={anchorClass}
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faInstagram} className={iconClass} />
							)}
						</a>
					)}
					{social.email === null ? (
						<a
							aria-label='email'
							target='__blank'
							href={social.email}
							className={anchorClassNull}
						>
							{social.email === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faEnvelope} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='email'
							target='__blank'
							href={social.email}
							className={anchorClass}
						>
							{social.email === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faEnvelope} className={iconClass} />
							)}
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;
