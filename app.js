const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org) 

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decoration

*Italic*

**bold**

***bold and italic***

### Images

![alt text](https://comps.canstockphoto.ie/wolfillustration-drawings_csp15303793.jpg 'Beautiful Wolf Painting')

### BlockQuote

> In the midst of winter, I have found within me an infinite summer.

### Code 

\`npm install create-react-app -g\`

\`\`\` 
function add(a, b) {
  return a + b;
}
\`\`\`
`

marked.setOptions({
    breaks: true
})
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            markdown: initialMarkdown
        }
    }

    handleChange = e => this.setState({ markdown: e.target.value})

    render() {
        return (
            <div>
                <div>Markdown Previewer</div>
                <div className='container'>
                    <div className='left'>
                    
                        <textarea id='editor' value={this.state.markdown} onChange={this.handleChange}/>
                    </div>
                    <div className='right'>
                        <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

