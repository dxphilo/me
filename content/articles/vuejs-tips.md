---
title: Vuejs Tips

subtitle: Vuejs Tips

description: Vuejs Tips

alt: Vuejs Tips

excerpt: Vuejs Tips


imgurl: https://images.pexels.com/photos/207153/pexels-photo-207153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

tags: ["VueJS"]

createdAt: 2023-03-09

attribution: Photo by Pixabay from Pexels
---

In this article, we will explore five useful Vue.js tips that can make your day-to-day coding with Vue.js more efficient and productive. Whether you are a beginner or an experienced Vue developer, these tips can help you write cleaner, simpler, and more effective code. So, let’s dive in.

## Destructure props without loosing reactivity

Props are a powerful way for parent and child components to pass data between each other in Vue.js. Prop data is reactive, meaning that changes to a prop value in the parent component will be reflected in the child component that receives the prop. However, the child component cannot modify the value of the prop directly. Instead, it should emit an event to notify the parent component to update the prop.

When destructuring Vue.js props, the prop data will lose reactivity in the process. However, there is a way to retain reactivity when destructuring props. You can use the toRefs directive to wrap the props object and maintain reactivity during destructuring. With this directive, you can destructure prop data without worrying about losing reactivity.


```js{1,3-5}
<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    event: object;
    address: string;
  }>(),
  {}
);

const { address } = toRefs(props)
</script>

<template>
  <div class="font-medium bg-gray-100 text-gray-700 py-3 px-3 rounded">
      {{ address }}
  </div>
</template>
```

## 2. Creating custom directives
Vue.js directives are special attributes that can be added to HTML elements, allowing you to bind dynamic data and behaviors to the element. Directives in Vue.js are identified by the v- prefix on the attribute name, and they are used to provide additional functionality to the HTML element.

Some of the most commonly used vue.js directives are : v-if, v-html, v-on, v-bind, v-pre, v-once among others. In vuejs, you can create custom directives to perform a particular task. We are going to create a custom v-model directive capitalizes the text entered in an input tag.

```js{1,3-5}
<script setup>
  // Import the `ref` and `vModelText` functions from the Vue.js library
  import { ref, vModelText } from 'vue'

  // Create a reactive variable called `value` with an initial value of an empty string
  const value = ref("")

  // Define a custom modifier for the `v-model` directive called `capitalize`
  vModelText.beforeUpdate = function (el, { value, modifiers }) {
    // Check if the `capitalize` modifier is present in the `v-model` directive
    if (value && modifiers.capitalize) {
      // Convert the input value to uppercase and update the input field value
      el.value = el.value.toUpperCase()
    }
  }
</script>

<template>
  <!-- Create a text input field with `v-model.capitalize` directive -->
  <input type="text" v-model.capitalize="value" />
</template>

```
Directives are a powerful feature in Vue.js that allows you to add dynamic functionality to your application’s user interface. By leveraging directives, we can create more interactive and responsive applications that are easier to maintain and update.

## 3. Vue-specific performance markers
Tracing performance bottlenecks in applications is of great importance especially when you want to build perforamant applications. Vuejs has a specific feature that enables performance markers in Chrome DevTools.

To enable performance markers in development mode, you can set the performance option to true. This will allow you to trace component initialization, compilation, rendering, and performance tracing in the browser devtool’s performance/timeline panel.

```js{1,3-5}
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createHead } from "unhead";

import "./style.css";

const pinia = createPinia();
createHead();

pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  app.config.performance = true;
}

app.use(router);
app.use(pinia);
app.mount("#app");

```
The only caveat is that it work in development mode and in browsers supporting the performance mark API

## 4. Calling a method from outside a component
In Vue.js, we can call methods from outside a specific component with the help of the defineExpose macro. This is particularly useful when dealing with multiple components that are dependant on one another in some way.

defineExpose macro exposes component properties that can be accessed inside other components using refs, allowing you to call methods within certain components. This can also allow you to access variables declaration, props e.t.c

```js{1,3-5}
<script setup lang="ts">
  function doSomething(){
    // do smething
  }
  defineExpose({ doSomething });
</script>

<div>
  <h1>Child component</h1> 
</div>

```

Now we can import the component anywhere and call the various methods inside it as shown below.

```js{1,3-5}
<script setup lang="ts">
import { ref, onMounted} from 'vue';
import ChildComponent from './ChildComponent';
const childComponent = ref();
onMounted(() => {
  //here we access the exposed `doSomething` function 
  //and invoke it when the parent component is mounted
  childComponent.value.doSomething();
});
</script>

<div id="app">
  <ChildComponent ref="childComponent" />

```
Check out this article I wrote earlier to learn more about defineExpose.

https://levelup.gitconnected.com/how-to-access-child-component-properties-in-vue-js-3-d47f6ae1d62


## 5. Persisting Vue.js Pinia stores
Pinia, the recommended store for Vue.js, simplifies store implementation and is lightweight with performance benefits. When using Pinia to manage store, it’s important to persist the store data.

The pinia-plugin-persistedstate is a highly customizable package for this task, offering custom storage, serializer, and path-picking options.

Install the pinia-plugin-persistedstate with your preferred package manager as shown below.

```
pnpm : pnpm i pinia-plugin-persistedstate
npm : npm i pinia-plugin-persistedstate
yarn : yarn add pinia-plugin-persistedstate

```
You need to configure it inside the main.js or main.ts file as show below.

```
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createHead } from "unhead";

import "./style.css";

const pinia = createPinia();
createHead();

// inject piniaPluginPersistedstate to pinia
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

```
Enable Pinia store persistence by setting the persist property to true inside your store.

```
import { defineStore } from "pinia";

export const uselistingStore = defineStore(`listingStore`, {
  state: () => {
    return {
      data: [],
    };
  },
  persist: true,
  actions: {
  },
  getters: {

  },
})
```
### Conclusion

In conclusion, these five Vue.js tips can greatly enhance your development process and make your code more efficient and effective. From destructuring props without loosing reactivity, to persisting store state in Pinia, and accessing components methods outside a component, these tips can help you improve your Vue.js skills.

Kudos for reading this piece to this far, if you liked it don’t hesitate to share it out with others. Check out codeNotes, a subsctack Newsletter that I write at times.



