import {usePagination} from 'react-use-pagination'

function App() {
  const [data] = React.useState([]) // <- your data

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex
  } = usePagination({totalItems: data.length})

  return (
    <div>
      <MyDataTable data={data.slice(startIndex, endIndex)} />

      <button onClick={setPreviousPage} disabled={!previousEnabled}>
        Previous Page
      </button>
      <span>
        Current Page: {currentPage} of {totalPages}
      </span>
      <button onClick={setNextPage} disabled={!nextEnabled}>
        Next Page
      </button>
    </div>
  )
}
