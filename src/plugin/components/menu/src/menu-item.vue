<template>
    <li @click="handleClick" :class="{'qan-nav-active':active}">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:'QANmenuItem',
    inject: ['rootMenu'],
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
          this.rootMenu.activeIndex = this.index;
          this.$emit('click', this);
      }
    }
    
}
</script>