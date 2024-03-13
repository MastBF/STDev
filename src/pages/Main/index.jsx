import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Dashboard/Card";
import { Link } from "react-router-dom";
import "assets/styles/index.css";
import ReactPaginate from "react-paginate";
import { reqPosts } from "api/posts";

function Main() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const PAGE_COUNT = 4;

  const getPosts = async (offset) => {
    try {
      const response = await reqPosts(PAGE_COUNT, offset);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handlePageClick = (event) => {
    console.log("event", event);
    const offset = event.selected * PAGE_COUNT;
    getPosts(offset);
  };

  const updateCurrentPageOnDelete = () => {

  };

  return (
    <div className={`container main `}>
      <div className="posts">
        <h1>All Posts</h1>
        <Link to="/posts/create">
          <button>+ New Post</button>
        </Link>
      </div>
      <div className="cards">
        {data?.results?.map((el) => (
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
          pageCount={Math.ceil(data.count / PAGE_COUNT)}
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
