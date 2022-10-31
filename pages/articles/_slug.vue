<template>
  <article>
    <div>
      <h1 class="text-4xl text-center font-bold py-6 leading-tight">
        {{ article.title }}
      </h1>
      <div
        class="header-details w-96 my-0 mx-auto flex items-center text-center mb-2"
      >
        <div>
          <img
            :src="require('~/assets/me/johnphilip.jpg')"
            alt="authorimage"
            srcset=""
            class="h-12 w-12 rounded-full bg-cover border-2 border-slate-400"
          />
        </div>
        <div class="text-xl flex items-center text-center font-semibold mb-2">
          <span class="ml-2">{{ formatDate(article.createdAt) }}</span>
          <span class="ml-2">{{ article.readingStats.text }}</span>
        </div>
      </div>
      <div class="w-screen">
        <img
          :src="article.imgurl"
          :alt="article.title"
          srcset=""
          class="pt-4 mx-auto bg-no-repeat bg-center bg-auto object-cover bg-cover post-header items-center h-96 md:h-[800] md:w-[900]"
        />
        <p class="text-center py-4 text-lg">
          <a :href="article.imgurl" target="_blank" rel="noopener noreferrer">
            {{ article.attribution }}</a
          >
        </p>
      </div>
    </div>
    <Scroll />
    <div
      class="sm:w-2/3 md:w-3/5 lg:w-2/5 xl:2/5 my-0 leading-10 tracking-wider mx-auto pl-5 pt-6 text-lg font-medium"
    >
      <nuxt-content :document="article" />
    </div>
    <div
      class="font-bold text-2xl flex justify-center items-center text-center my-4 cursor-pointer"
      @click.prevent="socialShare"
    >
      <ShareIcon class="pr-1" /> share
    </div>
    <hr class="w-2/3 border border-gray-200 mx-auto" />
    <div class="flex justify-center py-10">
      <nuxt-link
        v-if="prev"
        class="font-bold hover:underline text-teal-500 inline items-center mr-6 text-xl"
        :to="prev.slug"
      >
        Previous<ArrowLeft />
      </nuxt-link>
      <nuxt-link
        v-if="next"
        class="font-bold hover:underline text-teal-500 inline items-center text-xl"
        :to="next.slug"
      >
        Next<ArrowRight />
      </nuxt-link>
    </div>
    <div v-if="showShare">
      <socialShareVue
        :title="article.title"
        :subtitle="article.description"
        @close="socialShare"
      />
    </div>
  </article>
</template>
<script>
import Vue from 'vue'
import global from '@/utils/global'
import getSiteMeta from '@/utils/getSiteMeta'
import socialShareVue from '@/components/socialShare.vue'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import ShareIcon from '~/components/icons/ShareIcon.vue'
export default Vue.extend({
  name: 'ArticlePage',
  components: {
    socialShareVue,
    ArrowRight,
    ArrowLeft,
    ShareIcon,
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
        mainImage: `${this.article.img}`,
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

strong {
  font-size: 1.7rem;
  font-weight: bolder;
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
  /* img {
    width: 600px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
  } */
  .article-section {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 0 5px;
  }
}
</style>
