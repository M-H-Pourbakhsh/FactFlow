
const MainHeader = ({onInputClick, showForm}) => {
  return (
      <header className="header">
          <div className="logo">
            <img
              src="logo.svg"
              height="98"
              width="98"
              alt="FactFlow Logo"
            />
            <h1>FactFlow</h1>
          </div>
        <button id="factBtn" className="btn btn-large fact-btn" onClick={onInputClick}>{showForm ? 'close' : 'share a fact'}</button>
      </header>
  )
}

export default MainHeader