(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),b=l(n),u=o,h=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(h,s(s({ref:t},p),{},{components:n})):a.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(6),i=(n(0),n(161)),c={id:"subcomponent-testing",title:"Sub-Component Testing"},s={unversionedId:"testing/subcomponent-testing",id:"testing/subcomponent-testing",isDocsHomePage:!1,title:"Sub-Component Testing",description:"Checkout the getting started section to setup the test environment correctly.",source:"@site/../docs/testing/subcomponent-testing.mdx",slug:"/testing/subcomponent-testing",permalink:"/docs/testing/subcomponent-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/subcomponent-testing.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/docs/testing/unit-testing"},next:{title:"Matching @Prop",permalink:"/docs/testing/prop-matching"}},r=[{value:"Basic Sub-Component Matching",id:"basic-sub-component-matching",children:[{value:"Setup",id:"setup",children:[]},{value:"Testing assertion on the component hierarchy",id:"testing-assertion-on-the-component-hierarchy",children:[]}]},{value:"Matching against complex hierarchies",id:"matching-against-complex-hierarchies",children:[]},{value:"Custom Conditions",id:"custom-conditions",children:[{value:"Creating a custom condition",id:"creating-a-custom-condition",children:[]},{value:"Using a custom condition",id:"using-a-custom-condition",children:[]}]},{value:"Simple Sub-Component Matching",id:"simple-sub-component-matching",children:[{value:"Using with legacy APIs",id:"using-with-legacy-apis",children:[]}]},{value:"Resources",id:"resources",children:[]}],p={rightToc:r};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Checkout the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"unit-testing"}),"getting started")," section to setup the test environment correctly."))),Object(i.b)("p",null,"This document outlines APIs for testing assertions about the component hierarchy.\nLitho's testing APIs are similar to the APIs of\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://joel-costigliola.github.io/assertj/"}),"AssertJ")," and\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://hamcrest.org/JavaHamcrest/"}),"Hamcrest"),". If you have used the two before,\nthis should feel very familiar. This guide will describe the APIs and its usage."),Object(i.b)("h2",{id:"basic-sub-component-matching"},"Basic Sub-Component Matching"),Object(i.b)("p",null,"To demonstrate the usage of these APIs consider the following component that truncates the text\npassed and appends ellipsis."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\nclass TruncatingComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop String text) {\n    // A unicode-aware implementation is left as an exercise to the reader.\n    final String s = text.length() > 16 ? text.substring(0, 16) + "..." : text;\n    return Text.create(c).text(s).build();\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As a quick side note; for trivial components like these it is often more appropriate\nto exploit the fact that these are pure functions that can be statically invoked.\nWhenever possible, test your business logic in isolation."))),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"@RunWith(LithoTestRunner.class)")," to the top of the test class."),Object(i.b)("li",{parentName:"ul"},"Add a JUnit ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/junit-team/junit4/wiki/Rules"}),Object(i.b)("inlineCode",{parentName:"a"},"@Rule"))," ",Object(i.b)("inlineCode",{parentName:"li"},"LithoViewRule"),"."),Object(i.b)("li",{parentName:"ul"},"Add a check to ensure that tests are run in debug mode.\n",Object(i.b)("inlineCode",{parentName:"li"},"ComponentsConfiguration.IS_INTERNAL_BUILD")," must be true.")),Object(i.b)("p",null,"The test class should look like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'/**\n * Tests {@link LikersComponent}\n */\n@RunWith(RobolectricTestRunner.class)\npublic class TruncatingComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n  @Before\n  public void assumeInDebugMode() {\n    assumeThat(\n      "These tests can only be run in debug mode.",\n      ComponentsConfiguration.IS_INTERNAL_BUILD, is(true)\n    );\n  }\n\n}\n')),Object(i.b)("h3",{id:"testing-assertion-on-the-component-hierarchy"},"Testing assertion on the component hierarchy"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void whenTextLengthIsLessThan16_shouldContainTextComponentWithFullText() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final TruncatingComponent component = TruncatingComponent.create(c)\n      .text("Mr. Meeseeks").build();\n\n  LithoAssertions.assertThat(c, component)\n    .has(subComponentWith(c, textEquals("Mr. Meeseeks")));\n}\n')),Object(i.b)("h4",{id:"understanding-the-api-usage"},"Understanding the API usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LithoAssertions.assertThat(ComponentContext, Component)")," will create and mount the layout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"has(ComponentContext, Condition)")," tests if the component hierarchy passes the assertion of the\nCondition. This is a standard AssertJ API; checkout all the\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://joel-costigliola.github.io/assertj/assertj-core-conditions.html"}),"default APIs here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subComponentWith(ComponentContext, Condition)")," is a utility method from Litho's testing APIs\nto compose Conditions together."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"textEquals(String)")," is another utility method which creates a Condition that passes only for a\nComponent of type ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," which has its text property set to the String argument."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'subComponentWith(c, textEquals("Mr. Meeseeks")')," create a Condition which is exactly what it reads\nlike; 'passes for a component of type Text with its text property set to \"Mr. Meeseeks\"'.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The following is a more complex composition of similar assertions")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'LithoAssertions.assertThat(c, component)\n    .has(allOf(\n        subComponentWith(c, textEquals("Mr. Meeseeks")),\n        subComponentWith(c, text(startsWith("Mr."))),\n        subComponentWith(c, anyOf(\n            text(endsWith("Sanchez")),\n            text(containsString("Mees")))\n        )\n    ));\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The above assertions are just for illustrative purposes. This is not a good test!"))),Object(i.b)("h2",{id:"matching-against-complex-hierarchies"},"Matching against complex hierarchies"),Object(i.b)("p",null,"Consider a more complex LayoutSpec; it still has the same text truncation logic,\nbut with some new UI elements; wrapping the Text in a Column and a Card."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\npublic class TruncatingComponentSpec {\n  @OnCreateLayout\n  public static Component onCreateLayout(ComponentContext c, @Prop String text) {\n    final String s = text.length() > 16 ? text.substring(0, 16) + "..." : text;\n    return Column.create(c)\n        .backgroundColor(Color.GRAY)\n        .child(Card.create(c).content(Text.create(c).text(s)))\n        .build();\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The original test will start failing now.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void whenTextLengthIsLessThan16_shouldContainTextComponentWithFullText() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final TruncatingComponent component = TruncatingComponent.create(c).text("Mr. Meeseeks").build();\n\n  LithoAssertions.assertThat(c, component)\n    .has(subComponentWith(c, textEquals("Mr. Meeseeks")));\n}\n')),Object(i.b)("p",null,"The error messages should provide sufficient information to understand why the test failed. The\nerror message prints out the component hierarchy, and the assertion that failed."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-log"}),'Expecting:\n <TruncatingComponent{0, 0 - 100, 100}\n  Card{0, 0 - 100, 6}\n    Column{3, 2 - 97, 2}\n      Text{0, 0 - 94, 0 text="Szechuan Sauce"}\n      CardClip{0, 0 - 94, 0}\n    CardShadow{0, 0 - 100, 6}>\nto have:\n <sub component with <text <is "Szechuan Sauce">>>\n')),Object(i.b)("p",null,"Here the ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component was expected to be a direct descendant of ",Object(i.b)("inlineCode",{parentName:"p"},"TruncatingComponent"),", but the\nerror message shows that the Text component is several levels below the TruncatingComponent."),Object(i.b)("p",null,"This test can be fixed by using a different Condition API called ",Object(i.b)("inlineCode",{parentName:"p"},"deepSubComponentWith"),". As the name\nsuggests this condition will test against all the components in the hierarchy, and not just the immediate\ndescendant."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void whenTextLengthIsLessThan16_shouldContainTextComponentWithFullText() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final TruncatingComponent component = TruncatingComponent.create(c).text("Mr. Meeseeks").build();\n\n  LithoAssertions.assertThat(c, component)\n    .has(\n      deepSubComponentWith(c, textEquals("Mr. Meeseeks"))\n    );\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Find all the Component conditions in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/ComponentConditions.html"}),"JavaDoc here")))),Object(i.b)("h2",{id:"custom-conditions"},"Custom Conditions"),Object(i.b)("p",null,"Custom Conditions can be created by implementing the ",Object(i.b)("inlineCode",{parentName:"p"},"Condition<InspectableComponent>")," interface\nwhich consists of a single method: ",Object(i.b)("inlineCode",{parentName:"p"},"matches(InspectableComponent)"),".\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/subcomponents/InspectableComponent.html"}),"InspectableComponent"),"\nis a wrapper around a ",Object(i.b)("inlineCode",{parentName:"p"},"Component")," with additional information about the component."),Object(i.b)("h3",{id:"creating-a-custom-condition"},"Creating a custom condition"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'public static Condition<InspectableComponent> hasBackground() {\n  return new Condition<InspectableComponent>() {\n    @Override\n    public boolean matches(InspectableComponent value) {\n      as("any background"); // error message.\n      return value.getBackground() != null; // value contains the component being tested.\n    }\n  };\n}\n\n')),Object(i.b)("h3",{id:"using-a-custom-condition"},"Using a custom condition"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void whenTruncatingComponentIsRendered_shouldHaveBackground() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final TruncatingComponent component = TruncatingComponent.create(c).text("Mr. Meeseeks").build();\n\n  LithoAssertions.assertThat(c, component)\n      .has(deepSubComponentWith(c, hasBackground()));\n}\n')),Object(i.b)("h2",{id:"simple-sub-component-matching"},"Simple Sub-Component Matching"),Object(i.b)("p",null,"To test for the mere presence of a component of a certain type use the\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/subcomponents/SubComponent.html"}),"SubComponent.of")," API."),Object(i.b)("p",null,"Consider a hypothetical LayoutSpec called ",Object(i.b)("inlineCode",{parentName:"p"},"StoryComponentSpec"),", which composes a\n",Object(i.b)("inlineCode",{parentName:"p"},"HeaderComponentSpec"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"MessageComponentSpec"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"LikersComponentSpec"),", and a\n",Object(i.b)("inlineCode",{parentName:"p"},"FeedbackComponentSpec"),". The following test can be used to assert the presence of\nthese components in the hierarchy."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public class StoryComponentTest {\n  ...\n\n  @Test\n  public void whenStoryComponentIsRendered_shouldContainAllSubcomponents() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final StoryComponent.Builder builder = StoryComponent.create(c).build();\n\n    assertThat(builder).hasSubComponents(\n        SubComponent.of(HeaderComponent.class),\n        SubComponent.of(MessageComponent.class),\n        SubComponent.of(LikersComponent.class),\n        SubComponent.of(FeedbackComponent.class));\n\n    assertThat(builder)\n        .doesNotContainSubComponent(SubComponent.of(TruncatingComponent.class));\n  }\n}\n")),Object(i.b)("h3",{id:"using-with-legacy-apis"},"Using with legacy APIs"),Object(i.b)("p",null,"Litho provides a bridge interface ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/subcomponents/SubComponent.html#legacySubComponent-com.facebook.litho.testing.subcomponents.SubComponent-"}),"legacySubComponent"),"\nwhich enables using the ",Object(i.b)("inlineCode",{parentName:"p"},"SubComponent.of")," API with the ",Object(i.b)("inlineCode",{parentName:"p"},"subComponentWith")," APIs. It accepts a\n",Object(i.b)("inlineCode",{parentName:"p"},"SubComponent")," and works with both shallow and deep sub-component traversals. This is great\nif you want to ensure that a component with a given set of props exists in the component tree."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSubComponentLegacyBridge() {\n  final ComponentContext c = mComponentsRule.getContext();\n\n  assertThat(c, mComponent)\n      .has(\n          subComponentWith(\n              c,\n              legacySubComponent(\n                  SubComponent.of(\n                      FooterComponent.create(c).subtitle("Gubba nub nub doo rah kah").build()))));\n}\n')),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("p",null,"To learn more, check out these resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoViewSubComponentExtractor.html"}),"LithoViewSubComponentExtractor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoViewSubComponentDeepExtractor.html"}),"LithoViewSubComponentDeepExtractor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/ComponentConditions.html"}),"ComponentConditions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://joel-costigliola.github.io/assertj/assertj-core-conditions.html"}),"AssertJ Conditions"))))}l.isMDXComponent=!0}}]);