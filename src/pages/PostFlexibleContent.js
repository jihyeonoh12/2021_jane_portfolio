import PostHero from '../components/PostHero'
import PostCodeBlock from '../components/PostCodeBlock'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostGallery from '../components/PostGallery'

import content3 from '../images/flexible_content/FlexibleContent2.jpg';
import content4 from '../images/flexible_content/FlexibleContent dropdown.jpg';
import content5 from '../images/flexible_content/programs.jpg';

import flexible_content_before from '../contents/flexible_content_before'
import flexible_content_after from '../contents/flexible_content_after'


const PostFlexibleContent = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero title="Refactor WordPress templates using flexible content" description=""
                    from="Company" company="Fresh N Lean" date="May 2022" role1="• Refactoring PHP templates" role2="• Creating Dynamic Components with ACF" role3="• Page Styling with Tailwind"
                />
            <PostCodeBlock code={flexible_content_before} language="php" classes='' fullContainer={false}
             text='
             <h2>Project Objectives</h2>
                <p className="mt-6">
                The goal of this project is to streamline and simplify the page-building process for members without coding knowledge. Previously, new templates had to be created for any pattern or component changes, making the process cumbersome even for minor adjustments. This project aims to implement a drag-and-drop system for WordPress, allowing for more efficient and user-friendly page creation.
                </p>
                '
             />
            <PostCodeBlock code={flexible_content_after} language="php" classes='' fullContainer={true}
             text='
             <h2>Solution</h2>
                <p className="mt-6">
                This project was accomplished by leveraging the flexible content field from the ACF plugin. First, I cloned each component into a flexible content ACF template. Then, I developed a PHP template that dynamically calls any component added to WordPress pages using the flexible template.
                </p>
                '
             />
            <PostGallery image1={content3} image2={content4} />
            <PostOutcome image={content5} classes="hidden" title="Learning" body="
            This change did not impact the user experience, so A/B testing or further measurement was unnecessary. However, this project provided valuable insight into the extensive features that ACF can offer in WordPress.
            " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostFlexibleContent;