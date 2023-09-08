import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/pagination";
import useFetch from "./useFetch";
const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";

const pageSize = 6;
function App() {
  const [page, setPage] = useState(1); //for active page
  const [loading, programmers] = useFetch(url, {
    page: page,
    pageSize: pageSize,
  });

  return (
    <div className="container pt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
      {!loading && (
        <>
          <div className="row justify-content-center">
            {programmers.data.map(({ id, ...programmer }) => {
              return (
                <div className="col-4" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <div>
            <Pagination
              pages={Math.ceil(programmers.totalRecords / pageSize)}
              setPage={setPage}
              activePage={page}
            ></Pagination>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
