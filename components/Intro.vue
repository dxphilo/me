<script setup>
import SocialMedia from "~~/components/Social.vue";
</script>
<template>
  <!-- component -->
  <div class="w-full lg:w-[53%] mx-auto">
    <div class="pt-5">
      <div class="text-3xl py-4 leading-snug tracking-wide font-semibold">
        <h1>Hi there! 👋</h1>
      </div>
      <div >
        <p class="py-2 relative text-base font-light text-xl leading-normal">
          I invite you to my corner on the internet, where I share my learning journey, life experiences, and random thoughts.
        </p>
      </div>
      <div class="flex py-5">
        <Social />
      </div>
      <Hr />
      <div class="h-2/5">
        <h1 class="text-4xl leading-snug tracking-wide font-semibold">
          Featured blogs
        </h1>
        <p class="text-base leading-normal my-3 font-light">
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
