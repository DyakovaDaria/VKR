import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk для получения списка мероприятий
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
//   const response = await axios.get('/api/events/all'); 
//   return response.data;
return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Dance Workshop', date: '2024-04-25' },
        { id: 2, name: 'Tango Night', date: '2024-05-05' },
        { id: 3, name: 'Salsa Party', date: '2024-06-15' }
      ]);
    }, 1000); 
  });
});
