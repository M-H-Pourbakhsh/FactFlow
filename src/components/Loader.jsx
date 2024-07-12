const Loader = () => {
  return (
    <div className="spinner">
      <img src={`${import.meta.env.BASE_URL}spinner.svg`} alt="Loading..." />
    </div>
  )
}

export default Loader