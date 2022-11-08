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
        <p class="my-4">
          I’m currently working at Capsule Social building decentralised
          discource. Apart from writing and debugging code, I love stories, all
          things cycling 🚴 and exploring new places. I am available on most of
          the socials if you want to hit me up and have a chat (check my socials
          down below).
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
