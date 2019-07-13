const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6


`

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            markdown: initialMarkdown
        }
    }

    render() {
        return (
            <div>
                <div>Markdown Previewer</div>
                <div className='container'>
                    <div className='left'>
                    
                        <textarea id='editor'/>
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

