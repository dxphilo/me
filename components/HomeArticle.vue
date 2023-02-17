<script setup>
const articles = (
  await queryContent("articles").sort({ createdAt: -1 }).limit(5).find()
)
  .reverse()
  .slice(0, 4);
</script>
<template>
  <section>
    <div class="w-full my-4 mx-auto">
      <ArticleShowcase
        v-for="article in articles"
        :key="article._path"
        :path="article._path"
        :img="article.imgurl"
        :title="article.subtitle"
        :tags="article.tags"
        :date="article.createdAt"
      />
    </div>
  </section>
</template>
