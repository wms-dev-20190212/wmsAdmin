{"source":"webpackJsonp([23],{\"5HJ5\":function(t,e,i){\"use strict\";var a=i(\"//Fk\"),o=i.n(a),r=i(\"8Dnh\"),n={data:function(){return{userType:\"\",flag:!0,listLoading:!0,loading:!1,list:[],total:null,listQuery:{page:1,limit:10,objName:\"\"},textMap:{update:\"编辑\",dep:\"部门详情\",role:\"角色详情\",create:\"添加\"},dialogStatus:\"\",dialogadd:!1,dialogsave:!1,dialogFormVisible:!1,auth:\"\",editorInit:{language:\"zh_CN\",plugins:[\"advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount\"],toolbar:[\"fontselect fontsizeselect  bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample\",\"hr bullist numlist link image charmap\\t preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen\"],fontsize_formats:\"8px 10px 12px 14px 18px 20px 24px 36px\",font_formats:\"微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings\",height:300,images_upload_handler:function(t,e,i){var a=new FormData;a.append(\"file\",t.blob()),Object(r.a)(a,\"1\").then(function(t){e(Vue.prototype.imgBaseUrl+t.data.savePath)}).catch(function(){i(\"上传失败，请重新上传\")})}}}},methods:{handleSizeChange:function(t){isNaN(t)||(this.listQuery.limit=t),this.loadPageList()},handleCurrentChange:function(t){isNaN(t)||(this.listQuery.page=t),this.loadPageList()},listSuccessCb:function(){var i=this;0<arguments.length&&void 0!==arguments[0]&&arguments[0];return new o.a(function(t,e){try{i.loading=!1,t([])}catch(t){e(t)}})},listExceptionCb:function(t){this.loading=!1,console.error(t)}},created:function(){this.$nextTick().then(function(){})}};e.a=n},\"8Dnh\":function(t,e,i){\"use strict\";e.a=function(t){return Object(a.a)({url:\"api/file/upload\",method:\"post\",data:t})};var a=i(\"vLgD\")},BRVK:function(t,e,i){(t.exports=i(\"FZ+f\")(!1)).push([t.i,'.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .28s;transition:opacity .28s}.fade-enter,.fade-leave-active{opacity:0}.breadcrumb-enter-active,.breadcrumb-leave-active{-webkit-transition:all .5s;transition:all .5s}.breadcrumb-enter,.breadcrumb-leave-active{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.breadcrumb-move{-webkit-transition:all .5s;transition:all .5s}.breadcrumb-leave-active{position:absolute}.el-upload input[type=file]{display:none!important}.el-upload__input{display:none}.el-table td,.el-table th.is-leaf{text-align:center}.el-dialog{-webkit-transform:none;transform:none;left:0;position:relative;margin:0 auto}.el-upload-list--picture .el-upload-list__item-thumbnail{width:auto!important}.el-button{height:30px!important;line-height:30px!important;padding:0 15px!important;border-radius:0}.el-button--primary{color:#fff;background-color:#09c!important;border-color:#09c!important}.cell .el-button{height:25px!important;line-height:25px!important;padding:0 10px!important;border-radius:0}.upload-container .el-upload{width:100%}.upload-container .el-upload .el-upload-dragger{width:100%;height:200px}.el-upload--picture-card i{font-size:16px;color:#8c939d}.editor-content img{width:120px}.el-upload--picture-card{background-color:#fbfdff;border:1px dashed #c0ccda;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;width:110px;height:110px;line-height:110px;vertical-align:top}.treeData .el-dialog__body,.treeData .el-dialog__header{padding:0!important}.el-upload-list--picture-card .el-upload-list__item{overflow:hidden;background-color:#fff;border:1px solid #c0ccda;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;width:110px;height:110px;margin:0 8px 8px 0;display:inline-block}.el-table--border td:first-child .cell,.el-table--border th:first-child .cell,.el-table .cell,.el-table th div{padding-left:0}.app-breadcrumb.el-breadcrumb{line-height:35px!important}.el-table td,.el-table th{padding:0}.el-table td{height:30px!important}.el-pagination .el-select .el-input .el-input__inner{width:120px}.el-form .el-checkbox,.el-form .el-checkbox+.el-checkbox{margin-right:30px;margin-left:0}.el-table-column--selection .cell{padding:0}.el-breadcrumb__separator{display:none!important}.area-select.large{width:294px}.area-select .area-selected-trigger{position:relative;display:block;font-size:14px;line-height:15px;cursor:pointer;margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:100%;padding:8px 20px 7px 12px}#app .main-container{height:100%;-webkit-transition:margin-left .28s;transition:margin-left .28s;margin-left:200px}#app .sidebar-container{-webkit-transition:width .28s;transition:width .28s;width:200px!important;height:100%;position:fixed;top:0;bottom:0;left:0;z-index:1001}#app .sidebar-container a{display:inline-block;width:100%}#app .sidebar-container .svg-icon{margin-right:16px}#app .sidebar-container .el-menu{border:none;width:100%}#app .hideSidebar .sidebar-container,#app .hideSidebar .sidebar-container .el-menu{width:36px!important}#app .hideSidebar .main-container{margin-left:36px;background:#ebeaef}#app .hideSidebar .submenu-title-noDropdown{padding-left:10px!important;position:relative}#app .hideSidebar .submenu-title-noDropdown span{height:0;width:0;overflow:hidden;visibility:hidden;-webkit-transition:opacity .3s cubic-bezier(.55,0,.1,1);transition:opacity .3s cubic-bezier(.55,0,.1,1);opacity:0;display:inline-block}#app .hideSidebar .submenu-title-noDropdown:hover span{display:block;border-radius:3px;z-index:1002;width:140px;height:56px;visibility:visible;position:absolute;right:-145px;text-align:left;text-indent:20px;top:0;background-color:#fff!important;opacity:1}#app .hideSidebar .el-submenu>.el-submenu__title{padding-left:10px!important}#app .hideSidebar .el-submenu>.el-submenu__title .el-submenu__icon-arrow,#app .hideSidebar .el-submenu>.el-submenu__title>span{display:none}#app .hideSidebar .el-submenu .nest-menu .el-submenu__icon-arrow{display:block!important}#app .hideSidebar .el-submenu .nest-menu span{display:inline-block!important}#app .el-submenu .el-menu-item,#app .nest-menu .el-submenu>.el-submenu__title{font-size:14px!important;min-width:180px!important}#app .el-submenu .el-menu-item:hover,#app .el-submenu .el-menu-item:visited,#app .nest-menu .el-submenu>.el-submenu__title:hover,#app .nest-menu .el-submenu>.el-submenu__title:visited{background-color:#0f1011!important}#app .el-menu-item,#app .el-submenu__title{height:40px;line-height:40px;font-size:14px}#app .el-submenu{font-size:14px}#app .el-menu--collapse .el-menu .el-submenu{min-width:180px!important}.el-table__body-wrapper{overflow-y:auto;position:relative;height:89%}.el-dialog__header{border-bottom:1px solid #d8d6d6;padding-bottom:10px}.el-dialog__body{margin-top:30px;padding:20px;color:#48576a;font-size:14px;text-align:center}.aaa{width:95%}.el-dialog__wrapper{overflow:none}.tab-container,.tab-container2{margin:10px;background:#fff;height:90%;padding:10px;color:#616265}.tab-container2{overflow-y:auto}.h100{height:100%}.paddinga{padding:5px}.paddinga15{padding:15px}.paddingr{padding-right:10px}.paddingb{padding-bottom:5px}.textr{text-align:right}.textc{text-align:center}.positionr{position:relative}.positiona{position:absolute}.positionf{position:fixed}.overflowa{overflow:auto}.dialogInner{margin-top:10px;width:30%}.fa13{font-size:13px}.fa15{font-size:15px}.displayinline{display:inline-block}.maintextc{color:#4a4848}.maintexth{height:250px}.bg{background:#fff}.mara25{margin:25px}.martop25{margin-top:25px}.martop5{margin-top:20px}.martop10{margin-top:10px}.marleft20{margin-left:20px}.paddinga25{padding:25px}.paddingl10{padding-left:10px}.paddingt5{padding-top:5px}.paddingb5{padding-bottom:5px}.maintexth200{height:200px}.maintexth100{height:100px}.maintexth400{height:400px}.fk1{background:#f978b9}.fk1,.fk2{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk2{background:#dabe70}.fk3{background:#41cdf7}.fk3,.fk4{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk4{background:#aa8fec}.fk5{background:#3c87e4}.fk5,.fk6{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk6{background:#35e68c}.bordera{border:1px solid #e6e6e6}.borderl{border-left:1px solid #e6e6e6}.borderb{border-bottom:1px solid #e6e6e6}.borderblue{border:1px solid #20a0ff}.borderred,.borderred:hover{border:1px solid red}.borderred:hover{color:red}.colorblue{color:#20a0ff}.colorred{color:red}.tools{padding:1%;height:10%;border:1px solid #ebeef5}.el-breadcrumb__item:last-child .el-breadcrumb__inner,.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner a,.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover{font-weight:400;color:#606266;border-left:2px solid #88b7e0;cursor:text;padding-left:5px}.tableH{height:70%}.pageH{height:10%}.el-dialog__footer{text-align:center}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif}body,html{height:100%}html{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}#app{height:100%}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}#mainLogo{border-bottom:1px solid #f1f2f7;background:#252a2f;color:#fff;-webkit-box-shadow:1px 0 5px rgba(0,0,0,.5);box-shadow:1px 0 5px rgba(0,0,0,.5)}button,input,textarea{overflow:visible;border:1px solid #d0cece}#app .sidebar-container{background:#252a2f!important}.iconfont i{font-size:36px;color:#6b6666}a:active,a:focus,div:focus{outline:none}a,a:focus,a:hover{cursor:pointer;color:inherit;text-decoration:none}.el-input__inner{height:30px;line-height:30px}.el-input__icon{line-height:30px!important}.showDetailTable td{width:25%}.showDetailTable tr{height:50px}.showDetailTable input{border:none;color:#48576a;background-color:none}.showDetailTable .el-input.is-disabled .el-input__inner{background-color:#fff!important;border:none;color:#48576a;padding:0}.showDetailTable .el-select .el-input .el-select__caret{color:#fff}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}table tr{height:30px}.app-main{height:100%}.app-container{padding:20px}.clickText{color:#49a2ff;cursor:pointer}.register-container{width:100%;height:100%;z-index:1;font-size:20px}.register-container .el-radio{margin:0}.register-container .el-tabs__content{overflow-y:auto;height:600px;position:relative}.register-container .content{width:100%;height:80%;position:absolute;left:50%;z-index:2;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.register-container .content .detail-content,.register-container .content .left-content{width:60%;-webkit-filter:drop-shadow(4px 4px 4px #cbbd63);filter:drop-shadow(4px 4px 4px #CBBD63)}.register-container .content .left-content{position:absolute;left:0;top:0;z-index:2;background-repeat:no-repeat;background-position:50%;background-size:cover}.register-container .content .right-content{margin:0 auto;z-index:3}.register-container .content .right-content .box-card .item{position:relative}.register-container .content .right-content .box-card .item .el-form-item{margin-top:-12px}.register-container .content .right-content .box-card .item .el-tabs__nav-wrap{width:180px;padding-left:12px;overflow:hidden}.register-container .content .right-content .box-card .item .el-form-item__label{display:block;margin-left:60px;height:36px;color:#9ba3af}.register-container .content .right-content .box-card .item .el-form-item__content .el-button{width:100px}.register-container .content .right-content .box-card .item .toLogin{display:inline-block;margin-left:20px;color:#483d8b;cursor:pointer;font-size:14px}.demo{-ms-touch-action:none;touch-action:none}.flowchart-demo .window{border:1px solid #346789;box-shadow:2px 2px 19px #aaa;-o-box-shadow:2px 2px 19px #aaa;-webkit-box-shadow:2px 2px 19px #aaa;-moz-box-shadow:2px 2px 19px #aaa;border-radius:.5em;opacity:.8;text-align:center;z-index:20;position:absolute;background-color:#222225;color:#000;font-family:helvetica,sans-serif;padding:.5em;font-size:.9em;-webkit-transition:-webkit-box-shadow .15s ease-in;transition:-webkit-box-shadow .15s ease-in;transition:box-shadow .15s ease-in;transition:box-shadow .15s ease-in,-webkit-box-shadow .15s ease-in}.jtk-endpoint{z-index:999}.flowchart-demo .window:hover{box-shadow:2px 2px 19px #444;-o-box-shadow:2px 2px 19px #444;-webkit-box-shadow:2px 2px 19px #444;-moz-box-shadow:2px 2px 19px #444;opacity:.6}.flowchart-demo .active{border:1px dotted green}.flowchart-demo .hover{border:1px dotted red}.flowchart-demo .jsplumb-connector{z-index:4}.endpointSourceLabel,.endpointTargetLabel,.flowchart-demo .aLabel,.flowchart-demo .jsplumb-endpoint{z-index:21;cursor:pointer}.flowchart-demo .aLabel{background-color:#fff;padding:.4em;font:12px sans-serif;color:#444;border:1px dotted gray;opacity:.8}.flowchart-demo .aLabel.jsplumb-hover{background-color:#5c96bc;color:#fff;border:1px solid #fff}.window.jsplumb-connected{border:2px solid green}.jsplumb-drag{outline:4px solid pink!important}.jsplumb-endpoint,path{cursor:pointer}.jsplumb-overlay{background-color:transparent}.iconfont .icon-star:hover{color:#ffda95}.qrClass{z-index:10000;color:#fff;position:absolute;margin:0;padding:5px}.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:#09c!important;border-color:#09c!important}.el-radio__input.is-checked .el-radio__inner{border-color:#09c!important;background:#09c!important}.el-radio{color:#606266;font-weight:500;line-height:1;cursor:pointer;white-space:nowrap;outline:0;position:relative!important;top:4px!important}',\"\"])},\"I/UN\":function(t,e,i){\"use strict\";var a={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a(\"div\",{staticClass:\"tab-container\"},[a(\"div\",{staticClass:\"tools\"},[a(\"div\",{staticClass:\"paddingb textl paddingr\"},[a(\"el-input\",{staticStyle:{width:\"20%\"},attrs:{placeholder:\"可根据类型名称 查询\"},model:{value:i.input.objName,callback:function(t){i.$set(i.input,\"objName\",t)},expression:\"input.objName\"}}),i._v(\" \"),a(\"el-button\",{staticStyle:{\"margin-left\":\"20px\"},attrs:{type:\"primary\",icon:\"el-icon-search\"},on:{click:i.loadPageList}}),i._v(\" \"),a(\"el-button\",{staticStyle:{\"margin-left\":\"10px\"},attrs:{type:\"primary\",icon:\"el-icon-edit\"},on:{click:i.handleCreate}},[i._v(\"添加工序类型\")])],1)]),i._v(\" \"),a(\"el-table\",{directives:[{name:\"loading\",rawName:\"v-loading\",value:i.loading,expression:\"loading\"}],staticClass:\"tableH\",staticStyle:{\"margin-top\":\"20px\",width:\"100%\",\"font-size\":\"12px\"},attrs:{data:i.list,border:\"\"}},[a(\"el-table-column\",{attrs:{type:\"index\",width:\"50\",align:\"center\",label:\"ID\"}}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"类型名称\"},scopedSlots:i._u([{key:\"default\",fn:function(t){return[a(\"span\",[i._v(i._s(t.row.productName))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"描述\"},scopedSlots:i._u([{key:\"default\",fn:function(t){return[a(\"span\",[i._v(\"\\n          \"+i._s(t.row.productionDes))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"操作\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"el-button\",{staticClass:\"el-icon-edit colorblue borderblue\",attrs:{size:\"small\",type:\"\"},on:{click:function(t){i.handleEdit(e.row,\"edit\")}}}),i._v(\" \"),a(\"el-button\",{staticClass:\"el-icon-delete colorred borderred\",attrs:{size:\"small\",type:\"\"},on:{click:function(t){i.handleEdit(e.row,\"del\")}}})]}}])})],1),i._v(\" \"),a(\"div\",{staticClass:\"pagination-container pageH\",staticStyle:{\"padding-top\":\"20px\"}},[a(\"el-pagination\",{attrs:{\"page-sizes\":[10,20,30,50],\"page-size\":i.listQuery.limit,layout:\"total, sizes, prev, pager, next, jumper\",total:i.total},on:{\"size-change\":i.handleSizeChange,\"current-change\":i.handleCurrentChange}})],1),i._v(\" \"),a(\"el-dialog\",{attrs:{title:i.textMap[i.dialogStatus],visible:i.dialogFormVisible,width:\"30%\",top:\"5%\"},on:{\"update:visible\":function(t){i.dialogFormVisible=t}}},[a(\"el-form\",{staticStyle:{\"text-align\":\"left\"},attrs:{\"label-width\":\"20%\"}},[a(\"el-row\",{attrs:{gutter:24}},[a(\"el-form-item\",{attrs:{label:\"工序名称\"}},[a(\"el-input\",{staticStyle:{width:\"80%\"},attrs:{placeholder:\"请输入工序名称\"},model:{value:i.obj.productName,callback:function(t){i.$set(i.obj,\"productName\",t)},expression:\"obj.productName\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"描述\"}},[a(\"el-input\",{staticStyle:{width:\"80%\"},attrs:{placeholder:\"请输入描述\"},model:{value:i.obj.productionDes,callback:function(t){i.$set(i.obj,\"productionDes\",t)},expression:\"obj.productionDes\"}})],1)],1)],1),i._v(\" \"),a(\"span\",{staticClass:\"dialog-footer\",attrs:{slot:\"footer\"},slot:\"footer\"},[1==i.dialogadd?a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){i.addCreate(i.obj)}}},[i._v(\"添加\")]):i._e(),i._v(\" \"),1==i.dialogsave?a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){i.saveCreate(i.obj)}}},[i._v(\"修改\")]):i._e(),i._v(\" \"),a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){i.dialogFormVisible=!1}}},[i._v(\"关闭\")])],1)],1),i._v(\" \"),a(\"el-dialog\",{attrs:{title:i.tableName,visible:i.dialogFormTable,width:\"60%\",top:\"5%\"},on:{\"update:visible\":function(t){i.dialogFormTable=t}}},[a(\"table\",{directives:[{name:\"show\",rawName:\"v-show\",value:\"PHC管桩工序生产记录及检验表(钢筋、模板)\"==i.tableName,expression:\"tableName == 'PHC管桩工序生产记录及检验表(钢筋、模板)'\"}],attrs:{border:\"1\",cellpadding:\"10\",cellspacing:\"0\"}},[a(\"col\",{attrs:{width:\"84\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"186\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"255\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"253\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"72\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"269\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"148\"}}),i._v(\" \"),a(\"col\",{attrs:{width:\"110\"}}),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r0\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\"},attrs:{colspan:\"2\",id:\"tc0\",rowspan:\"2\",height:\"36\"}},[i._v(\"工序名称\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\",width:\"191.25pt\"},attrs:{rowspan:\"2\",height:\"36\",width:\"255\"}},[i._v(i._s(i.obj.productName))]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\",width:\"189.75pt\"},attrs:{rowspan:\"2\",height:\"36\",width:\"253\"}},[i._v(\"型号规格\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"2\",id:\"tc1\"}},[i._v(\"中800口中1000日步1200日长度(m)\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{width:\"111pt\"},attrs:{rowspan:\"2\",width:\"148\"}},[i._v(\"制桩编号\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\",width:\"82.5pt\"},attrs:{rowspan:\"2\",height:\"36\",width:\"110\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r1\"}},[a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"2\",id:\"tc2\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r2\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{colspan:\"2\",id:\"tc3\",height:\"18\"}},[i._v(\"生产日期\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"2018 年 10月 12日\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"班次\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"2\",id:\"tc4\"}},[i._v(\"白班\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"钢筋笼编号\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r3\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"序号\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"工序\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc5\"}},[i._v(\"情况记录\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"班组质检员\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"公司质检员\")])]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r4\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"1\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"下料、锁头\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc6\"}}),i._v(\" \"),a(\"td\",{attrs:{rowspan:\"2\"}}),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\"},attrs:{rowspan:\"2\",height:\"36\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r5\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"2\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{overflow:\"hidden\"}},[i._v(\"钢筋笼制作（含透气孔安装)\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc7\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r6\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"3\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"管模拼接\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc8\"}},[i._v(\"钢模\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\"},attrs:{rowspan:\"3\",height:\"36\"}}),i._v(\" \"),a(\"td\",{attrs:{rowspan:\"6\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r7\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"4\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"清模、涂刷脱模剂\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc9\"}},[i._v(\"检查模板清洁、涂刷均匀无厚积\")])]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r8\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"13.5pt\"},attrs:{height:\"18\"}},[i._v(\"5\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"端板检查,安装钢筋笼入模\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc10\"}},[i._v(\"检查端板外观、丝牙\"),a(\"span\",{staticStyle:{\"mso-spacerun\":\"yes\"}},[i._v(\"   \")]),i._v(\"检查钢筋笼是否有扭曲、起拱\")])]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r9\"}},[a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"40.5pt\"},attrs:{rowspan:\"3\",height:\"54\"}},[i._v(\"6\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"40.5pt\",overflow:\"hidden\"},attrs:{rowspan:\"3\",height:\"54\"}},[i._v(\"张拉环、反力板(连接器)安\"),a(\"span\",{staticStyle:{display:\"none\"}},[i._v(\"装\")])]),i._v(\" \"),a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"3\",id:\"tc11\"}},[i._v(\"反力板端:绿栓是否反复打入\"),a(\"span\",{staticStyle:{\"mso-spacerun\":\"yes\"}},[i._v(\"   \")]),i._v(\"对拉螺栓数量\")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"操作人:  \"),a(\"el-input\",{staticStyle:{width:\"50%\"},attrs:{placeholder:\"输入姓名\"}})],1),i._v(\" \"),a(\"td\",{staticClass:\"x69\",staticStyle:{height:\"27pt\"},attrs:{rowspan:\"3\",height:\"36\"}})]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r10\"}},[a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"3\",id:\"tc12\"}},[i._v(\"张拉环端:螺栓是否反复打入\"),a(\"span\",{staticStyle:{\"mso-spacerun\":\"yes\"}},[i._v(\"  \")]),i._v(\"对拉螺栓数量 \")]),i._v(\" \"),a(\"td\",{staticClass:\"x69\"},[i._v(\"操作人:  \"),a(\"el-input\",{staticStyle:{width:\"50%\"},attrs:{placeholder:\"输入姓名\"}})],1)]),i._v(\" \"),a(\"tr\",{staticStyle:{\"mso-height-source\":\"userset\",height:\"13.5pt\"},attrs:{height:\"18\",id:\"r11\"}},[a(\"td\",{staticClass:\"x69\",attrs:{colspan:\"4\",id:\"tc13\"}},[i._v(\"异常情况:\")])]),i._v(\" \"),a(\"tr\",{staticStyle:{display:\"none\"},attrs:{height:\"0\"}},[a(\"td\",{staticStyle:{width:\"63pt\"},attrs:{width:\"84\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"139.5pt\"},attrs:{width:\"186\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"191.25pt\"},attrs:{width:\"255\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"189.75pt\"},attrs:{width:\"253\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"54pt\"},attrs:{width:\"72\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"201.75pt\"},attrs:{width:\"269\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"111pt\"},attrs:{width:\"148\"}}),i._v(\" \"),a(\"td\",{staticStyle:{width:\"82.5pt\"},attrs:{width:\"110\"}})])]),i._v(\" \"),a(\"span\",{staticClass:\"dialog-footer\",attrs:{slot:\"footer\"},slot:\"footer\"},[a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(t){i.addCreate(i.obj)}}},[i._v(\"保存\")])],1)])],1)},staticRenderFns:[]};e.a=a},ax4h:function(t,e,i){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var a=i(\"orZ4\"),o=i(\"I/UN\");var r=function(t){i(\"ublb\")},n=i(\"VU/8\")(a.a,o.a,!1,r,null,null);e.default=n.exports},orZ4:function(t,e,i){\"use strict\";var a=i(\"Xxa5\"),n=i.n(a),o=i(\"exGp\"),s=i.n(o),r=i(\"5HJ5\"),l=i(\"vMJZ\");e.a={mixins:[r.a],data:function(){return{tableName:\"\",dialogFormTable:!1,input:{objName:\"\",userType:\"\",status:\"\"},obj:{productName:\"\",production:\"\",productType:\"\",productionDes:\"\"},list:[{id:\"1\",productName:\"钢筋笼\",productType:1,productionDes:\"工序描述\"},{id:\"1\",productName:\"管桩生产工序\",productType:2,productionDes:\"工序描述\"}]}},created:function(){},mounted:function(){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.userType=window.sessionStorage.getItem(\"userType\");case 2:case\"end\":return t.stop()}},t,e)}))()},computed:{},methods:{RsetDefPwd:function(o){var r=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.$confirm(\"此操作将密码重置, 是否继续?\",\"提示\",{confirmButtonText:\"确定\",cancelButtonText:\"取消\",type:\"warning\"}).then(s()(n.a.mark(function t(){var e,i,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e={}).id=o.id,t.next=4,setDefPwd(e);case 4:i=t.sent,i.data,a=i.success,i.message,a&&r.$message({type:\"success\",message:\"重置成功！\"});case 9:case\"end\":return t.stop()}},t,r)}))).catch(function(){r.$message({type:\"info\",message:\"取消重置\"})});case 1:case\"end\":return t.stop()}},t,r)}))()},loadPageList:function(){var a=this;return s()(n.a.mark(function t(){var e,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.input?(a.listQuery.objName=a.input.objName,a.listQuery.userType=a.input.userType,a.listQuery.status=a.input.status):a.listQuery.objName=\"\",t.next=3,Object(l.d)(a.listQuery);case 3:e=t.sent,i=e.data,e.success&&(a.list=i.list,a.loading=!1);case 7:case\"end\":return t.stop()}},t,a)}))()},handleCreate:function(){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogStatus=\"create\",e.dialogFormVisible=!0,e.dialogadd=!0,e.dialogsave=!1,e.obj={productName:\"\",production:\"\",productType:\"\",productionDes:\"\"};case 5:case\"end\":return t.stop()}},t,e)}))()},addCreate:function(t){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogFormVisible=!1,e.list.push(e.obj);case 2:case\"end\":return t.stop()}},t,e)}))()},saveCreate:function(t){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogFormVisible=!1;case 1:case\"end\":return t.stop()}},t,e)}))()},handleEdit:function(e,i){var a=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:\"edit\"===i?(a.obj=e,a.dialogStatus=\"update\",a.dialogsave=!0,a.dialogadd=!1,a.dialogFormVisible=!0):\"del\"===i&&a.$confirm(\"此操作将删除该记录, 是否继续?\",\"提示\",{confirmButtonText:\"确定\",cancelButtonText:\"取消\",type:\"warning\"}).then(s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.list.splice(a.list.indexOf(e),1),a.$message({type:\"success\",message:\"删除成功!\"});case 2:case\"end\":return t.stop()}},t,a)}))).catch(function(){a.$message({type:\"info\",message:\"已取消删除\"})});case 1:case\"end\":return t.stop()}},t,a)}))()},handleShow:function(e,t){var i=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:1==(i.obj=e).productType?i.tableName=\"PHC管桩工序生产记录及检验表(钢筋、模板)\":i.tableName=\"PHC管桩工序生产记录及检验表(砼浇筑、张拉、离心、养护、放松、脱模)\",i.dialogFormTable=!0;case 3:case\"end\":return t.stop()}},t,i)}))()}}}},ublb:function(t,e,i){var a=i(\"BRVK\");\"string\"==typeof a&&(a=[[t.i,a,\"\"]]),a.locals&&(t.exports=a.locals);i(\"rjj0\")(\"55ba5a5e\",a,!0)}});"}