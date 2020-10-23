import {quickEasy, greet, breakFast, dinner, vegan, healthy, desserts} from './../components/options/MessageParserOptions'

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

 parse(message) {
  
   let lowerCaseMessage = message.toLowerCase()
    
    if (greet.includes(lowerCaseMessage)) {
      this.actionProvider.greet()
    }
    if (breakFast.includes(lowerCaseMessage)){
        this.actionProvider.handleBreakfast()
    }
    if (dinner.includes(lowerCaseMessage)){
        this.actionProvider.handleDinner()
    }
    if(quickEasy.includes(lowerCaseMessage)){
      this.actionProvider.handleQuickEasy()
    }
    if(vegan.includes(lowerCaseMessage)){
      this.actionProvider.handleVegan()
    }
    if(healthy.includes(lowerCaseMessage)){
      this.actionProvider.handleHealthy()
    }
    if(desserts.includes(lowerCaseMessage)){
      this.actionProvider.handleDesserts()
    }

    }
  }


export default MessageParser