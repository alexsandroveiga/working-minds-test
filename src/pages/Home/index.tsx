import { useCallback , useState, useEffect } from 'react'
import { FiXCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import { Container, Content } from './styles'

type State = {
  id: number
  name: string
  photo_url: string
}

type City = {
  id: number
  name: string
  stateId: number
}

export function Home (): JSX.Element {
  const [selectedTab, setSelectedTab] = useState('states')
  const [states, setStates] = useState<State[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [state, setState] = useState({
    name: '',
    photo_url: ''
  })
  const [city, setCity] = useState({
    name: '',
    stateId: 0
  })

  useEffect(() => {
    async function loadStates (): Promise<void> {
      const response = await api.get<State[]>('/states')

      setStates(response.data)
      setCity(prevState => ({
        ...prevState,
        stateId: response.data[0].id
      }))
    }
    loadStates()
  }, [])

  useEffect(() => {
    async function loadCities (): Promise<void> {
      const response = await api.get<City[]>('/cities')

      setCities(response.data)
    }
    loadCities()
  }, [])

  const handleAddState = useCallback(async () => {
    await api.post('/states', state)

    setStates(prevState => ([
      ...prevState,
      {
        id: states.length,
        name: state.name,
        photo_url: state.photo_url
      }
    ]))

    setState({
      name: '',
      photo_url: ''
    })
  }, [state, states.length])

  const handleAddCity = useCallback(async () => {
    await api.post('/cities', city)

    setCities(prevState => ([
      ...prevState,
      {
        id: cities.length,
        name: city.name,
        stateId: city.stateId
      }
    ]))

    setCity({
      name: '',
      stateId: 0
    })
  }, [city, cities.length])

  const handleDeleteState = useCallback(async (id: number) => {
    await api.delete(`/states/${id}`)

    setStates(prevState => (prevState.filter(s => s.id !== id)))
  }, [])

  const handleDeleteCity = useCallback(async (id: number) => {
    await api.delete(`/cities/${id}`)

    const filterCities = cities.filter(c => c.id !== id)

    setCities(filterCities)
  }, [cities])

  return (
    <Container>
      <Content>
        <div className={`tab ${selectedTab !== 'states' && 'active'}`}>
          <button onClick={() => setSelectedTab('states')}>Estados</button>
          <button onClick={() => setSelectedTab('cities')}>Cidades</button>
        </div>

        {selectedTab === 'states' && (
          <>
            <div className="grid">
              {states.map(s => (
                <section key={s.id}>
                  <picture>
                    <img src={s.photo_url} alt={s.name} />
                  </picture>
                  <div>
                    <h1><Link to={`/state/${s.id}`}>{s.name}</Link></h1>
                    <span>
                      {cities.filter(c => c.stateId === s.id).length > 0 ? cities.filter(c => c.stateId === s.id).length : 'Nenhuma'}
                      {cities.filter(c => c.stateId === s.id).length > 1 ? ' cidades registradas' : ' cidade registrada'}
                    </span>
                  </div>
                  <button onClick={async () => handleDeleteState(s.id)}>
                    <FiXCircle color="#ef233c" />
                  </button>
                </section>
              ))}
            </div>

            <form>
              <h1>Criar novo estado</h1>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setState(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))}
                value={state.name}
              />
              <input
                type="text"
                placeholder="Url da imagem"
                onChange={(e) => setState(prevState => ({
                  ...prevState,
                  photo_url: e.target.value
                }))}
                value={state.photo_url}
              />
              <button onClick={handleAddState} type="button">Criar</button>
            </form>
          </>
        )}

        {selectedTab === 'cities' && (
          <>
            <div className="grid">
              {cities.map(c => (
                <section key={c.id}>
                  <div>
                    <h1><Link to={`/state/${c.id}`}>{c.name}</Link></h1>
                    <span>{states.find(s => s.id === c.stateId)?.name}</span>
                  </div>
                  <button onClick={async () => handleDeleteCity(c.id)}>
                    <FiXCircle color="#ef233c" />
                  </button>
                </section>
              ))}
            </div>

            <form>
              <h1>Criar nova cidade</h1>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setCity(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))}
                value={city.name}
              />
              <select
                name="select"
                onChange={(e) => setCity(prevState => ({
                  ...prevState,
                  stateId: Number(e.target.value)
                }))}
              >
                {states.map((s, index) => (
                  <option key={s.id} value={s.id} selected={index === 0}>
                    {s.name}
                  </option>
                ))}
              </select>
              <button onClick={handleAddCity} type="button">Criar</button>
            </form>
          </>
        )}
      </Content>
    </Container>
  )
}
