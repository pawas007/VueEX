<template>
  <div id="app">
    <Header>
      <template #firstSlot>
        Nav BAR SLOT
      </template>
     </Header>
  </div>
</template>

<script>
import Header from "@/views/Header";

export default {
  name: "App",
   props:['buttonName'],
  components: {
    Header
  },
}


</script>

<style lang="scss">

</style>
