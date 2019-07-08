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
    render() {
        return (
            <div>
                <div>Markdown Previewer</div>
                <div className='container'>
                    <div className='left'>
                    </div>
                        <textarea id='editor'/>
                    <div className='right'>
                        <textarea id='preview'/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

