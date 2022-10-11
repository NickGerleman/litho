"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7611,6972,2304,4882,6127,7940,1646],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(r,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(67294),i=n(34334);const a="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,r),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(83117),i=n(67294),a=n(34334),r=n(72389),l=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,r=e.lazy,m=e.block,u=e.defaultValue,h=e.values,f=e.groupId,y=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),w=k.tabGroupChoices,C=k.setTabGroupChoices,N=(0,i.useState)(b),T=N[0],O=N[1],_=[],V=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==T&&v.some((function(e){return e.value===E}))&&O(E)}var L=function(e){var t=e.currentTarget,n=_.indexOf(t),o=v[n].value;o!==T&&(V(t),O(o),null!=f&&C(f,String(o)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,i=_.indexOf(e.currentTarget)+1;n=null!=(o=_[i])?o:_[0];break;case"ArrowLeft":var a,r=_.indexOf(e.currentTarget)-1;n=null!=(a=_[r])?a:_[_.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},y)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:L,onClick:L},r,{className:(0,a.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,r.default)();return i.createElement(m,(0,o.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(83117),i=n(67294),a=n(23746),r=n(7694),l=n(13618),s="0.42.0",c="0.43.0-SNAPSHOT",p="0.10.4",d="0.142.0",m=n(86668);const u=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),u=(0,m.L)().isDarkTheme?l.Z:r.Z;return i.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:u}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return i.createElement("pre",{className:t,style:n},o.map((function(e,t){return i.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.createElement("span",r({token:e,key:t}))})))})))}))}},49028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=(n(65488),n(85162),n(7772),["components"]),l={id:"testing-actions",title:"Interactions"},s=void 0,c={unversionedId:"kotlin/testing-actions",id:"kotlin/testing-actions",title:"Interactions",description:"An Interaction is defined as any type of action that a user can perform on Components. A good example is touching or clicking a Button.",source:"@site/../docs/kotlin/testing-actions.mdx",sourceDirName:"kotlin",slug:"/kotlin/testing-actions",permalink:"/docs/kotlin/testing-actions",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/testing-actions.mdx",tags:[],version:"current",frontMatter:{id:"testing-actions",title:"Interactions"},sidebar:"mainSidebar",previous:{title:"Assertions",permalink:"/docs/kotlin/testing-assertions"},next:{title:"Built-in widgets",permalink:"/docs/widgets/builtin-widgets"}},p={},d=[{value:"<code>act{InteractionsScope.() -&gt; Unit}</code>",id:"actinteractionsscope---unit",level:2},{value:"<code>idle()</code>",id:"idle",level:2},{value:"Interactions with LithoViewRule",id:"interactions-with-lithoviewrule",level:2},{value:"How to test a click action",id:"how-to-test-a-click-action",level:3},{value:"The TestComponent",id:"the-testcomponent",level:4},{value:"Testing the TestComponent for a click action",id:"testing-the-testcomponent-for-a-click-action",level:4},{value:"How to test <code>VisiblityEvent</code>",id:"how-to-test-visiblityevent",level:3},{value:"How to test State Update",id:"how-to-test-state-update",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.mdx)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"An ",(0,a.mdx)("inlineCode",{parentName:"p"},"Interaction")," is defined as any type of action that a user can perform on ",(0,a.mdx)("inlineCode",{parentName:"p"},"Components"),". A good example is touching or clicking a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Button"),"."),(0,a.mdx)("h2",{id:"actinteractionsscope---unit"},(0,a.mdx)("inlineCode",{parentName:"h2"},"act{InteractionsScope.() -> Unit}")),(0,a.mdx)("p",null,"In ",(0,a.mdx)("inlineCode",{parentName:"p"},"Litho"),", the state of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Components")," is updated asynchronously, off the Main Thread. Once the background operations are finished, they are posted to the Main Thread to update the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),"."),(0,a.mdx)("p",null,"During tests, it's important to ensure that everything is in sync in the Main Thread and the Background Thread, as in a real-life use case. This is the role of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"act{}")," function, which removes the responsibility to use the Loopers and manage the thread synchronisation, as shown in the following snippet:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=act_example_start end=act_example_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"act_example_start",end:"act_example_end"},'lithoViewRule.act(testLithoView) { clickOnTag("test_view") }\n')),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Only one of the defined interactions from ",(0,a.mdx)("inlineCode",{parentName:"p"},"InteractionsScope")," needs to be called, Litho takes care of the rest.")),(0,a.mdx)("p",null,"The following interactions are exposed via ",(0,a.mdx)("inlineCode",{parentName:"p"},"act()"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnText")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnTag")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnContentDescription")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnRootView"))),(0,a.mdx)("p",null,"Interactions can be chained to invoke multiples in a given order:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},' lithoViewRule\n        .act { clickOnText("Menu") }\n        .act { clickOnText("File") }\n        .act { clickOnText("New") }\n        .act { clickOnText("New Project...") }\n')),(0,a.mdx)("h2",{id:"idle"},(0,a.mdx)("inlineCode",{parentName:"h2"},"idle()")),(0,a.mdx)("p",null,"Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"act()")," for events that trigger async updates (such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"clicks"),"). Otherwise, there are sometimes async events triggered by layout (for example visibility events, or when the state is immediately updated in a render call) that can be manually waited for to finish by calling: ",(0,a.mdx)("inlineCode",{parentName:"p"},"idle()"),"."),(0,a.mdx)("p",null,"For example, it may be needed if a component defines a visibility event that triggers an async state update. In such a case, ",(0,a.mdx)("inlineCode",{parentName:"p"},"idle()")," should be called after layout to make sure the update is reflected in the UI before making test assertions:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=idle_component_start end=idle_component_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"idle_component_start",end:"idle_component_end"},"  override fun ComponentScope.render(): Component? {\n    val visibilityEventCalled = useState { false }\n    stateRef = AtomicReference(visibilityEventCalled.value)\n    return Column(\n        style =\n            Style.width(10.dp).height(10.dp).onVisible { visibilityEventCalled.update(true) })\n  }\n}\n\nlithoViewRule.render { TestComponent() }\nassertThat(stateRef.get()).isEqualTo(false)\nlithoViewRule.idle()\nassertThat(stateRef.get()).isEqualTo(true)\n")),(0,a.mdx)("h2",{id:"interactions-with-lithoviewrule"},"Interactions with LithoViewRule"),(0,a.mdx)("h3",{id:"how-to-test-a-click-action"},"How to test a click action"),(0,a.mdx)("p",null,"Four types of 'click' are supported:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnText")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnTag")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnContentDescription")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnRootView"))),(0,a.mdx)("h4",{id:"the-testcomponent"},"The TestComponent"),(0,a.mdx)("p",null,"To illustrate how to test a click action, the following ",(0,a.mdx)("inlineCode",{parentName:"p"},"TestComponent")," shows/hides the Text after the click action is performed on a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Row"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=component_for_action_start end=component_for_action_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"component_for_action_start",end:"component_for_action_end"},'class TestComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val showText = useState { false }\n    return Row(\n        style =\n            Style.width(100.px)\n                .height(100.px)\n                .onClick { showText.update { isTextShowing -> !isTextShowing } }\n                .contentDescription("row")) {\n          if (showText.value) {\n            child(Text(text = "Text"))\n          }\n        }\n  }\n}\n')),(0,a.mdx)("h4",{id:"testing-the-testcomponent-for-a-click-action"},"Testing the TestComponent for a click action"),(0,a.mdx)("p",null,"The test case performs three steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Confirm that the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," is not being rendered if there is no click on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Row"),".",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"In order to do this, find the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," based on the Text or its Class by using either: ",(0,a.mdx)("inlineCode",{parentName:"li"},"findViewWithTextOrNull(String)")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"findComponent(Class<out Component?>)")," and assert that it's null."))),(0,a.mdx)("li",{parentName:"ol"},"Perform an action on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"LithoView")," with the help of ",(0,a.mdx)("inlineCode",{parentName:"li"},"LithoViewRule.act{}"),".",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Clicking on the content description of the row triggers the state update."))),(0,a.mdx)("li",{parentName:"ol"},"Confirm that the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," is being rendered and is not null.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Any of the available methods can be used to find the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component"),".")))),(0,a.mdx)("p",null,"This test case is satisfied with the assertions shown in the following snippet:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=test_interaction_start end=test_interaction_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"test_interaction_start",end:"test_interaction_end"},'val testLithoView = lithoViewRule.render { TestComponent() }\nLithoStats.resetAllCounters()\n/** Find [Component] based on the text or [Component] class */\nassertThat(testLithoView.findViewWithTextOrNull("Text")).isNull()\nassertThat(testLithoView.findComponent(Text::class)).isNull()\n\n/** perform interaction defined in [LithoViewRule] */\nlithoViewRule.act(testLithoView) { clickOnContentDescription("row") }\n\n/** check number of state updates */\nassertThat(LithoStats.getComponentTriggeredAsyncStateUpdateCount()).isEqualTo(1)\n\n/** Find [Component] based on the text or [Component] class */\nassertThat(testLithoView.findViewWithTextOrNull("Text")).isNotNull()\nassertThat(testLithoView.findComponent(Text::class)).isNotNull()\n')),(0,a.mdx)("h3",{id:"how-to-test-visiblityevent"},"How to test ",(0,a.mdx)("inlineCode",{parentName:"h3"},"VisiblityEvent")),(0,a.mdx)("p",null,"In order to test ",(0,a.mdx)("inlineCode",{parentName:"p"},"VisiblityEvent")," instead of using ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoViewRule.render(Component)"),", separate the methods that are being called under the render call."),(0,a.mdx)("p",null,"This enables the state of the component to be checked before and after the visibility event is triggered:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=visibility_test_start end=visibility_test_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"visibility_test_start",end:"visibility_test_end"},"val testLithoView =\n    lithoViewRule.createTestLithoView { TestComponent() }.attachToWindow().measure()\n/** Before the onVisible is called */\nassertThat(testLithoView.findComponent(InnerComponent::class)).isNull()\n/** Layout component and idle, triggering visibility event and any async updates */\ntestLithoView.layout()\nlithoViewRule.idle()\n/** After the onVisible is called */\nassertThat(testLithoView).containsExactlyOne(InnerComponent::class)\n")),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"If there is any background work happening in an ",(0,a.mdx)("inlineCode",{parentName:"p"},"onVisible")," call, remember to call ",(0,a.mdx)("inlineCode",{parentName:"p"},"idle()")," after ",(0,a.mdx)("inlineCode",{parentName:"p"},"layout()"),".")),(0,a.mdx)("h3",{id:"how-to-test-state-update"},"How to test State Update"),(0,a.mdx)("p",null,"If a state update needs to be tested, the best thing to do is to trigger the event that causes the state update, as the state of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component")," is not being exposed.\nHave another look at the ",(0,a.mdx)("a",{parentName:"p",href:"#the-testcomponent"},"TestComponent")," snippet, in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"clicking")," section, where the State Update is triggered by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Click Action"),"."))}u.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>r});var o=n(87410);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),r={Prism:o.Z,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),i=e.styles.reduce((function(e,n){var o=n.languages,i=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],i);e[t]=n})),e}),o);return i.root=n,i.plain=s({},n,{backgroundColor:null}),i};function u(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,i=e.style,a=s({},u(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(a.style=r.plain),void 0!==i&&(a.style=void 0!==a.style?s({},a.style,i):i),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,i=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===i&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===i&&!o)return a[n[0]];var r=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[r].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,i=e.style,a=e.token,r=s({},u(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==i&&(r.style=void 0!==r.style?s({},r.style,i):i),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"tokenize",(function(e,t,n,o){var i={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",i);var a=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,i=e.children,a=this.getThemeDict(this.props),r=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],o=[0],i=[e.length],a=0,r=0,l=[],s=[l];r>-1;){for(;(a=o[r]++)<i[r];){var m=void 0,u=t[r],h=n[r][a];if("string"==typeof h?(u=r>0?u:["plain"],m=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),m=h.content),"string"==typeof m){var f=m.split(c),y=f.length;l.push({types:u,content:f[0]});for(var g=1;g<y;g++)p(l),s.push(l=[]),l.push({types:u,content:f[g]})}else r++,t.push(u),n.push(m),o.push(0),i.push(m.length)}r--,t.pop(),n.pop(),o.pop(),i.pop()}return p(l),s}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);