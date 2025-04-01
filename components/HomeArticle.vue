<script setup>
const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("createdAt", "DESC").all()
);
</script>
<template>
  <section>
    <div class="w-full my-4 mx-auto">
      <ArticleShowcase
        v-for="article in articles.slice(0, 4)"
        :key="article.path"
        :path="article.path"
        :img="article.meta.imgurl"
        :title="article.title"
        :tags="article.meta.tags"
        :date="article.createdAt"
      />
    </div>
  </section>
</template>
