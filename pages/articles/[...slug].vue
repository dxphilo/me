<script setup>
import { convertDate, readingTime } from "@/helpers/helpers";
const { path } = useRoute();

const { data: page } = await useAsyncData(path, () => {
  return queryCollection("blog").path(path).first();
});

const { data: prevNext } = await useAsyncData("surround", () => {
  return queryCollectionItemSurroundings("blog", path).order(
    "createdAt",
    "DESC"
  );
});

useHead({
  title: page.value.title,
  meta: [
    { name: "description", content: page.value.description },
    {
      hid: `${page.value.meta.imgurl}`,
      property: `${page.value.meta.imgurl}`,
      content: `https://johnphilip.dev/${page.value.meta.imgurl}`,
    },
  ],
});
</script>
<template>
  <main id="main" class="article-main">
    <header v-if="page" class="article-header">
      <h1 class="heading text-center">
        {{ page.title }}
      </h1>

      <div class="flex flex-col gap-y-2 justify-center items-center">
        <p class="text-center text-lg pt-2">
          {{ page.description }}
        </p>
        <div class="flex flex-row gap-x-4 py-2 items-center">
          <p>
            <span class="text-gray-400">{{ convertDate(page.createdAt) }}</span>
          </p>
          <p class="text-center text-gray-400">
            <span>{{ readingTime(page.body) }}</span> Minutes read
          </p>
        </div>
      </div>

      <div class="img-cont my-4">
        <img
          :src="`${page.meta.imgurl}`"
          :alt="page.title"
          class="rounded h-[250px]"
        />
      </div>
      <a
        :href="`${page.meta.imgurl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-sm my-2 flex justify-center font-light"
        >{{ page.meta.attribution }}</a
      >
      <ul class="article-tags">
        <li class="tag" v-for="(tag, i) in page.meta.tags" :key="i">
          {{ tag }}
        </li>
      </ul>
    </header>
    <section class="article-section mb-2">
      <aside class="aside">
        <Toc :links="page.body.toc.links" />
      </aside>
      <article class="article">
        <ContentRenderer v-if="page" :value="page" />
      </article>
    </section>
    <PrevNext :prev="prevNext[0]" :next="prevNext[1]" />
  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 py-6;
}

.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-light text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
.article[data-v-2c96bb26] :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply text-base;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)) {
  @apply no-underline text-2xl;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)):hover {
  @apply underline;
}
</style>
