import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface user {
    email: string;
}

interface AuthState {
    email: string | null;
}

const initialState: AuthState = {
    email: localStorage.getItem('email') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ email: string;  }>) {
            localStorage.setItem('email', action.payload.email);
            state.email = action.payload.email;
        },
        logout(state) {
            localStorage.removeItem('email');
            state.email = null;
        },
    },
});

// Ekspor action dan reducer
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
