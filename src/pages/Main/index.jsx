import React, { useEffect, useState } from "react";
import Card from "../../components/Dashboard/Card";
import { Link } from "react-router-dom";
import "assets/styles/index.css";
import ReactPaginate from "react-paginate";
import { reqPosts } from "api/posts";

function Main() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    reqPosts()
      .then((json) => setData(json.data.results))
      .catch((e) => console.log(e));
  }, []);


  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const startIndex = currentPage * 4;
  const endIndex = startIndex + 4;
  const displayedData = data.slice(startIndex, endIndex);
  const updateCurrentPageOnDelete = () => {
    const newPageCount = Math.ceil((data.length - 1) / 4);
    setCurrentPage(newPageCount - 1);
  };

  return (
    <div className={`container main `}>
      <div className="posts">
        <h1>All Posts</h1>
        <Link to="/posts/create">
          <button >+ New Post</button>
        </Link>
      </div>
      <div className="cards">
        {displayedData.map((el) => (
          <Card
            name={el.title}
            description={el.description}
            image={el.image}
            category={el.category.name}
            id={el.id}
            setData={setData}
            updateCurrentPageOnDelete={updateCurrentPageOnDelete}
          />
        ))}
      </div>
      <div className="pagination">
        <ReactPaginate
          pageCount={Math.ceil(data.length / 4)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Main;
