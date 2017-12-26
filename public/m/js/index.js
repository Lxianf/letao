/**
 * Created by 刘贤富 on 2017/12/26.
 */
$(function() {
    //获得slider插件对象 调用slider初始化轮播图的方法
    mui('.mui-slider').slider({
        // 1. 开启自动轮播图 毫秒数
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
});