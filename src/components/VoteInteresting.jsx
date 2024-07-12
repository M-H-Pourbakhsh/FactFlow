
const VoteInteresting = ({fact, onVoteClick, onClickDisable}) => {
  return (
    <button onClick={onVoteClick} disabled={onClickDisable}>👍 {fact.voteInteresting}</button>
  )
}

export default VoteInteresting