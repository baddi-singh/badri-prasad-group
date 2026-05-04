import React, { useState } from 'react';

// Ye ek Universal Table hai. Isko bas columns aur data pass karna hai.
const AdminTable = ({ columns, data, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default 10 rows

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleLimitChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Limit change hone par Page 1 par wapas jao
  };

  return (
    <div className="w-full bg-[#111111] p-4 rounded-xl border border-[#333]">
      
      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-white border-collapse">
          <thead>
            <tr className="border-b border-[#444] text-[#d4af37]">
              {columns.map((col, index) => (
                <th key={index} className="p-3 font-semibold">{col.header}</th>
              ))}
              {(onEdit || onDelete) && <th className="p-3 font-semibold text-right">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="p-3 text-sm text-gray-300">
                      {row[col.accessor]}
                    </td>
                  ))}
                  {/* Action Buttons */}
                  {(onEdit || onDelete) && (
                    <td className="p-3 text-right">
                      {onEdit && <button onClick={() => onEdit(row)} className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>}
                      {onDelete && <button onClick={() => onDelete(row._id)} className="text-red-500 hover:text-red-400">Delete</button>}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="p-5 text-center text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls (Tabhi dikhega jab data 10 se zyada ho) */}
      {data.length > 10 && (
        <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>Show:</span>
            <select 
              value={itemsPerPage} 
              onChange={handleLimitChange}
              className="bg-[#222] text-white border border-[#444] rounded px-2 py-1 outline-none"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-[#d4af37] hover:bg-[#222]'}`}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'text-[#d4af37] hover:bg-[#222]'}`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;