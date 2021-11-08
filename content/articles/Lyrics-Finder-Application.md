---
title: Lyrics Finder in NuxtJs

description: Make a simple lyrics finder application with Nuxtjs and tailwind css

alt: Make a simple lyrics finder application with Nuxtjs and tailwind css

excerpt: Lyrics finder application with Nuxtjs

img: pexels-stas-knop-1626481.jpg
tag: NuxtJs vue

attribution: photo by John Philip from Pexelry
---

# **Lyrics Finder Application in Nuxt**

Make a simple lyrics finder application with Nuxtjs and tailwind css.

In this article we are going to make a simple lyrics finder application with Nuxtjs and TailwindCss

Pre-requisites

- Have NodeJs installed
- Basic knowledge of VueJS
- Basic knowledge of Nuxtjs
- Tailwind Css

**Create a Nuxtjs Project**

To create a fresh Nuxtjs project, open your terminal and run the command below depending on your preferred package manager. You should also install tailwind css for styling purposes.

**Npm**

     npm create nuxt-app lyrics-finder

**Yarn**

    yarn create-nuxt-app lyrics-finder

The commands will create for us a fresh Nuxtjs project

Now we need to go into the pages directory and into the index.vue where we will be coding our project.

Delete the contents in the template and make a single div with a h1 of LYRICS FINDER APPLICATION.

For this project we will also be using TAILWIND CSS.

Serve our application

To start our nuxt project we will run the command

```
npm run dev
```

this will serve our application and make it available on _localhost:3000._

It will also ensure that anytime we make our changes and save, our changes will be reflected in the browser. Perfect isn’t it.

Now we need to create an input section where the user can enter the song title and artist name to search for the lyrics.
Input section

Our input section will include two input section and one button. The code for the form is as shown below.

```js{1,3-5}[index.vue]
<form @submit.prevent="searchLyrics" class="text-center pt-5">
<input
          v-model="artist"
          type="text"
          placeholder="Enter artist name"
          class="pt-1"
        />
<input
          v-model="title"
          type="text"
          placeholder="Enter song title"
          class="pt-1"
        />
<button
          type="submit"
          class="bg-black text-white pr-4 pl-4 rounded pt-1 pb-1 "
        >
Search
</button>
</form>
```

**Getting user input**

For us to get user data we will use the v-model directive to bind user entry to the search data. So anytime the user makes a search it will automatically sync with the data object.

```js{1,3-5}[index.vue]
<input
  v-model="title"
  type="text"
  placeholder="Enter song title"
  class="pt-1"
/>
```

When the user enters data into the title input section it will automatically bind it to the title instance in the data function.
See example below.

```js{1,3-5}[index.vue]
data() {
  // bind data
return {
artist: "chris brown",
title: "heat",
lyrics: "",
};
}
```

**Fetching the lyrics**

For us to get the lyrics we will be using a free api that doesn’t require authentication. We will be making an api call to the endpoint to get back the lyrics.

The endpoint we will be exploring is https://api.lyrics.ovh/v1/

we will use the async await to the created to make our calls asynchronous. Created lifecycle hook will be called synchronously after the instance is created.

```js{1,3-5}[index.vue]

async created() {
//Called synchronously after the instance is created
try {
const response = await fetch(
`https://api.lyrics.ovh/v1/${this.artist}/${this.title}`
);
const data = await response.json();
// reset the data object to prevent from showing in the form input
this.artist = "";
this.title = "";
console.log(data);
} catch (error) {
console.log(error);
}
}
```

**Making A Search**

To make a search when the user clicks on submit we have to bind the submit to a method to make a search.
On the form we have chained the prevent on the submit. this will prevent the form from bubbling around and refreshing the page every time the submit button is clicked.

```js{1,3-5}[index.vue]

<form @submit.prevent="searchLyrics" class="text-center pt-5">
```

We have a search method called searchLyrics and we bind it to the methods to make a search to the api.
We make a search as follows.

```js{1,3-5}[index.vue]
methods: {
async searchLyrics() {
// fetch lyrics from api here
try {
const response = await fetch(
`https://api.lyrics.ovh/v1/${this.artist}/${this.title}`
);
const data = await response.json();
// reset the data object to prevent from showing in the form input
this.artist = "";
this.title = "";
console.log(data);
} catch (error) {
console.log(error);
}
},
}
```

**Conclusion**

Thank you for reading through this article. If you found it helpful, please share.

Just to recap that we have seen how to

1. Make
