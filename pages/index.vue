<
<template>
  <!-- component -->
  <div>
    <Intro />
  </div>
</template>
<script>
import Intro from '@/components/Intro.vue'
export default {
	components: {
		Intro,
	},
	created() {
		console.log(
			'You can find the repository to this website here https://github.com/developerphilo/Portfolio',
		)
	},
}
</script>
<
<style scoped></style>
