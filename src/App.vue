<template>
  <div>
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: { Header, Footer }
};
</script>
<style>
main { padding: 20px; min-height: 80vh; }
</style>
<style scoped src="./style.css"></style>
