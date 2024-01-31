import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';


const options={
  params:{
    include_adult:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzg0NWY4NWI2ZGRhYjBjN2YxNmVkYmZhOWQ3YTBmOCIsInN1YiI6IjY1Yjg5Zjg3MzNhMzc2MDE2Mjg1Yjk2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7DbnVTOoei4e3Bvi7Hpb13ECxxO161WaY6sbWxGC60'

  }
  
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  http=inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options);
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }

  
}
