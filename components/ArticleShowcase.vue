<script setup>
defineProps({
  path: String,
  img: String,
  title: String,
  tags: Object,
  date: String,
});

function convertDate(date) {
  const daTe = new Date(date);
  return daTe.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
<template>
  <div
    class="w-full my-10 border bg-gray-100 shadow-lg overflow-hidden antialiased transform transition duration-500 ease-in-out hover:scale-105"
  >
    <nuxt-link :to="path">
      <div class="flex flex-wrap">
        <div class="w-full shadow-md overflow-hidden h-40 lg:w-64 lg:h-auto">
          <img
            :src="img"
            :alt="title"
            class="object-center object-cover w-full"
          />
        </div>

        <div class="mx-10 my-3 lg:my-auto">
          <h1 class="font-bold text-xl leading-tight truncate">
            {{ title }}
          </h1>
          <div class="flex items-center gap-x-3 pt-3">
            <p class="text-base leading-tight font-light truncate pr-2">
              {{ convertDate(date) }}
            </p>
            <p class="h-1 w-1 rounded-full bg-gray-400"></p>
            <div class="flex flex-row gap-x-2">
              <ul class="flex items-baseline py-2 gap-x-2">
                <li
                  v-for="tag in tags"
                  :key="tag"
                  class="inline-block bg-gray-200 font-normal text-xs border px-3 py-0.5 uppercase leading-relaxed"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<style scoped></style>
