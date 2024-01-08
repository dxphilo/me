---
title: VueJS: How To Build a Package and Publish It to Npm

subtitle: We'll build a vuejs plugin and publish it publicly on npm

description: We'll build a vuejs plugin and publish it publicly on npm

alt: Vue Plugins

excerpt: We'll build a vuejs plugin and publish it publicly on npm

imgurl: https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2023-07-05/hire-vuejs-developers-what-is-vuejs.jpg

tags: ["VueJS", "PlugIns"]

createdAt: 2023-01-8

attribution: Photo by www.orientsoftware.com
---

Vuejs plugins come handy at times especially when you require a rock solid solution for a repetitive problem. These plugins offer global-level functionality within Vue.js applications. Such may include providing dynamic component, and directives to help with some functionalities.

Most Vue.js libraries, including UI component libraries, leverage similar techniques to provide their functionality.

By the end of this article, you will be able to build your own Vuejs plugin to provide global level functionality in your Vuejs applications and be able to use it all over your SFC component be it Dynamic components, directives e.t.c.
### Vuejs Pun
> What does one use to manage the state of their previous relationship? "Vuex"

### Scaffolding Your Plugin

Instead of manually setting up an application from scratch, we will use a TypeScript template created by Anthony Fu, which I find extremely useful due to its overall configuration and its actively maintained. This will allow us to quickly set up our dev environment and concentrate on the coding.

You can find the starter template here. Clone it to your dev environment using the following command:

```bash
git clone https://github.com/antfu/starter-ts.git
```

### Our Intended Plugin Functionality

We will be creating a plugin directive, v-safe-url, to safely and securely sanitize URLs in our application. This ensures the usage of safe URLs throughout our application.
The plugin we are building can be utilized as follows:

Users can install it using their preferred package manager, such as:

## NPM
```bash
npm install v-safe-url
```

### YARN

```bash
yarn add v-safe-url
```
###  PNPM

```bash
pnpm add v-safe-url
```
Its registration in a Vue.js application will be as follows:

```
  // In main.js or similar
  import { createApp } from 'vue';
  import VueSafeUrl from 'v-safe-url'; // importing the plugin

  const app = createApp(App);
  app.use(VueSafeUrl); // registering the plugin to vue instance
  app.mount('#app');

```

Then, within our components, we can utilize the directive as illustrated below to safely and securely sanitize URLs. It's important to note that the directive will be available exclusively for anchor tags (a tags), as it automatically injects the href attribute with the sanitized URL as its value.

```
<script setup>
import { ref } from 'vue';

const untrustedUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo');
</script>

<template>
  <div>
    <a v-safe-url="untrustedUrl" target="_blank" rel="noopener noreferrer">Click Here for a Safe Link</a> <!-- www.example.com/foo -->
  </div>
</template>

```

Contrarily, we will also provide another helper function that can be used outside of anchor tags. This helper function can be used anywhere within our Single File Component (SFC). 

The usage is demonstrated below

```
<script setup>
import { useSafeUrl } from 'v-safe-url';
import { ref } from 'vue';

const uncleanUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo');
const safeUrl = useSafeUrl(uncleanUrl.value);
</script>

<template>
  <div>
    <h1>Unsafe URL: {{ uncleanUrl }}</h1>
    <h2>Safe URL: {{ safeUrl }}</h2>
  </div>
</template>

```

### Writing Our Plugin

Now that we understand how our intended plugin is expected to work, let's move on to coding up the plugin.
> Note: I will assume you have set up the development environment, either using your own configuration or the Starter template for TypeScript library available at [Starter Template](https://github.com/antfu/starter-ts).
Open your terminal and run the command below:

```bash
pnpm add @braintree/sanitize-url
```
Since we wont be writing our own safe URL parser and sanitizer from the ground up, we will use this battle tested package to help us with the work.

Navigate to your entry file main.ts and have the code shown below.

```
import type { App } from 'vue'
import { useSafeUrl, vSafeUrl } from './api'

function install(app: App, _options = {}) {
  app.directive('safe-url', vSafeUrl)
}

export default {
  install,
}
export { useSafeUrl }

```

Here we have an install function, this will be the function responsible for injecting or installing our plugin into the Vuejs instance when we use `app.use(VueSafeUrl)``. 
The useSafeUrl will be imported for scenarios where a directive is not suitable. i.e in cases where we want to sanitize URL's in none a HTML tags.

Create a file named `api.ts` file in the same directory as the entry file `main.ts` file. This file will be the file to house our helper functions.

```
import { sanitizeUrl } from '@braintree/sanitize-url'
import type { Directive, DirectiveBinding } from 'vue'

function sanitiZer(url: string): string {
  return sanitizeUrl(url)
}

export const vSafeUrl: Directive<HTMLElement, string> = (el: HTMLElement, binding: DirectiveBinding) => {
  el.setAttribute('href', sanitiZer(binding.value))
}

export function useSafeUrl(url: string): string {
  return sanitiZer(url)
}


```

In our `api.ts` file, we have two main functions: `vSafeUrl`, responsible for attaching the safely sanitized URL to the `href` attribute of the `a` tag, and `useSafeUrl`, which takes a URL and safely sanitizes it. 

### Publishing our Package to NPM

Now that we have our package set up and ready, we need to package and publish it to NPM. First, you need to create an NPM account if you don't have one. If you used the starter template, it will be easy to publish all this to npm and GitHub Packages.

On your development terminal, run the command `pnpm release` 

```bash
pnpm release
```
This will bundle up our package and publish the release to both GitHub and NPM pages.

### Using the Package

Assuming you have successfully bundled and published your package on NPM, we can now use it in any Vue.js application, as demonstrated below.
Install it in the same way you would any other NPM package:

```bash
pnpm add v-safe-url
```

In your Vue.js entry file (main.js or main.ts).

```
  // In main.js or similar
  import { createApp } from 'vue';
  import VueSafeUrl from 'v-safe-url';

  const app = createApp(App);
  app.use(VueSafeUrl);
  app.mount('#app');
```

We can now use this directive in any of our Single File Components (SFC) as shown below. Remember that our v-safe-url is specifically designed for a HTML tags, as it automatically injects the href attribute and assigns it the value of the sanitized and secure URL.

```
<script setup>
import { ref } from 'vue';

const untrustedUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo');
</script>

<template>
  <div>
    <a v-safe-url="untrustedUrl" target="_blank" rel="noopener noreferrer">Click Here for a Safe Link</a> <!-- www.example.com/foo -->
  </div>
</template>

```

### Next Steps

We've seen and build a Vue.js plugin and bundled it into an NPM package. The principles demonstrated here can be applied to create a package of your liking. Better yet, you can develop your own UI design system and distribute it to users.

#### Resources
- [sanitize-url](https://github.com/braintree/sanitize-url)
- [v-safe-url](https://github.com/dxphilo/v-safe-url)

## Before you go
I am considering writing on developing a plugin that provides a UI system, featuring components like card buttons, akin to what UI libraries offer. If you're interested in such article guide, follow me to stay updated.

Should you have any questions, encounter challenges, or identify areas for improvement, please feel free to drop a comment below. I would greatly appreciate the opportunity to assist you. Connect with me on X via [@amjohnphilip](https://twitter.com/amjohnphilip) for further discussions.
