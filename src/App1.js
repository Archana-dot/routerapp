import React from 'react'
//  import StudentComponentList from './StudentComponentList'
import { useState,useEffect } from 'react'
function App1({ headers }) {

  return (
    <thead className="table-row">
      {
        headers.map((d) => <TableCell data={d} />)
      }
    </thead>
  )
}
const meta = [
  {
    key: 'id',
    text: 'ID',
    sort: true,
  },
  {
    key: 'name',
    text: 'Automobile Company',
    sort: true,
  },
  {
    key: 'age',
    text: 'Years Since Purchase',
    sort: true,
  },
  {
    key: 'color',
    text: 'Color',
    sort: true,
  },
]
function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  return (
    <tbody>
      {
        data.map((row) => (
          <tr className="table-row">
            {
              row.map((_, i) => <TableCell data={row.find(r => r.key === headerOrder[i])} />)
            }
          </tr>
        ))
      }
    </tbody>
  )
}
const data = [
  { name: 'Porsche', age: 2, color: 'Blue' },
  { name: 'BMW', age: 1, color: 'Grey' },
  { name: 'Renault', age: 2, color: 'Yellow' },
  { name: 'Volkswagen', age: 7, color: 'Matte Red' },
  { name: 'Porsche', age: 2, color: 'Silver Grey' },
  { name: 'Jaguar', age: 6, color: 'Electric Blue' },
  { name: 'Mistubishi', age: 4, color: 'Black' },
  { name: 'Toyota', age: 9, color: 'Copper' },
  { name: 'Honda', age: 12, color: 'Biege' },
].map((d, id) => ({ ...d, id }));
function TableCell ({ data }) {
  return (
    <td className="table-cell" onClick={data.sortFunc}>
      {data.text}
    </td>
  )
}
function Table({ normalizeData }) {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [tableData, setTableData] = useState([]);
 
  useEffect(() => {
    // normalize data
    setTableData(normalizeData(data), meta);
  }, []);
 
  return (
    <div className="container">
      <App1 headers={headerMeta} />
      <TableData data={tableData} meta={meta} />
    </div>
  );
 }
 function normalizeData(data) {
  return data.map(td => {
    const keys = Object.keys(td);
    return keys.map(key => ({ key, text: td[key] }));
  });
 }
 export default App1
 <div className="row" style={{ 'margin': "10px" }}>
                <div className="col-sm-12 btn btn-info">
                    Fetching of data
                 </div>
            </div>
            <table class="table" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">IMAGE_TITLE</th>
                        <th scope="col">IMAGE</th>
                    </tr>
                </thead>