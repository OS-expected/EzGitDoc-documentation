import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/core/styles.scss';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`EzGitDoc Documentation`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div class="row">
            <div class="col col--8 test">
              <div className={clsx('item shadow--tl hero hero--dark', styles.sliderBar)}>&nbsp;</div>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                cssModule={AwesomeSliderStyles}
              >
                <div data-src="img/index/ezgitdoc_slide1.png" />
                <div data-src="img/index/ezgitdoc_slide2.png" />
                <div data-src="img/index/ezgitdoc_slide3.png" />
                <div data-src="img/index/ezgitdoc_slide4.png" />
                <div data-src="img/index/ezgitdoc_slide5.png" />
              </AutoplaySlider>
            </div>
            <div class="col col--4">
              {/* <h4 class="hero__title">{siteConfig.title}</h4> */}
              <div className={clsx('item shadow--tl', styles.indexDesc)}>   
                <img className={styles.ezGitDocLogo} src="img/ezgitdoc-logo2.png" alt="EzGitDoc logo" height="140px"/>     
                <p>
                  Open source, WYSIWYG tool designed to improve Git documentation experience extended with personal ideas. Design and edit prototype without need to edit code structure. EzGitDoc generates code for you.
                </p>         
                <div className={styles.buttons}>
                  <Link
                    className={clsx(
                      'button button--info button--sm',
                    styles.getStarted,
                    )}
                    to={useBaseUrl('docs/')}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
