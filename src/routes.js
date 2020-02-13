import Home from './components/home/Home.vue'
import MovieDetail from './components/detail/MovieDetail.vue'

export const routes = [
  { path: '',
    name: 'home',
    component: Home
  },
  { path: ':id',
    name: 'detail',
    component: MovieDetail
  }
]
