<template>
<div>
      <div v-if="loading">
        <img src="https://i.gifer.com/4V0b.gif" class="img-load">
      </div>
      <b-card bg-variant="dark" text-variant="white" v-if="!loading">
      <h2 class="center">{{ movie.title }} ({{movie.release_date}})</h2>
      <b-card-img :src="movie.poster_path" :alt="movie.title" top class="card-img"/>
      <b-card-text class="center">
      {{movie.overview}}
      </b-card-text>
      <span class="overview-genre">Genres: </span>
      <div class="overview-genre" v-for="genre of movie.genre_ids" xl="3" lg="4" md="4" sm="6" xs="12" :key="genre.id"> {{genre.name}}</div>
      <div class="center">
        <router-link :to="{ name: 'home'}"><b-button variant="danger">Back to List</b-button></router-link>
      </div>
      </b-card>
</div>
</template>

<script>

import MovieService from '../../domain/movies/MovieService'
export default {
  data () {
    return {
      movie: [],
      id: this.$route.params.id,
      loading: true
    }
  },
  created () {
    this.service = new MovieService(this.$resource)
    this.service
      .getMovieById(this.id)
      .then(function (movie) {
        this.movie = movie
        this.loading = false
      })
  }
}
</script>
<style scoped>
  .center {
    text-align: center;
  }
  .overview-genre {
    color: #94aabb;
    font-size: medium;
    display:inline-block;
    margin-right:5px;
  }
</style>
