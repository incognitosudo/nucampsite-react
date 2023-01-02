import { CAMPSITES } from "../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    campsitresArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

//selector function that returns all of campsites from CAMPSITES array
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

//we are parsing (deducing) id variable to an integer using javascript built in parseInt() function
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};
//this export returns camspite array where the 'feautured' property is set true
export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};