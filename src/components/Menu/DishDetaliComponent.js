import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class DishDetailComponent extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments !== null) {
      const displayComments = comments.map((c) => (
        <li key={c.id}>
          {c.comment } 
          <br />
          {c.author } 
           <span className="span">
             {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date( c.date))}
          </span>
          
        </li>
      ));
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{displayComments}</ul>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className="row">
        {this.props.menu}
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(
            this.props.selectedDish ? this.props.selectedDish.comments : null
          )}
        </div>
      </div>
    );
  }
}

export default DishDetailComponent;
