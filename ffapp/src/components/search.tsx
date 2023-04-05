
interface Props {
  value?:string;
  onSearch: (value:string) => void;
}

export const Search = ({ value, onSearch }:Props) => {

  return (
    <>
      <div className="search-container my-3">
        <input 
          type="text" 
          onChange={ (e) => onSearch(e.target.value) }
          className="form-control"  
          placeholder="Search"/>
      </div>
    </>
  )
}