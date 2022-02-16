import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HeroTitleSecondary.module.css";

type HeroTitleSecondary = {
  title: string;
  ctaText: string;
  ctaLink: string;
};

export default function HeroTitleSecondary({
  title,
  ctaText,
  ctaLink,
}: HeroTitleSecondary): JSX.Element {
  return (
    <section className={clsx(styles.heroBanner, "hero--primary")}>
      <div className={clsx(styles.containerHero, "container")}>
        <h2 className={clsx(styles.title, "hero__title")}>{title}</h2>
        <div className={clsx(styles.buttons, "margin-top--lg")}>
          <Link className="button button--secondary button--lg" to={ctaLink}>
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
