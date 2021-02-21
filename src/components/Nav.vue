<template>
  <header class="fixed w-full px-8 text-white bg-black body-font z-50">
    <div
      class="container flex flex-col flex-wrap items-center py-5 mx-auto max-w-7xl md:flex-row"
    >
      <nav class="flex flex-wrap items-center pb-5 text-base md:w-2/5 md:pb-0">
        <router-link to="/">
          <a class="mr-5 font-medium leading-6 text-white hover:text-gray-300"
            >Home</a
          >
        </router-link>
        <a class="mr-5 font-medium leading-6 text-white hover:text-gray-300"
          >Desain</a
        >
        <router-link to="/harga">
          <a class="mr-5 font-medium leading-6 text-white hover:text-gray-300"
            >Harga</a
          ></router-link
        >

        <router-link to="/about">
          <a
            class="font-medium leading-6 text-white md:mr-5 hover:text-gray-300"
            >Tentang Kami</a
          ></router-link
        >
      </nav>
      <a
        href="#_"
        class="flex items-center order-first mb-6 font-medium text-gray-900 md:order-none md:w-1/5 title-font md:items-center md:justify-center md:mb-0"
      >
        <!-- <span
          class="text-xl font-black leading-none text-white select-none logo"
          >Undangandigital<span class="text-indigo-600">.</span></span
        > -->
      </a>
      <div class="inline-flex items-center space-x-6 md:w-2/5 md:justify-end">
        <button
          class="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-800 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
        >
          Buat Undangan
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
