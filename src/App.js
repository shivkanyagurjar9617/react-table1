import logo from './logo.svg';
import './App.css';
import { useTable } from 'react-table/dist/react-table.development';
import React, { useMemo } from 'react';

function App() {
  //1. state 
 const data = React.useMemo(()=>[
    {
      
      col1: 'Shivaknya',
      col2: 'gurjar',
      col3: 'kherkheda',
      col4: '7803842785'
    },
    {
      col1: 'Kiran',
      col2: 'rathor',
      col3: 'parda',
      col4: '3454432244'
    },
    {
      col1: 'Anjali',
      col2: 'rathor',
      col3: 'parda',
      col4: '3454433435'
    },
    {
      col1: 'Ritik',
      col2: 'patidar',
      col3: 'jiran',
      col4: '65555355'
    },
    {
      col1: 'Aayushi',
      col2: 'Sharma',
      col3: 'neemuch',
      col4: '535655655'
    },
    {
      col1: 'Shan',
      col2: 'gurjar',
      col3: 'kherkheda',
      col4: '7440239233'
    },
    {
      col1: 'Ravina',
      col2: 'gurjar',
      col3: 'kherkheda',
      col4: '535655655'
    },
  ],[]); 
  const columns = React.useMemo(()=>[
    {
      
      Header: 'name',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'surname',
      accessor: 'col2',
    },
    {
      Header: 'Address',
      accessor: 'col3',
    },
    {
      Header: 'contect',
      accessor: 'col4',
    },
  ],[]);
  const tableInstance = useTable({columns, data})
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = tableInstance 
  //2. function defination
  //3. return statement
  return (
    <div className="App">
       <table {...getTableProps()} style={{ border: 'solid 5px black' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: 'solid 5px red',
                        background: 'orange',
                        color: 'blue',
                        fontWeight: 'bold',
                      }}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
      </table>  
    </div>
  );
}

export default App;
