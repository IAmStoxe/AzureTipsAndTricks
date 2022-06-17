(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{534:function(t,e,i){"use strict";i.r(e);var r=i(69),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("💡 Learn more : "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("h3",{attrs:{id:"quickly-set-up-azure-active-directory-with-azure-app-services"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quickly-set-up-azure-active-directory-with-azure-app-services"}},[t._v("#")]),t._v(" Quickly Set Up Azure Active Directory with Azure App Services")]),t._v(" "),i("p",[t._v("A while ago, I did a post on "),i("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip112.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick and Dirty User Authentication with Azure Web Apps and MVC5"),i("OutboundLink")],1),t._v(", where I created a simple web app that used forms authentication. Since then, I’ve been asked if I could address how to use the "),i("strong",[t._v("Settings -> Authentication / Authorization")]),t._v(" feature to turn on AAD for an existing web app. In this post, we’ll take a look at setting up Azure Active Directory with Azure App Services.")]),t._v(" "),i("h4",{attrs:{id:"my-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#my-requirements"}},[t._v("#")]),t._v(" My Requirements")]),t._v(" "),i("ul",[i("li",[t._v("Any user on my AAD will be able to log in.")]),t._v(" "),i("li",[t._v("I won’t write or add any code to my web app.")]),t._v(" "),i("li",[t._v("I want to do this with the FREE Tier of Azure App Service Web Apps.")])]),t._v(" "),i("h4",{attrs:{id:"how-to-set-up-azure-active-directory-with-an-app-service-web-app"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-azure-active-directory-with-an-app-service-web-app"}},[t._v("#")]),t._v(" How to Set Up Azure Active Directory with an App Service Web App")]),t._v(" "),i("p",[t._v("Go to the Azure portal and select my web app and click on "),i("strong",[t._v("Authentication / Authorization")]),t._v(" under "),i("strong",[t._v("Settings")]),t._v(" to get started.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/aad1.png")}}),t._v(" "),i("p",[t._v("Click the "),i("strong",[t._v("On")]),t._v(" button to see the Authentication Provider list and then click "),i("strong",[t._v("Azure Active Directory")]),t._v(" in the list of providers.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/aad2.png")}}),t._v(" "),i("p",[t._v("Great. Now click on the "),i("strong",[t._v("Express")]),t._v(" management mode button and click "),i("strong",[t._v("OK")]),t._v(".")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/aad3.png")}}),t._v(" "),i("p",[t._v("Now you’ll need to do one last thing before saving the Authentication / Authorization settings, which is to set the "),i("strong",[t._v("Action to take when a request is not authenticated")]),t._v(". You’ll want to make sure that it is set to "),i("strong",[t._v("Log in with Azure Active Directory")]),t._v(". This makes sure anyone visiting your site has been authenticated by AAD first.  If you are following along and find that you want to use a different AAD tenant (not the Azure account you usually sign into), you can find those steps here: Manually configure Azure Active Directory with advanced settings.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/aad4.png")}}),t._v(" "),i("p",[t._v("Now you can click the "),i("strong",[t._v("Save")]),t._v(" button to have AAD added as your Authentication Provider.")])])}),[],!1,null,null,null);e.default=a.exports}}]);