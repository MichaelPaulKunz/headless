class Cited extends React.Component {
  constructor(props) { //don't destructure in constructor
    super(props);
    this.state = {
    };
    this.url = `${this.props.cite.url}`;
    console.log(this.url);
  }
  render() {
    return (
      <div>
        <li><a href={this.url}>{this.props.cite.title}</a><i>{` by ${this.props.cite.author}`}</i></li>
      </div>
    );
  }
}

const Citations = ({ cites }) => (
  <ul>
    {cites.map((cite, index) => <Cited cite={cite} index={index} />)}
  </ul>
);

function App(){
  const citeOne = {
    title: 'Headless Chrome: an answer to server-side rendering JS sites',
    author: 'Eric Bidelman',
    url: 'https://developers.google.com/web/tools/puppeteer/articles/ssr'
  }
  const citeTwo = {
    title:'Headless Chrome: DevOps Love It, So Do Hackers, Here’s Why',
    author:'Dima Bekerman',
    url : `https://www.imperva.com/blog/headless-chrome-devops-love-it-so-do-hackers-heres-why/`
  }
  const citeThree = {
    title: "Getting started with Puppeteer & Headless chrome in NodeJS",
    author: "Aditya Joshi",
    url: "https://adityaajoshi.medium.com/getting-started-with-puppeteer-headless-chrome-in-nodejs-4826595e3366"
  }
  const citeFour = {
    title: 'How to create a REST API with Express.js in Node.js',
    author: 'Robin Wieruch',
    url: 'https://www.robinwieruch.de/node-express-server-rest-api'
  }
  const citeFive = {
    title: 'Setting up an ES6 Project using Babel and webpack',
    author: 'Chris Perry',
    url: 'https://www.sitepoint.com/es6-babel-webpack/'
  }
  const citeSix = {
    title: 'Automated Testing with Headless Chrome',
    author: 'Eric Bidelman',
    url: 'https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai'
  }
  const citeSeven = {
    title: 'The power of Headless Chrome and browser automation',
    author: 'Eric Bidelman',
    url: 'https://www.youtube.com/watch?v=lhZOFUY1weo&t=4s&ab_channel=GoogleChromeDevelopers'
  }
  const citeEight = {
    title: "The Beginner's Guide to Chrome Headless",
    author: 'Marie Prkopets',
    url: 'https://usefyi.com/chrome-headless/'
  }
  const citeNine = {
    title: 'How to run a headless Chrome browser in Selenium WebDriver',
    author: 'Anton Smirnov',
    url: 'https://itnext.io/how-to-run-a-headless-chrome-browser-in-selenium-webdriver-c5521bc12bf0'
  }
  const citations = [citeOne, citeTwo, citeThree, citeFour, citeFive, citeSix, citeSeven, citeEight, citeNine];
  return(
    <div>
      <h1>Works Cited: </h1>
      {/*create instance of GroceryList component*/}
      <Citations cites={citations}/>
    </div>
  )
};
//This renders the PopulateList component to the app id
ReactDOM.render(<App />, document.getElementById('app'));