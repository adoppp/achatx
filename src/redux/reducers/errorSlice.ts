import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
    title: string | null;
    message: string | null;
}

const initialState: ErrorState = {
    title: null,
    message: null
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<ErrorState>) {
            state.title = action.payload.title;
            state.message = action.payload.message;
        },
        resetError(state) {
            state.title = null;
            state.message = null;
        },
    },
});

export const errorReducer = errorSlice.reducer;
export const { setError, resetError } = errorSlice.actions;
