<template>
	<article>
		<h1 class="text-4xl text-center font-bold">
			{{ blog.title }}
		</h1>
		<p class="published text-center pt-2 font-semibold">
			Post Published on: {{ formatDate(blog.createdAt) }}
		</p>
		<div class="img-sect">
			<img
				:src="require(`~/assets/${blog.img}`)"
				width="800"
				height="500"
				alt="blog image"
				srcset=""
			/>
			<p class="text-center pb-6 pt-3">
				{{ blog.attribution }}
			</p>
		</div>

		<Scroll />
		<div class="article-section">
			<nuxt-content :document="blog" />
		</div>

		<div class="flex justify-center pt-6 pb-8">
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
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>
<style>
article {
	padding-top: 20px;
}
img {
	height: 450px;
	width: 800px;
	object-fit: cover;
	margin: 0 auto;
	border-radius: 0.5%;
	padding-top: 6px;
}
article h1 {
	padding-top: 20px;
	padding-bottom: 6px;
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
