import { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export const DeleteFeedback = ({ deleteId }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://itp-project-newton-api.vercel.app/feedbacks/feedback/${deleteId}`)
            window.location.reload();
              
          } catch (error) {
            console.log(error);
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
                    <p>Are you sure you want to delete Feedback?</p>
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
