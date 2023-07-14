import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./Components/Product";
import NavBar from "./NavBar";
import Pagination from "./Components/Pagination";
import UserData from "./Components/UserData";
import Box from "./Components/Box";

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

   // Product Sorting
  

  // Pagination

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = usersData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(usersData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function setting(e) {
    setSearch(e.target.value);
    console.log(search);
  }

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

  //Mapping User Data

  const userData = records.map((user) => (
    <UserData key={user.id} user={user} />
  ));

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
            path="/UserData"
            element={
              <>
               <Box handleSortByOption={handleSortByOption} />
                <div className="search-container">
                  <input onChange={setting} value={search} />
                  <button className="button-25" onClick={handleSearch}>
                    Search
                  </button>
                  <button className="button-25" onClick={fetchData}>
                    Reset
                  </button>{" "}
                </div>

                <div className="table" id="results">
                  <div className="theader">
                    <div
                      className="table_header"
                     
                    >
                      ID
                    </div>
                    <div
                      className="table_header"
                  
                    >
                      FirstName
                    </div>
                    <div
                      className="table_header"
                    
                    >
                      LastName
                    </div>
                    <div className="table_header">MaidenName</div>
                    <div
                      className="table_header"
                   
                    >
                      Age
                    </div>{" "}
                    <div className="table_header">Gender</div>
                    <div className="table_header">Email</div>
                    <div className="table_header">Phone</div>{" "}
                    <div
                      className="table_header"
                     
                    >
                      UserName
                    </div>
                    <div className="table_header">Password</div>
                    <div className="table_header">BirthDate</div>
                    <div className="table_header">Image</div>
                    <div className="table_header">BloodGroup</div>
                    <div className="table_header">Height</div>
                    <div className="table_header">Weight</div>
                    <div className="table_header">EyeColor</div>
                    <div className="table_header">Hair</div>
                    <div className="table_header">Domain</div>
                    <div className="table_header">IP</div>
                    <div className="table_header">Address</div>
                    <div className="table_header">MacAddress</div>
                    <div className="table_header">University</div>
                    <div className="table_header">Bank</div>
                    <div className="table_header">Ein</div>
                    <div className="table_header">Sin</div>
                    <div className="table_header">UserAgent</div>
                  </div>
                  {usersData.length > 0 && userData}
                </div>

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
          {/* <Route path="/UserData" element={<UserData />} /> */}
          <Route path="/Product" element={<Product />} />
        </Routes>
        
      </>
    </Router>
  );
};

export default App;
