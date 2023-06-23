import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SeriesDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error))
  }, [id])

  if (!show) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-5' style={{ backgroundColor: 'rgb(33, 37, 41)', border: 'none', color: '#ffffff', padding: '20px', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', borderRadius: '100px' }}>
      <div className='card' style={{ border: 'none', backgroundColor: 'rgb( 33, 37, 41 )', borderRadius: ' 100px ' }}>
        <div className='card-header' style={{ borderRadius: '100px', border: 'none' }}>
          <h3 style={{ display: 'grid', backgroundColor: 'rgb(33, 37, 41)', color: 'white', justifyContent: 'center' }}>{show?.name}</h3>
        </div>
        <div className='card-body mt-1' style={{ backgroundColor: 'rgb(33, 37, 41)', borderRadius: '100px' }}>
          <div className='row' style={{ backgroundColor: '' }}>
            <div className='col-md-4' style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
              <img src={show?.image?.medium} alt={show?.name} className='img-fluid' style={{ width: '100%', height: 'auto', boxShadow: '0 0 20px rgba(55, 255, 25, 0.5)', borderRadius: '100px' }} />
            </div>
            <div className='col-md-8' style={{ backgroundColor: 'rgb(33, 37, 41)', boxShadow: '0 0 0px rgba(55, 255, 255, 0.5)', border: 'none' }}>
              <table className='table mt-5' style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)' }}>
                <thead style={{ backgroundColor: 'red' }}>
                  <tr>
                    <th style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'red' }}>Property</th>
                    <th style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'red' }}>Value</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'red' }}>
                  <tr>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>Language</td>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>{show?.language}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>Genres</td>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>{show?.genres.join(', ')}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>Premiered</td>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>{show?.premiered}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>Summary</td>
                    <td dangerouslySetInnerHTML={{ __html: show?.summary }} style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }} />
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>Episodes</td>
                    <td style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white' }}>
                      {show?.episodes && show.episodes.length > 0
                        ? (
                          <ul>
                            {show.episodes.map(episode => (
                              <li key={episode.id}>
                                Episode {episode.number}: {episode.name}
                              </li>
                            ))}
                          </ul>
                          )
                        : (
                            'No episodes found'
                          )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='table mt-5' style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)' }}>
                <h5 className='table mt-5' style={{ backgroundColor: 'black', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white', textAlign: 'center' }}>Ver la serie en línea:</h5>
                <a href={show?.officialSite} target='_blank' rel='noopener noreferrer' style={{ display: 'grid', backgroundColor: 'rgb(33, 37, 41)', boxShadow: '0 0 20px rgba(55, 255, 255, 0.5)', color: 'white', justifyContent: 'center' }}>
                  {show?.officialSite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeriesDetail
