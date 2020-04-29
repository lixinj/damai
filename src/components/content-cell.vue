<template>
<div class="content-cell" style="display: block;">
    <div class="content-cell-head">
		<span class="head-title">{{category.name}}</span>
        <a href="" class="head-more">
            <span>查看全部</span>
        </a>
	</div>

    <div class="box">
        <a href="" class="box-left">
            <img class="box-left__bg" :src="category.filmList[0].img">
            <div class="box-left__info">
                <div class="title"> {{category.filmList[0].title}}</div>
                <div class="details">¥{{category.filmList[0].prize}}<span>起</span></div>
            </div>
        </a>
        <div class="box-right">
            <film-cell v-for="film in category.filmList.slice(1)" :key="category.filmList.index" :film="film" class="box-right__item"/>
        </div>

    </div>
</div>
</template>

<script>

import FilmCell from './film-cell'

export default {

    components:{
        FilmCell,
    },
    data(){

        return{
            
            
        }
    },
    props:{
        category:Object,
    }

}
</script>

<style lang="scss">

.content-cell{
    width: 1160px;
    position: relative;
    padding: 20px;
    border: 1px solid #EBEBEB;
    margin-top: 15px;
    .content-cell-head {
        width: 100%;
        height: 40px;
        line-height: 40px;
        .head-title{
            font-size: 24px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            color: #111;
            width: 500px;
            height: 40px;
            overflow: hidden;
        }

        .head-more{
            display: inline-block;
            vertical-align: middle;
            float: right;
            margin-right: 23px;
            font-size: 14px;
            color: #9B9B9B;
            max-width: 450px;
            height: 100%;
            overflow: hidden;
             text-decoration: none;               
            span:hover{
                color: #FF1268;
            }
        }
        
    }
}

.box{
    margin-top: 15px;
    .box-left {
        display: inline-block;
        width: 270px;
        height: 360px;
        position: relative;
        overflow: hidden;
        .box-left__bg{
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            border: 1px solid #efefef;
        }
        .box-left__info{
            width: 250px;
            height: 84px;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 17px 10px;
            background-color: rgba(0,0,0,.5);
            .title{
                height: 45px;
                font-size: 16px;
                color: #fff;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .title:hover{color:#FF1268}
            .details{
                margin-top: 12px;
                font-size: 20px;
                color: #fff;
            }
        }
    }
    .box-right{
        display: inline-block;
        width: 870px;
        margin-left: 20px;
        height: 360px;
        vertical-align: top;
        overflow: hidden;

    }
}

</style>