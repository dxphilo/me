<script setup>
import GithubIcon from "./icons/GithubIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import FacebookIcon from "./icons/FacebookIcon.vue";
import YoutubeIcon from "./icons/YouTubeIcon.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import StackOverflow from "./icons/StackOverflow.vue";
</script>
<template>
  <div class="flex justify-center content-center items-center py-2">
    <ul>
      <!-- github social media svg -->
      <li>
        <a
          href="https://github.com/dxphilo"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GithubIcon />
        </a>
      </li>
      <!-- stackoverflow -->
      <li>
        <a
          href="https://stackoverflow.com/users/11594100/john-philip"
          target="_blank"
          rel="noopener noreferrer"
          title="StackOverflow"
        >
          <StackOverflow />
        </a>
      </li>
      <!-- twitter social media -->
      <li>
        <a
          href="https://twitter.com/amjohnphilip"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <TwitterIcon
        /></a>
      </li>
      <!-- linkedin  -->
      <li>
        <a
          href="https://www.linkedin.com/in/amjohnphilip/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </li>
      <!-- youtube -->
      <li>
        <a
          href="https://www.youtube.com/@dxphilo"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <YoutubeIcon />
        </a>
      </li>
      <!-- facebook media tag svg -->
      <li v-if="$route.path !== `/`">
        <a
          href="https://www.facebook.com/profile.php?id=100059350125541"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FacebookIcon />
        </a>
      </li>
      <!-- email -->
      <li v-if="$route.path === `/about`">
        <a
          :href="`mailto:developerphilo@gmail.com`"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <EmailIcon />
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  display: flex;
  height: 50px;
}
ul li {
  margin: 0;
  padding: 0;
}

ul li a {
  display: inline-block;
  background-color: rgb(229 231 235);
  width: 50px;
  border-width: 1px;
  height: 50px;
  border-radius: 50%;
  margin: 0;
  padding: 2px;
  transform: scale(0.7);
  transition: 0.5s;
  background: #eeeeee;
  fill: rgb(51 65 85 / var(--tw-text-opacity));
}
ul li a:hover {
  transform: scale(0.7) translateY(-10px);
  background: rgb(51 65 85 / var(--tw-text-opacity));
  fill: #eeeeee;
}
</style>
