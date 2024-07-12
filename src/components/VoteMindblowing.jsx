
const VoteMindblowing = ({fact, onVoteClick, onClickDisable}) => {
  return (
    <button onClick={onVoteClick} disabled={onClickDisable}>🤯 {fact.voteMindblowing}</button>
  )
}

export default VoteMindblowing