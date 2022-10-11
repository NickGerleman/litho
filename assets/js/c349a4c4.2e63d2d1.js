"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8465],{3905:(e,i,t)=>{t.r(i),t.d(i,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(){return l=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){return function(i){var t=m(i.components);return n.createElement(e,l({},i,{components:t}))}},m=function(e){var i=n.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},p=function(e){var i=m(e.components);return n.createElement(c.Provider,{value:i},e.children)},h={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(t),p=a,u=d["".concat(o,".").concat(p)]||d[p]||h[p]||l;return t?n.createElement(u,r(r({ref:i},c),{},{components:t})):n.createElement(u,r({ref:i},c))}));function v(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var s in i)hasOwnProperty.call(i,s)&&(r[s]=i[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var n=t(67294),a=t(34334);const l="tabItem_Ymn6";function o(e){var i=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},i)}},65488:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var n=t(83117),a=t(67294),l=t(34334),o=t(72389),r=t(67392),s=t(7094),c=t(12466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var i,t,o=e.lazy,p=e.block,h=e.defaultValue,u=e.values,v=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=u?u:b.map((function(e){var i=e.props;return{value:i.value,label:i.label,attributes:i.attributes}})),g=(0,r.l)(y,(function(e,i){return e.value===i.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===h?h:null!=(i=null!=h?h:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?i:b[0].props.value;if(null!==x&&!y.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),L=w.tabGroupChoices,N=w.setTabGroupChoices,V=(0,a.useState)(x),C=V[0],P=V[1],k=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=L[v];null!=T&&T!==C&&y.some((function(e){return e.value===T}))&&P(T)}var E=function(e){var i=e.currentTarget,t=k.indexOf(i),n=y[t].value;n!==C&&(I(i),P(n),null!=v&&N(v,String(n)))},O=function(e){var i,t=null;switch(e.key){case"ArrowRight":var n,a=k.indexOf(e.currentTarget)+1;t=null!=(n=k[a])?n:k[0];break;case"ArrowLeft":var l,o=k.indexOf(e.currentTarget)-1;t=null!=(l=k[o])?l:k[k.length-1]}null==(i=t)||i.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var i=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===i?0:-1,"aria-selected":C===i,key:i,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":C===i})}),null!=t?t:i)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,i){return(0,a.cloneElement)(e,{key:i,hidden:e.props.value!==C})}))))}function h(e){var i=(0,o.default)();return a.createElement(p,(0,n.Z)({key:String(i)},e))}},31737:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=t(83117),a=t(80102),l=(t(67294),t(3905)),o=(t(65488),t(85162),["components"]),r={id:"visibility-handling",title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",keywords:["visibility","visible","invisible","focus"]},s=void 0,c={unversionedId:"mainconcepts/coordinate-state-actions/visibility-handling",id:"mainconcepts/coordinate-state-actions/visibility-handling",title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",source:"@site/../docs/mainconcepts/coordinate-state-actions/visibility-handling.mdx",sourceDirName:"mainconcepts/coordinate-state-actions",slug:"/mainconcepts/coordinate-state-actions/visibility-handling",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/visibility-handling.mdx",tags:[],version:"current",frontMatter:{id:"visibility-handling",title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",keywords:["visibility","visible","invisible","focus"]},sidebar:"mainSidebar",previous:{title:"Transition Key Scoping",permalink:"/docs/animations/transition-key-types"},next:{title:"Making the UI Accessible",permalink:"/docs/accessibility/accessibility-overview"}},d={},m=[{value:"Types of Visibility callbacks",id:"types-of-visibility-callbacks",level:2},{value:"Usage",id:"usage",level:2},{value:"Custom visibility percentage",id:"custom-visibility-percentage",level:3},{value:"Changing LithoView visibility",id:"changing-lithoview-visibility",level:2},{value:"LithoLifecycleProvider API",id:"litholifecycleprovider-api",level:3},{value:"Valid LithoLifecycleProvider states",id:"valid-litholifecycleprovider-states",level:4},{value:"Listening to a <code>LithoLifecycleProvider</code> state changes",id:"listening-to-a-litholifecycleprovider-state-changes",level:4},{value:"Android AOSP implementation",id:"android-aosp-implementation",level:3},{value:"Handling custom state changes",id:"handling-custom-state-changes",level:3},{value:"ViewPager example",id:"viewpager-example",level:4},{value:"Fragment Transaction example",id:"fragment-transaction-example",level:4},{value:"Nested Component Trees",id:"nested-component-trees",level:3},{value:"(Deprecated) setVisibilityHint",id:"deprecated-setvisibilityhint",level:2}],p={toc:m};function h(e){var i=e.components,t=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Litho provides predefined APIs to support a range of use cases where components require callbacks when the on-screen position relative to the visible viewport changes."),(0,l.mdx)("h2",{id:"types-of-visibility-callbacks"},"Types of Visibility callbacks"),(0,l.mdx)("p",null,"The framework currently supports six types of Visibility callbacks:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibleEvent.html"},"Visible")," - invoked when at least 1 pixel of the component is visible. If the component mounts some content, then the ",(0,l.mdx)("inlineCode",{parentName:"li"},"event.content"),"\nwill be a reference to that content."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/InvisibleEvent.html"},"Invisible")," - invoked when the component no longer has any pixels on the screen."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FocusedVisibleEvent.html"},"Focused")," - invoked when either the component occupies at least 50% of the viewport or if the component is smaller than half the viewport, when it is fully visible."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/UnfocusedVisibleEvent.html"},"Unfocused")," - invoked when the component is no longer focused, such as if it's not fully visible and does not occupy at least half the viewport."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FullImpressionVisibleEvent.html"},"Full Impression")," - if the component is smaller than the viewport, this callback is invoked when the entire component is visible in the viewport. If the Component is bigger than the viewport, then just covering the viewport won't invoke this callback: it will be invoked when all the edges have passed through the viewport once."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibilityChangedEvent.html"},"Visibility Changed")," - invoked when the visible bounds of the component change. The event object states the visible top and left coordinate, and the current visible width and height of the content.")),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"The following example illustrates setting visibility callbacks on a component:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/VisibilityHandlingExampleComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/VisibilityHandlingExampleComponent.kt",start:"start_example",end:"end_example"},'class VisibilityHandlingExampleComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Column(\n        style =\n            Style.onVisible { event ->\n                  // If the handler was set on a component which mounts content then the\n                  // event.content will be a reference to the mounted content.\n                  if (event.content is View) {\n                    log("Visible", "View")\n                  } else {\n                    log("Visible", "Drawable")\n                  }\n                }\n                .onInvisible { log("Invisible", "null") }) {\n          child(Text("hello world"))\n          child(\n              Row(\n                  style =\n                      Style.onVisibilityChanged { event ->\n                        if (event.percentVisibleHeight > 50) {\n                          Log.d(\n                              "visibility-changed",\n                              "View is mostly visible now. With: " +\n                                  "\\ntop: ${event.visibleTop}" +\n                                  "\\nleft: ${event.visibleLeft}" +\n                                  "\\nvisible width: ${event.visibleWidth}" +\n                                  "\\nvisible height: ${event.visibleHeight}" +\n                                  "\\npercentage visible height: ${event.percentVisibleHeight}" +\n                                  "\\npercentage visible width: ${event.percentVisibleWidth}")\n                        }\n                      }) {\n                    child(Text("This is an example."))\n                  })\n        }\n  }\n\n  fun log(type: String, content: String) {\n    Log.d("visibility", "Visibility callback: $type content: $content")\n  }\n}\n')),(0,l.mdx)("admonition",{type:"tip"},(0,l.mdx)("p",{parentName:"admonition"},"Visibility change callbacks should be used with particular care since they are invoked on every frame while scrolling. No heavy work should be done inside the visibility changed callbacks. 'Visible', 'Invisible', 'Focused', 'Unfocused', and 'Full Impression' are recommended over 'Visibility Changed' whenever possible.")),(0,l.mdx)("h3",{id:"custom-visibility-percentage"},"Custom visibility percentage"),(0,l.mdx)("p",null,"By default, ",(0,l.mdx)("inlineCode",{parentName:"p"},"VisibleEvent")," is triggered when at least 1 pixel of the component is visible. In some cases, it may be a good idea to listen for custom visibility changes and perform an action when the component is only partially visible. A ratio for the component width or height can be specified for the visibility callback to be dispatched by using ",(0,l.mdx)("inlineCode",{parentName:"p"},"visibleHeightRatio")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"visibleWidthRatio")," props when specifying a visibility handler."),(0,l.mdx)("admonition",{type:"info"},(0,l.mdx)("p",{parentName:"admonition"},"Currently, the Kotlin API does not expose ",(0,l.mdx)("inlineCode",{parentName:"p"},"visibleHeightRatio")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"visibleWidthRatio")," (use the Codegen APIs).")),(0,l.mdx)("p",null,"For the example above, a Visibility Event is dispatched when at least 80% of the component's height and 10% of the component's width is visible. When the component's visible percentage changes to less than 80% of total height, an invisible event will be dispatched. If not specified, the default width or height ratio is 1f."),(0,l.mdx)("h2",{id:"changing-lithoview-visibility"},"Changing LithoView visibility"),(0,l.mdx)("p",null,"There are cases when the visibility callback needs to be invoked on the LithoView components because the LithoView's visibility changed but did not receive any callbacks to inform it of this change.\nFor example, when an activity is added to the back stack, covering the current UI. For such cases, Litho provides the ",(0,l.mdx)("a",{parentName:"p",href:"#litholifecycleprovider-api"},"LithoLifecycleProvider API")," to notify LithoView about changes in its visibility, and to dispatch correct events to components inside."),(0,l.mdx)("h3",{id:"litholifecycleprovider-api"},"LithoLifecycleProvider API"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," API can be used to inform LithoView about  changes in its visibility state."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider.moveToLifecycle()")," method should be called from the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Fragment.setUserVisibleHint()")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"onResume()/onPause()")," methods of ",(0,l.mdx)("inlineCode",{parentName:"p"},"Activity")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"public interface LithoLifecycleProvider {\n\n  // Should be called to inform Litho that its visibility state has changed\n  void moveToLifecycle(LithoLifecycle lithoLifecycle);\n\n}\n")),(0,l.mdx)("h4",{id:"valid-litholifecycleprovider-states"},"Valid LithoLifecycleProvider states"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE")," - indicates that the lifecycle provider is considered to be not visible on screen.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Lifecycle observers can perform operations that are associated with invisibility status."),(0,l.mdx)("li",{parentName:"ul"},"An example of moving to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE")," state is when a fragment goes from ",(0,l.mdx)("strong",{parentName:"li"},"Resumed")," to ",(0,l.mdx)("strong",{parentName:"li"},"Paused")," because the app was backgrounded."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Invisible")," events will be dispatched to all components inside the ",(0,l.mdx)("inlineCode",{parentName:"li"},"LithoView")," that were visible."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE")," - indicates that the lifecycle provider is considered visible on screen.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Lifecycle observers can perform operations that are associated with visibility status."),(0,l.mdx)("li",{parentName:"ul"},"An example of moving to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE")," state is when a fragment goes from ",(0,l.mdx)("strong",{parentName:"li"},"Paused")," to ",(0,l.mdx)("strong",{parentName:"li"},"Resumed")," because the app was foregrounded."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Visible")," events will be dispatched to all components inside the ",(0,l.mdx)("inlineCode",{parentName:"li"},"LithoView")," which meet the visibility criteria."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"DESTROYED")," - the final state of a lifecycle provider.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Lifecycle observers can perform operations associated with releasing resources."),(0,l.mdx)("li",{parentName:"ul"},"An example of moving to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"DESTROYED")," state is when the hosting Activity is destroyed. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"ComponentTree")," associated with the ",(0,l.mdx)("inlineCode",{parentName:"li"},"LithoView")," will be released."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Invisible")," events will be dispatched to all components that were visible, and all content will be unmounted.")))),(0,l.mdx)("h4",{id:"listening-to-a-litholifecycleprovider-state-changes"},"Listening to a ",(0,l.mdx)("inlineCode",{parentName:"h4"},"LithoLifecycleProvider")," state changes"),(0,l.mdx)("p",null,"A",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoView")," can be registered to listen to state changes of a ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," instance when created:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"final LithoView lithoView = LithoView.create(c, component, lithoLifecycleProvider);\n")),(0,l.mdx)("h3",{id:"android-aosp-implementation"},"Android AOSP implementation"),(0,l.mdx)("p",null,"This is an implementation of ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," which has the state tied to that of an AOSP ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/lifecycle#lco"},"LifecycleOwner"),"."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,l.mdx)("inlineCode",{parentName:"li"},"ON_PAUSE")," state moves the ",(0,l.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_INVISIBLE")," state"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,l.mdx)("inlineCode",{parentName:"li"},"ON_RESUME")," state moves the ",(0,l.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"HINT_VISIBLE")," state"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"LifecycleOwner")," in ",(0,l.mdx)("inlineCode",{parentName:"li"},"ON_DESTROY")," state moves the ",(0,l.mdx)("inlineCode",{parentName:"li"},"AOSPLithoLifecycleProvider")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"DESTROYED")," state")),(0,l.mdx)("p",null,"Use ",(0,l.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," to associate a LithoView's visibility status with the lifecycle of a Fragment, Activity or custom LifecycleOwner, where ",(0,l.mdx)("strong",{parentName:"p"},"Resumed")," means the LithoView is on screen and ",(0,l.mdx)("strong",{parentName:"p"},"Paused")," means the LithoView is hidden."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"val lifecycleProvider = AOSPLithoLifecycleProvider(this)\nval componentContext = ComponentContext(this)\nlithoView =\n    LithoView.create(\n        this,\n        LifecycleDelegateComponent.create(componentContext)\n            .id(atomicId.getAndIncrement().toString())\n            .delegateListener(delegateListener)\n            .consoleDelegateListener(consoleDelegateListener)\n            .build(),\n        lifecycleProvider /* The LithoLifecycleProvider for this LithoView */)\n")),(0,l.mdx)("h3",{id:"handling-custom-state-changes"},"Handling custom state changes"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," covers most of the common cases, but there are scenarios where a LifecycleOwner's state doesn't match what we see on screen, as shown in the following examples:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fragments in a ViewPager, where Fragments for the previous and next pages are prepared and in a ",(0,l.mdx)("strong",{parentName:"p"},"Resumed")," state before they're actually visible.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Adding a Fragment on top of another Fragment doesn't move the first Fragment to a ",(0,l.mdx)("strong",{parentName:"p"},"Paused")," state, and there's no indication that it's no longer visible to the user."))),(0,l.mdx)("p",null,"When state changes need to be handled manually, use ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProviderDelegate"),", a generic ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," implementation, to change state when appropriate."),(0,l.mdx)("h4",{id:"viewpager-example"},"ViewPager example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/ScreenSlidePageFragment.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/ScreenSlidePageFragment.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"private val delegate = LithoLifecycleProviderDelegate()\n\noverride fun setUserVisibleHint(isVisibleToUser: Boolean) {\n  super.setUserVisibleHint(isVisibleToUser)\n  if (wasVisible == isVisibleToUser) {\n    return\n  }\n  if (isVisibleToUser) {\n    wasVisible = true\n    delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_VISIBLE)\n  } else {\n    wasVisible = false\n    delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_INVISIBLE)\n  }\n}\n\noverride fun onCreateView(\n    inflater: LayoutInflater,\n    container: ViewGroup?,\n    savedInstanceState: Bundle?\n): View {\n  val parent = inflater.inflate(R.layout.screen_slide_fragment, container, false) as ViewGroup\n  val c = ComponentContext(requireContext())\n  lithoView =\n      LithoView.create(\n          c,\n          getComponent(c),\n          delegate /* The LithoLifecycleProvider delegate for this LithoView */)\n")),(0,l.mdx)("h4",{id:"fragment-transaction-example"},"Fragment Transaction example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleFragment.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleFragment.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"private val delegate: LithoLifecycleProviderDelegate = LithoLifecycleProviderDelegate()\n\noverride fun onClick(view: View) {\n\n  // Replaces the current fragment with a new fragment\n  replaceFragment()\n\n  // inform the LithoView\n  delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_VISIBLE)\n}\n\noverride fun onCreateView(\n    inflater: LayoutInflater,\n    container: ViewGroup?,\n    savedInstanceState: Bundle?\n): View {\n  val parent =\n      inflater.inflate(R.layout.activity_fragment_transactions_lifecycle, container, false)\n          as ViewGroup\n  val c = ComponentContext(requireContext())\n  lithoView =\n      LithoView.create(\n          c,\n          getComponent(c),\n          delegate /* The LithoLifecycleProvider delegate for this LithoView */)\n")),(0,l.mdx)("h3",{id:"nested-component-trees"},"Nested Component Trees"),(0,l.mdx)("p",null,"The Litho components for building Lists (",(0,l.mdx)("inlineCode",{parentName:"p"},"Section"),"s, ",(0,l.mdx)("inlineCode",{parentName:"p"},"VerticalScrollSpec"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"HorizontalScrollSpec"),") create hierarchies of nested ",(0,l.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),"s:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A ComponentTree at the root of the hierarchy, encapsulating the entire list (associated with a root LithoView)"),(0,l.mdx)("li",{parentName:"ul"},"A ComponentTree for each item in the List (associated with a LithoView child of the root LithoView)")),(0,l.mdx)("p",null,"If the root LithoView is subscribed to listen to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider"),", then all nested Component Trees / child LithoViews will listen to the outer ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," too and will receive the correct information about visibility/destroyed state."),(0,l.mdx)("admonition",{type:"info"},(0,l.mdx)("p",{parentName:"admonition"},"The section below contains information about deprecated APIs. Please consider using ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," for manually informing a ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoView")," about visibility changes.")),(0,l.mdx)("h2",{id:"deprecated-setvisibilityhint"},"(Deprecated) setVisibilityHint"),(0,l.mdx)("p",null,"After calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"LithoView.setVisibilityHint(false)"),", the LithoView will consider itself not visible and will ignore any requests to mount until ",(0,l.mdx)("inlineCode",{parentName:"p"},"setVisibilityHint(true)")," is called.\nThe entire LithoView content may be unmounted by calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"unmountAll")," if the visibility hint was set to false."),(0,l.mdx)("p",null,"Resetting the visibility hint to true after it was set to false will also trigger a mount pass, in case the visible bounds changed while the LithoView was ignoring mount requests."),(0,l.mdx)("p",null,"Example usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"// To dispatch visible/focused events as necessary on all components inside this LithoView\nLithoView.setVisibilityHint(true);\n\n// To dispatch invisible/unfocused events as necessary on all components inside this LithoView\nLithoView.setVisibilityHint(false);\n")))}h.isMDXComponent=!0}}]);