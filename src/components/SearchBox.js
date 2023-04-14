// import React from "react";

// const SearchBox = () => {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search here"
//         value={searchQuery}
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setShowSuggestions(false)}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="rounded-lg border-solid border-2 w-96 border-gray-500 mt-8 p-1  border-r-1 border-l-5 rounded-l-xl rounded-r-none"
//       />
//       <button
//         className="border-solid border-2 border-gray-500 border-r-1 border-l-0 p-1  rounded-r-xl rounded-l-none"
//         onClick={() => {
//           const data = filterSearch(searchQuery);
//         }}
//       >
//         Search
//       </button>

//       {showSuggestions && (
//         <div className="fixed p-1 m-1 bg-slate-50 w-[27rem] shadow-lg border rounded-lg">
//           <ul>
//             {suggestions &&
//               suggestions.map((s) => {
//                 return <li>🔍 {s}</li>;
//               })}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBox;
