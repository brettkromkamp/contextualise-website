import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non velit quis magna congue euismod. Nullam rhoncus massa eget scelerisque mollis.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/focus.svg').default,
    description: (
      <>
        Integer pretium nibh ut volutpat ultrices. Vivamus pulvinar fermentum nisl id ornare. Ut ligula turpis, dignissim vitae leo id, mollis vehicula arcu. Quisque consectetur convallis finibus.
      </>
    ),
  },
  {
    title: 'Structured Thought',
    Svg: require('../../static/img/teaching.svg').default,
    description: (
      <>
        Ut elit risus, tempor vitae iaculis sit amet, euismod nec risus. Praesent vitae metus ante.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
