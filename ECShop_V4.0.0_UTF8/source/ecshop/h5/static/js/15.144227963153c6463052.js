webpackJsonp([15],{"4i+K":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAB8ElEQVR4AWJwL/ABtFvXSI4DURjHo6XXmWOfYHVIMzMvMzPzzpxCV1DmSNnrUvV8rWqrxszs4D8Mv9Jr8E51fKATSJ2HwvyLXvAP4fA39JVeqB+h8BZABvODuvydFH9Fn9En9IG66j1QmwYB8qIfgt6ht+gNvdg86ItwAsh7g3mDXqEXwtk86ANA780TeW0gL9Fz9GwboHcY2ZtBCHqCHm9hZHrh8gvq9kEeoYdY1E83v6gDFCAv+BHG9xA9oBcaczoY9wqkmsKSdapwlWwuk8slVCRb5qiissLaGEi9uXkVkCYgHiCKi6iA8iiD0ihJnoxTU//s+kAGwxX670NKlyDZHgQlUBxF/f4b1HpAskLNAJJDmbGQIBmj5lpAqiwsjMfzIVmDSRnMAGQgT8WFtXKQLFBlCBJD0enJKFUGQGYxPhRZviccvisceVdkg/nOECA2IAOjmTl7CCTvA3MX37yDbqMO5G2RnRmUJNdAFskdAvEd4fQg3EINVJ/9ttZ/FK0Q1AFIQ5oagmqoMhfIXgQzfmRNkfUhVVRBJYysOPvI9MJcFDR+UVeBKuFJFbGoi/Mtar119RaeA7Leba/Th9y8IP076706cB3MAVrr1RGgzJOaND5PxjZwuQ6uKbPQbeSabP01/b3TC7QT6ATaZhd13udV6iB4qgAAAABJRU5ErkJggg=="},MTQN:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAB+UlEQVR4AWJwL/ABtFvXynUDURjHq9DZzrWfIHpIs33ZTBfDzMx5Cr2COlXqzo7m5DvBvQqtCsGMVfwT045/0pJrWQNrYPJqYZGf0y1+YSJ+hd7QLfm8sFgpTB4C9YhifkzCz9Bz9AK9olhxlcH4Ht7UfUAeIMU9QU+/A1/SrepgtzB1d4C4hxT40AE+M1F1sBuA3QTiNlLgXQf4qErYVUzlNSBuIBd4Dz2ocCrlOhb/jGIAJQOM5WFli9/BTfHmZpjWq+ga3dKvNQdsLWHSMoFt0zb3KEQJD9A2hXaPtuXABKXD5N7l83aVDniDUt4k4S3URl3UQwO0QymAB/qzhcJcFC/TRyS8itbQBsoC+z+BH3VM4TC7QgeKmmvFASquNf8G7TYdFAqTVRMAkiL5Y9k32EIdUmAqAxMUBrPLtK2Af7by5zeom6QwGH5xiMS71Tlg6H046+YamRaPTMRjE9mZaenX/gVLkORq5Scw8YXZI6COMOYEDdEIb3xiWl6w/PnDeA9v6gBjDtExOtVMlH8q/Qq9YduA7WDMHtr/AQTMf/H7p2O9p7KHqdRzcBvtIgDtgWn5Hxf+pTo21+LvANfDm+tj8e+4i9/3gPVIx5R7JflV/JXk4vQt/GdaU7tS4iWeXXPfN0SIku+F+jX93ln6Q7GBNbAG9gVAfTArB9eakwAAAABJRU5ErkJggg=="},Mk9z:function(t,e){},fVzZ:function(t,e){},g1Wb:function(t,e){},l4GL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Dd8w"),s=i.n(r),o=(i("vAZe"),i("Au9i"),i("NYxO")),a={name:"IntegralProductBody",data:function(){return{itemWidth:0,itemHeight:0,showRightBorder:this.index%2==0}},props:["item","index"],computed:{getProductStyle:function(){var t=window.screen,e=t.width,i=(t.height,e/2-20-1),r=i*(127/94);return this.itemWidth=i,this.itemHeight=r,{width:i+"px",height:r+"px"}},getProductIconStyle:function(){var t=window.screen,e=(t.width,t.height,this.itemWidth-20);return{width:e+"px",height:e+"px"}}},methods:{productClick:function(){this.$router.push({name:"product",query:{id:this.item.id,isExchange:!0}})}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-info",class:{border:t.showRightBorder},style:t.getProductStyle,on:{click:t.productClick}},[t.item.default_photo?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.default_photo.thumb,expression:"item.default_photo.thumb"}],staticClass:"product-icon",style:t.getProductIconStyle,attrs:{src:i("aVgn"),src:t.item.default_photo.large}}):r("img",{staticClass:"product-icon",style:t.getProductIconStyle,attrs:{src:i("aVgn")}}),t._v(" "),r("span",{staticClass:"product-title"},[t._v(t._s(t.item.name))]),t._v(" "),r("span",{staticClass:"product-score"},[t._v(t._s(t.item.exchange_score)+"积分")])])},staticRenderFns:[]};var c={name:"IntegralProductList",props:["items","title"],components:{IntegralProductBody:i("VU/8")(a,n,!1,function(t){i("fVzZ")},"data-v-6429976c",null).exports}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},[r("div",{staticClass:"product-list-header"},[r("img",{staticClass:"header-icon",attrs:{src:i("4i+K")}}),t._v(" "),r("span",{staticClass:"header-title"},[t._v(t._s(t.title))]),t._v(" "),r("img",{staticClass:"header-icon",attrs:{src:i("MTQN")}})]),t._v(" "),r("div",{staticClass:"product-list-body"},t._l(t.items,function(t,e){return r("integral-product-body",{key:e,attrs:{item:t,index:e}})}))])},staticRenderFns:[]};var d={name:"integralMall",data:function(){return{params:{brand:this.$route.query.brand?this.$route.query.brand:"",category:this.$route.query.category?this.$route.query.category:"",shop:this.$route.query.shop?this.$route.query.shop:"",is_exchange:1,is_hot:0,activity:null,sort_key:this.$route.query.sort_key?this.$route.query.sort_key:0,sort_value:2,page:1,per_page:10},loading:!1,isMore:!0}},components:{IntegralProductList:i("VU/8")(c,l,!1,function(t){i("Mk9z")},"data-v-477bcc3e",null).exports},computed:s()({},Object(o.e)({productList:function(t){return t.integralmall.productList},hotProductList:function(t){return t.integralmall.hotProductList}})),mounted:function(){},created:function(){this.getHotProductList(),this.getProductList(!1)},methods:s()({},Object(o.b)({fetchIntegralMallProductList:"fetchIntegralMallProductList",fetchIntegralMallHotProductList:"fetchIntegralMallHotProductList"}),{goBack:function(){this.$router.go(-1)},getHotProductList:function(){this.params;this.fetchIntegralMallHotProductList()},getProductList:function(t){var e=this,i=this.params;this.fetchIntegralMallProductList(i).then(function(t){e.isMore=1==t.paged.more})},getMore:function(){this.loading=!0,this.params.page=++this.params.page,this.isMore&&(this.loading=!1,this.getProductList(!0))}})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("mt-header",{staticClass:"header",attrs:{title:"积分商城"}},[i("header-item",{attrs:{slot:"left",isBack:!0},on:{onclick:t.goBack},slot:"left"})],1),t._v(" "),i("div",{staticClass:"list"},[t.hotProductList&&t.hotProductList.length>0?i("integral-product-list",{attrs:{items:t.hotProductList,title:"热销商品"}}):t._e(),t._v(" "),i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getMore,expression:"getMore"}],staticClass:"flex-wrapper",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[t.productList&&t.productList.length>0?i("integral-product-list",{attrs:{items:t.productList,title:"全部商品"}}):t._e(),t._v(" "),i("div",{staticClass:"loading-wrapper"},[t.isMore?t._e():i("p",[t._v("没有更多商品了")]),t._v(" "),t.isMore?i("mt-spinner",{attrs:{type:"triple-bounce",color:"#FA800A"}}):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(t){i("g1Wb")},"data-v-9a581fea",null);e.default=h.exports}});
//# sourceMappingURL=15.144227963153c6463052.js.map