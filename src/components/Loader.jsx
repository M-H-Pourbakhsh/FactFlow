const Loader = () => {
  return (
    <div className="spinner">
      <img src={`${import.meta.env.BASE_URL}spinner.png`} alt="Loading..." />
    </div>
  )
}

export default Loader