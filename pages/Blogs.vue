<template>
	<article class="pt-0">
		<Btemplate />
		<div>
			<div class="blogs w-full flex flex-wrap pt-4 pb-4">
				<Singlearticle
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

<script>
const Btemplate = () =>
	import(/* webpackChunkName: "Btemplate" */ '@/components/Btemplate')
const Singlearticle = () =>
	import(/* webpackChunkName: "Singlearticle" */ '@/components/Singlearticle')
export default {
	components: {
		Btemplate,
		Singlearticle,
	},
	async asyncData({ $content, params }) {
		const blogs = await $content('articles', params.slug)
			.sortBy('createdAt', 'asc')
			.fetch()
		return { blogs }
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>
<style scoped>
.blogs {
	max-width: 900px;
	margin: 0 auto;
}
</style>
