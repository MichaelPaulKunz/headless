
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

  const citations = [citeOne, citeTwo, citeThree];
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