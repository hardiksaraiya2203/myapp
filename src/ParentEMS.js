import React from 'react'
import EMSForm from './EMSForm'
import EMSDisplay from './EMSDisplay'
import { Button } from '@mui/material';

const ParentEMS = () => {

    const [open, setOpen] = React.useState(false);

    const [data, setData] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>


            <EMSForm open={open} handleClose={handleClose}
            
            data={data}
            
            setData={setData}
            />
            <EMSDisplay data={data}/>

        </div>
    )
}

export default ParentEMS
