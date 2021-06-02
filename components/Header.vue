<template>
  <!-- component -->
  <div class="pb-1 header">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-around pt-4 items-center mb-1 font-bold">
      <div>
        <a href="/" class="flex text-normal pl-10">
          <img
            :src="require(`~/assets/john-philip.webp`)"
            class="img-rounded h-10 w-10"
            width="10"
            height="10"
            alt="icon of john philip"
            srcset=""
          />
          <span class="text-2xl pl-3">John Philip</span>
        </a>
      </div>

      <ul class="list-reset flex text-1xl">
        <li>
          <nuxt-link to="/" class="p-2 md:p-4">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blogs" class="p-2 md:p-4">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
 <script>
export default {
  name: "Header",
};
</script>
 <style scoped>
.header {
  font-size: 19px;
  height: 70px;
  font-weight: 400;
  letter-spacing: 0.25px;
}
ul li {
  background-color: transparent;
  padding-top: 5px;
  line-height: 19px;
  text-decoration: none;
}
</style>