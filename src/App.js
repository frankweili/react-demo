import React, { useEffect} from 'react'
const App = (props) => {
    const [n, setN] = React.useState(0)
    const [m, setM] = React.useState(0)

    const y = () => { 
        setN(n+1)
    }
    const z = () => { 
        setM(m+1)
    }
    useEffect(() => { 
        console.log('第一次x渲染')
    }, [])// 模拟类组件中的componentdidmount，[]可以代表第一次。意思是第一次渲染的时候条用这个
    
    useEffect(() => {
        console.log('n更新')
    }, [n])
    /*模拟类数组的componnentdidUpdate，
    [n]意思是n数据变化的时候，如果有多个数据[m,c,n,d],
    如果只有一个数据，可以去掉[],直接写n
    */
    useEffect(() => { 
        console.log('第一次渲染')
        return () => { 
console.log('组件要死了')
        }
    })//模拟类组件中componentWILLUnmount，需要函数里面在函数
    return (
        <div>
            {n}
            <button onClick={y}>
                +1
            </button>
            {m}
            <button onClick={z}>
                +1
            </button>
        </div>
    )
}
export default App

