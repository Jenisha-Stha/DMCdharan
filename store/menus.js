import axios from "axios";
import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu',{
    state: () => {
        return{
            menus: null,
            loading: false
        }
    },
    actions:{
        async getMenus(){
              try{
                this.loading = true;
                    const response = await axios.get("https://dmcdharan.com/api/menus");
                   if(response.status == 200){
                    this.menus = response.data.data;

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