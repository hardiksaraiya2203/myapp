import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const EMSForm = (props) => {

    const [form, setForm] = React.useState({
        email: "",
        firstName: "",
        lastName: "",
    });
    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        let p = [...props.data];
                        p.push(form);
                        props.setData(p)

                        props.handleClose();
                    },
                }}
            >
                <DialogTitle>Login Form</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide Details
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleInput}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="firstName"
                        name="firstName"
                        label="firstName"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInput}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="lastName"
                        name="lastName"
                        label="lastName"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default EMSForm
