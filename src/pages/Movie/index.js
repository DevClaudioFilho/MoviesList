import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import api from '../../services/api'
import { Container,
  Layout,
  Sobre,
  Status,
  Title,
  Notes,
  Plot,
  Test,
} from './styles';

import arrowGrey from "../../assets/1.Icons/icon-arrow-grey.png"
import imdb from "../../assets/2.Logos/logo-imdb.svg"
import tomatoes from "../../assets/2.Logos/logo-rotten-tomatoes.svg"
import heartGrey from "../../assets/1.Icons/icon-heart-grey.svg"
export default function Movie(props) {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async function loadMovie(){
      const { imdbID } = props.match.params

      const response =await api.get(`?apikey=5726cef8&i=${imdbID}`)

      response.data.Favorite = false

      setMovies(response.data)
    }
    loadMovie();

  },[props])

  function setFavorite() {
    console.log(movies.Favorite)
    if(movies.Favorite === false){
      movies.Favorite = true

      return
    }

    movies.Favorite = false
  }


  return (

    <>
      <Container>
        <Link to="/">
              <img src={arrowGrey} alt="arrow" />
        </Link>
        <Layout>
          <Sobre>
            <Status>
              <ul>
                <li>{movies.Runtime} · {movies.Year}</li>
                <li>· {movies.Rated}</li>
              </ul>
            </Status>
            <Title>
              <h1>{movies.Title}</h1>
            </Title>
            <Notes>
              <div className="imdb">
                <img src={imdb} alt="" />
                <p>{movies.imdbRating}/10</p>
              </div>
              <div className="tomatoes">
                <img src={tomatoes} alt="" />
                <p>{movies.Metascore}%</p>
              </div>
              <button onClick={() => setFavorite()}>
                 <img src={heartGrey} alt=""/>
                 <p>Add to favourites</p>
              </button>
            </Notes>
            <Plot>
              <h1>Plot</h1>
              <p>{movies.Plot}</p>
            </Plot>
            <Test>
              <div><h1>Cast</h1><p>{movies.Actors}</p></div>
              <div><h1>Genre</h1><p>{movies.Genre}</p></div>
              <div><h1>Director</h1><p>{movies.Director}</p></div>
            </Test>
          </Sobre>
          <img src={movies.Poster} alt=""/>
        </Layout>
      </Container>
    </>
  );
}
