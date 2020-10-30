import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from './awesomeSliderStyles.scss';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const features = [
  {
    title: 'Less writing more clicking',
    imageUrl: 'img/index/features/less-writing.svg',
    credits: 'https://freeicons.io/graphic-design-flat-icon-set/design-color-mouse-icon-15190',
    iconAuthor: 'Raj Dev',
    description: (
      <>
        Don't spend extra time on extending element manually or finding bug why something is not
        working as expected. Let EzGitDoc handle code generation :)
      </>
    ),
  },
  {
    title: 'Easy to understand & use',
    imageUrl: 'img/index/features/easy-to-use.svg',
    credits: 'https://freeicons.io/regular-life-icons/puzzle-icon-17876',
    iconAuthor: 'Anu Rocks',
    description: (
      <>
        EzGitDoc has minimalistic UI which is easy to use. Design prototype and then see
        how result looks on any page that uses md files for documentation.
      </>
    ),
  },
  {
    title: 'Well documented',
    imageUrl: 'img/index/features/well-documented.svg',
    credits: 'https://freeicons.io/regular-life-icons/book-bookmark-icon-17768',
    iconAuthor: 'Anu Rocks',
    description: (
      <>
        EzGitDoc has extensive documentation about changes, explanations and examples. If you 
        need help, feel free to contact or leave issue <a href="https://github.com/OS-expected/EzGitDoc/issues" target="_blank">here</a>
      </>
    ),
  },
  {
    title: 'Customizable',
    imageUrl: 'img/index/features/customizable.svg',
    credits: 'https://freeicons.io/regular-life-icons/cogs-icon-17791',
    iconAuthor: 'Anu Rocks',
    description: (
      <>
        Personalize tool with settings you might find comfortable to use like automated modals, 
        space between elements etc.
      </>
    ),
  },
  {
    title: 'Validated',
    imageUrl: 'img/index/features/validated.svg',
    credits: 'https://freeicons.io/regular-life-icons/shield-ok-icon-17883',
    iconAuthor: 'Anu Rocks',
    description: (
      <>
        If one of the fields won't be filled in as expected, you will receive easy notification
        on what needs to be fixed in order to create element.
      </>
    ),
  },
  {
    title: 'Fast',
    imageUrl: 'img/index/features/fast.svg',
    credits: 'https://freeicons.io/regular-life-icons/clock-icon-17785',
    iconAuthor: 'Anu Rocks',
    description: (
      <>
        Design interesting repository document with EzGitDoc tool a lot faster than writing from 
        scratch new code or modifying old template.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, credits, iconAuthor}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <a href={credits} style={{fontSize:'65%'}} target="_blank">Icon made by {iconAuthor} from www.freeicons.io </a>
      <h3>{title}</h3>
      <p className={styles.featureDescStyle}>{description}</p>
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
          <div className="row">
            <div className="col col--8">
              <div className={clsx('item shadow--tl hero hero--dark', styles.sliderBar)}>&nbsp; <span className={clsx('iconify', styles.sliderIcon)} data-icon="emojione:red-circle" data-inline="false"></span> &nbsp; <span className={clsx('iconify', styles.sliderIcon)} data-icon="twemoji:yellow-circle" data-inline="false"></span> &nbsp; <span className={clsx('iconify', styles.sliderIcon)} data-icon="twemoji:green-circle" data-inline="false"></span></div>
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
            <div className="col col--4">
              {/* <h4 class="hero__title">{siteConfig.title}</h4> */}
              <div className={clsx('item shadow--tl', styles.indexDesc)}>   
                <img className={styles.ezGitDocLogo} src="img/ezgitdoc-logo.png" alt="EzGitDoc logo" height="140px"/>     
                <br/>
                <p>
                  Unique, open source designer with personal ideas. Develop documentation for your repository with <strong>more clicking than writing</strong> approach. EzGitDoc generates code for you :)
                </p>
                <Link
                  to={useBaseUrl('docs')}
                  className={styles.getStartedBtn}>
                  <AwesomeButton
                    ripple={false}
                    size="medium"
                    cssModule={AwesomeButtonStyles}
                    type="primary"
                  >
                    Get Started
                  </AwesomeButton>
                </Link>
                &nbsp;&nbsp;
                <AwesomeButton
                    ripple={true}
                    size="small"
                    type="github"
                    className={styles.runToolBtn}
                    href="https://os-expected.github.io/EzGitDoc/"
                    target="_blank"
                >
                    EzGitDoc
                </AwesomeButton>
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
