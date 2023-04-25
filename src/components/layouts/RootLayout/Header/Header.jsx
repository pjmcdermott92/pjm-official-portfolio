import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.scss';

export default function Header() {
	const [mobileActive, setMobileActive] = useState(false);
	const toggleMobileActive = () => setMobileActive((prev) => !prev);

	return (
		<header className={s.mainHeader}>
			<a
				href='#content'
				className='visually-hidden'
				aria-roledescription='skip to content link'
			>
				Skip to Main Content
			</a>
			<div className='container'>
				<Link href='/' className={s.brandLogo}>
					<Image
						src='/pjm-logo-color.svg'
						alt='Patrick McDermott'
						width={50}
						height={50}
						priority
					/>
					<div className={s.brandName}>Patrick McDermott</div>
					<div className={s.brandTagline}>Full-Stack Web Developer</div>
				</Link>
				<Navigation expanded={mobileActive} />
				<button
					className={s.mobileToggleBtn}
					data-active={mobileActive}
					onClick={toggleMobileActive}
				>
					<span />
				</button>
			</div>
		</header>
	);
}
