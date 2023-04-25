import Link from 'next/link';
import s from './HeroSection.module.scss';

export default function HeroSection() {
	return (
		<section className={s.heroSection}>
			<div className='container'>
				<div className={s.heroContainer}>
					<h3>Hello! My name is</h3>
					<h1>Patrick McDermott</h1>
					<h2>I build things for the web!</h2>
					<p className={s.lead}>
						I am a full-stack developer specializing in building modern,
						functional, and beautiful websites and web applications that deliver
						an exceptional user experience.
					</p>

					<div className={s.heroBtns}>
						<Link
							href='/contact'
							className={`btn btn-lg btn-primary ${s.ctaBtn}`}
						>
							Let&apos;s Talk!
						</Link>
						<Link href='/portfolio' className='btn btn-lg btn-outline-primary'>
							See My Work
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
