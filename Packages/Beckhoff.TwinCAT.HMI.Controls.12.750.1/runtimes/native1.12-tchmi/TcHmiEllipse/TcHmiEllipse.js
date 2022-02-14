var TcHmi;!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){class TcHmiEllipse extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__resizedEventDestroyEvent=null,this.__onResolverForFillColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("fillColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__fillColor)||(this.__fillColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"FillColor"}),this.__processFillColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiEllipse, Id="+this.getId()+", Attribute=FillColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForStrokeColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("strokeColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__strokeColor)||(this.__strokeColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeColor"}),this.__processStrokeColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiEllipse, Id="+this.getId()+", Attribute=StrokeColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiEllipse-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-ellipse-template")),this.__elementSvgEllipse=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiEllipse-template-svg-ellipse"),0===this.__elementSvgEllipse.length&&(this.__elementSvgEllipse=this.__elementTemplateRoot.find(".tchmi-ellipse-template-svg-ellipse")),0===this.__elementTemplateRoot.length||0===this.__elementSvgEllipse.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__resizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())}__detach(){super.__detach(),null!==this.__resizedEventDestroyEvent&&(this.__resizedEventDestroyEvent(),this.__resizedEventDestroyEvent=null)}destroy(){this.__keepAlive||super.destroy()}__onResized(){return(evt,ctrl)=>{this.__updateDimensions()}}__updateDimensions(){let width=this.getRenderedWidth();if(!width)return;let height=this.getRenderedHeight();if(!height)return;let strokeThickness=this.__strokeThickness?this.__strokeThickness:0;strokeThickness=strokeThickness<width/2?strokeThickness:width/2,strokeThickness=strokeThickness<height/2?strokeThickness:height/2;let rx=width/2-Math.ceil(strokeThickness/2),ry=height/2-Math.ceil(strokeThickness/2);this.__elementSvgEllipse[0].setAttribute("cx",(width/2).toString()),this.__elementSvgEllipse[0].setAttribute("rx",(rx>0?rx:1).toString()),this.__elementSvgEllipse[0].setAttribute("cy",(height/2).toString()),this.__elementSvgEllipse[0].setAttribute("ry",(ry>0?ry:1).toString()),this.__elementSvgEllipse[0].style.strokeWidth=strokeThickness.toString()}setFillColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("FillColor"));let resolverInfo=this.__objectResolvers.get("fillColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("fillColor",{resolver:resolver,watchCallback:this.__onResolverForFillColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForFillColorWatchCallback)})}getFillColor(){return this.__fillColor}__processFillColor(){TcHmi.StyleProvider.processFillColor(this.__elementSvgEllipse,this.__fillColor)}setStrokeColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeColor"));let resolverInfo=this.__objectResolvers.get("strokeColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("strokeColor",{resolver:resolver,watchCallback:this.__onResolverForStrokeColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForStrokeColorWatchCallback)})}getStrokeColor(){return this.__strokeColor}__processStrokeColor(){TcHmi.StyleProvider.processStrokeColor(this.__elementSvgEllipse,this.__strokeColor)}setStrokeStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeStyle")),convertedValue!==this.__strokeStyle&&(this.__strokeStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeStyle"}),this.__processStrokeStyle())}getStrokeStyle(){return this.__strokeStyle}__processStrokeStyle(){TcHmi.StyleProvider.setSimpleElementStyle(this.__elementSvgEllipse,"stroke-dasharray",this.__strokeStyle)}setStrokeThickness(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StrokeThickness")),valueNew!==this.__strokeThickness&&(this.__strokeThickness=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StrokeThickness"}),this.__processStrokeThickness())}getStrokeThickness(){return this.__strokeThickness}__processStrokeThickness(){this.__updateDimensions()}getStrokeThicknessUnit(){return"px"}__processStrokeThicknessUnit(){}}Beckhoff.TcHmiEllipse=TcHmiEllipse}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiEllipse","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiEllipse);