
const VoteFalse = ({fact, onVoteClick, onClickDisable}) => {
  return (
    <button onClick={onVoteClick} disabled={onClickDisable}>⛔️ {fact.voteFalse}</button>
  )
}

export default VoteFalse