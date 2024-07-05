import { create } from "zustand";
import { fetchData, postData, patchData, deleteData } from "./api";

const useStore = create((set) => ({
  data: [],
  error: null,
  loading: false,

  getData: async (endpoint) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchData(endpoint);
      set({ data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  postData: async (endpoint, payload) => {
    set({ loading: true, error: null });
    try {
      const data = await postData(endpoint, payload);
      set((state) => ({ data: [...state.data, data], loading: false }));
    } catch (error) {
      set({ error, loading: false });
    }
  },

  patchData: async (endpoint, payload) => {
    set({ loading: true, error: null });
    try {
      const data = await patchData(endpoint, payload);
      set((state) => ({
        data: state.data.map((item) => (item.id === data.id ? data : item)),
        loading: false,
      }));
    } catch (error) {
      set({ error, loading: false });
    }
  },

  deleteData: async (endpoint, id) => {
    set({ loading: true, error: null });
    try {
      await deleteData(endpoint);
      set((state) => ({
        data: state.data.filter((item) => item.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));

export default useStore;
