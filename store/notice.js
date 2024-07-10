import axios from "axios";
import { defineStore } from "pinia";

export const useNoticeStore = defineStore('notice',{
    state: () => {
        return{
            notices : null,
            notice : null,
            loading : false,
            dialog: false
        }
    },

    actions:{
        async getNotices(){
            try{
                this.loading = true;
                const response = await axios.get("https://dmcdharan.com/api/notices");
                if(response.status == 200){
                    this.notices = response.data.data;
                }

            }catch(e){
                console.error(e);
            }finally{
                   this.loading = false;
            }
        },

        async getLatestNotice(){
            try{
                this.loading = true;
                const response = await axios.get("https://dmcdharan.com/api/notice");
                if(response.status == 200){
                    this.notice = response.data.data;
                    this.dialog = true
                }

            }catch(e){
                console.error(e);
            }finally{
                   this.loading = false;
            }
        },

        close(){
            this.dialog= false;
        }
    }
});