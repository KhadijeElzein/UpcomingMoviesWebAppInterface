<template>
<div class="container-fluid">
<my-header>
            <b-form-input size="sm" class="mr-sm-2" placeholder="filtre pelo título da foto" v-model="searchtitle"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click.prevent="searchInfo">Search</b-button>
</my-header>
<main>
    <div v-if="loading">
    <img src="https://i.gifer.com/4V0b.gif" class="img-load">
    </div>
    <div v-if="!loading">
        <b-container>
         <b-row>
           <b-col class="catalog-item" v-for="movie of movies" :key="movie.id"
             xl="3" lg="4" md="4" sm="6" xs="12" >
            <section class="movie-card">
            <figure>
            <router-link :to="{ name: 'detail', params: { id : movie.id }}">
            <img class="figure-img img-fluid movie-card-img"  :src="movie.poster_path" :alt="movie.title"></router-link>
            </figure>
            <movieinfo :title="movie.title" :genres="movie.genre_ids" :release="movie.release_date">
            </movieinfo>
            </section>
           </b-col>
          </b-row>
        </b-container>
    </div>
</main>
</div>
</template>
<script>
import Header from '../shared/header/Header.vue'
import MovieInfo from '../shared/movieinfo/MovieInfo.vue'
import MovieService from '../../domain/movies/MovieService'
export default {
  components: {
    'my-header': Header,
    'movieinfo': MovieInfo
  },
  data () {
    return {
      movies: [],
      searchtitle: '',
      loading: true
    }
  },

  methods: {
    searchInfo: function () {
      var passedSearch = this.searchtitle
      this.service.getMovieByTitle(passedSearch)
        .then(function (movies) {
          this.movies = movies
          this.loading = false
        })
    }
  },

  created () {
    this.service = new MovieService(this.$resource)
    this.service
      .listMovies()
      .then(function (movies) {
        this.movies = movies
        this.loading = false
      })
  }
}
</script>
<style>
  *,div{
  border: 0;
  padding: 0;
  margin: 0;
  }
  .catalog-item{
        padding-top: 15px;
  }
  .movie-card {
    padding: 10px;
    width: 266px;
    }
  .movie-card-img {
    height: 400px;
    min-width: 266px;
    min-height: 400px;
    margin: 0;
  }
  .img-load{
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
