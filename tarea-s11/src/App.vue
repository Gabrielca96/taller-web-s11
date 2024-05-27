<script setup lang="ts">
</script>

<template>
  <!-- {{ start }} -->
  <div class="relative z-0 flex flex-col h-screen bg-[#28376E]">  
    <div id="app" class="z-10 overflow-y-scroll ">
        <router-view></router-view>
    </div>  
    <!-- this svg must be at the bottom of the page and under all components -->
    <svg class="absolute bottom-0 left-0 w-full" width="375" height="204" viewBox="0 0 375 204" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M0 163.897L8.65385 149.949C18.2692 136 35.5769 108.103 53.8462 104.615C71.1538 102.872 89.4231 122.051 106.731 125.538C125 129.026 143.269 115.077 160.577 108.103C178.846 102.872 196.154 102.872 214.423 111.59C231.731 122.051 250 108.103 268.269 108.103C285.577 108.103 303.846 122.051 321.154 95.8974C339.423 68 356.731 34.8718 366.346 17.4359L375 0V204H366.346C356.731 204 339.423 204 321.154 204C303.846 204 285.577 204 268.269 204C250 204 231.731 204 214.423 204C196.154 204 178.846 204 160.577 204C143.269 204 125 204 106.731 204C89.4231 204 71.1538 204 53.8462 204C35.5769 204 18.2692 204 8.65385 204H0V163.897Z" fill="#060606"/>
    </svg>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
