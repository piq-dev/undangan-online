<template>
  <div class="harga">
    <HeaderHarga />
    <Harga />
    <Footer />
  </div>
</template>
<script>
import HeaderHarga from "../components/HeaderHarga.vue";
import Harga from "../components/Harga.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HeaderHarga,
    Harga,
    Footer
  }
};
</script>
