<template>
  <div>
    <div class="row py-5 px-4">
      <div class="col-xl-8 col-md-6 col-sm-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-4 pb-4 bg-dark">
            <div class="media-body  text-white">
              <h4 class="mt-0 mb-0">Виконавець : Ostap</h4>
              <h4 class="mt-0 mb-0">Обєкт : Ашан</h4>
              <h4 class="mt-0 mb-0">Зона : Перший поверх</h4>
              <h4 class="mt-0 mb-0">Статус : В роботі</h4>
            </div>
          </div>
          <div class="py-4 px-4">

            <div class=" d-flex align-items-center justify-content-between mb-3" >
              <h5 class="mb-0">Фото:</h5>
            </div>

            <div class="row">
              <div
                  v-for="(src, index) in imgs"
                  :key="index"
                  class="pic col-lg-6 mb-2 pr-lg-1"
                  @click="() => showImg(index)"
              >
                <img class="img-fluid rounded shadow-sm" :src="src" />
              </div>
            </div>
            <div class="py-4">
              <h5 class="mb-3">Коментар:</h5>
              <div class="p-4 bg-light rounded shadow-sm">
                <p class="font-italic mb-0">Lorem</p>
              </div>
            </div>
          </div>
        </div><!-- End profile widget -->
      </div>
    </div>
    <!-- all props & events -->
    <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: [
        'https://i1.sndcdn.com/avatars-000123164863-epcg1r-t500x500.jpg',
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg',
        'data:image/jpeg;base64,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',
      ],  // Img Url , string or Array of string
      visible: false,
      index: 0   // default: 0
    }
  },
  methods: {
    showSingle() {
      this.imgs = 'http://via.placeholder.com/350x150'
      // or
      this.imgs = { title: 'this is a placeholder', src: 'http://via.placeholder.com/350x150' }
      this.show()
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>