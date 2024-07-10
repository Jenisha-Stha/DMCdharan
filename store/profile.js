import axios from "axios";
import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile',{
    state: () => {
        return{
            school: null,
            loading: false
        }
    },
    actions:{
        async getSchoolProfile(){
              try{
                this.loading = true;
                    const response = await axios.get("https://dmcdharan.com/api/school-profile");
                   if(response.status == 200){
                    this.school = response.data.data;

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