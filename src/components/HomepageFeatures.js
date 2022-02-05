import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Functional Safety',
    //Svg: require('../../static/img/').default,
    description: (
      <>
        Cybersecurity is taken into consideration in many Safety Standards (e.g. ISO/SAE 21434). 
        Furthermore, the digitalization, cloud transformation makes it inevitable to make adjustments into Cyber and Safety policies and programs 
      </>
    ),
  },
  {
    title: 'Asset Discovery',
    //Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Knowing what you need to defend, and what you need to defend <b> the most </b> is one of the key of defending against adversaries. 
      </>
    ),
  },
  {
    title: 'DevSafeOps',
    //Svg: require('../../static/img/functional_safety.jpeg').default,
    description: (
      <>
        The 'philosophy' of DevSafeOps is based on Dev<b>Sec</b>Ops.
        Taking both Cybersecurity and Safety into consideration in Software Development, and shifting the focus on it to the earliest stages of Development Lifecycle is the responsibility of us and vendors.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       {/* <Svg className={styles.featureSvg} alt={title} />  */}
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
