<template>
    <div>
       <TypeNav></TypeNav>
       <ListContainer></ListContainer>
       <Recommend></Recommend>
       <Rank></Rank>
       <Like></Like>
       <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" ></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
    name: 'home',
    components:{
        ListContainer,Recommend,Rank,Like,Floor,Brand
    },
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState({
            floorList:state=>state.home.floorList
        })
    },
    mounted() {
        this.$store.dispatch('home/getFloorList')
        this.$store.dispatch('user/getUserInfo')
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>