import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import LoadingButton from "@mui/lab/LoadingButton";
import BasicModal from '../BasicModal/BasicModal';
import SearchBar from '../SearchBar/SearchBar';


const DataTable = () => {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);


  async function fetchData() {
    const response = await fetch(`https://randomuser.me/api/?results=10&seed=abc`)
    const dataBase = await response.json()
    setUsers(dataBase.results)
    console.log(dataBase.results);
    setLoading(false)
  };

  useEffect(() => {
    fetchData();

  }
    , [])

  async function loadMore() {
    setLoading(true);
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=100&seed=abc`)
    const dataBase = await response.json()
    setUsers([...users, ...dataBase.results])
    setLoading(false);
  }


  return (
    <>
     <SearchBar/>
      <TableContainer sx={{ marginTop: "2rem" }} component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user) => {
                return (
                  <TableRow key={user.id.value}>
                    <TableCell>{user.name.first}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.dob.date.slice(0, 10)}</TableCell>
                    <TableCell>
                      <BasicModal 
                        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                        picture={user.picture.large}
                        email={user.email}
                        gender={user.gender}
                        birth={user.dob.date.slice(0, 10)}
                        phone={user.phone}
                        nationality={user.nat}
                        address={`${user.location.street.name}, ${user.location.street.number}, ${user.city} ${user.country}`}
                        id={user.id.value}
                      />
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: '1.5rem', marginBottom: "1.5rem", display: 'flex', justifyContent: 'center' }}>
        <LoadingButton
          onClick={() => {
            loadMore();
            setPage(page + 1)
          }}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          Fetch data
        </LoadingButton>
      </Box>
    </>
  )
}

export default DataTable;
