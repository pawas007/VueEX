<template>
  <div>
    <h3 ref="title" class="h3">Carosel</h3>
    <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 2px 1px 2px #333;"

      >
        <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
            >
          </template>
        </b-carousel-slide>


      </b-carousel>


    </div>


  </div>
</template>

<script>



export default {
  name: "Carosel",
  comments:{

  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.$parent.$refs);



  }
}
</script>

<style scoped>

</style>