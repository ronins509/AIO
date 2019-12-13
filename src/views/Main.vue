<template>
  <div class="main">
    <h1>This is an main page</h1>
    <LoongPopover :data="Msgdata">{{msg}}</LoongPopover>
  </div>
</template>
<script>
import LoongPopover from "@/components/lib/loongPopover.vue";
export default {
    components:{
        LoongPopover,
    },
    data(){
        return{
            msg:'nnfff',
            Msgdata:{
                content:"i18n.cloud_vn_pn_type_tip",
                width:"300px",
                position:"top",
                isShow:true
            }
        }
    },
    methods:{
    }
}
</script>