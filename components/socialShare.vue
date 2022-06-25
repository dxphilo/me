<template>
  <!-- component -->
  <div
    class="popup bg-darkBG modal-animation fixed top-0 bottom-0 left-0 right-0 z-30 flex h-3/4 my-auto w-1/2 mx-auto items-center justify-center bg-opacity-50 dark:bg-opacity-50"
  >
    <div
      style="backdrop-filter: blur(10px)"
      class="w-full lg:w-600 from-lightBGStart to-lightBGStop card-animation z-10 overflow-y-auto rounded-lg bg-gradient-to-r p-6 pt-4 shadow-lg"
    >
      <div class="sticky flex items-center justify-center">
        <h2
          class="text-lightPrimaryText dark:text-darkPrimaryText text-2xl font-semibold"
        >
          Share this post
        </h2>
        <button
          class="focus:outline-none bg-gray1 dark:bg-gray5 rounded-full pl-6"
          @click="$emit(`close`)"
        >
          <Close />
        </button>
      </div>
      <div class="sticky flex items-center justify-center">
        <div class="flex flex-col mt-5 text-center">
          <div
            class="flex flex-row flex-wrap text-primary h-52 items-center justify-center"
          >
            <button
              class="bg-lightInput p-5 rounded-lg flex flex-row items-center mr-4 mb-2"
              @click="twitterShare"
            >
              <Twitter />
            </button>
            <button
              class="bg-lightInput p-5 rounded-lg flex flex-row items-center mr-4 mb-2"
              @click="linkedinShare"
            >
              <LinkedIn />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Twitter from './icons/Twitter.vue'
import LinkedIn from './LinkedIn.vue'
import Close from '@/components/icons/Close.vue'
export default {
  name: 'socialShare',
  components: {
    Twitter,
    LinkedIn,
    Close,
  },
  props: {
    title: {
      required: true,
    },
    subtitle: {
      required: true,
    },
  },
  created() {
    window.addEventListener(`click`, this.handleCloseClick, false)
    console.log(window.location.href)
  },
  destroyed() {
    window.removeEventListener(`click`, this.handleCloseClick)
  },
  methods: {
    handleCloseClick(e) {
      if (
        !e.target ||
        e.target.parentNode === null ||
        e.target.parentNode.classList === undefined
      ) {
        return
      }
      if (e.target.classList[0] === `popup`) {
        this.closeShare()
      }
    },
    closeShare() {
      this.$emit(`close`)
    },
    twitterShare() {
      window.open(
        `https://twitter.com/share?url=${window.location.href}&text=${this.title} by John Philip`
      )
    },
    linkedinShare() {
      window.open(
        `https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${this.title}&summary=${this.subtitle}&source=${window.location.origin}`
      )
    },
  },
}
</script>
<style scoped></style>
