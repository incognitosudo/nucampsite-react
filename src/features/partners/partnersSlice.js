//this has a new selector function that will return first item in 'PARTNERS' array with featured property set to true.
import {PARTNERS} from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS.filter((partner) => partner);
}

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}