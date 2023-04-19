
interface Props {
  onSearch: (strSearch:string) => void;
}

export const Search = ({ onSearch }:Props) => {

  return (
    <>
      <div className="search-container my-3">
        <input 
          type="text" 
          className="form-control"  
          placeholder="Search"
          onChange={ (e) => onSearch(e.target.value) } />
      </div>
    </>
  )
}