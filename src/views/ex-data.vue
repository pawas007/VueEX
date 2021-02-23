<template>
  <div>
    <div class="btn" @click="handleClick">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "ex-data",
  props: {
    name: {
      required: true,
      type: String,
      default: "myText",
    },
    handleClick: {
      required: false,
      type: Function,
      default: () => console.log("Click from props")
      ,
    },
  },

  methods: {},
};
</script>

<style lang="scss">
</style>
