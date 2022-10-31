<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Blog',
  async asyncData({ $content, params }) {
    const blogs = await $content('articles', params.slug)
      .sortBy('createdAt', 'desc')
      .fetch()
    return { blogs }
  },
  head: {
    title: 'John Philip - Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Blog',
        name: 'Blog - John Philip',
        content: 'John Philip Personal Online Corner',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/johnphilip.jpg' }],
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
})
</script>
<template>
  <article class="pt-0">
    <Btemplate />
    <div class="pb-20 pt-8">
      <div class="max-w-5xl my-0 mx-auto flex flex-wrap">
        <Singlearticle
          v-for="blog in blogs"
          :id="blog.slug"
          :key="blog.slug"
          :published="formatDate(blog.createdAt)"
          :blog="blog"
        />
      </div>
    </div>
    <hr class="mb-8 w-2/3 border border-gray-200 mx-auto" />
  </article>
</template>
