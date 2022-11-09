<script setup></script>
<template>
  <!-- component -->
  <div class="w-full lg:w-[53%] mx-auto">
    <div>
      <div class="text-5xl my-10 leading-snug tracking-wide font-semibold">
        <h1>Software Developer</h1>
        <h1>Technical Writer,</h1>
        <h1>Life long Learner .</h1>
      </div>
      <div class="text-xl leading-normal">
        <p>
          Hi I am John Philip, I go by the pronouns (He/Him). I’m currently
          working at Capsule Social building decentralised discource. I am an
          enthusiast of Open Source and communities currently Co-leading at
          Vuejs-Kenya.
        </p>
        <p class="my-4 relative">
          Occasionally, I send out
          <a
            href="https://artisanal-thinker-2556.ck.page/6e2ba71172"
            target="_blank"
            class="border px-1 shadow-xl"
            rel="noopener noreferrer"
            >Technical Writing Issue's</a
          >
          newsletter with insightful guides and resources to help you level up
          your technical writing skills. Apart from writing and debugging code,
          I love stories, and all things cycling 🚴. I am available on most of
          the socials if you want to reach out and have a chat (socials down
          below).
        </p>
      </div>
      <div class="flex">
        <SocialMedia />
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
