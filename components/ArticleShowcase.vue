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
    class="w-full my-10 border rounded bg-gray-100 shadow-lg overflow-hidden antialiased transform transition duration-500 ease-in-out hover:scale-105"
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
          <div class="my-2 flex">
            <p class="text-base leading-tight truncate pr-2">
              {{ convertDate(date) }}
            </p>
            <p class="h-1 w-1 rounded-full bg-stone-900 mx-2 mt-2"></p>
            <p class="pl-2 text-base leading-tight truncate font-semibold">
              John Philip
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<style scoped></style>
