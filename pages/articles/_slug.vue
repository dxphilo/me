<template>
  <article>
    <div>
      <!-- start of revamping here -->
      <div class="">
        <img
          :src="require(`~/assets/${blog.img}`)"
          alt="postimage"
          srcset=""
          class="w-screen bg-no-repeat bg-center bg-auto bg-center bg-cover post-header"
        >
      </div>
      <!-- end revamping here -->
      <div>
        <h1 class="text-4xl text-center font-bold py-12">
          {{ blog.title }}
        </h1>
        <div
          class="header-details w-96 my-0 mx-auto flex items-center text-center"
        >
          <div>
            <img
              :src="require('~/assets/me/johnphilip.jpg')"
              alt="authorimage"
              srcset=""
              class="h-16 w-16 rounded-full bg-no-repeat bg-cover"
            >
          </div>
          <div class="published pl-4 font-light text-sm">
            {{ formatDate(blog.createdAt) }} <span class="pl-3">•</span>
            <span class="pl-4"> {{ blog.readingStats.text }} </span>
          </div>
        </div>
      </div>
    </div>
    <Scroll />
    <div class="article-section pt-12">
      <nuxt-content :document="blog" />
    </div>

    <div class="flex justify-center pt-6 pb-8">
      <h5
        v-if="prev"
        class="font-bold hover:underline text-teal-500 inline items-center mr-6"
      >
        <nuxt-link :to="prev.slug">
          Previous
        </nuxt-link>
      </h5>
      <h5
        v-if="next"
        class="font-bold hover:underline text-teal-500 inline items-center"
      >
        <nuxt-link :to="next.slug">
          Next
        </nuxt-link>
      </h5>
    </div>
  </article>
</template>
<script>
const Scroll = () => import('@/components/Scroll')
export default {
	components: {
		Scroll,
	},
	async asyncData({ $content, params }) {
		const blog = await $content(`articles/${params.slug}` || 'index').fetch()
		const [prev, next] = await $content('articles')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'desc')
			.surround(params.slug, { before: 1, after: 1 })
			.fetch()
		return {
			blog,
			prev,
			next,
		}
	},
	  head: {
    title: "title here",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
	data() {
		return {}
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>
<style>
article h1 {
	padding-top: 20px;
	padding-bottom: 6px;
}
.post-header {
	height: 600px;
}
.header-details {
	width: ;
}
.published {
	padding-top: 6px;
	padding-bottom: 10px;
}
.article-section {
	width: 645px;
	margin: 0 auto;
	line-height: 2.5rem;
	letter-spacing: 0.05em;
}
.nuxt-content p {
	font-size: 1.25em;
	margin-bottom: 20px;
	line-height: 2rem;
}
h5 {
	font-size: 1.4rem;
	margin-block-start: 1em;
	margin-block-end: 1em;
}
strong {
	font-size: 26px;
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
	font-size: 19px;
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
