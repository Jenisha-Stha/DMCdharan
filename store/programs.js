import axios from "axios";
import { defineStore } from "pinia";

export const useProgramStore = defineStore('program',{
    state: () => {
        return{
            programs: null,
            loading: false
        }
    },

    actions:{
        async getPrograms(){
            try{
                  this.loading = true;
                  const response = await axios.get("https://dmcdharan.com/api/programs");
                  if(response.status == 200){
                      this.programs = response.data.data;
        
                  }

            }catch(error){
                 console.error(error);
            }finally{
              this.loading = false;
            }
        }
    }
})