import { CiSearch } from "react-icons/ci";

const Search = (props: any) => {

    const { setSearchName } = props;

    return (
        <div className="max-w-md">   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch className="h-5 w-5 text-black-400" />
                </div>
                <input 
                    type="search" 
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border 
                        border-gray-300 rounded-lg bg-gray-300" 
                    placeholder="Search" 
                    onChange={e => setSearchName(e.target.value)}
                />
            </div>
        </div>

    )
}

export default Search;