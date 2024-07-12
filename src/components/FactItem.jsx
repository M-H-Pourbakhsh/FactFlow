import Fact from "./Fact";
import CategoryOption from "./CategoryOption";
import VoteButtons from "./VoteButtons";
import FactSource from "./FactSource";
import supabase from "../assets/supabase";
import { useState } from "react";
import DisputedBadge from "./DisputedBadge";
const FactItem = ({fact, setFacts}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed = fact.voteFalse > fact.voteInteresting + fact.voteMindblowing 
  async function handleVote(columnName){
    setIsUpdating(true);
    const {data: updatedFact, error} = await supabase
    .from('facts')
    .update({[columnName]: fact[columnName] + 1})
    .eq('id', fact.id)
    .select();
    setIsUpdating(false);
    console.log(updatedFact);
    if(!error) setFacts((facts) => facts.map((f) => f.id === fact.id ? updatedFact[0] : f))
  }
  return (
    <li className="fact">
      <Fact fact={fact} />
      {isDisputed ? <DisputedBadge /> : null}
      <FactSource fact={fact} />
      <CategoryOption fact={fact} />
      <VoteButtons handleVote={handleVote} fact={fact} isUpdating={isUpdating} />
    </li>
  )
}

export default FactItem