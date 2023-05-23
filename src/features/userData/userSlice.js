import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    randevular: [],
    evler: [],
};


export const randevuSlice = createSlice({
    name: "randevu",
    initialState,
    reducers: {
        addRandevu: (state, action) => {
            const randevu = action.payload;
            state.randevular.push(randevu);

        },
        deleteRandevu: (state, action) => {
            const randevuId = action.payload;
            state.randevular = state.randevular.filter((item) => item.randevuId !== randevuId);
        },
        editRandevu: (state, action) => {
            const randevu = action.payload;
            const randevuId = randevu.randevuId;
            const randevuIndex = state.randevular.findIndex((item) => item.randevuId === randevuId);
            state.randevular[randevuIndex] = randevu;
        },
        addEv: (state, action) => {
            const ev = action.payload
            state.evler.push(ev)
        },
        deleteEv: (state, action) => {
            const evId = action.payload;
            state.evler = state.evler.filter((item) => item.apartId !== evId);
        }, 
        editEv: (state, action) => {
            const ev = action.payload;
            const evId = ev.apartId;
            const evIndex = state.evler.findIndex((item) => item.apartId === evId);
            state.evler[evIndex] = ev;
        }
    },
});

export const { addRandevu, deleteRandevu, editRandevu, addEv, deleteEv, editEv } = randevuSlice.actions;
export default randevuSlice.reducer;