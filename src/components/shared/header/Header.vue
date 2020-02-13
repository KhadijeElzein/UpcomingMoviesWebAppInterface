<template>
  <b-navbar toggleable="lg" type="dark" variant="danger" class="header">
    <b-navbar-brand href="#">Upcoming Movies</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <slot></slot>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
</script>
<style scoped>
.header {
  background-color: #F8F8F8;
  border-color: #E7E7E7;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

}

</style>
