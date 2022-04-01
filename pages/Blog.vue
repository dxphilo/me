<template>
  <article class="pt-0">
    <Btemplate />
    <div>
      <div class="blogs w-full flex flex-wrap pt-4 pb-4">
        <SinglearticleComponent
          v-for="blog in blogs"
          :id="blog.slug"
          :key="blog.slug"
          :path="blog.path"
          :title="blog.title"
          :excerpt="blog.excerpt"
          :published="formatDate(blog.createdAt)"
          :img="blog.img"
          :tag="blog.tag"
        />
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Blog',
  async asyncData({ $content, params }) {
    const blogs = await $content('articles', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()
    return { blogs }
  },
  methods: {
    formatDate(sourceDate: Date) {
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
      return new Intl.DateTimeFormat('en-GB', options).format(
        new Date(sourceDate)
      )
    },
  },
  // useMeta({
  //     title: "John Philip",
  //     meta: [
  //       { charset: "utf-8" },
  //       { name: "viewport", content: "width=device-width, initial-scale=1" },
  //       {
  //         hid: "Blog",
  //         name: "Blog - John Philip",
  //         content: "John Philip Personal Online Corner",
  //       },
  //     ],
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/johnphilip.jpg" }],
  // })
})
</script>
<style scoped>
.blogs {
  max-width: 900px;
  margin: 0 auto;
}
</style>
