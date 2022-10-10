import React from 'react'
import '../Homescreen.css'
import Row from '../Row'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row
          title='Trending Row'
          fetchUrl={requests.fetchTrending}
        />
         <Row
          title='Top Rated'
          fetchUrl={requests.fetchTopRated}
         
        />
         <Row
          title='Action Movie'
          fetchUrl={requests.fetchTopActionMovies}
         
        />
         <Row
          title='Comedy Movies'
          fetchUrl={requests.fetchTopComedyMovies}
        />
         <Row
          title='Horror Movies'
          fetchUrl={requests.fetchTopHorrorMovies}
        />
         <Row
          title='Romance Movies'
          fetchUrl={requests.fetchTopRomanceMovies}
        />
          <Row
          title='Documentaries'
          fetchUrl={requests.fetchTopDocumentaries}
        />
    </div>
  )
}

export default HomeScreen