<template>
  <div class="h-full">
    <div class="download pt-3 text-center">
      <h1 class="text-2xl py-10">Tailwind CSS Cheat sheet</h1>
      <button
        class="py-3 px-8 focus:outline-none bg-green-500 hover:bg-green-600 rounded text-white"
        @click.prevent="getDownload()"
      >
        Download
      </button>
    </div>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  name: "download",
  methods: {
    // //download image
    // getDownload() {
    //   axios({
    //     url: require("../assets/tailwindcss-cheatsheet.pdf"),
    //     method: "GET",
    //     responseType: "blob",
    //   }).then((response) => {
    //     var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
    //     var fileLink = document.createElement("a");
    //     fileLink.href = fileUrl;
    //     fileLink.setAttribute("download");
    //     document.body.appendChild(fileLink);
    //     fileLink.click();
    //   });
    // },
  },
};
</script>
 <style scoped>
</style>