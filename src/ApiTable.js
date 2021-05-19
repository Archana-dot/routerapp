import React, { useState, useEffect } from "react";

function ApiTable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const apiURL =
      " https://hplussport.com/api/products/order/price/sorc/qty/100";
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
          data=data.map((item,index)=>{
              item.range='archana'
          })
        console.log("data", data);
        setData(data);
        setIsLoading(false);
      });
  }, []);
  function sort(e) {
    var list = Object.assign([], data);
    if (e.target.name === "orderid") {
      if (e.target.value === "Ascending") {
        list.sort((a, b) => a.id - b.id);
      } else {
        list.sort((a, b) => b.id - a.id);
      }
    } else if (e.target.name === "name") {
      if (e.target.value === "Ascending") {
        list.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        list.sort((a, b) => b.name.localeCompare(a.name));
      }
    } else if (e.target.name === "description") {
      if (e.target.value === "Ascending") {
        list.sort((a, b) => a.description.localeCompare(b.description));
      } else {
        list.sort((a, b) => b.description.localeCompare(a.description));
      }
    } else {
      if (e.target.value === "Ascending") {
        list.sort((a, b) => a.price - b.price);
      } else {
        list.sort((a, b) => b.price - a.price);
      }
    }
    setData(list);
  }
  return (
    <>
      <div className="product">
        <table id="data">
          <thead className="thead">
            <th>
              Order ID
              <select name="orderid" onChange={sort}>
                <option value="" disabled selected hidden>
                  sort
                </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </th>
            <th>
              Name
              <select name="name" onChange={sort}>
                <option value="" disabled selected hidden>
                  sort
                </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </th>
            <th>
              Description
              <br />
              <select name="description" onChange={sort}>
                <option value="" disabled selected hidden>
                  sort
                </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </th>
            <th>
              Price
              <select name="price" onChange={sort}>
                <option value="" disabled selected hidden>
                  sort
                </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </th>
            <th>Range</th>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                     {item.range}
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApiTable;
