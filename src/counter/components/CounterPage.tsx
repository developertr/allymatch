import * as React from 'react'
import {observer, inject} from 'mobx-react'
import CounterStore from '../counterStore';


@inject('counterStore')
@observer
export default class CounterPage extends React.Component<{counterStore:CounterStore},{}> {
  render() {
    let {counterStore} = this.props

    return (
      <div >
        <button onClick={() => counterStore.increment()}>+</button>
        <span onDoubleClick={() => counterStore.reset()} >
          {counterStore.counter}
        </span>
        <button onClick={() => counterStore.decrement()}>-</button>
      </div>
    )
  }
}

