(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{643:function(e,t,r){"use strict";r.r(t);var o=r(59),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  Help shape the future of Azure Tips and Tricks by telling what you'd like for us to write about "),r("a",{attrs:{href:"https://github.com/microsoft/AzureTipsAndTricks/issues/new?assignees=&labels=&template=survey.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/actions?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/Dn_0La5ozHg?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use GitHub Actions from Azure App Service"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-use-github-actions-from-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-github-actions-from-azure-app-service"}},[e._v("#")]),e._v(" How to use GitHub Actions from Azure App Service")]),e._v(" "),r("h4",{attrs:{id:"automated-deployments-create-better-software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployments-create-better-software"}},[e._v("#")]),e._v(" Automated deployments create better software")]),e._v(" "),r("p",[e._v("When you need to manually build and deploy your app, each time that you make a change, you will make mistakes, which result in bugs and downtime for users. Automating your build and deployment processes makes them less error-prone and allows you to deploy as often as you want. "),r("a",{attrs:{href:"https://github.com/features/actions?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions"),r("OutboundLink")],1),e._v(" can help to automate your builds and deployments and integrates with "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In this post, we'll automatically build and deploy code to an Azure App Service using GitHub Actions.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("An Azure App Service Web App. You can create one using "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=dHTzv-zY17I?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("A GitHub account"),r("OutboundLink")],1),e._v(" with a repository in it that contains code that can run on Azure App Service (like an ASP.NET Core website)")])]),e._v(" "),r("h4",{attrs:{id:"create-a-github-action-from-an-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-github-action-from-an-azure-app-service"}},[e._v("#")]),e._v(" Create a GitHub Action from an Azure App Service")]),e._v(" "),r("p",[e._v("We already have an Azure App Service Web App, and a GitHub repository that contains an ASP.NET Core application. Let's use GitHub Actions to deploy the code from the repository to the Web App.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Navigate to the "),r("strong",[e._v("Azure App Service Web App")])]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Deployment Center")]),e._v(" menu")]),e._v(" "),r("li",[e._v("In the deployment center, select "),r("strong",[e._v("GitHub")]),e._v(" as the source control location\n"),r("ol",[r("li",[e._v("If you haven't used your GitHub account with your Azure account before, you need to click the "),r("strong",[e._v("Authorize button")]),e._v(" to authorize Azure to access GitHub")])])]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Continue")]),e._v(" to go to the next step")]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Build providers")]),e._v(" step, select "),r("strong",[e._v("GitHub Actions")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/87deploymentcenter1.png")}}),e._v(" "),r("p",[e._v("(Select GitHub Actions in the Deployment Center)")]),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v("Select "),r("strong",[e._v("Continue")])]),e._v(" "),r("li",[e._v("In the Configure step:\n"),r("ol",[r("li",[e._v("Select the "),r("strong",[e._v("Repository")]),e._v(" that you want to use")]),e._v(" "),r("li",[e._v("Select the code "),r("strong",[e._v("Branch")]),e._v(" to build and deploy from")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Runtime stack")]),e._v(". In our case, this is "),r("strong",[e._v(".NET Core")]),e._v(" with the latest version")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/87deploymentcenter2.png")}}),e._v(" "),r("p",[e._v("(Configure GitHub access in the Deployment Center)")]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Select "),r("strong",[e._v("Continue")]),e._v(" to proceed")]),e._v(" "),r("li",[e._v("You'll now see the GitHub Action workflow configuration file that describes the GitHub action. Select "),r("strong",[e._v("Finish")]),e._v(" to finalize the workflow")])]),e._v(" "),r("p",[e._v("We have now successfully created a GitHub Action for the Azure Web App. After a few minutes, the workflow will be finished and the code from the repository should be deployed to the Web App. You should be able to see the deployed code run in the Web App when you click on the "),r("strong",[e._v("Browse")]),e._v(" button from the Deployment Center.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/87result2.png")}}),e._v(" "),r("p",[e._v("(Application running in Azure App Service Web App)")]),e._v(" "),r("p",[e._v("And from the Deployment Center, you can click on the "),r("strong",[e._v("GitHub Action link")]),e._v(" to go to the action in GitHub. Here, you can see all the GitHub Action workflows that are configured and their builds and deployments and drill down into the logs of already executed, or in-progress workflows.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/87action.png")}}),e._v(" "),r("p",[e._v("(Details of a GitHub Action workflow)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Automating your build and deployment processes improves the quality of your software. "),r("a",{attrs:{href:"https://github.com/features/actions?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions"),r("OutboundLink")],1),e._v(" allow you to easily automate your builds and deployments and integrate with "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),r("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);t.default=a.exports}}]);