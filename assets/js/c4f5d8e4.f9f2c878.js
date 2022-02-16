"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{41158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(87462),n=a(67294),o=a(86010),l=a(16823),i=a(36742),c=a(52263),m=a(44996);const s={heroBanner:"heroBanner_Nujh",heroInner:"heroInner_3ab7",heroImage:"heroImage_2hQP",heroTitle:"heroTitle_1Xlf",buttons:"buttons_3wo7",button:"button_2Ac-",featureContent:"featureContent_2bJw",featureText:"featureText_2M_Q",darkFeature:"darkFeature_74jo",lightFeature:"lightFeature_1z38",featureBody:"featureBody_Q8Yx",featureTitle:"featureTitle_3Dxg",featureImage:"featureImage_19Pb"};var u=[{title:n.createElement(n.Fragment,null,"Declarative"),imageUrl:"images/home-code.png",description:n.createElement(n.Fragment,null,"Litho uses a declarative API to define UI components. You simply describe the layout for your UI based on a set of immutable inputs and the framework takes care of the rest. With code generation, Litho can perform optimisations for your UI under the hood, while keeping your code simple and easy to maintain."),dark:!1},{title:n.createElement(n.Fragment,null,"Asynchronous layout"),imageUrl:"images/home-async.png",description:n.createElement(n.Fragment,null,"Litho can measure and layout your UI ahead of time without blocking the UI thread. By decoupling its layout system from the traditional Android View system, Litho can drop the UI thread constraint imposed by Android."),dark:!0},{title:n.createElement(n.Fragment,null,"Flatter view hierarchies"),imageUrl:"images/home-flat-not-flat.png",description:n.createElement(n.Fragment,null,"Litho uses ",n.createElement("a",{href:"https://yogalayout.com/docs"},"Yoga")," for layout and automatically reduces the number of ViewGroups that your UI contains. This, in addition to Litho's text optimizations, allows for much smaller view hierarchies and improves both memory and scroll performance."),dark:!1},{title:n.createElement(n.Fragment,null,"Fine-grained recycling"),imageUrl:"images/home-incremental-mount.png",description:n.createElement(n.Fragment,null,"With Litho, each UI item such as text, image, or video is recycled individually. As soon as an item goes off screen, it can be reused anywhere in the UI and pieced together with other items to create new UI elements. Such recycling reduces the need of having multiple view types and improves memory usage and scroll performance."),dark:!0}];function d(e){var t=e.imageUrl,a=e.title,r=e.description,l=e.dark,i=(0,m.default)(t);return n.createElement("section",{className:(0,o.default)(l&&s.darkFeature,!l&&s.lightFeature)},n.createElement("div",{className:s.featureContent},n.createElement("img",{className:s.featureImage,src:i,alt:a}),n.createElement("div",{className:s.featureText},n.createElement("h3",{className:s.featureTitle},a),n.createElement("p",{className:s.featureBody},r))))}function h(){return n.createElement("div",{className:"container text--center margin-bottom--xl margin-top--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h2",null,"Check it out in the intro video"),n.createElement("div",{className:s.ytVideo},n.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RFI-fuiMRK4",title:"Explain Like I'm 5: Litho",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))}const f=function(){var e=(0,c.default)().siteConfig,t=void 0===e?{}:e;return n.createElement(l.Z,{description:"Home page of Litho: A declarative UI framework for Android"},n.createElement("div",{className:s.heroBanner},n.createElement("div",{className:s.heroInner},n.createElement("img",{className:s.heroImage,src:(0,m.default)("images/logo.svg")}),n.createElement("div",{className:s.heroTitle},"Litho: "+t.tagline),n.createElement("div",{className:s.buttons},n.createElement(i.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/tutorial/project-setup")},"GET STARTED"),n.createElement(i.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/intro")},"LEARN MORE"),n.createElement(i.default,{className:(0,o.default)("button button--outline",s.button),to:(0,m.default)("docs/tutorial/overview")},"TUTORIAL")))),n.createElement("main",null,n.createElement(h,null),u&&u.length>0&&u.map((function(e,t){return n.createElement(d,(0,r.Z)({key:t},e))}))))}}}]);