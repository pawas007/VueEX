<template>
  <div>
    <h2 class="h2">{{ title }}</h2>

    <div class="btn_wrap">
      <button class="btn btn-danger" @click.prevent="notyfiDanger">
        DANGER
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      title: "Alert notification",
    };
  },
  methods: {
    notyfiDanger: function () {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
        type: "success",
      });
    },
  },
};
</script>
// https://github.com/euvl/vue-notification/