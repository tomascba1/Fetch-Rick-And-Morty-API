import { useAxiosFetch } from './useAxiosFetch'
import './App.css'
import Spinner from 'react-spinners/SyncLoader'
import { CharacterList } from './components/CharacterList'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import { Pages } from './components/Pages'
import { Filter } from './components/Filters'

function App() {
  const [endpoint, setEndpoint] = useState("character")
  const [data, isLoading, error] = useAxiosFetch(endpoint)
  const characterData = data.results
  const pageData = data.info

  const prevPage = () => {
    if(pageData.prev){setEndpoint(pageData.prev)
    }
  }
  const nextPage = () => {
    if(pageData.next){setEndpoint(pageData.next)
    }
  }

  if (isLoading) return (
    <div className='loadingSpinner'>
      <Spinner size={100} color={"black"} />
    </div>
  )

  if (error) return (
    <div className='loadingSpinner'>
      <h1>Ops, something went wrong...</h1>
      <h3>{error}</h3>
    </div>
  )

  return (
    <Container>
      <Filter setEndpoint={setEndpoint}/>
      <h1 className='text-center mb-5'>Rick & Morty API</h1>
      <CharacterList characterData={characterData}/>
      <Pages prevPage={prevPage} nextPage={nextPage} pageBefore={pageData.prev} pageAfter={pageData.next}/>
    </Container>
  )
}

export default App
