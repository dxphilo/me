<<template>
  <!-- component -->
  <div class="w-full bg-cover  bg-center bg-no-repeat lg:h-64 sm:h-48 object-cover text-center bg-cover">
      <h1 class="text-gray-300 justify-center content-center items-center font-medium text-5xl">/ Blogs</h1>

  </div>
</template>
 <script>
export default {
  name: "Btemplate",
};
</script>
<style scoped>
.w-full {
  background-image: linear-gradient(rgba(0, 0, 0, 0.533), rgba(0, 0, 0, 0.533)),
    url("../assets/2.jpg");
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