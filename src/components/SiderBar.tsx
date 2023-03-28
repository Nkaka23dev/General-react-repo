export default function SiderBar(
    { notes,
        setValueToEdit,
        onAddNote,
        handleClick }: any) {
    return (
        <div className='border-r-2 border-gray-300  h-screen'>
            <div className='flex justify-between my-5 items-baseline '>
                <div>
                    <h1 className='text-3xl font-bold text-gray-800'>Notes</h1>
                </div>
                <div className='pr-3'>
                    <button onClick={() => onAddNote()} className='text-sky-500 font-bold text-md hover:underline'>Add</button>
                </div>
            </div>
            {/* content  */}
            {notes.map((note: any, idx: number) => {
                return (
                    <div onClick={() => setValueToEdit(note)} key={idx} className={`flex pb-6 justify-between my-5 items-baseline cursor-pointer hover:shadow-lg`}>
                        <div className=''>
                            <h1 className='text-md font-bold text-gray-600'>{note.title}</h1>
                            <p className='text-sm text-green-600 '>Last Modified  {new Date(note.lastModified).toLocaleString("br-FR", {})}</p>
                            <p>{note.body && note.body.substr(0, 30) + "......."}</p>
                        </div>

                        <div className='pr-3'>
                            <button onClick={() => handleClick(note.id)} className='text-red-500 font-bold text-md hover:underline'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
