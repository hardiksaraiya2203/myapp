import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function MyData() {

const [rows,setrow]= React.useState([]);

React.useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/photos").then(y=>y.json())
    .then(y=>{
        setrow(y);
    })
})

    const columns = [
    { field: 'albumId', width: 200 }, 
    { field: 'id' },
    { field: 'title' },
    { field: 'url' }


]    

  return (
    <div style={{ height: 250, width: '100%' }}>
    <DataGrid
      columns={columns}
      rows={rows}
    />
  </div>
  )
}