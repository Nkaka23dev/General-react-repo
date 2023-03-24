import Person, { COUNTRY } from './components/Person'

function App() {
  return (
    <Person
      name='Eric Nkaka'
      email='nkakaeric96@gmail.com'
      isMarried={false}
      friends={["Isheja", "Eric", "Will Shyka", "Yvette Manzi"]}
      country={COUNTRY.RWANDA} />
  )
}

export default App
