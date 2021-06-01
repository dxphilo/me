<<template>
  <!-- component -->
  <div>
    <div class="w-full headerr bg-no-repeat object-center bg-center bg-cover ">
 <h1 class="text-center font-medium text-5xl pt-32">Technical writer & Developer</h1>
 <p class="text-center font-sm text-2xl pt-4">writing code and fighting bugs</p>
    </div>
    <Skillsect />
  </div>

</template>
 <script>
const Skillsect = () =>
  import(/*webpackChunkName: "Skillsect"*/ "@/components/Skillsect");
export default {
  components: {
    Skillsect,
  },
  computed: {
    logged() {
      console.log(
        "You can find the repository to this website here https://hitghub.com/developerphilo/my-portfolio"
      );
    },
  },
};
</script>
 <<style scoped>
 .headerr{
    height:400px;
    background-image: url('../assets/2.jpg');
  
 }
 @media (max-width: 800px) {
 .headerr{
    height:300px;
  
 }
}

 
 </style>