<template>
  <div class="home">
    <Hero />
    <!-- <Partnership /> -->
    <Content />
    <whyUs />
    <Harga />
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
import whyUs from "@/components/whyUs.vue";
import Hero from "@/components/Hero.vue";
import Harga from "@/components/Harga.vue";
// import Partnership from "@/components/Partnership.vue";

export default {
  name: "Home",
  components: {
    Content,
    Faq,
    Footer,
    Logo,
    whyUs,
    Hero,
    Harga
    // Partnership
  }
};
</script>
