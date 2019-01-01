import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>Delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
      <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
    </Wrapper>
  );
};

export default orderSummary;
