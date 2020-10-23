import React from "react";
import './CookingOptions.css'

const CookingOptions = (props) => {
  const options = [
    { text: "Breakfast & Brunch", handler: props.actionProvider.handleBreakfast,
    id: 1 },
    { text: "Dinner", handler: props.actionProvider.handleDinner, id: 1 },
    { text: "Vegan", handler: props.actionProvider.handleVegan, id: 3 },
    { text: "Healthy", handler: props.actionProvider.handleHealthy, id: 4 },
    { text: "Quick & Easy", handler: props.actionProvider.handleQuickEasy, id: 5 },
    { text: "Desserts", handler: props.actionProvider.handleDesserts, id: 6 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default CookingOptions;