<template>
  <article>
    <div>
      <div>
        <h1 class="text-4xl text-center font-bold py-6">
          {{ article.title }}
        </h1>
      </div>
      <!-- start of revamping here -->
      <div class="w-screen">
        <img
          v-if="article.imgurl"
          :src="article.imgurl"
          :alt="article.title"
          srcset=""
          class="rounded-md pt-4 mx-auto bg-no-repeat bg-center bg-auto bg-center bg-cover post-header"
        />
        <img
          v-else
          :src="require(`~/assets/${article.img}`)"
          :alt="article.title"
          srcset=""
          class="rounded-md pt-4 mx-auto bg-no-repeat bg-center bg-auto bg-center bg-cover post-header"
        />
        <a :href="article.imgurl" target="_blank" rel="noopener noreferrer">
          <p class="text-center py-4 text-lg">{{ article.attribution }}</p></a
        >
      </div>
      <!-- end revamping here -->
      <div>
        <div
          class="header-details w-96 my-0 mx-auto flex items-center text-center"
        >
          <div>
            <img
              :src="require('~/assets/me/johnphilip.jpg')"
              alt="authorimage"
              srcset=""
              class="h-16 w-16 rounded-full bg-no-repeat bg-cover"
            />
          </div>
          <div
            class="pt-1.5 pb-2.5 text-xl flex flex-wrap pl-4 font-normal font-semibold"
          >
            <div>
              <p class="pl-2">John Philip</p>
              <p class="font-light">{{ formatDate(article.createdAt) }}</p>
            </div>
            <div class="pl-8">
              <p class="text-lg">{{ article.readingStats.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Scroll />
    <div
      class="sm:w-2/3 md:w-3/5 lg:w-2/5 xl:2/5 my-0 leading-10 tracking-wider mx-auto pl-5 pt-12 text-lg font-medium"
    >
      <nuxt-content :document="article" />
    </div>
    <div class="text-center">
      <button
        class="rounded-full w-20 h-20 text-center text-teal-500 font-bold text-2xl"
        @click.prevent="socialShare"
      >
        Share
      </button>
    </div>
    <div v-if="showShare">
      <socialShareVue
        :title="article.title"
        :subtitle="article.description"
        @close="socialShare"
      />
    </div>

    <div class="flex justify-center pb-12">
      <h5
        v-if="prev"
        class="font-bold hover:underline text-teal-500 inline items-center mr-6"
      >
        <nuxt-link :to="prev.slug"> Previous </nuxt-link>
      </h5>
      <h5
        v-if="next"
        class="font-bold hover:underline text-teal-500 inline items-center"
      >
        <nuxt-link :to="next.slug"> Next </nuxt-link>
      </h5>
    </div>
  </article>
</template>
<script>
import Vue from 'vue'
import global from '@/utils/global'
import getSiteMeta from '@/utils/getSiteMeta'
import socialShareVue from '@/components/socialShare.vue'
export default Vue.extend({
  name: 'ArticlePage',
  components: {
    socialShareVue,
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'published'])
      .sortBy('published', 'desc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  data() {
    return {
      showShare: false,
    }
  },
  head() {
    return {
      title: `John Philip - ${this.article.title}`,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Article Written by John Philip' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://johnphilip.dev/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://johnphilip.dev/articles/${this.$route.params.slug}`,
        mainImage: `https://johnphilip.dev/_nuxt/img/${this.article.img}`,
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    formatDate(sourceDate) {
      const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
      return new Intl.DateTimeFormat('en-GB', options).format(
        new Date(sourceDate)
      )
    },
    socialShare() {
      this.showShare = !this.showShare
    },
  },
})
</script>
<style>
.article h1 {
  padding-top: 20px;
  padding-bottom: 6px;
}
.post-header {
  height: 600px;
}
.nuxt-content p {
  margin-bottom: 20px;
  font-size: 1.33rem; /* 20px */
}
.content-wrapper {
  width: 40%;
}
h5 {
  font-size: 1.4rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
strong {
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  align-items: center;
}
.article-section a {
  color: rgb(69, 180, 69);
}
.nuxt-content ul li {
  list-style-type: disc;
  padding: 8px 0;
  font-weight: 500;
  margin-left: 30px;
  font-size: 1.25em;
  line-height: 1.5rem;
}
.filename {
  font-weight: bold;
  font-size: 1.1rem;
}

@media (max-width: 800px) {
  img {
    width: 600px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
  }
  .article-section {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 0 5px;
  }
}
</style>
