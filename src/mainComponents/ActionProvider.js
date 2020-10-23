

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }



greet() {
  const greetingMessage = this.createChatBotMessage("Hi, friend, what we will cook today?")
  this.updateChatbotState(greetingMessage)
}
handleBreakfast = () => {
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Breakfast & Brunch",
    }
  );

  this.updateChatbotState(message);
};
handleDinner = () => {
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Dinner",
    }
  );

  this.updateChatbotState(message);
};
handleVegan = () => {
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Vegan",
    }
  );

  this.updateChatbotState(message);
};
handleHealthy = () => {
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Healthy",
    }
  );

  this.updateChatbotState(message);
};
handleQuickEasy = () => {
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Quick & Easy",
    }
  );

  this.updateChatbotState(message);
};
handleDesserts = () => {
  const funnymessage = this.createChatBotMessage(
    "Hmm, hocolate lifts the mood, but don\'t abuse"
  )
  const message = this.createChatBotMessage(
    "Great, choose a category and move on:",
    {
      widget: "Desserts",
    }
  );
  setTimeout (()=>{this.updateChatbotState(message)},3000);
  this.updateChatbotState(funnymessage);
};


updateChatbotState(message) {

// NOTE: This function is set in the constructor, and is passed in      
// from the top level Chatbot component. The setState function here     
// actually manipulates the top level state of the Chatbot, so it's     
// important that we make sure that we preserve the previous state. 
 this.setState(prevState => ({
    ...prevState, messages: [...prevState.messages, message]
  }))
}
}

export default ActionProvider



