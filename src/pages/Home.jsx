import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [shows, setShows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter] = useState('all')
  const [topShows, setTopShows] = useState([])
  const [currentShowIndex, setCurrentShowIndex] = useState(0)

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error))

    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setTopShows(data.slice(0, 6)))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentShowIndex(prevIndex => (prevIndex + 1) % topShows.length)
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [topShows])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredShows = shows.filter(show => {
    if (categoryFilter === 'all') {
      return show.name.toLowerCase().includes(searchTerm.toLowerCase())
    } else {
      return (
        show.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        show.genres.includes(categoryFilter)
      )
    }
  })

  return (
    <div className='container mt-5' style={{ backgroundColor: 'black', color: '#ffffff', padding: '20px', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', borderRadius: '100px' }}>
      <div className='mt-5' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'black', boxShadow: '0 0 15px rgba(55, 55, 255, 0.5)', borderRadius: '100px' }}>
        <div className='card mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: '#ffffff', border: 'none', borderRadius: '100px' }}>
          <img
            className='card-img-top'
            src={topShows[currentShowIndex]?.image.medium}
            alt={topShows[currentShowIndex]?.name}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 0 20px rgba(255, 55, 255, 0.5)', margin: ' 30px ' }}
          />
          <div className='card-body' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'black' }}>
            <h5 className='card-title' style={{ backgroundColor: 'black' }}>{topShows[currentShowIndex]?.name} </h5>
          </div>
        </div>
      </div>
      <form className='form-inline justify-content-center mt-4' style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
        <div className='form-group' style={{ display: 'grid', justifyContent: 'center' }}>
          <input
            type='text'
            className='form-control transparent-input'
            id='search'
            placeholder='Buscar series'
            value={searchTerm}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          />
        </div>
      </form>
      <div className='col-lg-100' style={{ display: 'grid', backgroundColor: 'black', borderRadius: '100px' }}>
        <h2 className='mt-5' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'black', margin: '70px' }}>Series Recomendadas</h2>

        <div className='row justify-content-center' style={{ justifyContent: 'center', backgroundColor: 'black', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '100px' }}>
          {filteredShows.map(show => (
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={show.id} style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'black', borderRadius: '100px' }}>
              <div className='card' style={{ borderRadius: '10px', backgroundColor: 'black', border: 'none' }}>
                <img
                  className='card-img-top'
                  src={show.image.medium}
                  alt={show.name}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0 20px rgba(100, 0, 255, 0.5)' }}
                />
                <div className='card-body' style={{ display: 'grid', justifyContent: 'center', backgroundColor: 'black', borderRadius: '100px', margin: '10px' }}>
                  <Link to={`/show/${show.id}`} className='card-link' style={{ backgroundColor: 'black' }}>
                    <h5 className='card-title' style={{ backgroundColor: 'black' }}>{show.name}</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
