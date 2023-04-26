
import Link from 'next/link';
import s from './LatestPostsSection.module.scss';

const latestPosts = [
    {
        id: 1,
        title: 'Test Post Number One',
        excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quidem fuga impedit dicta, enim, quisquam, explicabo quae reiciendis fugit recusandae saepe maiores vitae dolore optio.',
        posted_on: new Date().toLocaleDateString(),
        categories: [ 'React' ]
    },
    {
        id: 2,
        title: 'Test Post Number Two',
        excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quidem fuga impedit dicta, enim, quisquam, explicabo quae reiciendis fugit recusandae saepe maiores vitae dolore optio.',
        posted_on: new Date().toLocaleDateString(),
        categories: [ 'React' ]
    },
    {
        id: 3,
        title: 'This Is A Longer Title for This Post',
        excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quidem fuga impedit dicta, enim, quisquam, explicabo quae reiciendis fugit recusandae saepe maiores vitae dolore optio.',
        posted_on: new Date().toLocaleDateString(),
        categories: [ 'React' ]
    },
];

export default function LatestPostsSection() {

    return (
        <section className={s.latestPosts}>
            <div className='container'>
                <h2 className='section-title'>Latest From the Blog</h2>

                <div className='card-row'>
                    {
                        latestPosts?.length ? latestPosts.map(post => {
                            return (
                                <div key={post.id} className={`card ${s.postCard}`}>
                                    <div className='card__body'>
                                        <h2><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
                                        <p className={s.postMeta}>{post.posted_on}</p>
                                        <p>{post.excerpt}</p>
                                        <div className={s.postCategories}>
                                            {post.categories.map(cat => <span key={cat}>{cat}</span>)}
                                        </div>
                                        <Link href={`/blog/${post.id}`} className={s.readMoreLink}>Read More &gt;&gt;</Link>
                                    </div>
                                </div>
                            )
                        }) : (<p>No posts</p>)
                    }
                </div>

                <div className='text-center'>
                    <Link href='/blog' className='btn btn-lg btn-outline-dark'>
                        More Posts
                    </Link>
                </div>
            </div>
        </section>
    )
}