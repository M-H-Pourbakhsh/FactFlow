import VoteInteresting from "./VoteInteresting"
import VoteMindblowing from "./VoteMindblowing"
import VoteFalse from "./VoteFalse"
const VoteButtons = ({fact, handleVote, isUpdating}) => {
  return (
    <div className="vote-buttons">
       <VoteInteresting onVoteClick={() => handleVote("voteInteresting")} fact={fact} onClickDisable={isUpdating} />
       <VoteMindblowing onVoteClick={() => handleVote("voteMindblowing")} fact={fact} onClickDisable={isUpdating} />
       <VoteFalse onVoteClick={() => handleVote("voteFalse")} fact={fact} onClickDisable={isUpdating} />
    </div>
  )
}

export default VoteButtons