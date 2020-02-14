webpackJsonp([1],{0:function(t,e){},"2bkc":function(t,e){},"3lje":function(t,e,i){"use strict";var n=i("WRNO"),s=i.n(n),a=i("CGVw");var r=function(t){i("6yNM")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-6754c1e0",null);e.default=o.exports},"6yNM":function(t,e){},"9M+g":function(t,e){},"Ai/c":function(t,e){},CGVw:function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{staticClass:"header",attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[e("b-navbar-brand",{attrs:{href:"#"}},[this._v("Upcoming Movies")]),this._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),this._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",[this._t("default")],2)],1)],1)],1)},staticRenderFns:[]};e.a=n},Jmt5:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"body"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},s,!1,function(t){i("wE8N")},null,null).exports,r=i("8+8L"),o=i("/ocq"),c=i("3lje"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overview-container"},[i("h1",{staticClass:"overview-title"},[t._v(t._s(t.title)+"("+t._s(t.release)+")")]),t._v(" "),t._l(t.genres,function(e){return i("div",{key:e.id,staticClass:"overview-genre",attrs:{xl:"3",lg:"4",md:"4",sm:"6",xs:"12"}},[t._v(t._s(e.name))])})],2)},staticRenderFns:[]};var u=i("VU/8")({props:["title","genres","release"]},l,!1,function(t){i("Ai/c")},"data-v-79a208c2",null).exports,v=i("Zrlr"),d=i.n(v),f=i("wxAW"),m=i.n(f),h=function(){function t(e){d()(this,t),this._resource=e("v1.0/movies/{/id}?title={title}")}return m()(t,[{key:"listMovies",value:function(){return this._resource.query().then(function(t){return t.json()})}},{key:"getMovieById",value:function(t){return this._resource.get({id:t}).then(function(t){return t.json()})}},{key:"getMovieByTitle",value:function(t){return this._resource.get({title:t}).then(function(t){return t.json()})}}]),t}(),_={components:{"my-header":c.default,movieinfo:u},data:function(){return{movies:[],searchtitle:"",loading:!0}},methods:{searchInfo:function(){var t=this.searchtitle;this.service.getMovieByTitle(t).then(function(t){this.movies=t,this.loading=!1})}},created:function(){this.service=new h(this.$resource),this.service.listMovies().then(function(t){this.movies=t,this.loading=!1})}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("my-header",[i("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"filtre pelo título da foto"},model:{value:t.searchtitle,callback:function(e){t.searchtitle=e},expression:"searchtitle"}}),t._v(" "),i("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:function(e){return e.preventDefault(),t.searchInfo(e)}}},[t._v("Search")])],1),t._v(" "),i("main",[t.loading?i("div",[i("img",{staticClass:"img-load",attrs:{src:"https://i.gifer.com/4V0b.gif"}})]):t._e(),t._v(" "),t.loading?t._e():i("div",[i("b-container",[i("b-row",t._l(t.movies,function(e){return i("b-col",{key:e.id,staticClass:"catalog-item",attrs:{xl:"3",lg:"4",md:"4",sm:"6",xs:"12"}},[i("section",{staticClass:"movie-card"},[i("figure",[i("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[i("img",{staticClass:"figure-img img-fluid movie-card-img",attrs:{src:e.poster_path,alt:e.title}})])],1),t._v(" "),i("movieinfo",{attrs:{title:e.title,genres:e.genre_ids,release:e.release_date}})],1)])}),1)],1)],1)])],1)},staticRenderFns:[]};var p={data:function(){return{movie:[],id:this.$route.params.id,loading:!0}},created:function(){this.service=new h(this.$resource),this.service.getMovieById(this.id).then(function(t){this.movie=t,this.loading=!1})}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("div",[i("img",{staticClass:"img-load",attrs:{src:"https://i.gifer.com/4V0b.gif"}})]):t._e(),t._v(" "),t.loading?t._e():i("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[i("h2",{staticClass:"center"},[t._v(t._s(t.movie.title)+" ("+t._s(t.movie.release_date)+")")]),t._v(" "),i("b-card-img",{staticClass:"card-img",attrs:{src:t.movie.poster_path,alt:t.movie.title,top:""}}),t._v(" "),i("b-card-text",{staticClass:"center"},[t._v("\r\n      "+t._s(t.movie.overview)+"\r\n      ")]),t._v(" "),i("span",{staticClass:"overview-genre"},[t._v("Genres: ")]),t._v(" "),t._l(t.movie.genre_ids,function(e){return i("div",{key:e.id,staticClass:"overview-genre",attrs:{xl:"3",lg:"4",md:"4",sm:"6",xs:"12"}},[t._v(" "+t._s(e.name))])}),t._v(" "),i("div",{staticClass:"center"},[i("router-link",{attrs:{to:{name:"home"}}},[i("b-button",{attrs:{variant:"danger"}},[t._v("Back to List")])],1)],1)],2)],1)},staticRenderFns:[]};var y=[{path:"",name:"home",component:i("VU/8")(_,g,!1,function(t){i("U7W2")},null,null).exports},{path:":id",name:"detail",component:i("VU/8")(p,b,!1,function(t){i("2bkc")},"data-v-8fce033e",null).exports}],C=i("Tqaz");i("Jmt5"),i("9M+g");n.default.use(r.a),n.default.http.options.root="https://moviewebappbackend.herokuapp.com/",n.default.use(C.a),n.default.use(C.b),n.default.use(o.a);var w=new o.a({routes:y,mode:"history"});n.default.config.productionTip=!1,new n.default({el:"#app",router:w,components:{App:a},template:"<App/>"})},U7W2:function(t,e){},WRNO:function(t,e){},wE8N:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e2682eee54b254339f9f.js.map