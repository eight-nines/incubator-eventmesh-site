(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6578],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:e},o),{},{components:n})):a.createElement(g,l({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9004:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return o},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],s={},p="EventMesh SchemaRegistry (OpenSchema)",m={unversionedId:"features/eventmesh-schemaregistry-design",id:"features/eventmesh-schemaregistry-design",isDocsHomePage:!1,title:"EventMesh SchemaRegistry (OpenSchema)",description:"Introduction",source:"@site/docs/features/eventmesh-schemaregistry-design.md",sourceDirName:"features",slug:"/features/eventmesh-schemaregistry-design",permalink:"/zh/docs/features/eventmesh-schemaregistry-design",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-schemaregistry-design.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Metrics (OpenTelemetry+Prometheus)",permalink:"/zh/docs/features/eventmesh-metrics-export-design"},next:{title:"EventMesh Stream (Camel+Spring Cloud Stream)",permalink:"/zh/docs/features/eventmesh-stream-design"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"An Overview of Schema and Schema Registry",id:"an-overview-of-schema-and-schema-registry",children:[{value:"Schema",id:"schema",children:[]},{value:"Schema Registry",id:"schema-registry",children:[]},{value:"A Comparison of Schema Registry in Other Projects",id:"a-comparison-of-schema-registry-in-other-projects",children:[]}]},{value:"An Overview of OpenSchema",id:"an-overview-of-openschema",children:[]},{value:"Requirements(Goals)",id:"requirementsgoals",children:[]},{value:"Design Details",id:"design-details",children:[{value:"Architecture",id:"architecture",children:[]},{value:"Process of Transferring Messages under Schema Registry",id:"process-of-transferring-messages-under-schema-registry",children:[]}]},{value:"Current Progress",id:"current-progress",children:[{value:"Status",id:"status",children:[]},{value:"Proposed Changes",id:"proposed-changes",children:[]}]},{value:"References",id:"references",children:[]}],c={toc:o};function d(t){var e=t.components,s=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eventmesh-schemaregistry-openschema"},"EventMesh SchemaRegistry (OpenSchema)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,i.kt)("h2",{id:"an-overview-of-schema-and-schema-registry"},"An Overview of Schema and Schema Registry"),(0,i.kt)("h3",{id:"schema"},"Schema"),(0,i.kt)("p",null,"A Schema stands for the description of serialization instances(string/stream/file/...) and has two properties. First, it is also in the format of serialization type. Second, it defines what requirements such serialized instances should satisfy."),(0,i.kt)("p",null,"Besides describing a serialization instance, a Schema may also be used for validating whether an instance is legitimate. The reason is that it defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"(and other properties) of a serialized instance and inside keys. Taking JSON Schema for example, it could not only be referred when describing a JSON string, but also be used for validating whether a string satisfies properties defined in the schema",(0,i.kt)("a",{parentName:"p",href:"#References"},"[1]"),"."),(0,i.kt)("p",null,"Commonly, there are JSON Schema, Protobuf Schema, and Avro Schema."),(0,i.kt)("h3",{id:"schema-registry"},"Schema Registry"),(0,i.kt)("p",null,"Schema Registry is a server provides RESTful interfaces. It could receive and store Schemas from clients, as well as provide intrefaces for other clients to retrieve Schemas from it."),(0,i.kt)("p",null,"It could be applied to validation process and (de-)serialization process."),(0,i.kt)("h3",{id:"a-comparison-of-schema-registry-in-other-projects"},"A Comparison of Schema Registry in Other Projects"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Application"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"EMQ",(0,i.kt)("a",{parentName:"td",href:"#References"},"[2]")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Mainly in (de-)serialization process. Use "Schema Registry" and "Rule Matching" to transfer a message from one serialization format to another.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pulsar",(0,i.kt)("a",{parentName:"td",href:"#References"},"[3]")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Mainly in validation process. Use "Schema Registry" to validate a message.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Confluentinc",(0,i.kt)("a",{parentName:"td",href:"#References"},"[4]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"In both validation and (de-)serialization process.")))),(0,i.kt)("h2",{id:"an-overview-of-openschema"},"An Overview of OpenSchema"),(0,i.kt)("p",null,"OpenSchema",(0,i.kt)("a",{parentName:"p",href:"#References"},"[5]")," proposes a specification for data schema when exchanging the message and event in more and more modern cloud-native applications. It designs a RESTful interface for storing and retrieving such as Avro, JSON Schema, and Protobuf3 schemas from three aspects(subject/schema/compatibility)."),(0,i.kt)("h2",{id:"requirementsgoals"},"Requirements(Goals)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,i.kt)("td",{parentName:"tr",align:null},"In transmission, no message needs to contain schema information which bring efficiency."),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,i.kt)("td",{parentName:"tr",align:null},"The message content from producer could be validated whether serialized correctly according to schema."),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,i.kt)("h2",{id:"design-details"},"Design Details"),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenSchema",src:n(3964).Z})),(0,i.kt)("h3",{id:"process-of-transferring-messages-under-schema-registry"},"Process of Transferring Messages under Schema Registry"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Process",src:n(3972).Z})),(0,i.kt)("p",null,"The highlevel process of messages transmission undergoes 10 steps as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'step1: Consumer subscribes "TOPIC" messages from EventMesh.'),(0,i.kt)("li",{parentName:"ul"},"step2: Producer registers a schema to EventMesh."),(0,i.kt)("li",{parentName:"ul"},"step3: EventMesh registers a schema to Schema Registry."),(0,i.kt)("li",{parentName:"ul"},"step4: Schema Registry returns the id of newly created schema; EventMesh caches such id and schema."),(0,i.kt)("li",{parentName:"ul"},"step5: EventMesh returns the id of schema to Producer."),(0,i.kt)("li",{parentName:"ul"},"step6: Producer patches the id in front of messages and send messages to EventMesh."),(0,i.kt)("li",{parentName:"ul"},"step7: EventMesh validates the messages in the entry port and send it to EventStore; EventMesh retrieves messages from EventStore."),(0,i.kt)("li",{parentName:"ul"},"step8: EventMesh unpatches the id and send it to Schema Registry(if such ",(0,i.kt)("inlineCode",{parentName:"li"},"<id, schema>")," does not exists in local cache)."),(0,i.kt)("li",{parentName:"ul"},"step9: Schema Registry returns schema and EventMesh caches it."),(0,i.kt)("li",{parentName:"ul"},"step10: EventMesh patches schema in front of messages and push it to consumer.")),(0,i.kt)("h2",{id:"current-progress"},"Current Progress"),(0,i.kt)("h3",{id:"status"},"Status"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current state")," : Developing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussion thread")," : ISSUE #339"),(0,i.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,i.kt)("p",null,"The proposal has two aspects."),(0,i.kt)("p",null,"First is a separated Open Schema Registry, which includes storage and compatibility check for schema.\nThis proposal is under developing."),(0,i.kt)("p",null,"Second is the integration of Open Schema in Eventmesh, which includes validation for schema. This proposal is to be developed."),(0,i.kt)("p",null,"As for the first proposal, some developing statuses are as follows."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status Code and Exception Code")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"No."),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Exception Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"401"),(0,i.kt)("td",{parentName:"tr",align:"center"},"40101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unauthorized Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"404"),(0,i.kt)("td",{parentName:"tr",align:"center"},"40401"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Schema Non- Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"40402"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Subject Non-exist Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"40403"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Version Non-exist Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"409"),(0,i.kt)("td",{parentName:"tr",align:"center"},"40901"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Compatibility Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"422"),(0,i.kt)("td",{parentName:"tr",align:"center"},"42201"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Schema Format Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"42202"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Subject Format Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"42203"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Version Format Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"42204"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Compatibility Format Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"500"),(0,i.kt)("td",{parentName:"tr",align:"center"},"50001"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Storage Service Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:"center"},"^"),(0,i.kt)("td",{parentName:"tr",align:"center"},"50002"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Timeout Exception"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API developing status")," :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"No."),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"response"),(0,i.kt)("th",{parentName:"tr",align:null},"exception"),(0,i.kt)("th",{parentName:"tr",align:null},"code"),(0,i.kt)("th",{parentName:"tr",align:null},"test"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Schema.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}/subjects"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SubjectAndVersion.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List\\<String>")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/{string: subject}/versions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)/schema"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SubjectWithSchema.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SchemaIdResponse.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42201\\50001\\50002"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42202\\50001\\50002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,i.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\40901\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/compatibility/subjects/(string: subject)/versions/(version: version)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CompatibilityResultResponse.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\42201\\42203\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"12"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"13"),(0,i.kt)("td",{parentName:"tr",align:null},"PUT"),(0,i.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,i.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40901\\42204\\50001"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Overall Project Structure")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SchemaController.java"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaService.java")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.1.1~7.1.2 (API 1~2)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SubjectController.java"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"SubjectService.java")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.2.1~7.2.8 (API 3~10)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CompatibilityController.java"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"CompatibilityService.java")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.3.1~7.3.3 (API 11~13)")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Check for Compatibility")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project_Structure",src:n(9025).Z})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"[1][schema validator (github.com)]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/search?q=schema+validator"},"https://github.com/search?q=schema+validator"),")"),(0,i.kt)("p",null,"[2][EMQ : Schema Registry]","(",(0,i.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/33e0655c642b"},"https://www.jianshu.com/p/33e0655c642b"),")"),(0,i.kt)("p",null,"[3][Pulsar : Schema Registry]","(",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"},"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"),")"),(0,i.kt)("p",null,"[4][confluentinc/schema-registry]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/schema-registry"},"https://github.com/confluentinc/schema-registry"),")"),(0,i.kt)("p",null,"[5][openmessaging/openschema]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/openschema"},"https://github.com/openmessaging/openschema"),")"))}d.isMDXComponent=!0},3964:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-schemaregistry-arch-e376404fc6051685e1e14f6ea15e9bd8.png"},3972:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-schemaregistry-process-204fb6690bbd4f93f6b3571df13b114b.jpg"},9025:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-schemaregistry-projectstructure-468c4e4f7a31528a51d8d289fb4afb50.png"}}]);