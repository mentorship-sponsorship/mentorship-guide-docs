import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./ConferenceTalkLogos.module.css";

type LogoItem = {
  imageSrc: string;
  alt: string;
};

const LogoList: LogoItem[] = [
  {
    imageSrc: "/img/logos/js-logo.png",
    alt: "JSConf US",
  },
  {
    imageSrc: "/img/logos/mongodb-live-logo.png",
    alt: "MongoDB Live",
  },
  {
    imageSrc: "/img/logos/drupalcon-logo.png",
    alt: "DrupalCon",
  },
  {
    imageSrc: "/img/logos/oss-summit-europe-logo.png",
    alt: "Open Source Summit Europe",
  },
];

export default function ConferenceTalkLogos(): JSX.Element {
  return (
    <section className="container hide-on-mobile">
      <p className={styles.title}>Based on talks given at</p>
      <div
        className={clsx(styles.logoContainer, "container", "padding-horiz-md")}
      >
        <div className={styles.logos}>
          {LogoList.map(({ imageSrc, alt }: LogoItem, idx) => {
            return (
              <div key={alt}>
                <img
                  className={styles.logo}
                  src={useBaseUrl(imageSrc)}
                  alt={alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
