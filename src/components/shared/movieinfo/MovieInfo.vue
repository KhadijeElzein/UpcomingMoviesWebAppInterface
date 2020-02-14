<template>
<div class="overview-container">
    <h1 class="overview-title">{{title}}({{release}})</h1>
    <div class="overview-genre" v-for="genre of genres" xl="3" lg="4" md="4" sm="6" xs="12" :key="genre.id">{{genre.name}}</div>
</div>
</template>
<script>
export default{
  props: ['title', 'genres', 'release']
}
</script>
<style scoped>
.overview-container{
    text-align: left;
}
.overview-title{
    color: #d2d2d2;
    font-size: x-large;
    margin: 0;
}
.overview-genre {
    color: #94aabb;
    font-size: medium;
    display:inline-block;
    margin-right:5px;
}
</style>
