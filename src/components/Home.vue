<template>
<div>

  <div class="header">
    <div class="header-box">
      <a href="//www.damai.cn"><img class="i-logo" src="//img.alicdn.com/tfs/TB1fbVFfu3tHKVjSZSgXXX4QFXa-230-104.png" alt="大麦"></a>
      <div class="location-header">
        <img class="i-icon-location" src="//img.alicdn.com/tfs/TB1XHDuxNGYBuNjy0FnXXX5lpXa-28-32.png" alt="定位">
        <span class="city-location">全国</span>
        <img class="i-arrow-location" src="https://img.alicdn.com/tfs/TB1vnUBxStYBeNjSspaXXaOOFXa-20-12.png" alt="箭头">
      </div>
      <div class="recommend-header">
        <a href="//www.damai.cn" class="type-recommend select">首页</a>
        <a href="//search.damai.cn/search.htm?order=1" class="type-recommend">分类</a>
      </div>
      <div class="right-header">
        <div class="box-header user-header">

          <img class="i-box-header i-user" src="//img.alicdn.com/tfs/TB14UKCGQyWBuNjy0FpXXassXXa-54-54.png">
        
          <div class="login-user" @mouseover='hoverThis1' @mouseout='hoverThis1'>
            <span class="span-box-header span-user">登录</span>
          </div>
 
          <div class="list-wrap"  :class="{active: exportType1 === false}">
            <div class="list-login">
              <a href="//passport.damai.cn/accountinfo/myinfo" class="li-login select" >个人信息</a>
              <a href="//my.damai.cn/account/accountSafe" class="li-login">账号设置</a>
              <a href="//orders.damai.cn/orderList" class="li-login">订单管理</a>
              <a href="//passport.damai.cn/account/logout" class="li-login out-login">退出登录</a>
            </div>
          </div>

        </div>
        <div class="box-header download-header">
          <img class="i-box-header i-download" src="//img.alicdn.com/tfs/TB1A9eIGKuSBuNjy1XcXXcYjFXa-54-54.png" alt="下载">
          <span class="span-box-header" @mouseover='hoverThis2' @mouseout='hoverThis2'>下载</span>
          <div class="ewm-download" :class="{active: exportType2 === false}">
					  <img class="i-ewm" src="//img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg">
				  </div>
        </div>
        <div class="box-header">
          <a href="//en.damai.cn/">
            <img class="i-box-header" src="//img.alicdn.com/tfs/TB13UKCGQyWBuNjy0FpXXassXXa-54-54.png" alt="英文站">
            <span class="span-box-header">English</span>
          </a>
        </div>
		  </div>
      <div class="search-header">
        <img class="i-search" src="//img.alicdn.com/tfs/TB1qv3jxGmWBuNjy1XaXXXCbXXa-34-36.png" alt="搜索">
        <input class="input-search" placeholder="搜索明星、演出、体育赛事" data-spm="dsearchbtn">
        <div class="btn-search" data-spm="dsearchbtn2">搜索</div>
		  </div>
    </div>

  </div>
  <div class="slides">

      <swiper class="swiper-container" :options="swiperOption">
        
          <swiper-slide>
            <img src="https://gw.alicdn.com/tfs/TB1KiMMq7L0gK0jSZFtXXXQCXXa-1200-320.png">
          </swiper-slide>
          <swiper-slide >
            <img src="https://img.alicdn.com/tps/i4/TB1Wa0murY1gK0jSZTESutDQVXa.jpg">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="https://img.alicdn.com/tps/i4/TB1feZaDXY7gK0jSZKzSuuikpXa.jpg">
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
          
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>

      </swiper>

  </div>
  <div class="category">
    <category-cell v-for="(category,index) in categorys" :key="category.index" :category="category" :index="index"/>
  </div>
  <div class="content">
      <content-cell v-for="(category,index) in categorys.slice(0,4)" :key="category.index" :category="category" :index="index"/>
  </div>
  <div class="footer">
    
    <ul class="footer__links">
        
        <li class="footer__links__list"><a href="//help.damai.cn" target="_blank" data-spm="flink0">帮助中心</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//help.damai.cn/helpPage.htm?pageId=69&amp;categoryId=30" target="_blank" data-spm="flink1">公司介绍</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//help.damai.cn/helpPage.htm?pageId=70&amp;categoryId=30" target="_blank" data-spm="flink2">品牌识别</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//help.damai.cn/helpPage.htm?pageId=72&amp;categoryId=30" target="_blank" data-spm="flink3">公司大事记</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//help.damai.cn/helpPage.htm?pageId=40&amp;categoryId=14" target="_blank" data-spm="flink4">协议及隐私权政策</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//jubao.alibaba.com/internet/readme.htm?spm=a2o6e.search.0.0.72f44d15Votov6&amp;site=damai" target="_blank" data-spm="flink5">廉正举报</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//help.damai.cn/helpPage.htm?pageId=58&amp;categoryId=5" target="_blank" data-spm="flink6">联系合作</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//job.alibaba.com/zhaopin/positionList.htm?keyWord=JXU1OTI3JXU5RUE2&amp;_input_charset=UTF-8" target="_blank" data-spm="flink7">招聘信息</a></li>
        <li class="footer__links__grep">|</li>
        
        <li class="footer__links__list"><a href="//x.damai.cn/markets/special/fangzhapian?spm=a2o6e.home.0.0.75df48d3hqGWGD&amp;wh_ttid=pc" target="_blank" data-spm="flink8">防骗秘籍</a></li>
        
        
    </ul>
    
    <!-- <div class="footer__ft">
        <div class="footer__ft_fl">
            <a href="//www.damai.cn/?spm=a2o6e.home.0.0.591b48d3QzpG8B" target="_blank" class="footer__ft__logo">
                <img src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png">
            </a>
            <div class="footer__ft__code__box">
                <img class="footer__ft__code" src="//img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" alt="">
                <span>APP下载</span>
            </div>
        </div>
        <div class="footer__ft_fr">
            <div class="footer__fr__contact">

                <a style="margin-left:0;" href="//online.damai.cn/alime/index?from=damai_pc_item&amp;v=3" class="footer__fr__contact__btn alime">在线客服</a>
            </div>
            <ul class="footer__ft__words">
                <li class="footer__ft__certificate"><a href="https://img.alicdn.com/tfs/TB1A_Djc1bviK0jSZFNXXaApXXa-3287-4660.jpg" target="_blank">京ICP证031057号</a></li>
                <li class="footer__ft__grep">|</li>
                <li class="footer__ft__certificate"><a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">京ICP备11043884号</a></li>
                <li class="footer__ft__grep">|</li>
                <li class="footer__ft__certificate"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037341" target="_blank">京公网安备11010502037341号</a>
                </li>
                <li class="footer__ft__grep">|</li>
                <li class="footer__ft__certificate"><a href="https://gw.alicdn.com/tfs/TB144BRdO_1gK0jSZFqXXcpaXXa-4096-2889.png" target="_blank">广播电视节目制作经营许可证(京)字第02253号</a></li>
            </ul>
            <ul class="footer__ft__words">
                <li class="footer__ft__certificate"><a href="https://img.alicdn.com/tfs/TB1PX8NdKH2gK0jSZFEXXcqMpXa-2480-3507.png" target="_blank">网络文化经营许可证 京网文[2019]4082-420号</a></li>
                <li class="footer__ft__grep">|</li>
                <li class="footer__ft__certificate"><a href="https://img.alicdn.com/tfs/TB1L3XJdFT7gK0jSZFpXXaTkpXa-647-907.png" target="_blank">营业性演出许可证京市演587号</a></li>
            </ul>
            <ul class="footer__ft__words">
                <li class="footer__ft__certificate">北京红马传媒文化发展有限公司 版权所有</li>
                <li class="footer__ft__certificate"><a href="//www.damai.cn/?spm=a2o6e.home.0.0.591b48d3QzpG8B">大麦网</a></li>
                <li>Copyright 2003-2019 All Rights Reserved</li>
            </ul>
            <ul class="footer__ft__words">
                <li>举报投诉：damai_tousu@member.alibaba.com   浙江省杭州市余杭区文一西路969号</li>
            </ul>
            <ul class="footer__ft__words">
                <li>违法不良信息举报电话：020-62108294</li>
            </ul>
            <div class="footer__ft__img">
                
                <a rel="nofollow" title="电子营业执照" target="_blank" href="//img.alicdn.com/tfs/TB1CChlpwDqK1RjSZSyXXaxEVXa-1200-1672.jpg">
                    <img class="footer__ft__img2" alt="" src="//img.alicdn.com/tfs/TB1ZO80pyOYBuNjSsD4XXbSkFXa-141-41.png">
                </a>

                <a rel="nofollow" target="_blank" href="https://www.pcisecuritystandards.org/">
                    <img src="//img.alicdn.com/tfs/TB1Y580pyOYBuNjSsD4XXbSkFXa-83-50.png" class="footer__ft__img3">
                </a>
                <a rel="nofollow" target="_blank" href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/1756737221">
                    <img src="//img.alicdn.com/tfs/TB1pM_ZxNWYBuNjy1zkXXXGGpXa-114-40.png" class="footer__ft__img4w">
                </a>
                <a target="_blank" href="https://search.szfw.org/cert/l/CX20130327002367002885" id="___szfw_logo___">
                    <img class="footer__ft__img4" src="//img.alicdn.com/tfs/TB1C4nNxTlYBeNjSszcXXbwhFXa-114-42.png">
                </a>
                <script type="text/javascript">(function () {
                    document.getElementById('___szfw_logo___').oncontextmenu = function () {
                        return false;
                    }
                })();</script>
            </div>
        </div>
    </div> -->
    
  </div>
  <div class="sidebar">
    <div class="item">
        <a class="alime" href="//online.damai.cn/alime/index?from=damai_pc_item&amp;v=3" target="_blank" data-spm="dcustomerservice">
            <div class="icon service"></div>
            <p>在线客服</p>
        </a>
    </div>
    <div class="item">
        <a href="">
            <div class="icon damai"></div>
            <p>APP下载</p>
            <div class="qrcode"></div>
        </a>
    </div>
    <div class="item" style="">
      <a href="" >
        <div class="icon gotop"></div>
        <p>回到顶部</p>
      </a>  
    </div>

  </div>

</div>  
</template>

<script>

import CategoryCell from './category-cell'
import ContentCell from './content-cell'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  components:{
    CategoryCell,
    ContentCell,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive,
  },  
  data(){
    return {
      categorys:[
        {
        name:"演唱会",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"话剧歌剧",
        filmList:[
                {
                    title:"“开心麻花开春重磅新戏《贼想得到你》 ",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:80,
                    img:"https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01JaQ7M52GdSEhTBJBR_!!0-item_pic.jpg"
                },
                {
                    title:"不眠之夜Sleep No More",
                    venue:"麦金侬酒店",
                    time:"2020.05.20-06.28",
                    prize:520,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01rqZssU2GdSEfLjbFx_!!0-item_pic.jpg"
                },
                

            ],
        },
        {
        name:"体育",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"儿童亲子",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"展览休闲",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"音乐会",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"曲苑杂坛",
        filmList:[
                {
                    title:"2020任贤齐“齐迹”巡回演唱会 呼和浩特站",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01otwUzN2GdSEj90YzO_!!0-item_pic.jpg"
                },
                {
                    title:"“My Love刘德华巡回演唱会 2020”官方周边商品",
                    venue:"内蒙古体育馆",
                    time:"2020.08.01 周六 19:30",
                    prize:399,
                    img:"https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01ZYFxKt2GdSEWTMcjm_!!0-item_pic.jpg"
                },

            ],
        },
        {
        name:"舞蹈芭蕾"
        },
        {
        name:"二次元"
        },
        {
        name:"旅游展览"
        }
      
      ],
      exportType1:true,
      exportType2:true,
      swiperOption: {
          autoplay: true,
          //分页器
          pagination: {
                el: '.swiper-pagination',
                clickable :true,
          },
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
                          
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        selected: 0,        //顶部所选模块
        openMine: false,    //打开我的选项
    }
  },
  methods:{
    hoverThis1(){
      this.exportType1 = !this.exportType1
    },
    hoverThis2(){
      this.exportType2 = !this.exportType2
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

a{
text-decoration: none;
color: #000;
}

li, ul {
    list-style: none;
    display: list-item;
}

.header{
    width: 100%;
    height: 72px;
    box-shadow: 0 2px 16px 0 rgba(220,220,220,.5);
  .header-box{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    font-size: 0;
    display: flex;
    a{
      cursor: pointer;
      .i-logo {
        width: 92px;
        height: auto;
        margin-top: 15px;
        float: left;
      }
    }

    .location-header{
      height: 100%;
      float: left;
      position: relative;
      margin-left: 54px;
      line-height: 72px;
      white-space: nowrap;
      cursor: pointer;
      .city-location {
        max-width: 60px;
        font-size: 16px;
        color: #2D2D2D;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        margin-right: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .i-icon-location{
        width: 12px;
        display: inline-block;
        vertical-align: middle;
      }
      .i-arrow-location {
        width: 9px;
        display: inline-block;
        vertical-align: middle;
      }

    }
    .recommend-header{
      max-width: 220px;
      height: 100%;
      float: left;
      margin-right: -20px;
      margin-left: 40px;
      line-height: 72px;
      overflow: hidden;
      .type-recommend{
        display: inline-block;
        font-size: 16px;
        color: #000;
        margin-right: 18px;
        overflow: hidden;
        
      }
      .select {
        color: #FF1268;
      }
    }
    .search-header {
      width: 401px;
      height: 46px;
      margin-top: 12px;
      margin-right: 20px;
      line-height: 46px;
      float: right;
      position:absolute;
      right:260px;
      .i-search {
        width: 17px;
        position: absolute;
        left: 22px;
        top: 15px;
        z-index: 11;
      }
      .input-search {
        width: 253px;
        height: 44px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        font-size: 16px;
        background-color: transparent;
        outline: 0;
        -webkit-appearance: none;
        border: 0;
        padding: 0 10px 0 54px;
        border-top-left-radius: 46px;
        border-bottom-left-radius: 46px;
        border: 1px solid #f8f8f8;
        background-color: #f8f8f8;
        border-right-color: #FF1268;
        box-sizing: content-box;
      }
      .btn-search {
        width: 82px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background: #FF1268;
        line-height: 46px;
        font-size: 16px;
        text-align: center;
        color: #FFF;
        border-radius: 0 27px 27px 0;
        z-index: 11;
        letter-spacing: 4px;
        cursor: pointer;
      }
    }
    .right-header {
      min-width: 55px;
      height: 100%;
      position:absolute;
      right:0px;
      line-height: 72px;
      .box-header {
        height: 100%;
        display: inline-block;
        line-height: 72px;
        cursor: pointer;
        position: relative;
        margin-left: 20px;
        .i-box-header {
            width: 26px;
            z-index: 20000;
            display: inline-block;
            margin-right: 4px;
            vertical-align: middle;
        }
        .login-user {
              display: inline-block;
          }
        .span-box-header {
            display: inline-block;
            vertical-align: middle;
            color: #111;
            cursor: pointer;
            font-size: 16px;
            
        }
        .span-box-header:hover{color:#FF1268}
        
        .list-wrap {
            width: 133px;
            display: none;
            position: absolute;
            left: 50%;
            margin-left: -67px;
            top: 50px;
            z-index: 999;
            .list-login {
                width: 100%;
                position: relative;
                margin-top: 10px;
                background: #FFF;
                border: 1px solid #F4F4F4;
                box-shadow: 0 2px 8px 0 rgba(0,0,0,.05);
                border-radius: 2px;
                .li-login {
                    width: 100%;
                    height: 50px;
                    display: block;
                    line-height: 50px;
                    font-size: 14px;
                    color: #111;
                    letter-spacing: .54px;
                    text-align: center;
                    border-bottom: 1px solid #F2F2F2;
                    cursor: pointer;
                }
            }
        }

        .ewm-download {
            width: 80px;
            height: 80px;
            display: none;
            position: absolute;
            top: 60px;
            left: -12px;
            z-index: 999;
            background: #fff;
            padding: 5px;
            box-shadow: 1px -1px 1px #ccc;
            .i-ewm {
                width: 100%;
            }
        }
        .active{
          display:inline-block
        }

        
      }
    }

  }
}

.slides{
  .swiper-container {
    width: 1200px;
    height: 320px;
  }
.swiper-container{
    
    --swiper-navigation-color:white;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }
  .swiper-button-prev{
    width: 56px;
    height: 64px;
    background: rgba(0,0,0,.5);
    cursor: pointer;

  }
  .swiper-button-next{
    width: 56px;
    height: 64px;
    background: rgba(0,0,0,.5);
    cursor: pointer;
  }
}
  

.category {
    margin-top: 15px!important;
    padding: 22px 0 25px 0;
    border: 1px solid #EBEBEB;
    zoom: 1;
    width: 1200px;
    margin: 0 auto;

    

}
.category:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: '.';
}

.content{
    width: 1200px;
    margin: 0 auto 30px auto;
    position: relative;
    font-size: 0;
}

.footer{
    width: 1200px;
    margin: 0 auto;
    .footer__links {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 36px 0;
      text-align: center;
      zoom: 1;
      .footer__links__list {
        float: left;
        font-size: 13px;
        color: #111;
      }
      .footer__links__grep {
        float: left;
        padding: 0 24px;
      }
    }

}
.sidebar {
    background: #fff;
    border: 1px solid #EBEBEB;
    width: 80px;
    position: fixed;
    right: 10px;
    top: 80%;
    margin-top: -105px;
    z-index: 9999;
    .item {
        height: 60px;
        border-bottom: 1px solid #EBEBEB;
        text-align: center;
        padding-top: 10px;
        color: #111;
        font-size: 12px;
        position: relative;
        cursor: pointer;
        box-sizing: content-box;
        .icon {
            background: url(//img.alicdn.com/tfs/TB1u1U9xmzqK1RjSZFHXXb3CpXa-64-180.png) no-repeat;
            margin: 0 auto;
            width: 32px;
            height: 29px;
            background-size: 100%;
        }
        a {
            display: block;
            text-decoration: none;
            color: #111;
            .service {
                background-position: 3px -30px;
            }
            .damai {
                background-position: 0 4px;
            }

        }

        a:hover{color:#FF1268}

        p {
            margin: 0;
            margin-top: 5px;
            font-size: 12px;
        }
        .gotop {
          background-position: 4px -65px;
        }

    }
  
}


</style>
