import React from 'react'
import portfolio from '../assets/portfolio-image.png'
import weather from '../assets/weather.png'
import todo from '../assets/todo.png'
import gesturewar from '../assets/gesturewar.png'
import tipcalculator from '../assets/tipcalculator.png'

const data = [{
  title: 'Portfolio',
  image: portfolio,
  description: 'Discover my skills and experience as a web developer through my portfolio, showcasing my best projects and accomplishments',
  stack: 'ReactJS, HTML 5, CSS 3, Javascript',
  live: 'https://rohit968.github.io/',
  github: 'https://github.com/rohit968/portfolio'
},
{
  title: 'To-do list ',
  image: todo,
  description: 'Easy to use Todo App that allows you to filter all important, completed and other tasks.',
  stack: 'ReactJS, HTML 5, CSS 3, Javascript',
  live: 'https://tasktrek.netlify.app',
  github: 'https://github.com/rohit968/tasktrek'
},
{
  title: 'Weather',
  image: weather,
  description: "'Easy to use App to get detailed info for a week at any location. Just type in the address you're interested in and find out what the weather holds for you tomorrow.",
  stack: 'HTML 5, CSS 3, Javascript',
  live: 'thedailyweather.netlify.app',
  github: 'https://github.com/rohit968/weather-app'

},
{
  title: 'TipWise',
  image: tipcalculator,
  description: 'Quickly and accurately calculate tips for your bill with our easy-to-use tip calculator.',
  stack: 'HTML 5, CSS 3, Javascript',
  live: 'https://tipwise.netlify.app',
  github: 'https://github.com/rohit968/tipCalculator'
},
{
  title: 'Rock, Paper, Scissor',
  image: gesturewar,
  description: 'Test your strategy and luck with our classic game of rock, paper, scissors - challenge the computer!',
  stack: 'HTML 5, CSS 3, Javascript',
  live: 'https://gesturewar.netlify.app/',
  github: 'https://github.com/rohit968/rock-paper-scissor'
}
]

export default data;