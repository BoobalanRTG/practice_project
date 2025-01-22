import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Download } from "lucide-react";

const Dashboard = () => {
  const [card, setCards] = useState("UserList");
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleCardClick = (item) => () => {
    setCards(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl;
      switch (card) {
        case "UserList":
          apiUrl = "https://jsonplaceholder.typicode.com/users";
          break;
        case "DeviceList":
          apiUrl = "https://jsonplaceholder.typicode.com/comments";
          break;
        case "TankList":
          apiUrl = "https://fakestoreapi.com/products";
          break;
        case "MotorList":
          apiUrl = "https://jsonplaceholder.typicode.com/photos";
          break;
        default:
          return;
      }

      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.length > 0) {
          const cols = Object.keys(data[0])
            .filter((key) => key !== "address" && key !== "company" && key !== "rating")
            .map((key) => ({ Header: key, accessor: key }));
          setColumns(cols);
        }

        setRowData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [card]);

  const cards = ["UserList", "DeviceList", "TankList", "MotorList"];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data: rowData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleExport = (type) => {
    const headers = columns.map((col) => col.Header);
    const data = rowData.map((row) => headers.map((key) => row[key]));

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    if (type === "csv") {
      XLSX.writeFile(workbook, "data.csv");
    } else if (type === "excel") {
      XLSX.writeFile(workbook, "data.xlsx");
    } else if (type === "pdf") {
      alert("PDF export is not implemented in this example");
    }
  };

  return (
    <>
      <div className="bg-blue-200 rounded-md px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-9">
          {cards.map((item) => (
            <div
              key={item}
              onClick={handleCardClick(item)}
              className={`flex items-center justify-center rounded-lg h-20 text-xl md:text-2xl font-medium text-center border border-gray-200 transform hover:scale-105 cursor-pointer shadow-md transition-all duration-500 ease-in-out 
                bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-purple-100 hover:to-pink-100 text-gray-800
                ${
                  card === item
                    ? "bg-gradient-to-r from-purple-200 to-pink-200 text-gray-900 shadow-xl shadow-pink-300 ring-4 ring-pink-400"
                    : ""
                }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="p-5">
          <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-auto"
            />
            <div className="flex gap-4">
              <button
                onClick={() => handleExport("csv")}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
              >
                <span>CSV</span>
                <Download size={16} />
              </button>
              <button
                onClick={() => handleExport("excel")}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md"
              >
                <span>Excel</span>
                <Download size={16} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table
              {...getTableProps()}
              className="w-full border-collapse border border-gray-300 text-sm text-left"
            >
              <thead className="bg-gray-100">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="border border-gray-300 px-4 py-2 font-medium cursor-pointer"
                      >
                        {column.render("Header")}
                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-50">
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="border border-gray-300 px-4 py-2"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Previous
            </button>
            <span>
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
