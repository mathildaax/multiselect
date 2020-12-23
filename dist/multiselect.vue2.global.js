var VueformMultiselect=function(e){"use strict";function t(e){return String(e).toLowerCase().trim()}function n(e){return-1!==[null,void 0,!1].indexOf(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(u,r,i){var o=e.toRefs(u),c=o.options,s=o.mode,d=o.trackBy,v=o.limit,f=o.hideSelected,p=o.createTag,m=o.label,h=o.appendNewTag,y=o.multipleLabel,g=o.object,b=o.loading,k=o.delay,_=o.resolveOnLoad,w=o.minChars,O=o.filterResults,x=o.clearOnSearch,S=o.clearOnSelect,C=o.valueProp,P=i.internalValue,q=i.externalValue,V=i.search,T=i.blurSearch,B=i.clearSearch,E=i.update,D=i.blurInput,R=e.ref([]),A=e.ref([]),N=e.ref(!1),j=e.computed((function(){var e,t=A.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var n,a=t[e];return l(n={},C.value,e),l(n,d.value,a),l(n,m.value,a),n}))),t=t.map((function(e,t){var n;return"object"===a(e)?e:(l(n={},C.value,t),l(n,d.value,e),l(n,m.value,e),n)})),R.value.length&&(t=t.concat(R.value)),t})),I=e.computed((function(){var e=j.value;return F.value.length&&(e=F.value.concat(e)),V.value&&O.value&&(e=e.filter((function(e){return-1!==t(e[d.value]).indexOf(t(V.value))}))),f.value&&(e=e.filter((function(e){return!ee(e)}))),v.value>0&&(e=e.slice(0,v.value)),e})),H=e.computed((function(){switch(s.value){case"single":return!n(P.value.value);case"multiple":case"tags":return!n(P.value)&&P.value.length>0}})),U=e.computed((function(){return void 0!==y&&void 0!==y.value?y.value(P.value):P.value&&P.value.length>1?"".concat(P.value.length," options selected"):"1 option selected"})),$=e.computed((function(){return!j.value.length})),L=e.computed((function(){return j.value.length>0&&0==I.value.length})),F=e.computed((function(){var e;return!1!==p.value&&V.value?-1!==Z(V.value)?[]:[(e={},l(e,C.value,V.value),l(e,m.value,V.value),l(e,d.value,V.value),e)]:[]})),M=e.computed((function(){switch(s.value){case"single":return null;case"multiple":case"tags":return[]}})),W=e.computed((function(){return b.value||N.value})),X=function(e){switch("object"!==a(e)&&(e=Y(e)),s.value){case"single":E(e);break;case"multiple":case"tags":E(P.value.concat(e))}r.emit("select",G(e))},z=function(e){switch("object"!==a(e)&&(e=Y(e)),s.value){case"single":J();break;case"tags":case"multiple":E(P.value.filter((function(t){return t[C.value]!=e[C.value]})))}r.emit("deselect",G(e))},G=function(e){return g.value?e:e[C.value]},J=function(){E(M.value)},K=function(e){switch(s.value){case"single":return!n(P.value)&&P.value[C.value]==e[C.value];case"tags":case"multiple":return!n(P.value)&&-1!==P.value.map((function(e){return e[C.value]})).indexOf(e[C.value])}},Q=function(e){return!0===e.disabled},Y=function(e){return j.value[j.value.map((function(e){return e[C.value]})).indexOf(e)]},Z=function(e){return j.value.map((function(e){return t(e[d.value])})).indexOf(t(e))},ee=function(e){return"tags"===s.value&&f.value&&K(e)},te=function(e){R.value.push(e)},ne=function(e){return n(e)?"single"===s.value?{}:[]:g.value?e:"single"===s.value?Y(e)||{}:e.filter((function(e){return!!Y(e)})).map((function(e){return Y(e)}))};if("single"!==s.value&&!n(q.value)&&!Array.isArray(q.value))throw new Error('v-model must be an array when using "'.concat(s.value,'" mode'));return c&&"function"==typeof c.value?_.value&&(N.value=!0,c.value(V.value).then((function(e){A.value=e,N.value=!1,n(q.value)||(P.value=ne(q.value))}))):(A.value=c&&c.value?c.value:[],n(q.value)||(P.value=ne(q.value))),k.value>-1&&e.watch(V,(function(e){e.length<w.value||(x.value&&(A.value=[]),setTimeout((function(){e==V.value&&(N.value=!0,c.value(V.value).then((function(t){e==V.value&&(A.value=t),N.value=!1})))}),k.value))}),{flush:"sync"}),e.watch(q,(function(e){var t,a,l;if(n(e))P.value=ne(e);else switch(s.value){case"single":(g.value?e[C.value]!=P.value[C.value]:e!=P.value[C.value])&&(P.value=ne(e));break;case"multiple":case"tags":t=g.value?e.map((function(e){return e[C.value]})):e,a=P.value.map((function(e){return e[C.value]})),l=a.slice().sort(),t.length===a.length&&t.slice().sort().every((function(e,t){return e===l[t]}))||(P.value=ne(e))}})),{filteredOptions:I,hasSelected:H,multipleLabelText:U,extendedOptions:j,noOptions:$,noResults:L,busy:W,select:X,deselect:z,remove:function(e){z(e)},clear:J,isSelected:K,isDisabled:Q,getOption:Y,handleOptionClick:function(e){if(!Q(e))switch(s.value){case"single":if(K(e))return void z(e);J(),X(e),T(),D();break;case"multiple":if(K(e))return void z(e);X(e),S.value&&B();break;case"tags":if(K(e))return void z(e);void 0===Y(e[C.value])&&p.value&&(r.emit("tag",e[C.value]),h.value&&te(e),B()),S.value&&B(),X(e)}}}}function o(e,t,n,a,l,u,r,i,o,c){"boolean"!=typeof r&&(o=i,i=r,r=!1);var s,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,l&&(d.functional=!0)),a&&(d._scopeId=a),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},d._ssrRegister=s):t&&(s=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),s)if(d.functional){var v=d.render;d.render=function(e,t){return s.call(t),v(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,s):[s]}return n}const c={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0}},setup(t,a){const l=function(t,n){var a=e.toRefs(t),l=a.value,u=a.modelValue,r=a.mode;return{internalValue:e.ref("single"!==r.value?[]:{}),externalValue:e.computed((function(){return void 0!==n.expose?u.value:l.value}))}}(t,a),r=function(t,a,l){var u=e.toRefs(t),r=u.object,i=u.valueProp,o=u.mode,c=l.internalValue,s=function(e){return r.value||n(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},d=function(e){return n(e)?"single"===o.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);a.emit("change",t),a.emit("input",t),a.emit("update:modelValue",t)}}}(t,a,{internalValue:l.internalValue}),o=function(t,n,a){var l=e.toRefs(t),u=l.searchable,r=l.mode,i=a.internalValue,o=e.ref(null),c=e.ref(null),s=e.computed((function(){return o.value?"".concat(o.value.length,"ch"):"tags"===r.value&&-1===[null,void 0].indexOf(i.value)&&i.value.length?"1ch":"100%"}));return e.watch(o,(function(e){n.emit("search-change",e)})),{search:o,input:c,tagsSearchWidth:s,clearSearch:function(){o.value=""},blurSearch:function(){u.value&&c.value.blur()},handleSearchBackspace:function(e){""!==o.value&&e.stopPropagation()}}}(t,a,{internalValue:l.internalValue}),c=function(t,n,a){var l=e.toRefs(t),u=l.maxHeight,r=l.disabled,i=e.ref(!1),o=e.computed((function(){return"".concat(u.value,"px")}));return{isOpen:i,contentMaxHeight:o,open:function(){r.value||(i.value=!0,n.emit("open"))},close:function(){i.value=!1,n.emit("close")}}}(t,a),s=function(t,n,a){var l=e.toRefs(t),u=l.searchable,r=l.id;return{multiselect:e.ref(null),tabindex:e.computed((function(){return u.value?-1:0})),blurInput:function(){document.getElementById(r.value).querySelector(".multiselect-input").blur()}}}(t),d=i(t,a,{externalValue:l.externalValue,internalValue:l.internalValue,search:o.search,blurSearch:o.blurSearch,clearSearch:o.clearSearch,update:r.update,blurInput:s.blurInput}),v=function(t,n,a){var l=e.toRefs(t),u=l.id,r=l.valueProp,i=a.filteredOptions,o=a.handleOptionClick,c=a.search,s=e.ref(null),d=e.computed((function(){return i.value.filter((function(e){return!0!==e.disabled}))})),v=function(e){s.value=e},f=function(){s.value=d.value[0]||null},p=function(){s.value=null},m=function(){var e=document.getElementById(u.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(c,(function(e){f()})),{pointer:s,isPointed:function(e){return!!s.value&&s.value[r.value]==e[r.value]},setPointer:v,setPointerFirst:f,clearPointer:p,selectPointer:function(){s.value&&!0!==s.value.disabled?(o(s.value),p()):p()},forwardPointer:function(){if(null===s.value)v(d.value[0]||null);else{var t=d.value.map((function(e){return e[r.value]})).indexOf(s.value[r.value])+1;d.value.length<=t&&(t=0),v(d.value[t]||null)}e.nextTick((function(){m()}))},backwardPointer:function(){if(null===s.value)v(d.value[d.value.length-1]||null);else{var t=d.value.map((function(e){return e[r.value]})).indexOf(s.value[r.value])-1;t<0&&(t=d.value.length-1),v(d.value[t]||null)}e.nextTick((function(){m()}))}}}(t,0,{filteredOptions:d.filteredOptions,handleOptionClick:d.handleOptionClick,search:o.search}),f=(p={internalValue:l.internalValue,update:r.update,close:c.close,clearPointer:v.clearPointer},m=p.internalValue,h=p.update,y=p.close,g=p.clearPointer,{handleBackspace:function(e){h(u(m.value).slice(0,-1))},handleEsc:function(e){y(),g(),e.target.blur()}});var p,m,h,y,g;return{...l,...r,...o,...c,...s,...d,...v,...f}}};var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"multiselect",staticClass:"multiselect",class:["is-"+e.mode,{"is-open":e.isOpen,"is-searchable":e.searchable,"is-disabled":e.disabled,"no-caret":!e.caret}],attrs:{id:e.id},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[n("div",{staticClass:"multiselect-input",attrs:{tabindex:e.tabindex},on:{focus:e.open,blur:e.close,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEsc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectPointer(t)}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:(t.preventDefault(),e.handleBackspace(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.forwardPointer(t))}]}},["single"==e.mode&&e.hasSelected&&!e.search&&e.internalValue?[e._t("singlelabel",[n("div",{staticClass:"multiselect-single-label"},[e._v("\n          "+e._s(e.internalValue[e.label])+"\n        ")])],{value:e.internalValue})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[n("div",{staticClass:"multiselect-multiple-label"},[e._v("\n          "+e._s(e.multipleLabelText)+"\n        ")])],{values:e.internalValue})]:e._e(),e._v(" "),"tags"!==e.mode&&e.searchable&&!e.disabled?[n("div",{staticClass:"multiselect-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.open(t)},blur:function(t){return t.stopPropagation(),e.close(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.stopPropagation(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.stopPropagation(),e.forwardPointer(t))}],input:function(t){t.target.composing||(e.search=t.target.value)}}})])]:e._e(),e._v(" "),"tags"==e.mode?[n("div",{staticClass:"multiselect-tags"},[e._l(e.internalValue,(function(t,a,l){return n("span",{key:l},[e._t("tag",[n("div",{staticClass:"multiselect-tag"},[e._v("\n              "+e._s(t[e.label])+"\n              "),e.disabled?e._e():n("i",{on:{click:function(e){e.preventDefault()},mousedown:function(n){return n.preventDefault(),e.remove(t)}}})])],{option:t,remove:e.remove,disabled:e.disabled})],2)})),e._v(" "),e.searchable&&!e.disabled?n("div",{staticClass:"multiselect-search",style:{width:e.tagsSearchWidth}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",style:{width:e.tagsSearchWidth},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.open(t)},blur:function(t){return t.stopPropagation(),e.close(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.stopPropagation(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.stopPropagation(),e.forwardPointer(t))}],input:function(t){t.target.composing||(e.search=t.target.value)}}})]):e._e()],2)]:e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.placeholder&&!e.hasSelected&&!e.search,expression:"placeholder && !hasSelected && !search"}],staticClass:"multiselect-placeholder"},[e._v("\n      "+e._s(e.placeholder)+"\n    ")]),e._v(" "),n("transition",{attrs:{name:"multiselect-loading"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.busy,expression:"busy"}],staticClass:"multiselect-spinner"})])],2),e._v(" "),n("transition",{attrs:{name:"multiselect"},on:{"after-leave":e.clearSearch}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[e._t("beforelist"),e._v(" "),e._l(e.filteredOptions,(function(t,a,l){return n("a",{key:l,staticClass:"multiselect-option",class:{"is-pointed":e.isPointed(t),"is-selected":e.isSelected(t),"is-disabled":e.isDisabled(t)},attrs:{href:""},on:{mousedown:function(e){e.preventDefault()},mouseenter:function(n){return e.setPointer(t)},click:function(n){return n.stopPropagation(),n.preventDefault(),e.handleOptionClick(t)}}},[e._t("option",[n("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search})],2)})),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noOptions,expression:"noOptions"}]},[e._t("nooptions",[n("div",{staticClass:"multiselect-no-options"},[e._v(e._s(e.noOptionsText))])])],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noResults,expression:"noResults"}]},[e._t("noresults",[n("div",{staticClass:"multiselect-no-results"},[e._v(e._s(e.noResultsText))])])],2),e._v(" "),e._t("afterlist")],2)])],1)};s._withStripped=!0;return o({render:s,staticRenderFns:[]},undefined,c,undefined,false,undefined,!1,void 0,void 0,void 0)}(VueCompositionAPI);
