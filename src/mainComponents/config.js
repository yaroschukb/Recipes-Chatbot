import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import CookingOptions from '../components/CookingOptions/CookingOptions'
import BotAvatar from './../components/BotAvatar/BotAvatar'
import LinkList from './../components/ListLink/LinkList'
import {breackFast, dinner, vegan, healthy, quickEasy, desserts} from '../components/options/widgetsOptions'



const config = { 
  botName: "cookBot",
  initialMessages: [createChatBotMessage("Hey, what are we going to cook today?",
   {widget: "CookingOptions"}),
],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,  
  },
  widgets: [
    {
      widgetName: "CookingOptions",
     widgetFunc: (props) => <CookingOptions {...props} />,
    },
    {
      widgetName: "Breakfast & Brunch",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {options: breackFast},
    },
    {
      widgetName: "Dinner",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {options:dinner},
    },
    {
      widgetName: "Vegan",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {options:vegan},
    },
    {
      widgetName: "Healthy",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {options:healthy},
    },
    {
      widgetName: "Quick & Easy",
      widgetFunc: (props) => <LinkList {...props} />,
      props:{options:quickEasy},
    },
    {
      widgetName: "Desserts",
      widgetFunc: (props) => <LinkList {...props} />,
      props:{options: desserts},
    },
],
    }


export default config