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
          <GithubIcon class="fill-white" />
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
          href="https://www.youtube.com/channel/UCNCzNrpq0fHxFqQYCmbwAcA"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <YoutubeIcon />
        </a>
      </li>
      <!-- facebook media tag svg -->
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100059350125541"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FacebookIcon />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import GithubIcon from './icons/GithubIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import YoutubeIcon from './icons/YouTubeIcon.vue'
export default {
  name: 'Socialmedia',
  components: {
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
    FacebookIcon,
    YoutubeIcon,
  },
}
</script>
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
  background: hsl(200, 25%, 88%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0;
  padding: 2px;
  transform: scale(0.7);
  transition: 0.5s;
  fill: #1a6183;
}
ul li a:hover {
  transform: scale(0.7) translateY(-10px);
  background: #066895;
  fill: #eeeeee;
}
</style>
