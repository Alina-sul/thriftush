import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import ItemDetails from "../ItemDetails";

function FullDialog({open, setOpen}) {

    const handleClick = () => setOpen(false);

    return (
        <Dialog fullScreen open={open} onClick={handleClick}>
            <DialogContent>
                <ItemDetails/>
            </DialogContent>
        </Dialog>
    );
}

FullDialog.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
};

export default FullDialog;
