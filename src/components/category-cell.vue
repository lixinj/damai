<template>
    <a href="" class="category__list"> 
        <span class="category__icon" 
        :style="`background-position: 0 ${index==1?-64:-index*60}px`"
        ></span>
        <p class="category__info">{{category.name}}</p>
    </a>
</template>

<script>
export default {
    name: "category-cell",
    props: {
    category: Object,
    index:Number
    },
}
</script>

<style lang="scss">

.category__list {
    float: left;
    display: block;
    width: 120px;
    text-align: center;
    p{
        margin: 0;
        padding: 0;
    }
    .category__icon {
        display: block;
        width: 48px;
        height: 48px;   
        margin: 0 auto;
        background: url(//img.alicdn.com/tfs/TB1U9R8GY9YBuNjy0FgXXcxcXXa-146-1822.png) no-repeat;
        background-size: 100% auto;
    }

    .category__info:hover{color:#FF1268}

}

</style>