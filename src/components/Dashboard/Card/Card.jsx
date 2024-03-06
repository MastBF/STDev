import React from "react";
import "./Card.css";




function Card(props) {
  return (
    <div className="images">
      <div className="card">
        <img
          src="https://s3-alpha-sig.figma.com/img/04fe/6f5f/ff48881f6b13d94f9b7175e6b8cc1633?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh1M~zqckXKWjOTXjmDrdDuVGDQCAZW9quctCNrScuKHsxJXLwHmI1TSleVaEJ63tvKYSJ~AREztNm1F-P7li6-3zwC0YsnVt1IQGqpnJ0Gzuf0GA5w0V7xAcANerYgkuHyhG9uRDkL~iSOCOrqBnlzUingU0PtCk8GxLcqFrD8sQ3Xvpi9lEkfuvBPFq1XBi4lDOOuAaSWID1hTzZtz7S2f~AjZlKJmPIJZyJeKNeKFusgjrM37NFBrI39gAzlUJ6T8Zlx4EHCGl34cheHWXBpd1JERvJYXJ7-BBtWplVlt5I1jjXAyo79QsGAtdGlPxP7qq7BpbOy-xfZMG4KCaw__"
          alt=""
        />
      
        <div className="comment ">
     

          <p>
            <b>Name</b>
            <br />
            {props.name} <br />
            <br />
            <b>Description</b>
            <br />
            {props.description}
            <br />
            <br />
            <b>Category</b>
            <br />
            test
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
