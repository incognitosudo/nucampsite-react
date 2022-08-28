import { CAMPSITES } from "../app/shared/CAMPSITES";

//selector function that returns all of campsites from CAMPSITES array
export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};
//returns single random camsite from CAMPSITES array
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor((CAMPSITES.length * Math.random()))];
// };