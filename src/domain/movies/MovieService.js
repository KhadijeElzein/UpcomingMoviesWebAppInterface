export default class MovieService {
  constructor (resource) {
    this._resource = resource('v1.0/movies/{/id}?title={title}')
  }
  listMovies () {
    return this._resource
      .query()
      .then(res => res.json())
  }
  getMovieById (id) {
    return this._resource
      .get({ id: id })
      .then(res => res.json())
  }
  getMovieByTitle (title) {
    return this._resource
      .get({ title: title })
      .then(res => res.json())
  }
}
