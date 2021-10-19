(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{504:function(e,t,a){"use strict";a.r(t);var r=a(43),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🦄 Checkout my "),a("a",{attrs:{href:"https://twitch.tv/mbcrump?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitch Azure Developer Streaming"),a("OutboundLink")],1),e._v("!")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=KmxcQQxhW6o&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=82&t=0s?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get started with .NET Core on Kubernetes with Azure Dev Spaces"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"important-azure-dev-spaces-is-retired-as-of-may-15-2021-customers-should-use-bridge-to-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-azure-dev-spaces-is-retired-as-of-may-15-2021-customers-should-use-bridge-to-kubernetes"}},[e._v("#")]),e._v(" "),a("em",[e._v("Important: Azure Dev Spaces is retired as of May 15, 2021. Customers should use "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/visualstudio/containers/overview-bridge-to-kubernetes?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bridge to Kubernetes"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"part-1-get-started-with-net-core-on-kubernetes-with-azure-dev-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-get-started-with-net-core-on-kubernetes-with-azure-dev-spaces"}},[e._v("#")]),e._v(" Part 1 - Get started with .NET Core on Kubernetes with Azure Dev Spaces")]),e._v(" "),a("h4",{attrs:{id:"using-azure-dev-spaces-to-develop-for-azure-kubernetes-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-dev-spaces-to-develop-for-azure-kubernetes-service"}},[e._v("#")]),e._v(" Using Azure Dev Spaces to develop for Azure Kubernetes Service")]),e._v(" "),a("p",[e._v("This is part 1 of a 3-part series about "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip228.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1 Get started with .NET Core on Kubernetes with Azure Dev Spaces (this post)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip229.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 2 Develop multi-service applications on Kubernetes with Azure Dev Spaces"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip230.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 3 Use Azure Dev Spaces to collaborate with a team on Kubernetes"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Developing container-based solutions used to be challenging. You needed to create and run the complete solution locally, with all the containers that run all the services you need. This takes a lot of compute resources and makes it difficult to easily update components and debug them.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(" makes developing container-based solutions for "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),a("OutboundLink")],1),e._v(" a lot easier. It provides a way to run your solution in the cloud and update it easily and quickly to create a great developer experience.")]),e._v(" "),a("p",[e._v("In this article, we'll take a look at how you can use Azure Dev Spaces to create and run an ASP.NET Core application.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("The latest version of the "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest&WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(" on your local machine")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://dotnet.microsoft.com/download?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The latest version of "),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("We are going to use the Azure CLI to perform most of our actions. You can also do all of this through the Azure portal.\nOpen a command prompt with the Azure CLI Tools installed and log into your Azure account to get started:")]),e._v(" "),a("h4",{attrs:{id:"create-a-kubernetes-cluster-enabled-for-azure-dev-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-kubernetes-cluster-enabled-for-azure-dev-spaces"}},[e._v("#")]),e._v(" Create a Kubernetes cluster enabled for Azure Dev Spaces")]),e._v(" "),a("p",[e._v("Let's create a Kubernetes cluster in Azure and enable Azure Dev Spaces in it.")]),e._v(" "),a("p",[e._v("Open a command prompt and log into your Azure account to get started:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az login\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If you have multiple Azure subscriptions, you can select one by first finding the ID of the subscription that you want with this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az account list\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("And if the subscription which has the "),a("strong",[e._v("isDefault:true")]),e._v(" is not the one you want to use, set the subscription using this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az account set --subscription <subscription ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now that we are logged in, we'll create a new resource group that will contain the Kubernetes cluster.\nIn the "),a("strong",[e._v("<region>")]),e._v(" placeholder, fill in a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about#supported-regions-and-configurations?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("region that supports Azure Dev Spaces"),a("OutboundLink")],1),e._v(", like "),a("strong",[e._v("westeurope")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az group create --name TipsAndTricksAKS --location <region>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Next, create the Kubernetes cluster in Azure by running this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az aks create -g TipsAndTricksAKS -n MyAKS --location <region> --disable-rbac --generate-ssh-keys\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("And finally, enable the Kubernetes cluster for Azure Dev Spaces with this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az aks use-dev-spaces -g TipsAndTricksAKS -n MyAKS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will also prompt you to install the Azure Dev Spaces CLI on your local machine, like in the image below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29azuredevspacescli.png")}}),e._v(" "),a("p",[e._v("(Install the Azure Dev Spaces CLI)")]),e._v(" "),a("h4",{attrs:{id:"run-and-debug-an-application-on-kubernetes-using-azure-dev-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-and-debug-an-application-on-kubernetes-using-azure-dev-spaces"}},[e._v("#")]),e._v(" Run and debug an application on Kubernetes using Azure Dev Spaces")]),e._v(" "),a("p",[e._v("Now that we have a Kubernetes cluster with Azure Dev Spaces, we can deploy and run an application in it.")]),e._v(" "),a("p",[e._v("To make it easy on ourselves, we will use an already existing application:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to the "),a("a",{attrs:{href:"https://github.com/Azure/dev-spaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces sample application"),a("OutboundLink")],1),e._v(" and "),a("strong",[e._v("clone or download")]),e._v(" it to your local machine")])]),e._v(" "),a("li",[a("p",[e._v("On your local machine, navigate to the "),a("strong",[e._v("samples/dotnetcore/getting-started/webfrontend")]),e._v(" directory")])]),e._v(" "),a("li",[a("p",[e._v("Open the "),a("strong",[e._v("webfrontend")]),e._v(" folder with "),a("strong",[e._v("VS Code")]),e._v(". This will open a standard ASP.NET Core web application")])]),e._v(" "),a("li",[a("p",[e._v("In VS Code, open the "),a("strong",[e._v("terminal")]),e._v(" by clicking on the "),a("strong",[e._v("View > Terminal")]),e._v(" menu-item")])]),e._v(" "),a("li",[a("p",[e._v("In the terminal, make sure that the prompt is in the "),a("strong",[e._v("webfrontend directory")]),e._v(". If it isn't, navigate to the webfrontend directory by typing")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd [location of the code on your computer]samples/dotnetcore/getting-started/webfrontend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Now run the following command to prepare the application to run in a container on Kubernetes:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds prep --public\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This adds a "),a("strong",[e._v("Docker file")]),e._v(" to the application, that enables it to run in a container. And a "),a("strong",[a("a",{attrs:{href:"https://docs.helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm chart"),a("OutboundLink")],1)]),e._v(" that it can use to run in Kubernetes. And also an "),a("strong",[e._v("azds.yaml")]),e._v(" file, which configures the application to work with Azure Dev Spaces:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29azdsprep.png")}}),e._v(" "),a("p",[e._v("(Docker, Kubernetes and Azure Dev Spaces files in the project)")])])]),e._v(" "),a("p",[a("strong",[e._v("Run and update the application")])]),e._v(" "),a("p",[e._v("Now for some container magic! Let's run the application and see how it works with Azure Dev Spaces.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In VS Code, in the "),a("strong",[e._v("terminal")]),e._v(", make sure that you are still in the "),a("strong",[e._v("webfrontend")]),e._v(" directory")])]),e._v(" "),a("li",[a("p",[e._v("Run the following command to run the code:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds up\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The first time that you run this command, it will take several minutes, as it is creating and uploading a container to Azure.")])]),e._v(" "),a("li",[a("p",[e._v("When the application is running, you will see the URL to the application in the output of the "),a("strong",[e._v("terminal")]),e._v(", like in the image below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29runningtheapp.png")}}),e._v(" "),a("p",[e._v("(Running the app produces output in the VS Code terminal)")]),e._v(" "),a("p",[e._v("Notice that there are "),a("strong",[e._v("two URLs")]),e._v(" to the application. One that runs in Azure and one on "),a("strong",[e._v("localhost")]),e._v(". Azure Dev Spaces routes the application to localhost with the Kubernetes port-forward functionality (so it is still running in Azure), so that you can interact with the application from your local machine. The terminal also shows the logs of any interaction with the application. When you use the application, you'll see the requests to the app show up")])]),e._v(" "),a("li",[a("p",[e._v("Use one of the "),a("strong",[e._v("application URLs")]),e._v(" to open the application in a browser")])]),e._v(" "),a("li",[a("p",[e._v("Now go to VS Code and "),a("strong",[e._v("change some HTML")]),e._v(" in one of the views of the application. When you save the changes, Azure Dev Spaces instantly sends the changes to Kubernetes and the application is updated. This work really fast and facilitates a "),a("strong",[e._v("very fast developer experience")]),e._v(". This work so fast, because ASP.NET Core doesn't require a compilation for changed files. However, if you change some code, like code in a controller of the application, it is still fast. When you change code, you do need to run the "),a("strong",[e._v("azds up")]),e._v(" command again to recompile the application")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29appinbrowser.png")}}),e._v(" "),a("p",[e._v("(The application in a browser, also reachable from localhost)")])])]),e._v(" "),a("p",[a("strong",[e._v("Debug the application")]),e._v("\nUsing Azure Dev Spaces, we can also debug the application easily. To do that, the code in VS Code needs to communicate with the Azure Dev Space.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In VS Code, go to "),a("strong",[e._v("View > Command Palette")]),e._v(" and type "),a("strong",[e._v("Azure Dev Spaces: Prepare configuration files for Azure Dev Spaces")]),e._v(". This adds debug configuration for Azure Dev Spaces to the project")])]),e._v(" "),a("li",[a("p",[e._v("Click on the "),a("strong",[e._v("Debug icon")]),e._v(" on the left sidebar of VS Code")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("strong",[e._v(".NET Core Launch (AZDS)")]),e._v(", like in the image below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29debuggingaks.png")}}),e._v(" "),a("p",[e._v("(The debug configuration in VS Code)")])]),e._v(" "),a("li",[a("p",[e._v("Hit "),a("strong",[e._v("F5")]),e._v(" to start debugging")])]),e._v(" "),a("li",[a("p",[e._v("You can now put breakpoints in your code and diagnose the application")])])]),e._v(" "),a("p",[e._v("The beauty of working with Azure Dev Spaces is that you can quickly make changes and continue working.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Make a change to code in the "),a("strong",[e._v("HomeController.cs")]),e._v(" file")])]),e._v(" "),a("li",[a("p",[e._v("Now restart the debugging process by clicking the "),a("strong",[e._v("Restart button")]),e._v(" in the "),a("strong",[e._v("Debug actions pane")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/29debuggingaks2.png")}}),e._v(" "),a("p",[e._v("(Restart debugging)")]),e._v(" "),a("p",[e._v("The change will be uploaded and you can continue to debug with the new code. This is very fast, because Azure Dev Spaces only incrementally recompiles code within the existing container to provide a faster edit/debug loop.")])])]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Running containers offers a lot of freedom but can also slow down your develop-deploy-debug cycle as you need to compile containers and deploy and run them everytime you change your code. "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(" helps with that. It works with "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),a("OutboundLink")],1),e._v(" to provide a fast and seamless developer experience. When you use Azure Dev Spaces, your container-based solution runs in the cloud, but you can easily develop your code locally and run and debug it, without running a local Docker engine. Go and check it out!")])])}),[],!1,null,null,null);t.default=n.exports}}]);