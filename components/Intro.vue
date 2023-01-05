<script setup>
import SocialMedia from "~~/components/Social.vue";
</script>
<template>
  <!-- component -->
  <div class="w-full lg:w-[53%] mx-auto">
    <div>
      <div class="text-5xl my-10 leading-snug tracking-wide font-semibold">
        <h1>Software Developer</h1>
        <h1>Technical Writer,</h1>
        <h1>Lifelong Learner .</h1>
      </div>
      <div class="text-xl leading-normal">
        <p>
Hi there! My name is John Philip, and I prefer the pronouns He/Him. I'm currently open and searching for my next role. I'm a big fan of open-source communities, and I'm also the co-leader of Vuejs-Kenya.
        </p>
        <p class="my-4 relative">
In my free time, I like to write and share my thoughts on programming through my           <a
            href="https://codenotes.substack.com/"
            target="_blank"
            class="border px-1 shadow-xl"
            rel="noopener noreferrer"
            >CodeNotes</a
          > newsletter on Substack. When I'm not coding or writing, you can find me cycling or enjoying a good story. Feel free to reach out to me on social media if you'd like to chat. I'm always happy to connect with fellow tech enthusiasts.

        </p>
      </div>
      <div class="flex">
        <Social />
      </div>
      <Hr />
      <div class="h-2/5 mb-32">
        <h1 class="text-4xl leading-snug tracking-wide font-semibold">
          Featured blogs
        </h1>
        <p class="text-xl leading-normal my-3">
          A collection of some articles I have written recently
        </p>
        <div>
          <HomeArticle />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  position: relative;
}
a:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgba(79, 192, 141, 0.5);
}
a:hover:after {
  top: 0%;
}
</style>
