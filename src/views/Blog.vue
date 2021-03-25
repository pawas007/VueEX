<template>
  <div>

    <h4 class="h4">Count: {{ postCount }}</h4>

 <div class="form-group">
      <label for="exampleInputEmail1">Count limit:</label>
      <input
      type="number"
        class="form-control"
      v-model="myLimit"/>
  
    </div>
 <button class="btn btn-primary" v-on:click="getAnother(myLimit)">
        Get post with limit
      </button>
   
    <hr />
    <h3 class="h3">Add post</h3>

    <div class="form-group">
      <label for="exampleInputEmail1">Title</label>
      <input
        type="tetx"
        class="form-control"
        v-model="title"
        aria-describedby="emailHelp"
        placeholder="Title"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your title with anyone else.</small
      >
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Content</label>
      <input
        type="tetx"
        class="form-control"
        v-model="text"
        aria-describedby="emailHelp"
        placeholder="Title"
      />
    </div>

    <button class="btn btn-primary" v-on:click="addPost">Add</button>

    <div v-for="(post, index) in allPosts" :key="index" class="card m-0 my-4">
      <div class="card-header">Post id:{{ post.id }} |<p class="ml-2"></p> Title: {{ post.title }} <p class="ml-2">Post index: {{index}}</p> </div>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
         <a href="#" class="btn btn-primary" v-on:click="removePostFront(index)"
          >Remove post</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "blog",
  data() {
    return {
      limit: 4,
      title: "",
      text: "",
      myLimit: null,
    };
  },

  computed: {
    ...mapGetters(["allPosts", "postCount"]),
  },
  // получаємо дані з vuex

  methods: {
    ...mapActions(["fetchPosts"]),
    getAnother: function (myLimit) {
      if (!myLimit) {
        alert("ENTER LIMIT OF POSTS");
      } else {
        this.limit = myLimit;
        this.fetchPosts(this.limit);
      }
    },
    ...mapMutations(["addNewPost", "removePost"]),

    addPost: function () {
      this.addNewPost({
        title: this.title,
        body: this.text,
        id: Date.now(),
      });
      this.title = this.text = "";
    },
    removePostFront: function (id) {
      this.removePost(id);
    },
  },
  async mounted() {
    this.fetchPosts(this.limit);
  },
  // визиваємо функцію action vuex
};
</script>

<style scoped lang="scss">
.card {
  margin: 20px;
}
</style>