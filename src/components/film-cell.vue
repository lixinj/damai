<template>
              <div href="" class="box-right__item">
                <div class="itemimg">
                    <img :src="film.img">
                </div>
                <div class="iteminfo">
                    <div class="title">{{film.title}}</div>
                    <div class="venue"> {{film.venue}}</div>
                    <div class="showtime">{{film.time}}</div>
                    <div class="price">¥{{film.prize}}<span>起</span></div>
                </div>
            </div>

</template>

<script>
export default {

    props:{
        film:Object,
    }
}
</script>

<style lang="scss">
.box-right__item {
    width: 273px;
    height: 160px;
    margin-right: 16px;
    display: inline-block;
    margin-bottom: 40px;
    color: #000;
    overflow: hidden;
    .itemimg {
        width: 118px;
        height: 158px;
        overflow: hidden;
        position: relative;
        display: inline-block;
        border: 1px solid #efefef;
        img {
            width: 100%;
        }
    }
    .iteminfo {
        width: 138px;
        height: 100%;
        position: relative;
        padding-left: 15px;
        display: inline-block;
        vertical-align: top;
        .title {
            line-height: 20px;
            font-size: 14px;
            color: #4A4A4A;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .title:hover{color:#FF1268}

        .venue {
            width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 12px;
            margin-top: 14px;
            color: #9B9B9B;
            overflow: hidden;
            word-break: break-all;
            
        }
        .venue:hover{color:#FF1268}

        .showtime {
            width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 12px;
            margin-top: 14px;
            color: #9B9B9B;
            overflow: hidden;
            word-break: break-all;
            margin-top: 7px;
        }
        .showtime:hover{color:#FF1268}

        .price {
            width: 138px;
            position: absolute;
            left: 15px;
            bottom: 0;
            font-size: 16px;
            color: #FF1268;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}



</style>