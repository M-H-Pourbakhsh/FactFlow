import FactItem from "./FactItem";
const FactsList = ({facts, setFacts}) => {
  if(facts.length === 0)
    return (
      <p>There are no facts in this category. Create one if you like✌️</p>
  )
  return (
        <section className="facts-container">
          <ul className="facts-list">
           {facts.map((fact) => (
              <FactItem key={fact.id} fact={fact} setFacts={setFacts} />
            ))}
          </ul>
        </section>
  )
}

export default FactsList