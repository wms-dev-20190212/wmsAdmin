{"source":"webpackJsonp([7],{\"5HJ5\":function(e,t,i){\"use strict\";var a=i(\"//Fk\"),o=i.n(a),n=i(\"8Dnh\"),r={data:function(){return{userType:\"\",flag:!0,listLoading:!0,loading:!1,list:[],total:null,listQuery:{page:1,limit:10,objName:\"\"},textMap:{update:\"编辑\",dep:\"部门详情\",role:\"角色详情\",create:\"添加\"},dialogStatus:\"\",dialogadd:!1,dialogsave:!1,dialogFormVisible:!1,auth:\"\",editorInit:{language:\"zh_CN\",plugins:[\"advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount\"],toolbar:[\"fontselect fontsizeselect  bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample\",\"hr bullist numlist link image charmap\\t preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen\"],fontsize_formats:\"8px 10px 12px 14px 18px 20px 24px 36px\",font_formats:\"微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings\",height:300,images_upload_handler:function(e,t,i){var a=new FormData;a.append(\"file\",e.blob()),Object(n.a)(a,\"1\").then(function(e){t(Vue.prototype.imgBaseUrl+e.data.savePath)}).catch(function(){i(\"上传失败，请重新上传\")})}}}},methods:{handleSizeChange:function(e){isNaN(e)||(this.listQuery.limit=e),this.loadPageList()},handleCurrentChange:function(e){isNaN(e)||(this.listQuery.page=e),this.loadPageList()},listSuccessCb:function(){var i=this;0<arguments.length&&void 0!==arguments[0]&&arguments[0];return new o.a(function(e,t){try{i.loading=!1,e([])}catch(e){t(e)}})},listExceptionCb:function(e){this.loading=!1,console.error(e)}},created:function(){this.$nextTick().then(function(){})}};t.a=r},\"8Dnh\":function(e,t,i){\"use strict\";t.a=function(e){return Object(a.a)({url:\"api/file/upload\",method:\"post\",data:e})};var a=i(\"vLgD\")},\"8OMw\":function(e,t,i){\"use strict\";t.e=function(e){return Object(a.a)({url:\"/api/goodsTypeList?userId=\"+window.sessionStorage.getItem(\"userId\"),method:\"get\"})},t.d=function(e){return Object(a.a)({url:\"/api/goodsTypeAllList?userId=\"+window.sessionStorage.getItem(\"userId\"),method:\"get\"})},t.a=function(e){return Object(a.a)({url:\"/api/goodsTypeList\",method:\"post\",data:e})},t.c=function(e){return Object(a.a)({url:\"/api/goodsTypeList\",method:\"put\",data:e})},t.b=function(e){return Object(a.a)({url:\"/api/goodsTypeList/\"+e,method:\"delete\"})};var a=i(\"vLgD\")},MdU5:function(e,t,i){(e.exports=i(\"FZ+f\")(!1)).push([e.i,'.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .28s;transition:opacity .28s}.fade-enter,.fade-leave-active{opacity:0}.breadcrumb-enter-active,.breadcrumb-leave-active{-webkit-transition:all .5s;transition:all .5s}.breadcrumb-enter,.breadcrumb-leave-active{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.breadcrumb-move{-webkit-transition:all .5s;transition:all .5s}.breadcrumb-leave-active{position:absolute}.el-upload input[type=file]{display:none!important}.el-upload__input{display:none}.el-table td,.el-table th.is-leaf{text-align:center}.el-dialog{-webkit-transform:none;transform:none;left:0;position:relative;margin:0 auto}.el-upload-list--picture .el-upload-list__item-thumbnail{width:auto!important}.el-button{height:30px!important;line-height:30px!important;padding:0 15px!important;border-radius:0}.el-button--primary{color:#fff;background-color:#09c!important;border-color:#09c!important}.cell .el-button{height:25px!important;line-height:25px!important;padding:0 10px!important;border-radius:0}.upload-container .el-upload{width:100%}.upload-container .el-upload .el-upload-dragger{width:100%;height:200px}.el-upload--picture-card i{font-size:16px;color:#8c939d}.editor-content img{width:120px}.el-upload--picture-card{background-color:#fbfdff;border:1px dashed #c0ccda;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;width:110px;height:110px;line-height:110px;vertical-align:top}.treeData .el-dialog__body,.treeData .el-dialog__header{padding:0!important}.el-upload-list--picture-card .el-upload-list__item{overflow:hidden;background-color:#fff;border:1px solid #c0ccda;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;width:110px;height:110px;margin:0 8px 8px 0;display:inline-block}.el-table--border td:first-child .cell,.el-table--border th:first-child .cell,.el-table .cell,.el-table th div{padding-left:0}.app-breadcrumb.el-breadcrumb{line-height:35px!important}.el-table td,.el-table th{padding:0}.el-table td{height:30px!important}.el-pagination .el-select .el-input .el-input__inner{width:120px}.el-form .el-checkbox,.el-form .el-checkbox+.el-checkbox{margin-right:30px;margin-left:0}.el-table-column--selection .cell{padding:0}.el-breadcrumb__separator{display:none!important}.area-select.large{width:294px}.area-select .area-selected-trigger{position:relative;display:block;font-size:14px;line-height:15px;cursor:pointer;margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:100%;padding:8px 20px 7px 12px}#app .main-container{height:100%;-webkit-transition:margin-left .28s;transition:margin-left .28s;margin-left:200px}#app .sidebar-container{-webkit-transition:width .28s;transition:width .28s;width:200px!important;height:100%;position:fixed;top:0;bottom:0;left:0;z-index:1001}#app .sidebar-container a{display:inline-block;width:100%}#app .sidebar-container .svg-icon{margin-right:16px}#app .sidebar-container .el-menu{border:none;width:100%}#app .hideSidebar .sidebar-container,#app .hideSidebar .sidebar-container .el-menu{width:36px!important}#app .hideSidebar .main-container{margin-left:36px;background:#ebeaef}#app .hideSidebar .submenu-title-noDropdown{padding-left:10px!important;position:relative}#app .hideSidebar .submenu-title-noDropdown span{height:0;width:0;overflow:hidden;visibility:hidden;-webkit-transition:opacity .3s cubic-bezier(.55,0,.1,1);transition:opacity .3s cubic-bezier(.55,0,.1,1);opacity:0;display:inline-block}#app .hideSidebar .submenu-title-noDropdown:hover span{display:block;border-radius:3px;z-index:1002;width:140px;height:56px;visibility:visible;position:absolute;right:-145px;text-align:left;text-indent:20px;top:0;background-color:#fff!important;opacity:1}#app .hideSidebar .el-submenu>.el-submenu__title{padding-left:10px!important}#app .hideSidebar .el-submenu>.el-submenu__title .el-submenu__icon-arrow,#app .hideSidebar .el-submenu>.el-submenu__title>span{display:none}#app .hideSidebar .el-submenu .nest-menu .el-submenu__icon-arrow{display:block!important}#app .hideSidebar .el-submenu .nest-menu span{display:inline-block!important}#app .el-submenu .el-menu-item,#app .nest-menu .el-submenu>.el-submenu__title{font-size:14px!important;min-width:180px!important}#app .el-submenu .el-menu-item:hover,#app .el-submenu .el-menu-item:visited,#app .nest-menu .el-submenu>.el-submenu__title:hover,#app .nest-menu .el-submenu>.el-submenu__title:visited{background-color:#0f1011!important}#app .el-menu-item,#app .el-submenu__title{height:40px;line-height:40px;font-size:14px}#app .el-submenu{font-size:14px}#app .el-menu--collapse .el-menu .el-submenu{min-width:180px!important}.el-table__body-wrapper{overflow-y:auto;position:relative;height:89%}.el-dialog__header{border-bottom:1px solid #d8d6d6;padding-bottom:10px}.el-dialog__body{margin-top:30px;padding:20px;color:#48576a;font-size:14px;text-align:center}.aaa{width:95%}.el-dialog__wrapper{overflow:none}.tab-container,.tab-container2{margin:10px;background:#fff;height:90%;padding:10px;color:#616265}.tab-container2{overflow-y:auto}.h100{height:100%}.paddinga{padding:5px}.paddinga15{padding:15px}.paddingr{padding-right:10px}.paddingb{padding-bottom:5px}.textr{text-align:right}.textc{text-align:center}.positionr{position:relative}.positiona{position:absolute}.positionf{position:fixed}.overflowa{overflow:auto}.dialogInner{margin-top:10px;width:30%}.fa13{font-size:13px}.fa15{font-size:15px}.displayinline{display:inline-block}.maintextc{color:#4a4848}.maintexth{height:250px}.bg{background:#fff}.mara25{margin:25px}.martop25{margin-top:25px}.martop5{margin-top:20px}.martop10{margin-top:10px}.marleft20{margin-left:20px}.paddinga25{padding:25px}.paddingl10{padding-left:10px}.paddingt5{padding-top:5px}.paddingb5{padding-bottom:5px}.maintexth200{height:200px}.maintexth100{height:100px}.maintexth400{height:400px}.fk1{background:#f978b9}.fk1,.fk2{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk2{background:#dabe70}.fk3{background:#41cdf7}.fk3,.fk4{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk4{background:#aa8fec}.fk5{background:#3c87e4}.fk5,.fk6{position:absolute;width:5px;height:5px;line-height:12px;margin:1px;padding:5px}.fk6{background:#35e68c}.bordera{border:1px solid #e6e6e6}.borderl{border-left:1px solid #e6e6e6}.borderb{border-bottom:1px solid #e6e6e6}.borderblue{border:1px solid #20a0ff}.borderred,.borderred:hover{border:1px solid red}.borderred:hover{color:red}.colorblue{color:#20a0ff}.colorred{color:red}.tools{padding:1%;height:10%;border:1px solid #ebeef5}.el-breadcrumb__item:last-child .el-breadcrumb__inner,.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner a,.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover{font-weight:400;color:#606266;border-left:2px solid #88b7e0;cursor:text;padding-left:5px}.tableH{height:70%}.pageH{height:10%}.el-dialog__footer{text-align:center}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif}body,html{height:100%}html{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}#app{height:100%}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}#mainLogo{border-bottom:1px solid #f1f2f7;background:#252a2f;color:#fff;-webkit-box-shadow:1px 0 5px rgba(0,0,0,.5);box-shadow:1px 0 5px rgba(0,0,0,.5)}button,input,textarea{overflow:visible;border:1px solid #d0cece}#app .sidebar-container{background:#252a2f!important}.iconfont i{font-size:36px;color:#6b6666}a:active,a:focus,div:focus{outline:none}a,a:focus,a:hover{cursor:pointer;color:inherit;text-decoration:none}.el-input__inner{height:30px;line-height:30px}.el-input__icon{line-height:30px!important}.showDetailTable td{width:25%}.showDetailTable tr{height:50px}.showDetailTable input{border:none;color:#48576a;background-color:none}.showDetailTable .el-input.is-disabled .el-input__inner{background-color:#fff!important;border:none;color:#48576a;padding:0}.showDetailTable .el-select .el-input .el-select__caret{color:#fff}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}table tr{height:30px}.app-main{height:100%}.app-container{padding:20px}.clickText{color:#49a2ff;cursor:pointer}.register-container{width:100%;height:100%;z-index:1;font-size:20px}.register-container .el-radio{margin:0}.register-container .el-tabs__content{overflow-y:auto;height:600px;position:relative}.register-container .content{width:100%;height:80%;position:absolute;left:50%;z-index:2;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.register-container .content .detail-content,.register-container .content .left-content{width:60%;-webkit-filter:drop-shadow(4px 4px 4px #cbbd63);filter:drop-shadow(4px 4px 4px #CBBD63)}.register-container .content .left-content{position:absolute;left:0;top:0;z-index:2;background-repeat:no-repeat;background-position:50%;background-size:cover}.register-container .content .right-content{margin:0 auto;z-index:3}.register-container .content .right-content .box-card .item{position:relative}.register-container .content .right-content .box-card .item .el-form-item{margin-top:-12px}.register-container .content .right-content .box-card .item .el-tabs__nav-wrap{width:180px;padding-left:12px;overflow:hidden}.register-container .content .right-content .box-card .item .el-form-item__label{display:block;margin-left:60px;height:36px;color:#9ba3af}.register-container .content .right-content .box-card .item .el-form-item__content .el-button{width:100px}.register-container .content .right-content .box-card .item .toLogin{display:inline-block;margin-left:20px;color:#483d8b;cursor:pointer;font-size:14px}.demo{-ms-touch-action:none;touch-action:none}.flowchart-demo .window{border:1px solid #346789;box-shadow:2px 2px 19px #aaa;-o-box-shadow:2px 2px 19px #aaa;-webkit-box-shadow:2px 2px 19px #aaa;-moz-box-shadow:2px 2px 19px #aaa;border-radius:.5em;opacity:.8;text-align:center;z-index:20;position:absolute;background-color:#222225;color:#000;font-family:helvetica,sans-serif;padding:.5em;font-size:.9em;-webkit-transition:-webkit-box-shadow .15s ease-in;transition:-webkit-box-shadow .15s ease-in;transition:box-shadow .15s ease-in;transition:box-shadow .15s ease-in,-webkit-box-shadow .15s ease-in}.jtk-endpoint{z-index:999}.flowchart-demo .window:hover{box-shadow:2px 2px 19px #444;-o-box-shadow:2px 2px 19px #444;-webkit-box-shadow:2px 2px 19px #444;-moz-box-shadow:2px 2px 19px #444;opacity:.6}.flowchart-demo .active{border:1px dotted green}.flowchart-demo .hover{border:1px dotted red}.flowchart-demo .jsplumb-connector{z-index:4}.endpointSourceLabel,.endpointTargetLabel,.flowchart-demo .aLabel,.flowchart-demo .jsplumb-endpoint{z-index:21;cursor:pointer}.flowchart-demo .aLabel{background-color:#fff;padding:.4em;font:12px sans-serif;color:#444;border:1px dotted gray;opacity:.8}.flowchart-demo .aLabel.jsplumb-hover{background-color:#5c96bc;color:#fff;border:1px solid #fff}.window.jsplumb-connected{border:2px solid green}.jsplumb-drag{outline:4px solid pink!important}.jsplumb-endpoint,path{cursor:pointer}.jsplumb-overlay{background-color:transparent}.iconfont .icon-star:hover{color:#ffda95}.qrClass{z-index:10000;color:#fff;position:absolute;margin:0;padding:5px}.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:#09c!important;border-color:#09c!important}.el-radio__input.is-checked .el-radio__inner{border-color:#09c!important;background:#09c!important}.el-radio{color:#606266;font-weight:500;line-height:1;cursor:pointer;white-space:nowrap;outline:0;position:relative!important;top:4px!important}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:110px;height:110px;line-height:110px;text-align:center}.avatar{width:110px;height:110px;display:block}.el-input-number__decrease,.el-input-number__increase{height:30px;line-height:30px;margin:3px 0}',\"\"])},ZxjI:function(e,t,i){var a=i(\"MdU5\");\"string\"==typeof a&&(a=[[e.i,a,\"\"]]),a.locals&&(e.exports=a.locals);i(\"rjj0\")(\"4f579818\",a,!0)},bAnv:function(e,t,i){\"use strict\";var a={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a(\"div\",{staticClass:\"tab-container\"},[a(\"div\",{staticClass:\"tools\"},[a(\"div\",{staticClass:\"paddingb textl paddingr\"},[a(\"el-input\",{staticStyle:{width:\"20%\"},attrs:{placeholder:\"可根据货品名称 查询\"},model:{value:i.input.objName,callback:function(e){i.$set(i.input,\"objName\",e)},expression:\"input.objName\"}}),i._v(\" \"),a(\"el-button\",{staticStyle:{\"margin-left\":\"20px\"},attrs:{type:\"primary\",icon:\"el-icon-search\"},on:{click:i.loadPageList}}),i._v(\" \"),a(\"el-button\",{staticStyle:{\"margin-left\":\"10px\"},attrs:{type:\"primary\",icon:\"el-icon-edit\"},on:{click:i.handleCreate}},[i._v(\"添加货物\")])],1)]),i._v(\" \"),a(\"el-table\",{directives:[{name:\"loading\",rawName:\"v-loading\",value:i.loading,expression:\"loading\"}],staticClass:\"tableH\",staticStyle:{\"margin-top\":\"20px\",width:\"100%\",\"font-size\":\"12px\"},attrs:{data:i.list,border:\"\"}},[a(\"el-table-column\",{attrs:{type:\"index\",width:\"50\",align:\"center\",label:\"ID\"}}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"货品图片\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"img\",{attrs:{src:e.row.thumbUrl,alt:\"\"}})]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"货品名称\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(i._s(e.row.name))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"分类\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.goodsType))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"编号\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.encode))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"货品条码\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.barcode))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"实际库存数量\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.size))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"计量单位\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.unit))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"库存上限\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.upperlimit))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"库存下限\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.lowerlimit))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"入库参考价\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.inprice))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"出库参考价\"},scopedSlots:i._u([{key:\"default\",fn:function(e){return[a(\"span\",[i._v(\"\\r\\n          \"+i._s(e.row.outprice))])]}}])}),i._v(\" \"),a(\"el-table-column\",{attrs:{align:\"center\",label:\"操作\"},scopedSlots:i._u([{key:\"default\",fn:function(t){return[a(\"el-button\",{staticClass:\"el-icon-edit colorblue borderblue\",attrs:{size:\"small\",type:\"\"},on:{click:function(e){i.handleEdit(t.row,\"edit\")}}}),i._v(\" \"),a(\"el-button\",{staticClass:\"el-icon-delete colorred borderred\",attrs:{size:\"small\",type:\"\"},on:{click:function(e){i.handleEdit(t.row,\"del\")}}})]}}])})],1),i._v(\" \"),a(\"div\",{staticClass:\"pagination-container pageH\",staticStyle:{\"padding-top\":\"20px\"}},[a(\"el-pagination\",{attrs:{\"page-sizes\":[10,20,30,50],\"page-size\":i.listQuery.limit,layout:\"total, sizes, prev, pager, next, jumper\",total:i.total},on:{\"size-change\":i.handleSizeChange,\"current-change\":i.handleCurrentChange}})],1),i._v(\" \"),a(\"el-dialog\",{attrs:{title:i.textMap[i.dialogStatus],visible:i.dialogFormVisible,width:\"70%\",top:\"5%\"},on:{\"update:visible\":function(e){i.dialogFormVisible=e}}},[a(\"el-form\",{staticStyle:{\"text-align\":\"left\"},attrs:{\"label-width\":\"20%\"}},[a(\"el-row\",{attrs:{gutter:24}},[a(\"el-form-item\",{attrs:{label:\"货品图片\"}},[a(\"el-upload\",{ref:\"my-upload\",staticClass:\"avatar-uploader\",attrs:{action:\"\",accept:\".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF\",\"before-upload\":i.beforeUploadImg,\"http-request\":i.uploadSectionFile,\"show-file-list\":!1}},[i.obj.thumbUrl?a(\"img\",{staticClass:\"avatar\",attrs:{src:i.obj.thumbUrl}}):a(\"i\",{staticClass:\"el-icon-plus avatar-uploader-icon\"})])],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"货品名称\"}},[a(\"el-input\",{staticStyle:{width:\"30%\"},attrs:{placeholder:\"请输入货品名称\"},model:{value:i.obj.name,callback:function(e){i.$set(i.obj,\"name\",e)},expression:\"obj.name\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"分类\"}},[a(\"el-select\",{staticStyle:{width:\"150px\"},attrs:{placeholder:\"请选择\"},model:{value:i.obj.maintype,callback:function(e){i.$set(i.obj,\"maintype\",e)},expression:\"obj.maintype\"}},i._l(i.goodsTypeData,function(e){return a(\"el-option\",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"编号\"}},[a(\"el-input\",{staticStyle:{width:\"30%\"},attrs:{placeholder:\"请输入编号\"},model:{value:i.obj.encode,callback:function(e){i.$set(i.obj,\"encode\",e)},expression:\"obj.encode\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"货品条码\"}},[a(\"el-input\",{staticStyle:{width:\"30%\"},attrs:{placeholder:\"请输入货品条码\"},model:{value:i.obj.barcode,callback:function(e){i.$set(i.obj,\"barcode\",e)},expression:\"obj.barcode\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"实际库存数量\"}},[a(\"el-input\",{staticStyle:{width:\"30%\"},attrs:{placeholder:\"请输入规格型号\"},model:{value:i.obj.size,callback:function(e){i.$set(i.obj,\"size\",e)},expression:\"obj.size\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"计量单位\"}},[a(\"el-select\",{staticStyle:{width:\"150px\"},attrs:{placeholder:\"请选择\"},model:{value:i.obj.unit,callback:function(e){i.$set(i.obj,\"unit\",e)},expression:\"obj.unit\"}},[a(\"el-option\",{key:\"0\",attrs:{label:\"斤\",value:\"0\"}})],1)],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"库存范围\"}},[a(\"el-input-number\",{staticStyle:{width:\"15%\"},attrs:{placeholder:\"请输入库存上限\"},model:{value:i.obj.upperlimit,callback:function(e){i.$set(i.obj,\"upperlimit\",e)},expression:\"obj.upperlimit\"}}),i._v(\" \"),a(\"el-input-number\",{staticStyle:{width:\"15%\"},attrs:{placeholder:\"请输入库存下限\"},model:{value:i.obj.lowerlimit,callback:function(e){i.$set(i.obj,\"lowerlimit\",e)},expression:\"obj.lowerlimit\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"入库参考价\"}},[a(\"el-input-number\",{staticStyle:{width:\"15%\"},attrs:{placeholder:\"请输入库参考价\"},model:{value:i.obj.inprice,callback:function(e){i.$set(i.obj,\"inprice\",e)},expression:\"obj.inprice\"}}),i._v(\" \"),a(\"el-input-number\",{staticStyle:{width:\"15%\"},attrs:{placeholder:\"请输出库参考价\"},model:{value:i.obj.outprice,callback:function(e){i.$set(i.obj,\"outprice\",e)},expression:\"obj.outprice\"}})],1),i._v(\" \"),a(\"el-form-item\",{attrs:{label:\"货品描述\"}},[a(\"div\",{staticStyle:{width:\"80%\"}},[a(\"editor\",{attrs:{init:i.editorInit},model:{value:i.obj.content,callback:function(e){i.$set(i.obj,\"content\",e)},expression:\"obj.content\"}})],1)])],1)],1),i._v(\" \"),a(\"span\",{staticClass:\"dialog-footer\",attrs:{slot:\"footer\"},slot:\"footer\"},[1==i.dialogadd?a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(e){i.addCreate(i.obj)}}},[i._v(\"添加\")]):i._e(),i._v(\" \"),1==i.dialogsave?a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(e){i.saveCreate(i.obj)}}},[i._v(\"修改\")]):i._e(),i._v(\" \"),a(\"el-button\",{attrs:{type:\"primary\"},on:{click:function(e){i.dialogFormVisible=!1}}},[i._v(\"关闭\")])],1)],1)],1)},staticRenderFns:[]};t.a=a},jJI4:function(e,t,i){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a=i(\"tqFi\"),o=i(\"bAnv\");var n=function(e){i(\"ZxjI\")},r=i(\"VU/8\")(a.a,o.a,!1,n,null,null);t.default=r.exports},qsHl:function(e,t,i){\"use strict\";t.d=function(e){return Object(a.a)({url:\"/api/goodsList?userId=\"+window.sessionStorage.getItem(\"userId\"),method:\"get\"})},t.a=function(e){return Object(a.a)({url:\"/api/goodsList\",method:\"post\",data:e})},t.c=function(e){return Object(a.a)({url:\"/api/goodsList\",method:\"put\",data:e})},t.e=function(e){return Object(a.a)({url:\"/api/goodsSize\",method:\"post\",data:e})},t.b=function(e){return Object(a.a)({url:\"/api/goodsList/\"+e,method:\"delete\"})},t.f=function(e){return Object(a.a)({url:\"api/file/upload\",method:\"post\",data:e})};var a=i(\"vLgD\")},tqFi:function(e,t,i){\"use strict\";var a=i(\"woOf\"),s=i.n(a),o=i(\"Xxa5\"),d=i.n(o),n=i(\"exGp\"),c=i.n(n),r=i(\"5HJ5\"),p=i(\"qsHl\"),l=(i(\"vMJZ\"),i(\"8OMw\"));t.a={mixins:[r.a],components:{editor:function(){return i.e(30).then(i.bind(null,\"q47d\"))}},data:function(){return{input:{objName:\"\"},obj:{url:\"\",thumbUrl:this.imgBaseUrl+\"pic/idfront.png!108!108\",name:\"\",goodsType:\"\",encode:\"\",barcode:\"\",size:\"\",unit:\"\",fuzeren:\"\",content:\"\"},goodsTypeData:[]}},created:function(){},mounted:function(){var t=this;return c()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.loadPageList(),t.userType=window.sessionStorage.getItem(\"userType\");case 2:case\"end\":return e.stop()}},e,t)}))()},computed:{},methods:{loadPageList:function(){var l=this;return c()(d.a.mark(function e(){var t,i,a,o,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.input?l.listQuery.objName=l.input.objName:l.listQuery.objName=\"\",e.next=3,Object(p.d)(l.listQuery);case 3:if(t=e.sent,i=t.data,a=t.success,o=t.message,a){for(r in n=i.list)n[r].thumbUrl=l.imgBaseUrl+n[r].thumbUrl;l.list=n,l.loading=!1,l.$message({message:o,type:\"success\"})}case 8:case\"end\":return e.stop()}},e,l)}))()},handleCreate:function(){var t=this;return c()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogStatus=\"create\",t.dialogFormVisible=!0,t.dialogadd=!0,t.dialogsave=!1,t.obj={url:\"\",thumbUrl:t.imgBaseUrl+\"pic/idfront.png!108!108\",name:\"\",goodsType:\"\",encode:\"\",barcode:\"\",size:\"\",unit:\"\",fuzeren:\"\",content:\"\"},t.loadGoodsType();case 6:case\"end\":return e.stop()}},e,t)}))()},loadGoodsType:function(){var o=this;return c()(d.a.mark(function e(){var t,i,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)();case 2:t=e.sent,i=t.data,a=t.success,t.message,a&&(o.goodsTypeData=i.list);case 7:case\"end\":return e.stop()}},e,o)}))()},addCreate:function(n){var r=this;return c()(d.a.mark(function e(){var t,i,a,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.dialogFormVisible=!1,r.list.push(r.obj),-1<(t=r.obj.thumbUrl).indexOf(\"/wmsPic/\")&&(n.thumbUrl=t.substring(t.indexOf(\"/wmsPic/\")+1,t.length)),e.next=6,Object(p.a)(n);case 6:i=e.sent,i.data,a=i.success,o=i.message,a&&(r.loadPageList(),r.dialogFormVisible=!1),r.$message({message:o,type:\"success\"});case 12:case\"end\":return e.stop()}},e,r)}))()},saveCreate:function(r){var l=this;return c()(d.a.mark(function e(){var t,i,a,o,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s()({},r),-1<(i=l.obj.thumbUrl).indexOf(\"/wmsPic/\")&&(t.thumbUrl=i.substring(i.indexOf(\"/wmsPic/\")+1,i.length)),l.dialogFormVisible=!1,e.next=6,Object(p.c)(t);case 6:a=e.sent,a.data,o=a.success,n=a.message,o&&l.loadPageList(),l.$message({message:n,type:\"success\"});case 12:case\"end\":return e.stop()}},e,l)}))()},handleEdit:function(t,i){var a=this;return c()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:\"edit\"===i?(a.loadGoodsType(),a.obj=a.deepCopy(t),t.thumbUrl.includes(\"http\")?a.obj.thumbUrl=t.thumbUrl:a.obj.thumbUrl=a.imgBaseUrl+t.thumbUrl,a.dialogStatus=\"update\",a.dialogsave=!0,a.dialogadd=!1,a.dialogFormVisible=!0):\"del\"===i&&a.$confirm(\"此操作将删除该记录, 是否继续?\",\"提示\",{confirmButtonText:\"确定\",cancelButtonText:\"取消\",type:\"warning\"}).then(c()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(t.id);case 2:e.sent,a.list.splice(a.list.indexOf(t),1),a.$message({type:\"success\",message:\"删除成功!\"});case 5:case\"end\":return e.stop()}},e,a)}))).catch(function(){a.$message({type:\"info\",message:\"已取消删除\"})});case 1:case\"end\":return e.stop()}},e,a)}))()},beforeUploadImg:function(e){var t=e.size/1024/1024<10;return-1==[\"image/png\",\"image/jpeg\"].indexOf(e.type)?(this.$message.error(\"请上传正确的图片\"),!1):t?void 0:(this.$message.error(\"上传文件大小不能超过10MB哦!\"),!1)},uploadSectionFile:function(n){var r=this;return c()(d.a.mark(function e(){var t,i,a,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.file,(i=new FormData).append(\"file\",t),e.next=5,Object(p.f)(i);case 5:a=e.sent,o=a.data,a.success,r.obj.thumbUrl=r.imgBaseUrl+o.savePath+\"!108!108\",r.obj.url=r.imgBaseUrl+o.savePath+\"!1000!1000\";case 10:case\"end\":return e.stop()}},e,r)}))()}}}}});"}