import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostCodeBlock from '../components/PostCodeBlock'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostGallery from '../components/PostGallery'

import content1 from '../images/fnl_homepage/fnl_new_home_banner.jpg';
import content2 from '../images/fnl_homepage/fnl_newhome_acf.jpg';
import content3 from '../images/fnl_homepage/fnl_newhome_desktop.jpg';
import content4 from '../images/fnl_homepage/fnl_newhome_mobile.jpg';
import content5 from '../images/flexible_content/programs.jpg';

import fnl_newhome_hero from '../contents/fnl_newhome_hero'


const PostFnlNewHome = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="Building the new Fresh N Lean homepage" description=""
                    from="Company" company="Fresh N Lean" date="July 2023" role1="• Creating Dynamic Components with ACF" role2="• Page Styling with Tailwind"
                />
            <PostContent classes="" image={content2} title="Project Objectives" 
                body="
                For this project, my focus was on creating reusable and intuitive components with organized ACF (Advanced Custom Fields), making it easier for content managers to navigate between components and update content without needing developer assistance. "
                h3="" p=""/>
            
            <PostCodeBlock code={fnl_newhome_hero} language="php" classes='flex-row-reverse' fullContainer={false}
             text='
             <h2>Hero Banner Component</h2>
                <p className="mt-6">
                Here is an example of a Hero component with variables that allow users to select and customize it
                </p>
                '
             />
            <PostGallery title="Final Design And Layout" image1={content3} image2={content4} button='View Live Page' url='http://freshnlean.com/fnl' />
            <PostOutcome image={content5} classes="hidden" title="Learning" body="
                This project was a great opportunity for me to refine my ACF and PHP component-building skills. I enjoyed crafting each component with a focus on customization, ensuring that future updates won't require any static code changes.
                " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostFnlNewHome;