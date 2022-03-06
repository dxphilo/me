<
<template>
  <!-- component -->
  <div>
    <div class="w-full headerr bg-no-repeat object-center bg-center bg-cover">
      <div class="flex items-center justify-center">
        <h1 class="text-center font-medium text-5xl pt-64">
          Software Developer | Technical Writer
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	components: {},
	created() {
		console.log(
			'You can find the repository to this website here https://github.com/developerphilo/Portfolio',
		)
	},
}
</script>
<
<style scoped>
.headerr {
	height: 600px;
	background-image: url('https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?cs=srgb&dl=pexels-anete-lusina-4792731.jpg&fm=jpg');
}
</style>
