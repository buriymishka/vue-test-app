<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/css/global.css';
export default {
  
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
}

@media (max-width: 600px) {
  #app {
    margin-top: 30px;
  }
}
</style>
