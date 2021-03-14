<template>
  <div class="home">
    <Hero />
    <!-- <Partnership /> -->
    <Content />
    <Feature />
    <Statistik />
    <Faq />
    <Logo />
    <Footer />>
  </div>
</template>

<script>
import Content from "@/components/Content.vue";
import Faq from "@/components/Faq.vue";
import Footer from "@/components/Footer.vue";
import Logo from "@/components/Logo.vue";
import Statistik from "@/components/Statistik.vue";
import Hero from "@/components/Hero.vue";
import Feature from "@/components/Feature.vue";

export default {
  name: "Home",
  components: {
    Faq,
    Footer,
    Logo,
    Statistik,
    Hero,
    Content,
    Feature
  }
};
</script>
