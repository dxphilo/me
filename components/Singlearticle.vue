<template>
  <article class="pt-8 mx-auto pb-2">
    <div class="flex items-center antialiased text-gray-900 ml-4 grow">
      <div>
        <img
          :src="require(`~/assets/${img}`)"
          :alt="title"
          class="object-cover object-center rounded-lg shadow-md"
        >

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span
                class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide pt-1 pb-1"
              >
                {{ tag }}
              </span>
            </div>
            <nuxt-link :to="path">
              <h4 class="mt-1 font-semibold leading-tight truncate">
                {{ title }}
              </h4>
            </nuxt-link>

            <div class="mt-1">
              <span class="text-gray-600 text-sm">{{ excerpt }}</span>
            </div>
            <div class="mt-4">
              <span class="text-teal-600 text-md font-semibold">{{ published }}
              </span>
              <span class="text-sm text-gray-600 pl-2">John Philip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
	name: 'Singlearticle',
	props: {
		path: {
			type: String,
			required: true,
			default: '',
		},
		id: {
			type: String,
			required: true,
			default: '',
		},
		title: {
			type: String,
			required: true,
			default: '',
		},
		excerpt: {
			type: String,
			required: true,
			default: '',
		},
		published: {
			type: String,
			required: true,
			default: '',
		},
		img: {
			type: String,
			required: true,
			default: '',
		},
		tag: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	},
}
</script>
<style scoped>
img {
	width: 400px;
	height: 300px;
}
.grow:hover {
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
	transition-duration: 0.3s;
}
</style>
