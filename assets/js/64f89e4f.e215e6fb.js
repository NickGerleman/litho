"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7182],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>p});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.createContext({}),p=function(e){return function(n){var t=s(n.components);return o.createElement(e,i({},n,{components:t}))}},s=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,h=p["".concat(r,".").concat(u)]||p[u]||c[u]||i;return t?o.createElement(h,d(d({ref:n},m),{},{components:t})):o.createElement(h,d({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var o=t(83117),a=t(80102),i=(t(67294),t(3905)),r=["components"],d={id:"migrating-from-mountspecs",title:"Migrating from MountSpecs"},l=void 0,m={unversionedId:"mountablecomponents/migrating-from-mountspecs",id:"mountablecomponents/migrating-from-mountspecs",title:"Migrating from MountSpecs",description:"This page outlines the process of migrating from MountSpecs to Mountable Components.",source:"@site/../docs/mountablecomponents/migrating-from-mountspecs.mdx",sourceDirName:"mountablecomponents",slug:"/mountablecomponents/migrating-from-mountspecs",permalink:"/docs/mountablecomponents/migrating-from-mountspecs",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mountablecomponents/migrating-from-mountspecs.mdx",tags:[],version:"current",frontMatter:{id:"migrating-from-mountspecs",title:"Migrating from MountSpecs"}},p={},s=[{value:"Setup - Adding Dependencies",id:"setup---adding-dependencies",level:2},{value:"Migrating parts belonging to Mountable Component <code>render()</code> method",id:"migrating-parts-belonging-to-mountable-component-render-method",level:2},{value:"Migrating Props and Common Props",id:"migrating-props-and-common-props",level:3},{value:"Migrating State and some other lifecycle methods",id:"migrating-state-and-some-other-lifecycle-methods",level:3},{value:"Migrating Accessibility",id:"migrating-accessibility",level:3},{value:"Migrating event handling",id:"migrating-event-handling",level:3},{value:"Migrating @OnPrepare and @OnLoadStyle lifecycle methods",id:"migrating-onprepare-and-onloadstyle-lifecycle-methods",level:3},{value:"Migrating parts belonging to the <code>Mountable</code> object",id:"migrating-parts-belonging-to-the-mountable-object",level:2},{value:"Migrating @OnMeasure and @OnBoundsDefined",id:"migrating-onmeasure-and-onboundsdefined",level:3},{value:"Migrating @OnCreateContent",id:"migrating-oncreatecontent",level:3},{value:"Migrating content pooling and pre-allocation",id:"migrating-content-pooling-and-pre-allocation",level:3},{value:"Migrating Binding (properties setting) - @OnMount, @OnBind, @OnUnbind, @OnUnmount, and @OnShouldUpdate",id:"migrating-binding-properties-setting---onmount-onbind-onunbind-onunmount-and-onshouldupdate",level:3},{value:"Migrating @OnBindDynamicValue using bindTo API",id:"migrating-onbinddynamicvalue-using-bindto-api",level:3},{value:"Migrating @OnTrigger using Controllers Pattern",id:"migrating-ontrigger-using-controllers-pattern",level:3},{value:"Migrating hasChildLithoViews parameter",id:"migrating-haschildlithoviews-parameter",level:3},{value:"Migrating isPureRender parameter",id:"migrating-ispurerender-parameter",level:3}],u={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.mdx)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This page outlines the process of migrating from ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs"},"MountSpecs")," to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-component"},"Mountable Components"),"."),(0,i.mdx)("p",null,"Unlike MountSpecs, Mountable Components consist of two separate pieces:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"MountableComponent.render()")," - a method that returns a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Mountable")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Style")," that will be applied to it."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Mountable")," - an object that hosts the logic for measuring, creation, and setting properties on the mount content (a view or a drawable).")),(0,i.mdx)("p",null,"The following two sections contain information on how to migrate MountSpec static lifecycle methods into a Mountable Component ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable")," it returns. The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-cheatsheet"},"Cheatsheet")," can also be consulted for a set of links for the migration of individual aspects of existing code."),(0,i.mdx)("h2",{id:"setup---adding-dependencies"},"Setup - Adding Dependencies"),(0,i.mdx)("p",null,"To use the Kotlin Litho API, you'll need to add the following dependencies into your BUCK file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="BUCK"',title:'"BUCK"'},'deps = [\n    "//fbandroid/libraries/components:litho_core_kotlin",\n    "//fbandroid/libraries/components/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/kotlin/widget:widget", # for widgets\n],\n')),(0,i.mdx)("p",null,"More details on the setup steps are outlined in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro"},"Introduction and Setup")," page."),(0,i.mdx)("h2",{id:"migrating-parts-belonging-to-mountable-component-render-method"},"Migrating parts belonging to Mountable Component ",(0,i.mdx)("inlineCode",{parentName:"h2"},"render()")," method"),(0,i.mdx)("p",null,"The subsections below outline how to migrate the parts of a MountSpec that will be hosted by the Mountable Component. This includes Props and Common Props, useState and other ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/hooks-for-spec-developers"},"Hooks"),", Accessibility, Event Handling, and some other MountSpec static lifecycle methods."),(0,i.mdx)("h3",{id:"migrating-props-and-common-props"},"Migrating Props and Common Props"),(0,i.mdx)("p",null,"Similar to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro/#props"},"KComponents"),", Props are now just ",(0,i.mdx)("inlineCode",{parentName:"p"},"val")," properties on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableComponent"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@PropDefaults")," become default values of those ",(0,i.mdx)("inlineCode",{parentName:"p"},"val")," properties."),(0,i.mdx)("p",null,"Common Props can be set using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Style")," object which the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableComponent")," returns from ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," method on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableRenderResult")," object. You can find more information on ",(0,i.mdx)("inlineCode",{parentName:"p"},"Style")," and how to work with it ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro/#common-props"},"here"),"."),(0,i.mdx)("h3",{id:"migrating-state-and-some-other-lifecycle-methods"},"Migrating State and some other lifecycle methods"),(0,i.mdx)("p",null,"As with KComponents, most of the APIs implemented with lifecycle methods in the Mount Specs API (such as @OnCreateInitialState and @OnAttached) have hooks equivalents in the Kotlin API."),(0,i.mdx)("p",null,"Those Hooks can be used in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," method of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableComponent"),"."),(0,i.mdx)("p",null,"More information on how to migrate Hooks can be found ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/hooks-for-spec-developers"},"here"),"."),(0,i.mdx)("h3",{id:"migrating-accessibility"},"Migrating Accessibility"),(0,i.mdx)("p",null,"Accessibility for Mountable Components is implemented using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Style")," object. You can find out more about how to implement A11Y for Mountable Components ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/accessibility"},"here"),"."),(0,i.mdx)("h3",{id:"migrating-event-handling"},"Migrating event handling"),(0,i.mdx)("p",null,"Event Handling migration works in the same way as for KComponents (for details, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/event-handling"},"Event Handling")," page)."),(0,i.mdx)("h3",{id:"migrating-onprepare-and-onloadstyle-lifecycle-methods"},"Migrating @OnPrepare and @OnLoadStyle lifecycle methods"),(0,i.mdx)("p",null,"MountableComponents do not provide a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," lifecycle method to move heavy operations off the UI thread before the layout calculation is performed. Instead, such operations should take place in the Mountable Component's ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," method: the result can be passed to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable")," as its ",(0,i.mdx)("inlineCode",{parentName:"p"},"val")," property. Therefore, in MountableComponents, there's no equivalent of ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#inter-stage-inputs-and-outputs"},"inter-stage inputs and outputs"),"."),(0,i.mdx)("p",null,"Similar to ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnPrepare"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnLoadStyle")," lifecycle method's content should also migrate to be a part of MountableComponent's ",(0,i.mdx)("inlineCode",{parentName:"p"},"render()")," method."),(0,i.mdx)("h2",{id:"migrating-parts-belonging-to-the-mountable-object"},"Migrating parts belonging to the ",(0,i.mdx)("inlineCode",{parentName:"h2"},"Mountable")," object"),(0,i.mdx)("p",null,"The subsections below outline how to migrate the parts of a MountSpec that will be hosted by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable"),". This includes logic to measure, create (and optionally pool), and bind the content, as well as ",(0,i.mdx)("inlineCode",{parentName:"p"},"DynamicValues")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Controllers")," - a mechanism that replaces ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnTrigger")," static lifecycle method."),(0,i.mdx)("h3",{id:"migrating-onmeasure-and-onboundsdefined"},"Migrating @OnMeasure and @OnBoundsDefined"),(0,i.mdx)("p",null,"For MountSpecs, there are 2 measurement-related methods that are optional - @OnMeasure and @OnBoundsDefined."),(0,i.mdx)("p",null,"Static annotated @OnMeasure method could be used to define how a component should be measured during layout calculation. If width and height was explicitly set on the component, it would not be run at all."),(0,i.mdx)("p",null,"The second method, @OnBoundsDefined could ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#inter-stage-inputs-and-outputs"},"receive outputs")," from @OnMeasure and would run after layout calculation, in order to carry out additional operations after final size of the component is known, but before the component is mounted. If @OnBoundsDefined method is included in the MountSpec, it is guaranteed to run once the sizes of the component has been calculated."),(0,i.mdx)("p",null,"Mountable measuring works in a significantly different way - there's only 1 method, ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable.measure()"),", which runs at least one time, and can be run multiple times in a single layout pass (similarly to Android's ",(0,i.mdx)("inlineCode",{parentName:"p"},"View.measure()"),")."),(0,i.mdx)("p",null,"Additionally, ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable.measure()")," receives the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LayoutContext"),", width and height constraints, and any previously calculated layout data. The method should return a ",(0,i.mdx)("inlineCode",{parentName:"p"},"MeasureResult")," that tells the Litho framework the width and height the content requires and, optionally, any layout data which will be passed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"mount()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"unmount()")," methods and to all the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Binders"),". This is different from @OnMeasure static annotated method, where the sizes needed to be set on Size parameter object instead."),(0,i.mdx)("p",null,"When translating a MountSpec containing both @OnMeasure and @OnBoundsDefined, the logic needs to be merged into a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"measure()")," method - there's no need to pass outputs from @OnMeasure to @OnBoundsDefined."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"For MountSpecs that did not implement @OnMeasure nor @OnBoundsDefined at all, ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable.measure()")," can leverage ",(0,i.mdx)("inlineCode",{parentName:"p"},"MeasureResult.fromSpecs()")," method to set return the appropriate sizes.")),(0,i.mdx)("p",null,"For more information, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-measuring"},"Measuring")," page."),(0,i.mdx)("h3",{id:"migrating-oncreatecontent"},"Migrating @OnCreateContent"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateMountContent")," lifecycle method's equivalent for Mountable is the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createContent()")," method."),(0,i.mdx)("p",null,"More information on Mountable content creation can be found ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable/#content-creation"},"here"),"."),(0,i.mdx)("h3",{id:"migrating-content-pooling-and-pre-allocation"},"Migrating content pooling and pre-allocation"),(0,i.mdx)("p",null,"For Mountable, instead of static annotated methods or @MountSpec annotation parameters, it's the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/introduction-to-rendercore/#contentallocator"},"ContentAllocator")," returned from Mountable's ",(0,i.mdx)("inlineCode",{parentName:"p"},"getContentAllocator()")," method that can be used to configure the recycling pool and pre-allocation for content."),(0,i.mdx)("p",null,"Instead of specifying ",(0,i.mdx)("inlineCode",{parentName:"p"},"canPreallocate")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"poolSize")," parameters on the @MountSpec annotation, ",(0,i.mdx)("inlineCode",{parentName:"p"},"getContentAllocator()")," method should be overridden to return an implementation of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContentAllocator")," interface and overridden 'canPreallocate()' and 'poolSize()' methods. ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContentAllocator")," interface also contains various other methods that can be overridden to configure content recycling. It is recommended to return a constant instance."),(0,i.mdx)("p",null,"More information on Mountable content pooling can be found ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable"},"here"),"."),(0,i.mdx)("h3",{id:"migrating-binding-properties-setting---onmount-onbind-onunbind-onunmount-and-onshouldupdate"},"Migrating Binding (properties setting) - @OnMount, @OnBind, @OnUnbind, @OnUnmount, and @OnShouldUpdate"),(0,i.mdx)("p",null,"For MountSpecs, @OnMount and @OnBind static annotated methods ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#mount-spec-component-lifecycle"},"could be used to set properties on content"),", along with matching @OnUnmount and @OnUnbind to unset properties."),(0,i.mdx)("p",null,"Mountable uses ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/introduction-to-rendercore/#binder"},"Binders")," to set properties on the content, and the equivalent of those 2 methods is a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"Binder.bind()")," method to set the properties, and matching ",(0,i.mdx)("inlineCode",{parentName:"p"},"Binder.unbind()")," method to unset them."),(0,i.mdx)("p",null,"Therefore, the contents of @OnMount and @OnBind should be merged into single ",(0,i.mdx)("inlineCode",{parentName:"p"},"bind()")," method when migrating to Mountable (or ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable.mount()")," when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable"),"). Similarly, @OnUnbind and @OnUnmount should be merged to form ",(0,i.mdx)("inlineCode",{parentName:"p"},"unbind()")," method (in that particular order)."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"In MountSpecs it was impossible to implement granular binding - only one pair of @OnMount and/or @OnBind could be used. Mountable allows for multiple Binders, so it is possible to implement granular binding (only resetting properties that changed), which can allow for performance gains.")),(0,i.mdx)("p",null,"More information on binding and unbinding content properties can be found ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable/#binding-and-unbinding-content-properties"},"here"),"."),(0,i.mdx)("p",null,"Each ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/introduction-to-rendercore/#binder"},"Binder")," contains ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldUpdate()")," method, which can help to avoid remeasuring and remounting upon updates if the properties of interest have not changed. It represents an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#shouldupdate"},"equivalent for @ShouldUpdate")," static annotated method present in MountSpecs."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Each individual ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldUpdate()")," should compare old and new properties that are set in ",(0,i.mdx)("inlineCode",{parentName:"p"},"mount()")," method of the same Binder.")),(0,i.mdx)("h3",{id:"migrating-onbinddynamicvalue-using-bindto-api"},"Migrating @OnBindDynamicValue using bindTo API"),(0,i.mdx)("p",null,"For Mountable, ",(0,i.mdx)("a",{parentName:"p",href:"/docs/animations/dynamic-props"},"DynamicValues")," can be implemented using the BindTo API."),(0,i.mdx)("p",null,"For more information and a step-by-step example, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-bindto"},"BindTo - Dynamic Values API")," page."),(0,i.mdx)("h3",{id:"migrating-ontrigger-using-controllers-pattern"},"Migrating @OnTrigger using Controllers Pattern"),(0,i.mdx)("p",null,"In MountSpecs, @OnTrigger static annotated methods and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Handle")," could be used to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/trigger-events"},"trigger events with handles"),"."),(0,i.mdx)("p",null,"To implement equivalent behaviour in Mountable, Controller pattern should be used instead."),(0,i.mdx)("p",null,"For more information and a step-by-step example, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-controllers"},"Controllers Pattern")," page."),(0,i.mdx)("h3",{id:"migrating-haschildlithoviews-parameter"},"Migrating hasChildLithoViews parameter"),(0,i.mdx)("p",null,"In MountSpecs, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hasChildLithoViews")," parameter could be added to the @MountSpec annotation to indicate whether a given component mounts views that contain component-based content that can be incrementally mounted (such as if the mounted view has a LithoView with incremental mount enabled)."),(0,i.mdx)("p",null,"To implement the equivalent behaviour in Mountable, override the ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/doesmountrendertreehosts"},"doesMountRenderTreeHosts()")," method to return ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,i.mdx)("h3",{id:"migrating-ispurerender-parameter"},"Migrating isPureRender parameter"),(0,i.mdx)("p",null,"In MountSpecs, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isPureRender")," parameter could be added to the @MountSpec annotation to indicate whether a given component is pure render - when the ComponentTree for this component is updated, if nothing changes then the measurements for this component can be re-used."),(0,i.mdx)("p",null,"For Mountable, there's no equivalent behaviour as all the Mountable Components are pure render, so when migrating this parameter should be ignored."))}c.isMDXComponent=!0}}]);