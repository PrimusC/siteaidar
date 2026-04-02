import { oralCareProducts } from './oral-care';
import { personalHygieneProducts } from './personal-hygiene';
import { healthProducts } from './health';
import { ecoLaundryProducts } from './eco-laundry';
import { ecoHomeProducts } from './eco-home';
import { hairCareProducts } from './hair-care';
import { decorativeProducts } from './decorative';
import { faceCareProducts } from './face-care';
import { bodyCareProducts } from './body-care';
import { childrenProducts } from './children';

export const productsByCategory = {
  'face-care': faceCareProducts,
  'decorative': decorativeProducts,
  'body-care': bodyCareProducts,
  'hair-care': hairCareProducts,
  'oral-care': oralCareProducts,
  'personal-hygiene': personalHygieneProducts,
  'children': childrenProducts,
  'health': healthProducts,
  'eco-laundry': ecoLaundryProducts,
  'eco-home': ecoHomeProducts,
};
