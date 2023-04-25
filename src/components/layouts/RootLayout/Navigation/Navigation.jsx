import Link from 'next/link';
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';
import s from './Navigation.module.scss';

const navItems = [
	{ label: 'Home', href: '/', title: 'Home' },
	{ label: 'Portfolio', href: '/portfolio' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' },
];

const socialLinks = [
	{
		label: 'LinkedIn',
		href: 'http://linkedin.com/in/pjmcdermott92',
		target: '_blank',
	},
	{
		label: 'Facebook',
		href: 'http://facebook.com/pmcdermott92',
		target: '_blank',
	},
	{
		label: 'Github',
		href: 'http://github.com/pjmcdermott92',
		target: '_blank',
	},
];

const SOCIAL_ICONS = {
	linkedin: <FaLinkedinIn />,
	facebook: <FaFacebookF />,
	github: <FaGithub />,
};

export default function Navigation({ expanded }) {
	return (
		<nav className={s.globalNav} data-mobile-expanded={expanded}>
			<ul className={s.navLinks}>
				{navItems?.length &&
					navItems.map(({ label, href, ...rest }) => {
						return (
							<li key={label}>
								<Link href={href} {...rest}>
									{label}
								</Link>
							</li>
						);
					})}
			</ul>

			<ul className={s.socialLinks}>
				{socialLinks?.map(({ label, href, ...rest }) => (
					<li key={label}>
						<a href={href} target='_blank'>
							{SOCIAL_ICONS[label.toLowerCase()]}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
