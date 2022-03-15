<template>
    <li @click="handleClick" :class="{'qan-nav-active':active}">
        <slot></slot>
    </li>
</template>

<script>
import Tools from '../../../assets/js/tool.js'
export default {
    name:'QANmenuItem',
    inject: ['rootMenu'],
    mixins: [Tools],
    props:{
        index:{
            default:null,
        }
    },
    computed:{
        active(){
            return this.index === this.rootMenu.activeIndex;
        }
    },
    methods:{
        handleClick() {
          this.dispatch('QANmenu', 'item-click', this);
        //   this.rootMenu.activeIndex = this.index;
          this.$emit('click', this);
      }
    }
    
}
</script>