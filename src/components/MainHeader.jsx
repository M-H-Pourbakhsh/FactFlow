
const MainHeader = ({onInputClick, showForm}) => {
  return (
    <header className="header">
          <div className="logo">
            <img
              src="logo.png"
              height="68"
              width="68"
              alt="Today I Learned Logo"
            />
            <h1>FactFlow</h1>
          </div>
        <button id="factBtn" className="btn btn-large fact-btn" onClick={onInputClick}>{showForm ? 'close' : 'share a fact'}</button>
      </header>
  )
}

export default MainHeader