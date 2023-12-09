// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onUpdate = value => {
    this.setState(prevsState => ({balance: prevsState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Wiliams'
    const intial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="cash-name-container">
            <div className="name-container">
              <p className="letter-heading">{intial}</p>
            </div>
            <h1 className="sarah-heading">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-paragraph">Your Balance</p>
            <div className="cash-container">
              <p className="heading">{balance}</p>
              <p className="rupp_paragraph">In Rupees</p>
            </div>
          </div>
          <p className="withDraw-heading">Withdraw</p>
          <p className="withdraw-paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="num-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationsDetails={eachItem}
                onUpdate={this.onUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
