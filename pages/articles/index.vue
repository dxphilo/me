<script setup>
useHead({
  title: "John Philip - Blog",
  meta: [
    { name: "description", content: "Listicle of all the articles on my blog" },
  ],
});
</script>
<template>
  <div>
    <Btemplate />

    <section>
      <ContentList path="/articles" v-slot="{ list }">
        <div class="max-w-4xl my-4 mx-auto flex flex-wrap">
          <SingleArticle
            v-for="article in list"
            :key="article._path"
            :path="article._path"
            :img="article.imgurl"
            :title="article.subtitle"
            :tags="article.tags"
            :date="article.createdAt"
          />
        </div>
      </ContentList>
    </section>
    <div>
      <Hr />
    </div>
  </div>
</template>
