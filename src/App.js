import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            n:1
        }
    }
    onClick = () => {
        this.setState(state => { n: this.state.n += 1 })
        this.setState(state=>{n:this.state.n-=1})
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState === this.state) {
            return false
        } else {
            return true
        }
    }
    render() {
        console.log('更新')
        return (
            <div>
                <div> App 新世界</div>
                {this.state.n}
                <button onClick={this.onClick}>+1</button>
            </div>
        )
    }
    
}
export default App