
const FactSource = ({fact}) => {
  return (
    <a rel="noopener" className="source" href={fact.source} target="_blank">
      (Source)
    </a>
  )
}

export default FactSource