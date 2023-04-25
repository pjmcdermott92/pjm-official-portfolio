import s from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={s.siteFooter}>
			<div className='container'>
				<p>
					<small>
						&copy;{new Date().getFullYear()} by Patrick McDermott. All rights
						reserved.
					</small>
				</p>
			</div>
		</footer>
	);
}
