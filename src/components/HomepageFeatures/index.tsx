import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facts (Seeds & Plants)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Collect and maintain objective career data: jobs, achievements, skills,
        and education. Your canonical source of truth that never gets overwritten.
      </>
    ),
  },
  {
    title: 'Narratives (Soil & Stories)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Capture the context behind your achievements with STAR stories, case studies,
        and reflections that enrich your facts with meaning.
      </>
    ),
  },
  {
    title: 'Playbooks (Recipes)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Define rules for tailoring your data to specific goals. Codify your approach
        to creating targeted resumes, CVs, and portfolios.
      </>
    ),
  },
  {
    title: 'Signals (Dishes Served)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Generate polished deliverables: resumes, CVs, cover letters, and portfolio pages.
        Your final artifacts, ready to present to the world.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6 col--lg--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
