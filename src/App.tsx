import { useState } from "react"
import data from "./MOCK_DATA.json"
import ReactPaginate from "react-paginate";

function App() {
  const [mockData, setMockdata] = useState(() => data.slice(0, 1000))
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
 
  const pageVisted = pageNumber * userPerPage;

  const displayUsers = mockData.slice(pageVisted, pageVisted + userPerPage).map((val) => {
    return (
      <div key={val.id} className="bg-sky-800 text-white p-10 text-xl">
        <h1>{val.first_name}</h1>
        <h1>{val.last_name}</h1>
        <h1>{val.email}</h1>
      </div>)
  })
  const pageCount = Math.ceil(mockData.length / userPerPage);

  const pageChange = ({ selected }: any) => {
    setPageNumber(selected)
  }
  return (
    <section>
      <div className="max-w-6xl py-5 mx-auto grid">
        <div className="grid grid-cols-3 gap-10">
          {displayUsers}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          activeClassName=""
          previousLinkClassName="bg-sky-500 text-white px-4 py-2"
          nextClassName="bg-sky-500 text-white px-4 py-2"
          pageLinkClassName="bg-sky-500 text-white px-4 py-2"
          pageCount={pageCount}
          onPageChange={pageChange}
          className="flex gap-5 mx-auto py-10" 
          />
      </div>
    </section >
  )
}

export default App
