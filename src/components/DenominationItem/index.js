// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, onUpdate} = props
  const {value} = denominationsDetails

  const onClickA = () => {
    onUpdate(value)
  }

  return (
    <li className="container">
      <button type="button" className="button-A" onClick={onClickA}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
