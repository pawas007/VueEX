<template>
  <div >

    <h4 ref="abouttitle" class="h4">About title</h4>
    <Carosel/>
    <hr class="m-3">
    <vue-upload-multiple-image
        @upload-success="uploadImageSuccess"
        @before-remove="beforeRemove"
        @edit-image="editImage"
        :data-images="images"
        idUpload="myIdUpload"
        editUpload="myIdEdit"
    ></vue-upload-multiple-image>



  </div>
</template>

<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import Carosel from "@/views/Carosel";
export default {
  name: 'about',
  data () {
    return {
      images: []
    }
  },
  components: {
    VueUploadMultipleImage,
    Carosel
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
  }
}
</script>

