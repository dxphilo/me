<script setup>
const articles = await queryContent("articles").sort({ createdAt: 1 }).find();
</script>
<template>
  <section>
    <div class="w-full my-4 mx-auto">
      <ArticleShowcase
        v-for="article in articles.slice(0, 3)"
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
