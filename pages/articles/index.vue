<script setup>
useHead({
  title: "John Philip - Blog",
  meta: [
    { name: "description", content: "Listicle of all the articles on my blog" },
  ],
});

const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("createdAt", "DESC").all()
);
</script>
<template>
  <div>
    <Btemplate />
    <section>
      <div
        class="w-8/12 gap-x-10 pt-20 items-center mx-auto justify-center flex flex-wrap"
      >
        <Article
          v-for="article in articles"
          :key="article.path"
          :path="article.path"
          :img="article.meta.imgurl"
          :title="article.title"
          :tags="article.meta.tags"
          :date="article.createdAt"
          :description="article.meta.description"
        />
      </div>
    </section>
  </div>
</template>
