import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Main.css";
function Main() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  // const [image, setImage] = useState('https://s3-alpha-sig.figma.com/img/04fe/6f5f/ff48881f6b13d94f9b7175e6b8cc1633?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh1M~zqckXKWjOTXjmDrdDuVGDQCAZW9quctCNrScuKHsxJXLwHmI1TSleVaEJ63tvKYSJ~AREztNm1F-P7li6-3zwC0YsnVt1IQGqpnJ0Gzuf0GA5w0V7xAcANerYgkuHyhG9uRDkL~iSOCOrqBnlzUingU0PtCk8GxLcqFrD8sQ3Xvpi9lEkfuvBPFq1XBi4lDOOuAaSWID1hTzZtz7S2f~AjZlKJmPIJZyJeKNeKFusgjrM37NFBrI39gAzlUJ6T8Zlx4EHCGl34cheHWXBpd1JERvJYXJ7-BBtWplVlt5I1jjXAyo79QsGAtdGlPxP7qq7BpbOy-xfZMG4KCaw__')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, []);
  const handleActive = () => {
    setActive(true);
  };
  console.log(active);
  return (
    <div className="container main">
      <div className="posts">
        <h1>All Posts</h1>
        <Link to="/Dashboard/Create">
          <button onClick={handleActive}>+ New Post</button>
        </Link>
      </div>
      <div className="cards">
        {data.map((el) => (
          <Card name={el.title} description={el.body} />
        ))}
      </div>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}

export default Main;
