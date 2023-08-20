<template>
  <div class="movie" v-for="movie in movielist" :key="movie.ImbdId">
    <div>
      <p>
        {{ movie.Year }}
      </p>
    </div>
    <div>
      <img v-bind:src="movie.Poster" alt="movie" />
    </div>
    <div>
      <span>{{ movie.Type }}</span>
      <h3>{{ movie.Title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movielist"],
};
</script>
