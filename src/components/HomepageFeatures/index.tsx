import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorageIcon from '@mui/icons-material/Storage';

const TrendingUpIconSvg = (props: { fontSize?: 'inherit' | 'small' | 'medium' | 'large'; className?: string; role?: string }) => (
  <TrendingUpIcon {...props} />
);

const MenuBookIconSvg = (props: { fontSize?: 'inherit' | 'small' | 'medium' | 'large'; className?: string; role?: string }) => (
  <MenuBookIcon {...props} />
);

const AutoStoriesIconSvg = (props: { fontSize?: 'inherit' | 'small' | 'medium' | 'large'; className?: string; role?: string }) => (
  <AutoStoriesIcon {...props} />
);

const StorageIconSvg = (props: { fontSize?: 'inherit' | 'small' | 'medium' | 'large'; className?: string; role?: string }) => (
  <StorageIcon {...props} />
);

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<{ fontSize?: 'inherit' | 'small' | 'medium' | 'large'; className?: string; role?: string }>;
  description: ReactNode;
  link: string;
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Signals',
    Svg: TrendingUpIconSvg,
    description: (
      <>
        Generate polished deliverables: resumes, cover letters, portfolio pages.
        Your final artifacts.
      </>
    ),
    link: '/docs/reference/signals',
    fontSize: 'large',
  },
  {
    title: 'Playbooks',
    Svg: MenuBookIconSvg,
    description: (
      <>
        Define rules for tailoring your data to specific goals. Codify your approach
        to creating targeted resumes, CVs, and portfolios.
      </>
    ),
    link: '/docs/reference/playbooks',
    fontSize: 'large',
  },
  {
    title: 'Narratives',
    Svg: AutoStoriesIconSvg,
    description: (
      <>
        Capture the context behind your achievements with STAR stories, case studies,
        and reflections that enrich your facts with meaning.
      </>
    ),
    link: '/docs/reference/narratives',
    fontSize: 'large',
  },
  {
    title: 'Facts',
    Svg: StorageIconSvg,
    description: (
      <>
        Collect and maintain objective career data: jobs, achievements, skills,
        and education. Your canonical source of truth that never gets overwritten.
      </>
    ),
    link: '/docs/reference/facts',
    fontSize: 'large',
  },
];

function Feature({ title, Svg, description, level, link, fontSize }: FeatureItem & { level: 'level1' | 'level2' | 'level3' | 'level4' }) {
  const cardClass = level === 'level1' ? styles.featureCardLevel1
    : level === 'level2' ? styles.featureCardLevel2
      : level === 'level3' ? styles.featureCardLevel3
        : styles.featureCardLevel4;

  return (
    <Link to={link} className={cardClass} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      <Svg className={styles.backgroundSvg} role="img" fontSize={fontSize} />
      <div className={styles.textOverlay}>
        <Heading as="h3">{title}</Heading>
        <p className={styles.hoverDescription}>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.pyramidContainer}>
          {/* Level 1 - Signals */}
          <div className={styles.pyramidLevel1}>
            <Feature {...FeatureList[0]} level="level1" />
          </div>

          {/* Level 2 - Playbooks */}
          <div className={styles.pyramidLevel2}>
            <Feature {...FeatureList[1]} level="level2" />
          </div>

          {/* Level 3 - Narratives */}
          <div className={styles.pyramidLevel3}>
            <Feature {...FeatureList[2]} level="level3" />
          </div>

          {/* Level 4 - Facts */}
          <div className={styles.pyramidLevel4}>
            <Feature {...FeatureList[3]} level="level4" />
          </div>
        </div>
      </div>
    </section>
  );
}
