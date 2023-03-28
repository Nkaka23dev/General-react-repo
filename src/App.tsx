import { useState } from "react"
import Notes from "./components/Notes"

function App() {
  const [notes, setNNotes] = useState<any[]>([]);
  const handleClick = (id: any) => {
    setNNotes(notes.filter(note => note.id !== id))
  }
  return (
    <Notes
      notes={notes}
      handleClick={handleClick}
      setNNotes={setNNotes} />
  )
}

export default App
