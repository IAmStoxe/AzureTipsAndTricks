(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{645:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"create-an-azure-storage-blob-container-through-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-storage-blob-container-through-c"}},[t._v("#")]),t._v(" Create an Azure Storage Blob Container through C#")]),t._v(" "),a("p",[t._v("Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In this post, we'll take a look at creating an Azure Storage Blob container with C#. "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yesterday"),a("OutboundLink")],1),t._v(", I described how to do it through the Azure Portal.")]),t._v(" "),a("p",[t._v("Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("yesterday"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Look under "),a("strong",[t._v("Settings")]),t._v(", then "),a("strong",[t._v("Access Keys")]),t._v(" and copy the connection string.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp1.png")}}),t._v(" "),a("p",[t._v("Create a C# Console Application, and use NuGet to pull in references to :")]),t._v(" "),a("ul",[a("li",[t._v("Azure.Storage.Blob")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp2.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp3.png")}}),t._v(" "),a("p",[t._v("Inside of your Console app, you will see "),a("strong",[t._v("App.config")]),t._v(", now add the following section:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <appSettings>\n    <add key="StorageConnection" value="YOUR-CONNECTION-STRING-COPIED-FROM-EARLIER"/>\n  </appSettings>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Copy the following code into your Main method:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" connectionString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobContainerClient")]),t._v(" container "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("BlobContainerClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images-backup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfNotExists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PublicAccessType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("This code will get our connection string from the "),a("strong",[t._v("App.config")]),t._v(", create our client and a container named "),a("strong",[t._v("images-backup")]),t._v(" if it doesn't exist. We can go back inside of the portal to see if executed correctly.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp4.png")}})])}),[],!1,null,null,null);s.default=n.exports}}]);