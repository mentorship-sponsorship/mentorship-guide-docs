// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "what-why-mentorship",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      items: ["mentors-overview", "mentees-overview"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Mentors",
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
      items: ["resources-mentorship-programs"],
    },
    {
      type: "category",
      collapsed: true,
      label: "Contributing",
      items: ["code-of-conduct", "contributing", "thank-you-contributions"],
    },
  ],
};

module.exports = sidebars;
