<template>
  <div class="about">
    <HeaderAbout />
    <Team />
    <Footer />
  </div>
</template>

<script>
import HeaderAbout from "../components/HeaderAbout.vue";
import Team from "../components/Team.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HeaderAbout,
    Team,
    Footer
  }
};
</script>
<style scope></style>
