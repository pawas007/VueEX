<template>
  <div>


    <h4 class="h4">get with id </h4>
    <hr>
    <h4 class="h4"> Count: {{ postCount }}</h4>
    <div class="show_posts d-flex mt-3">
      <input class="form-text mr-2 " type="number" v-model="myLimit">
      <button class="btn btn-warning" v-on:click="getAnother(myLimit)">Get post with limit</button>
    </div>
    <hr>
    <h3 class="h3">Add post</h3>
    <div class="addpost d-flex mt-3"><input type="text" class="form-text mr-2" placeholder="title" v-model="title">
      <input type="text" class="form-text mr-2" placeholder="Text" v-model="text">
      <button class="btn btn-warning" v-on:click="addPost">Add</button>
    </div>


    <div v-for="(post, index) in allPosts" :key="index" class="card">
      <div class="card-header">
        {{ post.id }} | {{ post.title }}
      </div>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
        {{ index }}
        <a href="#" class="btn btn-primary" v-on:click="removePost(index)">Remove post</a>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "blog",
  data() {
    return {
      limit: 4,
      title: "",
      text: "",
      myLimit:2,



    }
  },

  computed: {
    ...mapGetters(['allPosts', 'postCount']),

  },
  // получаємо дані з vuex

  methods: {
    ...mapActions(["fetchPosts"]),
    getAnother: function (myLimit) {
      if (!myLimit) {
        alert('ENTER LIMIT OF POSTS')
      } else {
        this.limit = myLimit
        this.fetchPosts(this.limit)
      }
    },
    ...mapMutations(['addNewPost', 'removePost']),

    addPost: function () {
      this.addNewPost({
        title: this.title,
        body: this.text,
        id: Date.now()
      })
      this.title = this.text = ''
    },
    removePost: function (itemIndex) {

      console.log(itemIndex)
      this.removePost(itemIndex)


    }


  },
  async mounted() {
    this.fetchPosts(this.limit)
  }
  // визиваємо функцію action vuex
}
</script>

<style scoped lang="scss">
.card {
  margin: 20px;
}
</style>