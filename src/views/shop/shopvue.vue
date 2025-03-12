<template src="./shoptemplate.html"></template>
<script>
import script from "./shopscript.js"; // Ensure it's a default export
export default {
  ...script, // Spread properties from shopscript.js
};
</script>
<style scoped src="./shopstyle.css"></style>