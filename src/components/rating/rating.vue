<template>
    <div class="ratings"  ref="ratings">
        <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">
                            服务态度
                        </span>
                        <Star :size="36" :score="seller.serviceScore"></Star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">
                            商品评分
                        </span>
                        <Star :size="36" :score="seller.foodScore"></Star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <Split></Split>
            <RatingSelect :ratings="ratings" :desc="desc" :only-content="onlyContent"  :select-type="selectType"></RatingSelect>
            <div class="rating-wrapper">
                <ul>
                    <li v-for="(rating,index) in ratings" class="rating-item" :key="index">
                        <div class="avatar">
                            <img width="28" height="28" :src="rating.avatar">
                        </div>
                        <div class="content">
                            <h1 class="name">{{rating.username}}</h1>
                            <div class="star-wrapper">
                                <Star :size="24" :score="rating.score"></Star>
                                <span v-show="rating.deliveryTime" class="delivery"></span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend" v-show="rating.recommend.length && rating.recommend.length">
                                <span class="icon-thumb_up"></span><span class="item" :key="index" v-for="(item,index) in rating.recommend">{{item}}</span>
                            </div>
                            <div class="time">
                                {{rating.rateTime | formatDate}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import sellData from './../../../data.json';
import Star from '@/components/star/star';
import Split from '@/components/split/split';
import RatingSelect from '@/components/ratingselect/ratingselect';
import {formatDate} from '@/common/js/date';
console.log(sellData);
const ALL = 2;

export default {
    props: {
        seller: {
            type: Object
        }
    },
    data () {
        return {
            desc: {},
            ratings: [],
            selectType: ALL,
            onlyContent: true
        };
    },
    created () {
        this.ratings = sellData.ratings;
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs['ratings'], {
                click: true
            });
        });
    },
    filters: {
        formatDate (time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    components: {
        Star,
        Split,
        RatingSelect
    }
};
</script>
<style lang="stylus">
    @import "../../common/stylus/mixin.styl";
    .ratings
        position: absolute
        top: 174px
        bottom: 0
        left: 0
        width: 100%
        overflow: hidden
        .overview
            display: flex
            padding: 18px 0
            .overview-left
                flex: 0 0 137px
                width: 137px
                border-right: 1px solid  rgba(7,17,27,0.1)
                text-align: center
                @media only screen and (max-width: 320px)
                    flex: 0 0 110px
                    width: 110px
                .score
                    margin-bottom: 6px
                    font-size: 24px
                    line-height: 28px
                    color: rgb(255,153,0)
                .title
                    margin-bottom: 8px
                    line-height: 12px
                    font-size: 20px
                    color: rgb(7,17,27)
                .rank
                    padding-bottom: 6px
                    line-height: 10px
                    font-size: 10px
                    color: rgb(147,153,159)
            .overview-right
                flex: 1
                padding: 6px 0 6px 24px
                @media only screen and (max-width: 320px)
                    padding-left: 6px
                .score-wrapper
                    line-height: 18px
                    margin-bottom: 8px
                    font-size: 0
                    .title
                        display: inline-block
                        line-height 18px
                        font-size: 12px
                        color: rgb(7,17,27)
                    .star
                        display: inline-block
                        vertical-align: top
                        margin: 0 12px
                    .score
                        line-height 18px
                        display: inline-block
                        vertical-align: top
                        font-size: 12px
                        color: rgb(255,153,0)
                .delivery-wrapper
                    font-size: 0
                    .title
                        line-height 18px
                        font-size: 12px
                        color: rgb(7,17,27)
                    .delivery
                        margin-left: 12px
                        font-size: 12px
                        color: rgb(147,153,159)
        .rating-wrapper
            padding: 0 18px
            .rating-item
                display: flex
                padding: 18px 0
                border-1px(rgba(7,17,27,0.1))
                .avatar
                    flex: 0 0 28px
                    width: 28px
                    margin-right: 12px
                    img
                        border-radius: 50%
                .content
                    flex: 1
                    position: relative
                    .name
                        margin-bottom: 4px
                        line-height: 12px
                        font-size: 10px
                        color: rgb(7,17,27)
                    .star-wrapper
                        margin-bottom: 6px
                        font-size: 0
                        .star
                            display: inline-block
                            vertical-align: top
                            margin-right: 6px
                        .delivery
                            display: inline-block
                            vertical-align: top
                            line-height: 12px
                            font-size: 10px
                            color: rgb(147,153,159)
                    .text
                        line-height: 18px
                        color: rgb(7,17,27)
                        margin-bottom: 8px
                        font-size: 12px
                    .recommend
                        line-height: 16px
                        font-size: 0
                        .icon-thumb_up,.item
                            display: inline-block
                            margin: 0 8px 4px 0
                            font-size: 9px
                        .icon-thumb_up
                            color: rgb(0,160,220)
                        .item
                            padding: 0 6px
                            border: 1px solid rgba(7,17,27,0.1)
                            border-radius: 1px
                            color: rgb(147,153,159)
                            background-color: #ffffff
                    .time
                        position: absolute
                        top: 0
                        right: 0
                        line-height: 12px
                        font-size: 10px
                        color: rgb(147,153,159)
</style>
