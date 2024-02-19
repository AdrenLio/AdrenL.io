import { useState } from 'react';
import useSearchModal from "@/app/hooks/useSearchModal";
import { BiSearch } from 'react-icons/bi';

export default function SearchComponent({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };
  const SearchModalHook = useSearchModal();

  return (
    <>
     <div className="flex items-center border rounded-2xl overflow-hidden">
      {/* Advanced Filters Button */}
      <button className="px-3 py-5 bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm " onClick={SearchModalHook.onOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Search Input */}
      <input
        type="text"
        className="px-2 py-2 w-full"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)} 
      />
      {/* Search Button */}
      <button className="flex items-center justify-center px-2" onClick={handleSearch}>
      <div  className="w-full md:w-auto py-2 rounded-full hover:shadow-sm transition cursor-pointer">
           <div className="p-2 bg-rose-500 rounded-full text-white">
                       <BiSearch size={18} />
                   </div>
       </div>
      </button>
    
    </div>

   
    </>
  );
}
