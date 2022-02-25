// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "what-why-mentorship",
    {
      type: "category",
      collapsed: false,
      label: "Mentors",
      link: {
        type: "doc",
        id: "mentors-overview",
      },
      items: [
        "mentorship-styles",
        "mentorship-forms",
        "mentors-becoming-a-mentor",
        "mentors-what-to-share",
        "mentors-when-where-to-mentor",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Mentees (coming soon)",
      link: {
        type: "doc",
        id: "mentees-overview",
      },
      items: [
        "mentees-where-to-find-mentors",
        "mentees-what-to-ask",
        "mentees-how-to-respect-time",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Resources",
      link: {
        type: "doc",
        id: "resources-overview",
      },
      items: ["resources-mentorship-programs"],
    },
    {
      type: "category",
      collapsed: true,
      label: "Contributing",
      link: {
        type: "doc",
        id: "contributing-overview",
      },
      items: ["code-of-conduct", "contributing", "thank-you-contributions"],
    },
  ],
};

module.exports = sidebars;
