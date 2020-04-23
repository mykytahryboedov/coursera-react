import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../../shared/dishes'
import MenuComponent from './MenuComponent.js'
import DishDetailComponent from "./DishDetaliComponent";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  
  render() {
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
            
            </div>
          </Navbar>
          <MenuComponent dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
          <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
      </div>
    );
  }
  
}

export default Main;