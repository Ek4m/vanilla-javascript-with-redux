function counter(currentState,action){
    let nextState = {
        count:currentState.count
    }
    switch(action.type){
        case 'ADD':
nextState.count = currentState.count + 1
return nextState
case 'MINUS':
    nextState.count = currentState.count - 1
    return nextState
    case 'RESET':
        nextState.count = 0
        return nextState
        default:
            console.log('Default')
            return currentState
    }
}
let state = {count:0}
const counterEl = document.getElementById('counter')
const store = Redux.createStore(counter,state)

function render(){
    let val = store.getState().count
    counterEl.innerHTML = val
}

store.subscribe(render)
document.getElementById('add').addEventListener('click',() => {
    store.dispatch({type:"ADD"})
})
document.getElementById('minus').addEventListener('click',() => {
    store.dispatch({type:"MINUS"})
})
document.getElementById('reset').addEventListener('click',() => {
    store.dispatch({type:"RESET"})
})


// {type:"ADD"}
