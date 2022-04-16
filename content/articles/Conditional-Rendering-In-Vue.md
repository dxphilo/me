---
title: Conditional rendering in Vue

description: Conditional rendering in Vue

alt: Conditional rendering in Vue

excerpt: Conditional rendering in Vue

img: vue.jpeg

tag: VueJS

createdAt: 9/15/2021

attribution: photo by John Philip from Pexelry
---

Vue.js comes bundled with some amazing features. One of the amazing features is conditional rendering that allows us to render templates on certain conditions.

Assume we have a situation where we only want to render a certain block or template when a particular condition is met, this is where conditional rendering comes in handy.

Vue.js even makes it easy by introducing a directive that we can easily implement to conditionally render elements or blocks.

Conditional rendering in Vue.js can be implemented with the v-if, v-else, and v-else-if directives.
Another directive that we can use to conditionally render objects is the v-show directive.

**Use cases of conditional rendering**

- Show or hide blocks.
- Toggling between the application.
- Implement permissions.

Let’s take a scenario where we want to render some block of text when the user has completed a stage.
Take for instance the code snippet below

```js{1,3-5}[index.vue]
<template>
 <div>
     <div v-if=”name” class=”pt-30">
        <h2>Name value is {{ name }}</h2>
     </div>
 </div>
</template>
 <script>
export default {
 data() {
 return {
 name: “john”,
 };
 },
};
</script>
<style scoped>
</style>
```

From the code snippet above, if the name value is truthy, the div will be rendered into the components block.

We can similarly use v-else for fallback in case the condition does not compute to be truthy.

```js{1,3-5}[index.vue]
<template>
 <div>
    <div v-if=”name” class=”pt-30">
          <h2>Name value is {{ name }}</h2>
    </div>
    <div v-else class=”pt-30">
          <h2>Name value is Unfilled</h2>
    </div>
 </div>
</template>
 <script>
export default {
 data() {
 return {
 name: “john”,
 };
 },
};
</script>
<style scoped>
</style>
```

From the code snippet, we have added the v-else directive in case the conditional is not truthy.

What if you want to conditionally render elements based on not only one but various certain conditions?
Vue.js has your back. You can implement the use of v-else-if directive instead.

The v-else-if directive acts as an else if statement. This directive comes in handy when you want to conditionally render elements based on various conditions.

**Before you go**

Thank you for reading through this article so far. If you found it helpful please don’t hesitate to let me know in the comments sections and share.
