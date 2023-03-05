import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import zustandStorage from './zustandStorage';

interface UserStore {
  user: any;
  role: any;
  setUser: (val: any) => void;
  clear: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: {},
      role: null,
      setUser: (val: any) => set({user: val, role: val.admin_role}),
      clear: () => set({user: {}, role: null}),
    }),
    {
      name: 'user-storage',
      getStorage: () => zustandStorage,
    },
  ),
);

export {useUserStore};
