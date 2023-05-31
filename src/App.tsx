import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header title="My title is here" cls="uppercase">
        <div className="flex gap-10 items-center text-lg">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </Header>
      <Content />
    </>
  )
}

export default App
