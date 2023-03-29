import { useState } from "react"
import Notes from "./components/Notes"

function App() {
  const [notes, setNNotes] = useState<any[]>(() => {
    const storedElement = localStorage.getItem("notes");
    return storedElement ? JSON.parse(storedElement) : [];
  });
  const handleClick = (id: any) => {
    const taskToDelete = notes.filter(note => note.id !== id);
    setNNotes(taskToDelete);
    
    localStorage.setItem("notes", JSON.stringify(taskToDelete))
  }

  return (
    <Notes
      notes={notes}
      handleClick={handleClick}
      setNNotes={setNNotes} />
  )
}

export default App
