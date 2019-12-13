<template>
  <div class="main">
    <h1>This is an main page</h1>
    <LoongPopover></LoongPopover>
  </div>
</template>
<script>
import LoongPopover from "@/components/lib/loongPopover";
export default {
    components:{
        LoongPopover,
    },
    data(){
        return{
            msgdata:{
                content:"i18n.store_servermgr_del_selected_device_tip",
                width:"390px",
                position:"left",
                bgColor:"",
                fontColor:""
            }
        }
    },
    methods:{
    }
}
</script>