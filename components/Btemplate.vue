<
<template>
  <!-- component -->
  <div
    class="w-full bg-cover bg-center bg-no-repeat lg:h-64 sm:h-48 object-cover text-center bg-cover"
  >
    <h1
      class="text-gray-300 justify-center content-center items-center font-medium text-5xl"
    >
      My Blog
    </h1>
  </div>
</template>
<script>
export default {
  name: 'BtemplateComponent',
}
</script>
<style scoped>
.w-full {
  background-image: linear-gradient(rgba(0, 0, 0, 0.518), rgba(0, 0, 0, 0.518)),
    url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1600');
}
.w-full h1 {
  padding: 5%;
}
@media only screen and (max-height: 474px) {
  .w-full {
    height: 350px;
  }
}
</style>
