(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{207:function(e,t,o){},248:function(e,t,o){"use strict";var n=o(207);o.n(n).a},281:function(e,t,o){"use strict";o.r(t);var n={name:"checkbox-table",props:["showSlot"],data:function(){return{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM Do yy"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{selectAll:function(e){console.log(e)},toggleSelectRow:function(e){console.log(e)}},mounted:function(){},components:{}},s=(o(248),o(2)),a=Object(s.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vue-good-table",{attrs:{columns:this.columns,rows:this.rows,"select-options":{enabled:!0},"search-options":{enabled:!0}},on:{"on-selected-rows-change":this.toggleSelectRow}},[this.showSlot?t("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[t("button",[this._v("Action 1")])]):this._e()])],1)},[],!1,null,null,null);t.default=a.exports}}]);