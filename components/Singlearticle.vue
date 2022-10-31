<template>
  <article class="pt-8 mx-auto pb-2">
    <div
      class="flex items-center antialiased ml-4 transform transition duration-500 ease-in-out hover:scale-105"
    >
      <nuxt-link :to="blog.path">
        <img
          v-if="blog.imgurl"
          :src="blog.imgurl"
          :alt="blog.title"
          class="object-cover object-center rounded-lg shadow-md img"
        />
        <img
          v-else
          :src="require(`~/assets/${blog.img}`)"
          :alt="blog.description"
          class="object-cover shadow-md img left-0 top-0 w-full rounded-lg"
        />

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 uppercase"
              >
                {{ tag }}
              </span>
            </div>

            <h4 class="mt-1 font-bold text-xl leading-tight truncate">
              {{ blog.subtitle }}
            </h4>
            <div
              class="mt-4 flex items-center text-lg leading-relaxed font-semibold"
            >
              <div class="author-image">
                <img
                  class="h-8 w-8 rounded-full bg-no-repeat bg-cover border-2 border-slate-400"
                  src="../assets/me/johnphilip.jpg"
                  alt="Author image of John Philip"
                />
              </div>
              <span class="px-2">{{ published }} </span>
              •
              <span class="pl-2">John Philip</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Singlearticle',
  props: {
    blog: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    published: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
<style scoped>
.img {
  width: 420px;
  height: 270px;
}
</style>
