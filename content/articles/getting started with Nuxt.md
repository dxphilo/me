---
title: Getting started with Nuxtjs

description: Nuxt the Vuejs Framework

alt: getting started with Nuxtjs

excerpt: A guide to get you started with Nuxtjs

img: twitter-screen.jpg

tag: Nuxtjs Vuejs

attribution: photo by John Philip from Pexelry
---

**Getting Started with Nuxt**

This article is a guide for those getting started with Nuxtjs and its architecture.
Nuxtjs is an open sourced framework that is built entirely on top of VueJS.

Nuxtjs comes bundled with some amazing technologies such as the choice to use between server side rendered application and single page applications.
creating a nuxt application.

To create a fresh Nuxt application. Open your developer terminal and use the command below depending on your preferred package manager.

**NPM**

```

npm create nuxt-app getting-started-with-nuxt
```

The command will create a nuxt application with the title getting-started-with-nuxt. You can change this with your desired title.

**YARN**

```

yarn create nuxt-app getting-started-with-nuxt
```

The command will create a nuxt application with the title getting-started-with-nuxt. You can change this with your desired title.

This commands will create a fresh nuxt application. Now you need to change your directory into the newly created nuxt application and run the command npm run dev on your terminal.
The command will transpile our nuxt application files and serve it to localhost:3000.
Nuxt also will also restart and serve our application after every save and hot reload our application every time we make changes and make a save.

**Nuxt folder structure.**

**Assets**

- This directory contains your un-compiled assets such as LESS, SASS, or JavaScript. this includes the media and other assets such as images.

**Components**

- The components directory contains your Vue.js Components.

**Middleware**

- This directory contains your application middleware.

Middleware let you define custom functions that can be run before rendering either a page or a group of pages.

**Layouts**

- This directory contains your Application Layouts.

**Pages**

- This directory contains routed components. It also contains our application Views and Routes.

**Plugins**

- This directory contains JavaScript plugins that you want to run before mounting the root Vue.js application

**Static**

- This directory contains your static files.

**Store**

- **This directory contains your Vuex Store files.**

Nuxt also comes bundled with a lot of amazing technologies and advantages. Some of the main advantages of nuxt are.

- **Universal/server side rendering.**

Nuxt offers customization for either choosing between universal or server side rendering for your application.

- **SEO optimization.**

Nuxt comes configured for SEO effectivity so you have to worry less of that for your application, more like WordPress.

- **Integrated meta tags management with vue-meta**

On top of the benefits it nuxt also offers integration for including meta-tags for your application.

- **Simple page routing (Routing based on file structure/Pages).**

Nuxt comes configured with vue-router so you have less to handles your routes. It provides the pages directory where all the routed components are included.

- **Choice to include UI frameworks.**

Nuxt offers the ability to include your favorite UI framework such as bootstrap, tailwind, Vuetify and other famous UI frameworks.

- Choice to include backend framework.
- No Webpack config to maintain.
- Automatic code-splitting, Babel transpile and Sass integration.
- Extendable with modular architecture.
- Easy application build with “nuxt generate”.

**Building a Production Ready nuxt application**

Nuxt provides an easy application build with the command
`“nuxt generate”`

to build a production ready application.

It will create a dist folder which is an already optimized application for deployment.

**Conclusion**

Nuxt provides a simple yet powerful application architecture.

Thank you for reading this article if you found it helpful please do not hesitate to share out.

Reference
Nuxt website
