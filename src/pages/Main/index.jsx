import React, { useEffect, useState } from 'react';
import Card from '../../components/Dashboard/Card';
import { Link, useSearchParams } from 'react-router-dom';
import 'assets/styles/index.css';
import ReactPaginate from 'react-paginate';
import { reqPosts } from 'api/posts';
import { useDispatch, useSelector } from 'react-redux';
import { saveDate } from 'store/Data/action';

function Main() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const controller = new AbortController();
  const PAGE_COUNT = 4;
  const dataRedux = useSelector((state) => state.data.savedDate);
  const getPosts = async (offset, signal = controller.signal) => {
    try {
      const defaultOffset = (searchParams.get('page') - 1) * PAGE_COUNT;
      const response = await reqPosts(
        PAGE_COUNT,
        (offset = defaultOffset),
        signal,
      );
      setData(response.data);
      dispatch(saveDate(response.data));

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, [searchParams]);

  const handlePageClick = (event) => {
    searchParams.set('page', event.selected + 1);
    setSearchParams(searchParams);
    const offset = event.selected * PAGE_COUNT;
    controller.abort();
    getPosts(offset);
  };

  const updateCurrentPageOnDelete = () => {
    const offset = data.count * PAGE_COUNT;
    getPosts(offset);
    if (dataRedux.results.length - 1 === 0 && +searchParams.get('page') !== 1) {
      searchParams.set('page', searchParams.get('page') - 1);
      setSearchParams(searchParams);
    }
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
            key={el.id}
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
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default Main;
