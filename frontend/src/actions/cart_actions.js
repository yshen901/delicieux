import * as CartAPI from '../util/cart_api_util';

export const ADD_RECIPE = "ADD_RECIPE";
export const MAKE_RECIPE = "MAKE_RECIPE";
export const UNMAKE_RECIPE = "UNMAKE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const ADD_DATE = "ADD_DATE";
export const SWITCH_DATE = "SWITCH_DATE";
export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const addRecipe = ({ date, time, recipeId }) => ({
  type: ADD_RECIPE,
  date,
  time,
  recipeId,
});

export const removeRecipe = ({ date, time }) => ({
  type: REMOVE_RECIPE,
  date,
  time,
});

export const makeRecipe = ({ date, time }) => ({
  type: MAKE_RECIPE,
  date,
  time,
});

export const unmakeRecipe = ({ date, time }) => ({
  type: UNMAKE_RECIPE,
  date,
  time,
});

export const addDate = ({date}) => {return {
  type: ADD_DATE,
  date,
}};

export const switchDate = date => ({
  type: SWITCH_DATE,
  date,
});

const receiveCart = payload => ({
  type: RECEIVE_CART,
  cart: payload.data
});

const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const getCart = userId => dispatch => (
  CartAPI
    .getCart(userId)
    .then(
      payload => dispatch(receiveCart(payload)),
      errors => dispatch(receiveCartErrors(errors))
    )
);

export const addCartDate = (cartId, dateInfo) => dispatch => (
  CartAPI
    .addCartDate(cartId, dateInfo)
    .then(
      () => dispatch(addDate(dateInfo)),
      errors => dispatch(receiveCartErrors(errors)),
    )
);

export const addCartMeal = (cartId, mealInfo) => dispatch => {
  debugger
  return (
    CartAPI
      .setCartMeal(cartId, mealInfo)
      .then(
        () => dispatch(addRecipe(mealInfo)),
        errors => dispatch(receiveCartErrors(errors)),
      )
  )
}

// BUG: This is not actually removing the cart meal since it just doesn't pass in recipeId into mealInfo.
//      This should result in mealInfo being set to null, removing the recipe, but in practice this does not happen. 
// FIX: We changed this by calling removeCartMeal instead.
export const removeCartMeal = (cartId, mealInfo) => dispatch => {
  debugger
  return (
    CartAPI
      .removeCartMeal(cartId, mealInfo)
      .then(
        () => dispatch(removeRecipe(mealInfo)),
        errors => dispatch(receiveCartErrors(errors)),
      )
    )
  }



