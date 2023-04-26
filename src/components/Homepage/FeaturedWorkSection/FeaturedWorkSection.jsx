import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import s from './FeaturedWorkSection.module.scss';

// SAMPLE PORTFOLIO DATA - WILL BE REPLACED WITH AN API CALL FUNCTION IN PROD
const featuredProjects = [
    {
        title: 'Raven Heating & Cooling, LLC',
        short_description:
            '<p>Raven Heating & Cooling, LLC is a family-owned HVAC business located in Tucson, AZ. Services provided include custom website design and development using NextJS.</p>',
        github_link: 'https://github.com/pjmcdermott92',
        website_url: 'https://ravenac.com',
        project_image: '/ravenac-screenshot.png'
    },
    {
        title: 'Devslopes Code Challenge',
        short_description:
            "<p>Sales funnel page for Devslopes Academy's newest 30-day Code Challenge using NextJS.</p>",
        github_link: 'https://github.com/pjmcdermott92',
        website_url: 'https://30daycodechallenge.com',
        project_image: '/devslopes-screenshot.png'
    },
    {
        title: "Amy's Grooming Salon",
        short_description:
            "<p>Amy's Grooming Salon is located in Atlanta, GA</p>",
        github_link: 'https://github.com/pjmcdermott92',
        website_url: 'https://pjmcdermott.com',
        project_image: '/amys-grooming-screenshot.png'
    }
];

export default function FeaturedWorkSection() {
    return (
        <section className={s.featuredWorkSection}>
            <div className='container'>
                <h2 className='section-title'>Featured Work</h2>

                {featuredProjects?.length ? (
                    <div className='card-row'>
                        {featuredProjects.map((project) => (
                            <div
                                key={project.title}
                                className={`card ${s.projectCard}`}
                            >
                                <div className='card__img'>
                                    <Image
                                        src={project.project_image}
                                        alt={project.title}
                                        fill
                                        sizes='(max-width: 768px) 100vw,
                                            (max-width: 1200px) 50vw,
                                            33vw'
                                        priority
                                    />
                                </div>
                                <div className={`card__body ${s.card__body}`}>
                                    <h4>
                                        <Link href='/'>{project.title}</Link>
                                    </h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: project.short_description
                                        }}
                                    />
                                    <div className={s.actionBtns}>
                                        <Link
                                            href={project.github_link}
                                            className='btn btn-sm btn-outline-light'
                                        >
                                            <FaGithub />
                                            View on Github
                                        </Link>
                                        <Link
                                            href={project.website_url}
                                            className='btn btn-sm btn-outline-light'
                                        >
                                            <FaGlobe />
                                            View Live Site
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No projects to show.</p>
                )}
                <div className='text-center'>
                    <Link href='/portfolio' className='btn btn-lg btn-outline-dark'>
                        More Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
