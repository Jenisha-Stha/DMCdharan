import axios from "axios";
import { defineStore } from "pinia";

export const useMessageStore = defineStore('message',{
    state: () => {
        return{
            messages: null,
            loading: false
        }
    },
    actions:{
        async getMessages(){
              try{
                this.loading = true;
                    const response = await axios.get("https://dmcdharan.com/api/messages");
                   if(response.status == 200){
                    this.messages = response.data.data;

                   }

              }catch(e){
                console.log(e)
              }finally{
                  this.loading = false;
              }
        }
    }
}
);