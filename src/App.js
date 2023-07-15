import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./Components/Product";
import Pagination from "./Components/Pagination";
import UserData from "./Components/UserData";
import Box from "./Components/Box";
import Search from "./Components/Search";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  // Sorting

  const handleSortByField = (field) => {
    let sortedData;
    if (field === "id") {
      sortedData = [...usersData].sort((a, b) => a.id - b.id);
    } else {
      sortedData = [...usersData].sort((a, b) => {
        if (a[field] > b[field]) {
          return 1;
        } else if (a[field] < b[field]) {
          return -1;
        }
        return 0;
      });
    }
    setUsersData(sortedData);
    setCurrentPage(1); // Reset currentPage when performing a sort
  };

  const handleSortByOption = (option) => {
    setSelectedSortOption(option);
    handleSortByField(option);
  };

  // Users Data
  const fetchData = async () => {
    try {
      setSearch("");
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data.users);
      setUsersData(data.users);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Pagination

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = usersData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(usersData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < numbers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Searching Function

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${search}`
      );
      const data = await response.json();
      console.log(data);
      setUsersData(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box handleSortByOption={handleSortByOption} />
                <Search
                  search={search}
                  setSearch={setSearch}
                  handleSearch={handleSearch}
                  fetchData={fetchData}
                />

                <UserData records={records} />

                <div>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={npage}
                    prePage={prePage}
                    nextPage={nextPage}
                    changePage={changePage}
                  />
                </div>
              </>
            }
          />

          <Route path="/Product" element={<Product />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
