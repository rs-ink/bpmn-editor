(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports={editingTools:"EditingTools_editingTools__3BjLV",controlList:"EditingTools_controlList__3DwUk",control:"EditingTools_control__3kG9V",openFile:"EditingTools_openFile__ra64W",line:"EditingTools_line__7uRkg",zoom:"EditingTools_zoom__3fiMx",zoomIn:"EditingTools_zoomIn__1Nddh",zoomOut:"EditingTools_zoomOut__3KIMl",undo:"EditingTools_undo__1aCVV",redo:"EditingTools_redo__2l3ae",save:"EditingTools_save__1WUw5",download:"EditingTools_download__VC08N",image:"EditingTools_image__2NQEQ",open:"EditingTools_open__HLJgy"}},166:function(e,n,t){e.exports=t(372)},171:function(e,n,t){},365:function(e,n,t){},372:function(e,n,t){"use strict";t.r(n);var a=t(7),o=t.n(a),l=t(154),i=t.n(l),c=(t(171),t(38)),r=t(39),s=t(41),m=t(40),d=t(42),p=t(50),u=t(164),b=t(155),g=t.n(b),h=t(156),E=t(157),_=t.n(E),w=t(13),f=t.n(w),v=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).handleOpen=function(){t.file.click()},t}return Object(d.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.onOpenFIle,a=n.onZoomIn,l=n.onZoomOut,i=n.onZoomReset,c=n.onUndo,r=n.onRedo,s=n.onSave,m=n.onDownloadXml,d=n.onDownloadSvg;return o.a.createElement("div",{className:f.a.editingTools},o.a.createElement("ul",{className:f.a.controlList},o.a.createElement("li",{className:"".concat(f.a.control," ").concat(f.a.line)},o.a.createElement("input",{ref:function(n){e.file=n},className:f.a.openFile,type:"file",onChange:t}),o.a.createElement("button",{type:"button",title:"open",onClick:this.handleOpen},o.a.createElement("i",{className:f.a.open}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"undo",onClick:c},o.a.createElement("i",{className:f.a.undo}))),o.a.createElement("li",{className:"".concat(f.a.control," ").concat(f.a.line)},o.a.createElement("button",{type:"button",title:"redo",onClick:r},o.a.createElement("i",{className:f.a.redo}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"reset zoom",onClick:i},o.a.createElement("i",{className:f.a.zoom}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"zoom in",onClick:a},o.a.createElement("i",{className:f.a.zoomIn}))),o.a.createElement("li",{className:"".concat(f.a.control," ").concat(f.a.line)},o.a.createElement("button",{type:"button",title:"zoom out",onClick:l},o.a.createElement("i",{className:f.a.zoomOut}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"save",onClick:s},o.a.createElement("i",{className:f.a.save}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"download bpmn diagram",onClick:m},o.a.createElement("i",{className:f.a.download}))),o.a.createElement("li",{className:f.a.control},o.a.createElement("button",{type:"button",title:"download as svg image",onClick:d},o.a.createElement("i",{className:f.a.image})))))}}]),n}(a.Component),N=(t(365),t(74)),M=t.n(N),O=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(m.a)(n).call(this))).download=function(e,n,t){var a="",o=document.createElement("a");switch(e){case"xml":a="bpmn";break;case"svg":a="svg"}t=t||"diagram.".concat(a),o.setAttribute("href","data:application/bpmn20-xml;charset=UTF-8,".concat(encodeURIComponent(n))),o.setAttribute("target","_blank"),o.setAttribute("dataTrack","diagram:download-".concat(a)),o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)},e.handleOpenFile=function(n){var t=Object(p.a)(Object(p.a)(e)),a=n.target.files[0],o=new FileReader,l="";o.readAsText(a),o.onload=function(e){l=e.target.result,t.renderDiagram(l,"open")}},e.handleSave=function(){e.bpmnModeler.saveXML({format:!0},function(e,n){console.log(n)})},e.handleRedo=function(){e.bpmnModeler.get("commandStack").redo()},e.handleUndo=function(){e.bpmnModeler.get("commandStack").undo()},e.handleDownloadSvg=function(){e.bpmnModeler.saveSVG({format:!0},function(n,t){e.download("svg",t)})},e.handleDownloadXml=function(){e.bpmnModeler.saveXML({format:!0},function(n,t){e.download("xml",t)})},e.handleZoom=function(n){var t=n?e.state.scale+n<=.2?.2:e.state.scale+n:1;e.bpmnModeler.get("canvas").zoom(t),e.setState({scale:t})},e.renderDiagram=function(n){e.bpmnModeler.importXML(n,function(e){e?console.log("\u5bfc\u5165\u5931\u8d25"):console.log("\u5bfc\u5165\u6210\u529f")})},e.state={scale:1},e}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.bpmnModeler=new u.a({container:"#canvas",propertiesPanel:{parent:"#properties-panel"},additionalModules:[g.a,_.a],moddleExtensions:{camunda:h}}),this.renderDiagram('<?xml version="1.0" encoding="UTF-8"?>\n<bpmn2:definitions\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"\n  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"\n  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"\n  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"\n  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd"\n  id="sample-diagram"\n  targetNamespace="http://bpmn.io/schema/bpmn"\n>\n  <bpmn2:process id="Process_1" isExecutable="false">\n    <bpmn2:startEvent id="StartEvent_1"/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>')}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:M.a.container},o.a.createElement("div",{className:M.a.canvas,id:"canvas"}),o.a.createElement("div",{className:"properties-panel-parent ".concat(M.a.panel),id:"properties-panel",style:{height:"100%"}}),o.a.createElement(v,{onOpenFIle:this.handleOpenFile,onSave:this.handleSave,onUndo:this.handleUndo,onRedo:this.handleRedo,onDownloadSvg:this.handleDownloadSvg,onDownloadXml:this.handleDownloadXml,onZoomIn:function(){return e.handleZoom(.1)},onZoomOut:function(){return e.handleZoom(-.1)},onZoomReset:function(){return e.handleZoom()}}))}}]),n}(a.Component),y=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:{height:"100%",overflow:"hidden"}},o.a.createElement(O,null))}}]),n}(a.Component);i.a.render(o.a.createElement(y,null),document.getElementById("root"))},74:function(e,n,t){e.exports={container:"Bpmn_container__3-60P",canvas:"Bpmn_canvas__2yP6g",panel:"Bpmn_panel__3SynY"}}},[[166,2,1]]]);
//# sourceMappingURL=main.9ff758e9.chunk.js.map