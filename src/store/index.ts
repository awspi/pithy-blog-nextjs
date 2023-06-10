import { atom, RecoilEnv } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
export const navAtom = atom({
  key: 'NAV_ATOM',
  default: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Activities',
      link: '/activities',
    },
    {
      name: 'Notes',
      link: '/notes',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
  ],
});
