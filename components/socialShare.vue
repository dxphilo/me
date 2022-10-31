<template>
  <!-- component -->
  <div
    class="bg-gray-400 dark:bg-gray-300 modal-animation fixed top-0 bottom-0 left-0 right-0 z-30 flex h-screen w-full items-center justify-center bg-opacity-50 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <div
      style="backdrop-filter: blur(10px)"
      class="popup w-full md:w-2/5 bg-white dark:bg-darkBGStop card-animation max-h-90 z-10 overflow-y-auto rounded-lg px-6 pt-4 pb-6 shadow-lg mx-10"
    >
      <div class="sticky flex justify-between pt-10">
        <h2 class="text-3xl font-semibold">Share this post</h2>
        <button
          class="bg-gray-300 dark:bg-gray5 focus:outline-none rounded-full p-1.5 ml-20 hover:bg-gray-400"
          @click="$emit(`close`)"
        >
          <Close />
        </button>
      </div>
      <div class="sticky flex items-center justify-center">
        <div
          class="flex flex-row flex-wrap text-primary h-52 items-center justify-center"
        >
          <div class="flex justify-center content-center items-center py-2">
            <ul>
              <!-- twitter social media -->
              <li>
                <button @click="twitterShare">
                  <TwitterIcon />
                </button>
              </li>
              <!-- linkedin  -->
              <li>
                <button @click="linkedinShare">
                  <LinkedinIcon />
                </button>
              </li>
              <!-- facebook media tag svg -->
              <li>
                <button @click="facebookShare">
                  <FacebookIcon />
                </button>
              </li>
              <!-- Reddit-->
              <li>
                <button @click="redditShare">
                  <RedditIcon />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwitterIcon from './icons/TwitterIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import RedditIcon from './icons/RedditIcon.vue'

import Close from './icons/Close.vue'
export default {
  name: 'SocialShare',
  components: {
    TwitterIcon,
    LinkedinIcon,
    FacebookIcon,
    RedditIcon,
    Close,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
  },
  methods: {
    closeShare() {
      this.$emit(`close`)
    },
    twitterShare() {
      window.open(
        `https://twitter.com/share?url=${window.location.href}&text=${this.title} by John Philip`,
        '_blank'
      )
    },
    linkedinShare() {
      window.open(
        `https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${this.title}&summary=${this.subtitle}&source=${window.location.origin}`,
        '_blank'
      )
    },
    facebookShare() {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        '_blank'
      )
    },
    redditShare() {
      window.open(
        `https://reddit.com/submit?url=${window.location.href}&title=${this.title}`
      )
    },
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

ul li button {
  display: inline-block;
  background: hsl(200, 25%, 88%);
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 0;
  padding: 2px;
  transform: scale(0.7);
  transition: 0.5s;
  fill: #1a6183;
}
ul li button:hover {
  transform: scale(0.7) translateY(-10px);
  background: #066895;
  fill: #eeeeee;
}
</style>
