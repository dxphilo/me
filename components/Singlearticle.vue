<template>
  <article class="pt-8 mx-auto pb-2">
    <div class="flex items-center antialiased ml-4 grow">
      <div>
        <img
          :src="require(`~/assets/${img}`)"
          :alt="title"
          class="object-cover object-center rounded-lg shadow-md img"
        />

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
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
            <div class="mt-4 flex items-center">
              <div class="author-image">
                <img
                  class="h-8 w-8 rounded-full bg-no-repeat bg-cover"
                  src="../assets/me/johnphilip.jpg"
                  alt="Author image John Philip"
                />
              </div>
              <span class="font-normal text-base font-semibold px-2"
                >{{ published }}
              </span>
              •
              <span class="pl-2 text-base">John Philip</span>
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
  height: 300px;
}
.grow:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition-duration: 0.3s;
}
</style>
