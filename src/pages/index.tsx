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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/explanation/overview">
            🚀 Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function PyramidSection() {
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <HomepageFeatures />
        <div style={{ marginTop: '3rem' }}>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: '500',
            color: 'var(--ifm-color-primary)',
            marginBottom: '2rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
          }}>
            Stop flattening your rich career history into static resumes.<br />
            <span style={{ color: 'var(--ifm-color-emphasis-700)' }}>
              Organize your professional data with Facts, Narratives, Playbooks, and Signals.
            </span>
          </p>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/reference/the-matrix"
            style={{ marginRight: '1rem' }}>
            📊 Learn the Framework
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/explanation/using-signalstack">
            📖 How to Use
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Career Data Management Framework"
      description="Transform your career data into strategic career artifacts using Facts, Narratives, Playbooks, and Signals.">
      <HomepageHeader />
      <main>
        <PyramidSection />
      </main>
    </Layout>
  );
}
