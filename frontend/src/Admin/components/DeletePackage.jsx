import { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const DeletePackage = ({ packageId }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            const response = await axios.delete(`http://localhost:3000/package/packages/${packageId}`);
            alert(response.data.message);
            setLoading(false);
            setShowConfirmModal(false); 
        } catch (error) {
            console.error('Error deleting package:', error);
            alert('Error deleting package');
            setLoading(false);
        }
    };

    return (
        <>
            <Button variant="outlined" color="error" onClick={() => setShowConfirmModal(true)} disabled={loading}>
                {loading ? 'Deleting...' : 'Delete'}
            </Button>
            <Dialog open={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete this package?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowConfirmModal(false)} color="primary" disabled={loading}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error" variant="contained" disabled={loading}>
                        {loading ? 'Deleting...' : 'Confirm Delete'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeletePackage;
