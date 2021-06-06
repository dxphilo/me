---
title: Scroll Indicator in Nuxtjs

description: Make a scroll indicator in Nuxtjs

alt: scroll idicator Nuxtjs

excerpt: Make a scroll indicator in Nuxtjs

img: vue.jpg

tag: Nuxtjs

attribution: photo by John Philip from Pexelry
---

Scroll indicator can be implemented in blogs for the user to know where he has scrolled to within a page

In this article, we are going to make a scroll indicator in Nuxt.js, if you are not familiar with Nuxt.js and its architecture please consider checking out this article. It will get you up to speed with Nuxt.js. We will be making something similar to what these sites such as xteam.com use.

Or something similar to what you see when you scroll this page on the top.

Scroll indicator can be implemented in blogs for the user to know where he has scrolled to within a page. Some of the advantages of implementing a scroll indicator are:
It provides a beautiful look to a webpage, especially when applied to blog articles.
User can easily check his/her reading progress with ease.

We will be using an npm package and plugin known as vue-scroll-indicator.
To use this npm plugin we first need to install it into our application.
To install vue-scroll-indicator open your terminal and run the command below.
npm install vue-scroll-indicator
This command will install this plugin into our application.

**Register the plugin**

To register the plugin and make it available within our application, we need to navigate to the plugins folder located on the root of your Nuxt application structure and create a file named vue-scroll-indicator.js and include the codes below in the file.

```js{1,3-5}[vue-scroll-indicator.js]
import Vue from "vue";

import { VueScrollIndicator } from "vue-scroll-indicator";

Vue.component("vue-scroll-indicator", VueScrollIndicator);
```

You are not tied to this specific name. You can name it whatever your preferred name would be.
After that, we need to open our nuxt.config.js file located in the root of our application structure and register our plugin.

If you are wondering why we do this, this is why.
For server-side rendered Nuxt.js application this plugin will throw as an undefined window error. This is so because the plugin is configured to only run on the client-side and not on the server.

To prevent this error with server-side rendered Nuxt applications we need to tell Nuxt not to run this plugin on the server and only run it on the client-side.
The reason why we set the SSR to false.
Head over to the plugins and register vue-scroll-indicator as shown below.

```js{1,3-5}
plugins: [
 { src: ‘~/plugins/vue-scroll-indicator’, ssr: false }
 ],

```

**Render it into our application components**

To render the plugin into our components we do not need to import it like other components. We just include it as follows.

```js{1,3-5}
// <! — vue-scroll-indicator →>

<vue-scroll-indicator></vue-scroll-indicator>
```

**Style our vue-scroll indicator**

Another beautiful feature of this package is that we can style our scroll indicator.
We can set a different background color to match our site and increase the height of the scroll bar indicator.

**How do we apply the style?**

```js{1,3-5}
// <! — vue-scroll-indicator →

<vue-scroll-indicator
  height="4px"
  color="#32d9cb"
  background="none"
></vue-scroll-indicator>
```

_The height_: here we specify the height of the scroll indicator.

_Colour_: here we provide the hexadecimal value of our preferred colour. This will be the colour of the vue scroll indicator.

**Conclusion**

To use the plugin in server-side rendered Nuxt application, you need to set the **SSR** to **false.**
This will prevent the plugin from being rendered in the server.

Well, this is a cool feature you can add you your application.

To learn more about how to work with this plugin visit this link.

If you found this article interesting, please do not hesitate to share.
