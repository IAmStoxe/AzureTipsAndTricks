(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{541:function(t,e,a){"use strict";a.r(e);var s=a(69),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service-mobile/app-service-mobile-ios-get-started?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create an iOS app"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"work-with-notification-hubs-on-your-next-native-ios-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-with-notification-hubs-on-your-next-native-ios-application"}},[t._v("#")]),t._v(" Work with Notification Hubs on your next Native iOS application")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/notification-hubs?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Notification Hubs"),a("OutboundLink")],1),t._v(" provides an integrated back end capable of pushing notifications to all the major mobile platforms through their different cloud services. iOS apps use the "),a("a",{attrs:{href:"https://developer.apple.com/documentation/usernotifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Push Notification Service"),a("OutboundLink")],1),t._v(" (APNS), and Notification Hubs can push messages through this service either directly or via an "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/mobile?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Mobile App"),a("OutboundLink")],1),t._v(" back end. Notification Hubs allows you to push messages to millions of devices across platforms with a single API call. These can be to all users, or to particular segments of your customers using tags.")]),t._v(" "),a("h4",{attrs:{id:"get-certified"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-certified"}},[t._v("#")]),t._v(" Get certified")]),t._v(" "),a("p",[t._v("Before you can start using APNS, you need to set up a certificate with your Apple developer account. Launch Keychain Access from a Mac, select "),a("strong",[t._v("Certificate Assistant")]),t._v(" from the Keychain Access menu and then "),a("strong",[t._v('"Request a Certificate From a Certificate Authority"')]),t._v(". Fill in your email address and a name, select "),a("strong",[t._v("Saved to disk")]),t._v(", and store the .CSR file somewhere convenient.")]),t._v(" "),a("p",[t._v("Next, you will need to set up your app ID with the Apple Developer Program. Sign in and then click "),a("strong",[t._v("Identifiers and App IDs")]),t._v(". Click the "),a("strong",[t._v("+")]),t._v(" button to create a new entry. You'll need to provide a friendly name for the app, a unique Bundle Identifier (normally in reverse DNS notation). In the list of App Services checkboxes, make sure you check "),a("strong",[t._v("Push Notifications")]),t._v(".")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/apple-dev-appids.png")}}),t._v(" "),a("p",[t._v("Once you've confirmed the registration, you'll see Push Notifications is highlighted in amber because it requires further configuration. From the App ID list, you can edit this new entry, and then you'll see buttons next to Push Notifications with options to create certificates for development and production use. Click "),a("strong",[t._v("Create Certificate")]),t._v(" against Development. Here, you'll be prompted to upload the .CSR file you created earlier. From this, a certificate will be created and you can download it and install it on your development Mac. For Azure Notification Hubs, you need to export this new certificate as a .p12 file.")]),t._v(" "),a("h4",{attrs:{id:"set-up-notification-hubs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-notification-hubs"}},[t._v("#")]),t._v(" Set up Notification Hubs")]),t._v(" "),a("p",[t._v("When you create a new "),a("strong",[t._v("Notification Hub")]),t._v(" in the "),a("strong",[t._v("Azure portal")]),t._v(", you'll also create a new Notification Hubs namespace. Multiple pricing tiers are available, but you can start with the free tier and upgrade as you scale up your app.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azure-notifications-apns.png")}}),t._v(" "),a("p",[t._v("To send messages, you'll need to configure the hub with one or more services. For iOS, you use the Apple (APNS) service. Here, you select the Certificate authentication mode and upload the certificate .p12 file to provide a link to your App ID. You can toggle the setting between Production and Sandbox, and you should make sure this is set to Sandbox for development. Once that configuration is done, the Notification Hub is ready to use.")]),t._v(" "),a("h4",{attrs:{id:"hooking-up-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooking-up-the-app"}},[t._v("#")]),t._v(" Hooking up the app")]),t._v(" "),a("p",[t._v("iOS apps can request a unique token for APNS and this must be registered with the Notification Hub. You can download the "),a("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkID=799698?WT.mc_id=go-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("WindowsAzureMessaging.framework"),a("OutboundLink")],1),t._v(" and add it to your app. This has the functionality to call Azure Notification Hubs, you just need to add the endpoint connection string and hub name. The hub name is the unique name you gave the Notification Hub when you created it. The connection string can be found in the "),a("strong",[t._v('"Access Policies"')]),t._v(" section of the Notification Hub settings. By default, there are two levels of access and you need the "),a("strong",[t._v("DefaultListenSharedAccessSignature")]),t._v(" for a client app. The other full-access connection string has other permissions on the Notification Hub.")]),t._v(" "),a("p",[t._v("In order for the app to support alert notifications the Info.plist for the app will need editing to add the remote-notification entry to the "),a("strong",[t._v("UIBackgroundModes")]),t._v(" key. This allows the system to wake up your app in the background when a remote notification is received.")]),t._v(" "),a("p",[t._v("From iOS 10, all user notification is handled through the UserNotification framework. To respond to a request to display a notification while your app is running, you must implement the "),a("strong",[t._v("UNUserNotificationCenterDelegate")]),t._v(" protocol in your AppDelegate. You also need to request permission from the user to present notifications.")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didFinishLaunchingWithOptions launchOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LaunchOptionsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Override point for customization after application launch.")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNUserNotificationCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNUserNotificationCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNAuthorizationOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerForRemoteNotifications")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("The first line requests a token for the app to hook up to the APNS. You receive a callback when a token is assigned, and this must be sent to the Azure Notification Hub.")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didRegisterForRemoteNotificationsWithDeviceToken deviceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   hub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SBNotificationHub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HubInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HUBLISTENACCESS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notificationHubPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HubInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HUBNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   hub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withDeviceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deviceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Every time a remote notification is received, "),a("strong",[t._v("didReceiveRemoteNotification")]),t._v(" is called, so this is overridden to display a notification.")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didReceiveRemoteNotification userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnyHashable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fetchCompletionHandler completionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@escaping")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIBackgroundFetchResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("completionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIBackgroundFetchResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("If a UserNotification is requested while the app is running, it won't by default show any alert. You can either request a default alert or implement your own UI to match your app style. For simplicity, this code requests a default alert here.")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("userNotificationCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNUserNotificationCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" willPresent notification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withCompletionHandler completionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@escaping")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNNotificationPresentationOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("completionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UNNotificationPresentationOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"pushing-back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushing-back"}},[t._v("#")]),t._v(" Pushing back")]),t._v(" "),a("p",[t._v("Once configured, you can test that it's working from the Azure portal. The "),a("strong",[t._v('"Test Send"')]),t._v(" item is near the bottom of the service page. Select the Apple platform. Notice that all the services are listed here, even if you've not yet configured them. Attempting to send to a service that is not configured will fail with an error. You can directly edit the default payload to replace with whatever you require. If you want your message to wake your app in the background, you have to include the property "),a("strong",[t._v('"content-available:1"')]),t._v(".")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azure-notifications-testsend.png")}}),t._v(" "),a("p",[t._v("On success, you'll see a list of device registrations and status of the sent message. At this point, you can verify on your development device that the message is displayed as expected.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azure-notifications-device-toast.png")}}),t._v(" "),a("h4",{attrs:{id:"pushing-ahead"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushing-ahead"}},[t._v("#")]),t._v(" Pushing ahead")]),t._v(" "),a("p",[t._v("You've seen that it's very easy to create and use Notification Hubs as long as you work through each of the configuration steps so Notification Hubs has the right certificate and your app is configured correctly. Once that is done, you have a permanent communication channel between your app and your back-end service to keep your app alive. To explore further, you can "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/notification-hubs/notification-hubs-ios-apple-push-notification-apns-get-started?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("view documentation"),a("OutboundLink")],1),t._v(" that will give you more details on targeting individuals and groups of users for a more personal experience.")])])}),[],!1,null,null,null);e.default=n.exports}}]);