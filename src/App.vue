<template>
  <div class="app">
    <h1>MovieLand</h1>

    <div class="search">
      <input
        v-model="searchText"
        type="text"
        placeholder="Search for a movie"
        id="search"
        @keydown.enter="callMovie"
      />
      <img
        src="https://img.icons8.com/ios-filled/50/000000/search.png"
        alt="search"
        @click="callMovie"
      />
    </div>

    <div class="container">
      <HelloWorld :movielist="movielist" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  data() {
    return {
      searchText: "",
      movielist: [],
    };
  },

  components: {
    HelloWorld,
  },
  methods: {
    callMovie() {
      this.$AppAxios
        .get(`${this.$store.state.API_KEY}&s=${this.searchText}`, {
          searchText: this.searchText,
        })
        .then((res) => {
          this.movielist = res.data.Search;
        });
    },
  },
};
</script>
