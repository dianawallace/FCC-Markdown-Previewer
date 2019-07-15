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

`

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

