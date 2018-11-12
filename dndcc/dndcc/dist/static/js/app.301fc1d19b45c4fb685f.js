webpackJsonp([1],{"0tfY":function(e,t){},"8F/f":function(e,t){},C1Xv:function(e,t){e.exports=[{name:"Dwarf",tagline:"Short, Stout And Can Take A Hit",physical:{height:"4-5 ft",size:"Medium",speed:"25 ft"},subraces:{"Mountain Dwarf":{},"Hill Dwarf":{}},features:{Ability:{fullName:"Ability Score",desc:"+2 To Constitution",icon:"plus-one"},Darkvision:{fullName:"Darkvision",desc:"You can see in dim light within 60 feet",icon:"eye-circle"},Resilience:{fullName:"Dwarven Resilience",desc:"Advantage on saving throws against poison, resistance against poison damage",icon:"shield"},Combat:{fullName:"Dwarven Combat Training",desc:"proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.",icon:"sword-cross"},Tools:{fullName:"Tool Proficiency",desc:"proficiency with the artisan's tools of your choice: smith's tooLs, brewer's supplies, or mason's tools.",icon:"hammer"},Stone:{fullName:"Stonecunning",desc:"Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",icon:"diamond-stone"},Languages:{fullName:"Languages",desc:"You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",icon:"web"}}},{name:"Elf",tagline:"Full of themselves but oh so magical",physical:{height:"5-6 ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Halfling",tagline:"Pack a lot into such a small package",physical:{height:"~3 ft",size:"Small",speed:"25 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Human",tagline:"Boring honestly",physical:{height:"5-6 ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Dragonborn",tagline:"RAWR! XD",physical:{height:"6+ ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Gnome",tagline:"You know, like from your garden",physical:{height:"3-4 ft",size:"Small",speed:"25 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Half-Elf",tagline:"Filthy Mudbloods if you ask me",physical:{height:"5-6 ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Half-Orc",tagline:"Kinda Sexy",physical:{height:"5-6 ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}},{name:"Tiefling",tagline:"I forgot what these even are ",physical:{height:"5-6 ft",size:"Medium",speed:"30 ft"},features:{test:{fullName:"Test",desc:"test",icon:"alert"}}}]},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(e){a("0tfY")},null,null).exports,c=a("/ocq"),r=a("fZjL"),l=a.n(r),o={name:"Card",props:{selectable:{type:Boolean,default:!1}},data:function(){return{}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{card:!0,clickable:this.selectable}},[t("h2",[this._t("title")],2),this._v(" "),t("h4",[this._t("subtitle")],2),this._v(" "),t("hr"),this._v(" "),t("div",{staticClass:"content"},[this._t("content")],2)])},staticRenderFns:[]};var f={name:"RaceCard",props:["race"],components:{Card:a("VU/8")(o,u,!1,function(e){a("8F/f")},"data-v-3b7c0bbb",null).exports},data:function(){return{activeTab:l()(this.race.features)[0]}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",{attrs:{selectable:!0}},[a("template",{slot:"title"},[e._v(e._s(e.race.name))]),e._v(" "),a("template",{slot:"subtitle"},[e._v(e._s(e.race.tagline))]),e._v(" "),a("template",{slot:"content"},[a("div",{staticClass:"physical-information"},e._l(Object.keys(e.race.physical),function(t){return a("div",{staticClass:"desc-pair"},[a("b",[e._v(e._s(t))]),a("span",[e._v(e._s(e.race.physical[t]))])])})),e._v(" "),a("div",{staticClass:"features"},[a("div",{staticClass:"tabs"},e._l(Object.keys(e.race.features),function(t){return a("div",{class:{tab:!0,active:e.activeTab===t},on:{click:function(a){e.activeTab=t}}},[a("i",{class:"mdi mdi-"+e.race.features[t].icon})])})),e._v(" "),a("div",{staticClass:"tab-content"},[a("h3",[e._v(e._s(e.race.features[e.activeTab].fullName))]),e._v(" "),a("p",[e._v(e._s(e.race.features[e.activeTab].desc))])])]),e._v(" "),a("div",{staticClass:"stats"},[a("div",{staticClass:"statItem"})])])],2)},staticRenderFns:[]};var m=a("VU/8")(f,d,!1,function(e){a("W82j")},"data-v-2d268136",null).exports,h=a("C1Xv"),p=a.n(h),v={name:"Main",components:{RaceCard:m},data:function(){return{title:"Pick Race For ",name:"Analytica",races:p.a}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"snap"},[a("div",{staticClass:"character"},[a("div",{staticClass:"title"},[a("h1",[e._v(e._s(e.title)),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"selector"},[a("div",{staticClass:"content"},e._l(e.races,function(e){return a("RaceCard",{key:"fullName",attrs:{race:e}})}))])])},staticRenderFns:[]};var _=a("VU/8")(v,g,!1,function(e){a("sG9m")},"data-v-3facbffa",null).exports;s.a.use(c.a);var y=new c.a({routes:[{path:"/",name:"Main",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:y,components:{App:n},template:"<App/>"})},W82j:function(e,t){},sG9m:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.301fc1d19b45c4fb685f.js.map