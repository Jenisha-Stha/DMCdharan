import axios from "axios";
import {
    defineStore
} from "pinia";

export const useGalleryStore = defineStore('gallery', {
    state: () => {
        return {
            galleries: null,
            loading: false
        }
    },

    actions: {
        async getGallery(){
            try {
                this.loading = true;
                const response = await axios.get("https://dmcdharan.com/api/galleries");
                this.galleries = response.data.data;

            } catch (e) {
                console.error(e);
            }finally{
                this.loading = false;
            }
        }
    }
});