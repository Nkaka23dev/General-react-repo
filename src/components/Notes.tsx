
import SiderBar from './SiderBar'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

export default function Notes({ notes, setNNotes, handleClick }: any) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [valueToEdit, setValueToEdit] = useState<any>({})

    useEffect(() => {
        if (valueToEdit) {
            setTitle(valueToEdit.title)
            setBody(valueToEdit.body)
        }
    }, [valueToEdit])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const onAddNote = () => {
        if (title && body) {
            if (!valueToEdit.title || !valueToEdit.body) {
                const note = {
                    id: nanoid(),
                    title: title,
                    body: body,
                    lastModified: Date.now()
                }
                setNNotes([...notes, note])
                console.log(notes)
                setSuccessMessage("Note added successfully.")
                setBody("")
                setTitle("")

            } else {
                console.log("data", notes)
                console.log("value to edit", valueToEdit)
                const editedNotes = notes.map((note: any) => valueToEdit.id === note.id ? {
                    ...note, title: title,
                    body: body,
                    lastModified: Date.now()
                } : note)
                setNNotes(editedNotes)
                setSuccessMessage("Note Edited.")
                localStorage.setItem("notes", JSON.stringify(editedNotes))
                setBody("")
                setTitle("")
                valueToEdit.title = ""
                valueToEdit.body = ""
            }

        }
        else {
            setError("You can not submit an empty form!");
        }
    }
    const handleClose = () => {
        if (error) {
            setError("")
        }
    }
    // console.log(notes)
    useEffect(() => {
        setTimeout(() => {
            if (error) {
                setError("")
            }
            if (title === "" || body === "") {
                setSuccessMessage("")
            }
        }, 1000);
    })
    return (
        <section>
            <div className='max-w-[95rem] mx-auto px-3 grid grid-cols-3'>
                {/* first div */}
                <SiderBar notes={notes}
                    onAddNote={onAddNote}
                    setValueToEdit={setValueToEdit}
                    handleClick={handleClick}
                    valueToEdit={valueToEdit} />
                {/* seconfd div */}
                <div className='col-span-2'>
                    {error && <div className='bg-red-400 flex justify-between m-10 py-4 text-xl text-white px-10'>
                        <p>{error}</p>
                        <button onClick={handleClose}>X</button>
                    </div>}
                    {successMessage && <div className='bg-green-400 flex justify-between m-10 py-4 text-xl text-white px-10'>
                        <p>{successMessage}</p>
                        <button>X</button>
                    </div>}
                    <form onSubmit={onAddNote} className='m-10'>
                        <input type="text" required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-full py-3 px-6 focus:outline-none border border-gray-400' />
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder='Enter your text here...' className='w-full py-3 px-3 focus:outline-none border border-gray-400 h-64 mt-6'>
                        </textarea>
                    </form>
                    <div className='border-t-2 grid w-full border-gray-300 px-8'>
                        <div className=''>
                            <h1 className='text-lg font-bold text-sky-500 uppercase pt-2 mt-4'>{title}</h1>
                            <h1 className='text-md  text-gray-600'>{body}</h1></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
