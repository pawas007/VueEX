

import axios from "axios";

export default {
    state: {
        posts: [],
        count : null
        // дані  які будуть використовуватися в АPP vuex
    },
    actions: {
        async fetchPosts(ctx, limit) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts?_limit='+limit)
                .then(response => {
                    ctx.commit('updatePosts', response.data)
                    // збираємо дані і відправляємо в мутейшнн

                })
        }
    },
    mutations: {
        updatePosts(state, postsApi) {
            state.posts = postsApi
            // функція ка буде міняти state змінні получені з action
        },
        addNewPost(state , newPost){
            state.posts.unshift(newPost)
        },

        removePost(state , itemIndex){
            state.posts.splice(itemIndex,itemIndex)
        }
    },

    getters: {
        allPosts(state) {
            return state.posts
        },
        postCount(state){
           return  state.count = state.posts.length
        }
    }
}