<template>
  <!-- component -->
  <div
    class="bg-gray-400 dark:bg-gray-300 modal-animation fixed top-0 bottom-0 left-0 right-0 z-30 flex h-screen w-full items-center justify-center bg-opacity-50 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <div
      style="backdrop-filter: blur(10px)"
      class="popup w-2/4 lg:w-600 bg-white dark:bg-darkBGStop card-animation max-h-90 z-10 overflow-y-auto rounded-lg px-6 pt-4 pb-6 shadow-lg"
    >
      <div class="sticky flex items-center justify-center pt-10">
        <h2
          class="text-lightPrimaryText dark:text-darkPrimaryText text-2xl font-semibold"
        >
          Share this post
        </h2>
        <button
          class="bg-gray-300 dark:bg-gray5 focus:outline-none rounded-full p-1.5 ml-20"
          @click="$emit(`close`)"
        >
          <Close />
        </button>
      </div>
      <div class="sticky flex items-center justify-center">
        <div
          class="flex flex-row flex-wrap text-primary h-52 items-center justify-center"
        >
          <button
            class="p-5 rounded-lg flex flex-row items-center mr-4 mb-2"
            @click="twitterShare"
          >
            <TwitterIcon class="icon" />
          </button>
          <button
            class="p-5 rounded-lg flex flex-row items-center mr-4 mb-2"
            @click="linkedinShare"
          >
            <LinkedinIcon class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import Close from '@/components/icons/Close.vue'
export default {
  name: 'SocialShare',
  components: {
    TwitterIcon,
    LinkedinIcon,
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
  },
}
</script>
<style scoped>
.icon {
  display: inline-block;
  width: 55px;
  margin: 0;
  padding: 0;
  transform: scale(0.7);
  transition: 0.5s;
  fill: #1a6183;
}
.icon:hover {
  fill: #6cc2b1;
  transform: scale(0.7) translateY(-10px);
}
</style>
