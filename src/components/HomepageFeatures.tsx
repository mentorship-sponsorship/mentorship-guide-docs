import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Are you a mentor?",
    image: "/img/undraw-mg-community.svg",
    description: (
      <>
        Learn strategies and resources. Read advice from other mentors. Share
        your knowledge. Help make our community more inclusive, collaborative,
        and innovative.
      </>
    ),
  },
  {
    title: "Are you a mentee?",
    image: "/img/undraw-mg-book.svg",
    description: (
      <>
        How do you find mentors? What do you ask and talk about? Read advice
        from other mentees.
      </>
    ),
  },
  {
    title: "Looking to get started?",
    image: "/img/undraw-mg-mundo.svg",
    description: (
      <>
        Mentorship should be accessible to all. Why is it important? Why should
        you care? How do you get started as a mentor or mentee?
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={useBaseUrl(image)}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="header-pill">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={clsx(styles.features)}>
        <div className={clsx(styles.featuresContainer, "margin--xl")}>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
