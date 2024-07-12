import { useEffect, useState } from 'react'
import MainHeader from './components/MainHeader'
import NewFactForm from './components/NewFactForm'
import CategoryFilter from './components/CategoryFilter'
import FactsList from './components/FactsList'
import supabase from './assets/supabase' 
import Loader from './components/Loader'
function App() {
const [showForm, setShowForm] = useState(false);
const [facts, setFacts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [specifiedCategory, setSpecifiedCategory] = useState('All');
// const [error, setError] = useState(true);

// function handleCategoryClick(){
//   setSpecifiedCategory(specifiedCategory);
// }

useEffect(() => {
  async function getFacts(){ 
    setIsLoading(true);
    let query = supabase.from('facts').select('*');  
    query = (specifiedCategory !== 'All') ? query.eq('category',specifiedCategory) : query;
    const { data: facts, error } = await query
    .order('voteInteresting', {ascending: false})
    .limit(1000);
    if(!error) {
      // setError(false);
      setFacts(facts);
    } 
    // else setError(true);
    setIsLoading(false); 
  }
  getFacts();
}, [specifiedCategory]);

function handleInputClick() {
  setShowForm((show) => !show);
}

  return (
    <div className='container'>
      <MainHeader showForm={showForm} onInputClick={handleInputClick} />
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}
      <main className='main'>
        <CategoryFilter specifiedCategory={specifiedCategory} setSpecifiedCategory={setSpecifiedCategory} />
        {isLoading ? <Loader /> : <FactsList facts={facts} setFacts={setFacts} />}
        {/* {error ? <div>There is some problem loading data</div> : <FactsList facts={facts} /> } */}
      </main>
    </div>
  )
}

export default App
