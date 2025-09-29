import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle" style={{fontSize: '1.1rem', marginTop: '1rem', opacity: 0.9}}>
          Stop flattening your rich career history into static resumes.
          Organize your professional data with Facts, Narratives, Playbooks, and Signals.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/explanation/overview">
            🚀 Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/reference/the-matrix"
            style={{marginLeft: '1rem'}}>
            📊 Learn the Framework
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Career Data Management Framework"
      description="Transform your career data into strategic career artifacts using Facts, Narratives, Playbooks, and Signals.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
