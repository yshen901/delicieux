import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';
import Leaf from '../stylesheets/assets/leaf.png';
import Leaf2 from '../stylesheets/assets/leaf2.png';
import Salami from '../stylesheets/assets/salami.png';
import Clock from '../stylesheets/assets/time.png';
// import Calorie from '../stylesheets/assets/caloriee.png' // CHANGE2025: UNUSED
import Like from "../stylesheets/assets/like.png";
import Dislike from '../stylesheets/assets/dislike.png'

// const MAX = 21; // CHANGE2025: UNUSED
// const MIN = 0; // CHANGE2025: UNUSED

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  componentWillUnmount() {
    this.props.closeModal();
  }
  onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
  }
  handleModal(recipe) {
    this.props.openModal(recipe);
  }

  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    // CHANGE2025: UNUSED
    // const { recipe, rotateToBack, fridge } = this.props;
    // const { vegetarian, vegan, title, spoonacularScore, image, servings, readyInMinutes, nutrition } = this.props.recipe
    const { recipe } = this.props;
    const { vegetarian, vegan, title, spoonacularScore, image, readyInMinutes, nutrition } = this.props.recipe

    let timeC = readyInMinutes < 60 ? (readyInMinutes).toString() + "m":
      readyInMinutes < 180 ? Math.floor(readyInMinutes / 60).toString() + "h" : "3h+";
    let isVegan
    if (vegan) {
      isVegan = "Vegan";
    } else if (vegetarian) {
      isVegan = "Vegetarian";
    } else {
      isVegan = "Non Vegan";
    }
    let calorieC = Math.floor(nutrition[0].amount);
    let leaf
    if (isVegan === "Vegan") {
      leaf = <img className="leaf" src={Leaf2} alt="" />;
    } else if (isVegan === "Vegetarian") {
      leaf = <img className="leaf" src={Leaf} alt="" />;
    } else {
      leaf = <img className="leaf" src={Salami} alt="" />;
    }

    let score
    let scoreNumber
    if (spoonacularScore > 50) {
      score = <img className="like" src={Like} alt="" />;
      scoreNumber = <div className="recipe-index-item-name">{spoonacularScore.toFixed(1)}</div>
    } else {
      score = <img className="like" src={Dislike} alt="" />;
      scoreNumber = <div className="recipe-index-item-name"></div>
    }

    return (
      <div
        className="recipe-index-item"
        draggable
        onDragStart={this.onDragStart}
        onClick={() => this.handleModal(recipe)}
      >
        <div className="recipe-index-item-image">
          <img src={image} draggable="false" alt=""/>
        </div>
        {/* <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div> */}
        <div className="title-time">
          <div className="recipe-index-item-name">
            {title.slice(0, 25) + ".."}
          </div>
          <div className="recipe-time-container">
            <div>{timeC}</div>
            <img src={Clock} alt="" className="make" />
          </div>
        </div>
        <div className="icon-box">
          <div className="vegan">
            {score}
            {scoreNumber}
          </div>
          <div className="vegan-two">
            {leaf}
            <div className="recipe-index-item-name">{isVegan}</div>
          </div>
          <div className="vegan">
            <div className="calorie">kcal</div>
            <div className="recipe-index-item-name cal-name">{calorieC}</div>
          </div>
        </div>
        {/* <div className="recipe-index-item-add" onClick={this.addToCart}>Add to Cart</div> */}
      </div>
    );
  }
}

export default RecipeIndexItem;