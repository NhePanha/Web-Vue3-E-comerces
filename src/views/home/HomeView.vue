<template src="./template.html"></template>
<script>
import script from "./script.js"; // Ensure it's a default export
export default {
  ...script, // Spread properties from script.js
};
</script>
<style scoped src="./style.css"></style>
