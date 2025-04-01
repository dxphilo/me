export default {
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.dark`
            dark: "github-dark",
          },
        },
      },
    },
  },

  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  compatibilityDate: "2025-03-28",
};
