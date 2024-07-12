import { useState } from "react"
import categories from "../assets/categories"
import supabase from "../assets/supabase";

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const NewFactForm = ({setFacts, setShowForm}) => {
  const [text, setInputText] = useState('');
  const [source, setInputSource] = useState('');
  const [category, setSelectCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const changeInputText = (e) => setInputText(e.target.value)
  const changeInputSource = (e) => setInputSource(e.target.value)
  const changeSelectCategory = (e) => setSelectCategory(e.target.value)
  const textLength = text.length

  async function handleSubmit(e) {
    e.preventDefault();
    
    if(text && isValidHttpUrl(source) && category && textLength <= 200) {

      setIsUploading(true);
      const { data: newFact, error } = await supabase
      .from('facts')
      .insert([{text,source,category}])
      .select();
      setIsUploading(false);
      

      if(!error) setFacts((facts) => [newFact[0], ...facts]);
      const resetInputValues = () => {
        setInputText('');
        setInputSource('');
        setSelectCategory('');
      }
      resetInputValues();

      setShowForm(false);
    } 
  }
  return (
    <form className="fact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Share a fact with the world..." value={text} onChange={changeInputText} disabled={isUploading} />
        <span>{200 - textLength}</span>
        <input type="text" placeholder={"Your source..."} value={source} onChange={changeInputSource} disabled={isUploading} />
        <select title="category" value={category} onChange={changeSelectCategory} disabled={isUploading}>
          <option value="">Choose category:</option>
          {categories.map((cat) => <option key={cat.id} value={cat.name}>{cat.name.toUpperCase()}</option>)}
        </select>
        <button type="submit" className="btn btn-large" disabled={isUploading}>Post</button>
      </form>
  )
}

export default NewFactForm