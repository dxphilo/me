---
title: Add Sitemap in NuxtJs Using Nuxt Content

subtitle: Add Sitemap Using Nuxt Content

description: Improve your website’s SEO by adding a sitemap 🎉

alt: Improve your website’s SEO by adding a sitemap 🎉

excerpt: Improve your website’s SEO by adding a sitemap 🎉

imgurl: https://images.unsplash.com/photo-1499363153295-198bd26fb759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80

tags: ["SEO", "NuxtJS"]

attribution: Photo by Anton Darius on Unsplash

createdAt: 07/19/2022
---

## Add Sitemap in NuxtJs Using Nuxt Content

Improving your website’s Search Engine Optimization (SEO) is very critical especially when you want to improve your rankings in search engine results.

Generating a sitemap of your websites is useful in making it easier for web crawlers (Google, Bing, DuckDuckGo) to understand your website. Information and files available in the sitemap may include pages, images, articles, videos, and other files available on your website.

A sitemap file is very effective as it tells web crawlers about the information they should consider and prioritize on your website.

Having a properly configured sitemap will enable web crawlers to easily discover information about your site pages. This will boost your chances of ranking higher on search engine results.

> “A sitemap helps search engines discover URLs on your site, but it doesn’t guarantee that all the items in your sitemap will be crawled and indexed. However, in most cases, your site will benefit from having a sitemap.”~ Google.

## Why you might need a sitemap

While it might be necessary to have a sitemap configured for your websites, it might not be too necessary for some scenarios. Some scenarios that you should consider having a sitemap.

- When you have a fairly large website with lots of media file content(videos, images).
- When your website serves rich content that you would want to be shown to your audience.
- When you aim to organize a large website
- When your website is fairly new.
- When you want to improve your Search Engine (SEO) indexing ranks.
- Provide a natural way to drive visitors.

## Configuring sitemap in Nuxt with Nuxt Content

## Installing Nuxt/sitemap

We are going to leverage @nuxt/sitemap module to add sitemap configuration to our site.

_Using Npm_

```
npm install @nuxtjs/sitemap
```

_Using Yarn_

```
yarn add @nuxtjs/sitemap
```

Locate nuxt.config file and add @nuxtjs/sitemap in the modules section as shown below.

```js{1,3-5}[nuxt.config.js]
modules: [
'@nuxt/content',
'@nuxtjs/sitemap',
],
```

Next, you are required to add a sitemap property inside the nuxt.config file. For dynamically routes presented with the \_slug.vue, we need to configure sitemap to index these routes also.

On the routes of your project, create a file named sitemapRoutes.js and have the following function in the file. This will be a helper function to automatically get the path associated with the necessary files from the content directory.

```js{1,3-5}[sitemapRoutes.js]
export default async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path"]).fetch();

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
};
```

The function above will automatically get full paths of the files present in the content directory where all of your nuxt-content blog files are hosted.

Now we can import and reference this file inside the nuxt.config file and add it inside the sitemap property. We will declare a routes option in the sitemap property.

```js{1,3-5}[nuxt.config.js]
sitemap: {
    hostname: global.siteUrl, // you can hardcode website url here
    routes() {
      return sitemapRoutes()
    },
  },
```

These automatically generated routes will be used added to our sitemap file when the application is built. To test if the sitemap.xml file was successfully generated with relevant path and information, build your application and navigate to the root of the dist directory. Here you will find the sitemap.xml file with necessary information related to your site.

## Final thoughts

Thank you for taking your time and reading through this piece. Have a nice time building websites that drive forward amazing user experience.
