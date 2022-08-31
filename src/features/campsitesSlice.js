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

//this export returns camspite array where the 'feautured' property is set true
export const selectFeauturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured); //no need campsite.featured === true because it is redundant
}