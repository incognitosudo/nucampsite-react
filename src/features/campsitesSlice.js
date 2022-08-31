import { CAMPSITES } from "../app/shared/CAMPSITES";

//selector function that returns all of campsites from CAMPSITES array
export const selectAllCampsites = () => {
    return CAMPSITES;
};

//we are parsing (deducing) id variable to an integer using javascript built in parseInt() function
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id))
}
//this export returns camspite array where the 'feautured' property is set true
export const selectFeauturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured); //no need campsite.featured === true because it is redundant
}