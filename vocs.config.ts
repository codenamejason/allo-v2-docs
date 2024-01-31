import { defineConfig } from "vocs";

export default defineConfig({
  banner: {
    dismissable: false,
    content: `<a href="/#current-status" target="_blank" rel="noreferrer">🔥 Allo v2 is now live 🔥 Learn more →</a>`,
    backgroundColor: "green",
  },
  title: "Allo v2 Docs",
  description: "Documentation for Allo v2",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Allo",
      link: "/allo",
    },
    {
      text: "Registry",
      link: "/registry",
    },
    {
      text: "Strategies",
      link: "/strategies",
    },
    {
      text: "SDK",
      link: "/sdk",
    },
    {
      text: "Contracts",
      link: "/contracts",
    },
    {
      text: "Blog",
      link: "/blog",
    },
  ],
  blogDir: "/pages/blog",
  topNav: [
    { text: "Allo", link: "/allo" },
    { text: "Registry", link: "/registry" },
    { text: "Strategies", link: "/strategies" },
    { text: "Blog", link: "/blog" },
  ],
});
