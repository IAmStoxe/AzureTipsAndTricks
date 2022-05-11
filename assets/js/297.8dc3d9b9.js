(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{728:function(e,t,a){"use strict";a.r(t);var r=a(66),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout the Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/change-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Change Analysis overview"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"http://youtu.be/1H3QFopnWjE?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to troubleshoot your applications with Change Analysis"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-troubleshoot-your-applications-with-change-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-troubleshoot-your-applications-with-change-analysis"}},[e._v("#")]),e._v(" How to troubleshoot your applications with Change Analysis")]),e._v(" "),a("h4",{attrs:{id:"troubleshoot-applications-with-application-change-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot-applications-with-application-change-analysis"}},[e._v("#")]),e._v(" Troubleshoot applications with Application Change Analysis")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Monitor"),a("OutboundLink")],1),e._v(" is a comprehensive Azure solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments. It provides many features, including "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Insights"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alerts"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/change-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Change Analysis"),a("OutboundLink")],1),e._v(". You can use Change Analysis to visualize infrastructure and application changes to troubleshoot issues. Change Analysis tracks changes of the properties of Azure resources, like "),a("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMs"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Web Apps"),a("OutboundLink")],1),e._v(" and can even track changes in application files.")]),e._v(" "),a("p",[e._v("In this post, we'll use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/change-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Change Analysis"),a("OutboundLink")],1),e._v(" to visualize a configuration change of an "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Web App"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("An existing "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Web App"),a("OutboundLink")],1),e._v(". Learn how to "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/quickstart-dotnetcore?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("create one here"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"enable-change-analysis-and-visualize-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-change-analysis-and-visualize-changes"}},[e._v("#")]),e._v(" Enable Change Analysis and visualize changes")]),e._v(" "),a("p",[e._v("Azure Application Change Analysis is enabled by default, so we don't have to create anything to use it. You can use it from various places in Azure resources, including from the \"Diagnose and solve problems\" menu of most Azure services. Let's try that by making a change and visualizing it.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Find an existing "),a("strong",[e._v("App Service Web App")]),e._v(" and navigate to it")]),e._v(" "),a("li",[e._v("In the Web App, go to the "),a("strong",[e._v('"Diagnose and solve problems"')]),e._v(" menu. This is a high-level tool that enables you to start troubleshooting the Web App")]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v('"Web App Down"')]),e._v(" link to drill down into the troubleshooting features")]),e._v(" "),a("li",[a("strong",[e._v("Web App Down")]),e._v(" is one of the troubleshooting tools. In the menu on the left, you'll see many others, including "),a("strong",[e._v("Application Changes")]),e._v(". Click on "),a("strong",[e._v("Application Changes")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/150appchanges.png")}}),e._v(" "),a("p",[e._v("(Application Changes in an App Service Web App)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("This brings you to the "),a("strong",[e._v("Application Change Analysis page")]),e._v(", filtered for the App Service Web App. This might show some changes that you made to the Web App in the last 24 hours (that is the default filter). You can also remove the filter for the Web App to see changes of other services")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/150changeanalysisinwebapp.png")}}),e._v(" "),a("p",[e._v("(The Application Change Analysis blade)")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Click the "),a("strong",[e._v("Configure")]),e._v(" button. This will show you the "),a("strong",[e._v('"Enable file and configuration change tracking"')]),e._v(" blade. Change Analysis can track "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/change-analysis#supported-resource-types?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple file and configuration types"),a("OutboundLink")],1)])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/150enablewebappchangetracking.png")}}),e._v(" "),a("p",[e._v("(Enable file and configuration change tracking blade)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[e._v("Enable tracking for the Web App and click "),a("strong",[e._v("Save")])])]),e._v(" "),a("li",[a("p",[e._v("Now, let's make a change to the Web App. Go back to the "),a("strong",[e._v("App Service Web App")])])]),e._v(" "),a("li",[a("p",[e._v("Click on the "),a("strong",[e._v("Configuration")]),e._v(" menu")])]),e._v(" "),a("li",[a("p",[e._v("Add or change a "),a("strong",[e._v("Connection string")]),e._v(" and click "),a("strong",[e._v("Save")])])]),e._v(" "),a("li",[a("p",[e._v("Next, select the "),a("strong",[e._v("search box of the Azure portal")]),e._v(" and type "),a("strong",[e._v('"Change Analysis"')]),e._v(" and click on the result. This will open Application Change Analysis on a subscription level")])]),e._v(" "),a("li",[a("p",[e._v("You might see many changes. Find the change for the App Service Web App and click on it to see more details")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/150results.png")}}),e._v(" "),a("p",[e._v("(Details of the change)")]),e._v(" "),a("p",[e._v("That's it. We have now changed something in an Azure resource and visualized it with Application Change Analysis. This can be extremely useful when you are troubleshooting errors.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/change-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Change Analysis"),a("OutboundLink")],1),e._v(" is a feature of Azure Monitor that enables you to drill down into the details of application, configuration and infrastructure changes. This will help you troubleshoot errors in your solutions. Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);