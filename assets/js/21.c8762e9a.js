(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{405:function(e,t,o){e.exports=o.p+"assets/img/sign.194f5ee7.png"},406:function(e,t,o){e.exports=o.p+"assets/img/sign-demo.1f95ff8c.png"},500:function(e,t,o){"use strict";o.r(t);var i=o(25),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"vault"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vault"}},[e._v("#")]),e._v(" Vault")]),e._v(" "),i("p",[i("strong",[e._v("What is vaulting?")])]),e._v(" "),i("p",[e._v("Well vaulting is based around 2 things, vault.plist and vault.sig:")]),e._v(" "),i("ul",[i("li",[e._v('vault.plist: a "snapshot" of your EFI')]),e._v(" "),i("li",[e._v("vault.sig: validation of vault.plist")])]),e._v(" "),i("p",[e._v("This can be seen as secure boot for OpenCore, so no one can modify it and get in without your permission.")]),e._v(" "),i("p",[e._v("The specifics of vaulting is that a 256 byte RSA-2048 signature of vault.plist will be shoved into our OpenCore.efi. This key can either be shoved into "),i("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Platform/OpenCore/OpenCoreVault.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCoreVault.c"),i("OutboundLink")],1),e._v(" before compiling or with "),i("code",[e._v("sign.command")]),e._v(" if you already have OpenCore.efi compiled.")]),e._v(" "),i("p",[e._v("Do note that nvram.plist won't be vaulted so users with emulated NVRAM still have risk of someone adding/removing certain NVRAM variables")]),e._v(" "),i("p",[i("strong",[e._v("Settings in your config.plist")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Misc -> Security -> Vault")]),e._v(":\n"),i("ul",[i("li",[i("code",[e._v("Basic")]),e._v(": Requires just vault.plist to be present, mainly used for filesystem integrity verification")]),e._v(" "),i("li",[i("code",[e._v("Secure")]),e._v(": Requires both vault.plist and vault.sig, used for best security as vault.plist changes require a new signature")])])]),e._v(" "),i("li",[i("code",[e._v("Booter -> ProtectSecureBoot:")]),e._v(" "),i("code",[e._v("YES")]),e._v(" "),i("ul",[i("li",[e._v("Needed with Insyde firmwares for fixing secure boot keys and reporting violations")])])])]),e._v(" "),i("p",[i("strong",[e._v("Setting up vault")]),e._v(":")]),e._v(" "),i("p",[e._v("Grab OpenCorePkg and open the "),i("code",[e._v("CreateVault")]),e._v(" folder, inside we'll find the following:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("create_vault.sh")])]),e._v(" "),i("li",[i("code",[e._v("RsaTool")])]),e._v(" "),i("li",[i("code",[e._v("sign.command")])])]),e._v(" "),i("p",[e._v("The last one is what we care about: "),i("code",[e._v("sign.command")])]),e._v(" "),i("p",[e._v("So when we run this command, it'll look for the EFI folder located beside our Utilities folder, so we want to bring either our personal EFI into the OpenCorePkg folder or bring Utilities into our EFI folder:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(405),alt:""}})]),e._v(" "),i("p",[e._v("Now we're ready to run "),i("code",[e._v("sign.command")]),e._v(":")]),e._v(" "),i("p",[i("img",{attrs:{src:o(406),alt:""}})]),e._v(" "),i("p",[i("strong",[e._v("Disabling Vault after setup")]),e._v(":")]),e._v(" "),i("p",[e._v("If you're doing heavy troubleshooting or have the need to disable Vault, the main things to change:")]),e._v(" "),i("ul",[i("li",[e._v("Grab a new copy of OpenCore.efi")]),e._v(" "),i("li",[i("code",[e._v("Misc -> Security -> Vault")]),e._v(" set to Optional")])])])}),[],!1,null,null,null);t.default=n.exports}}]);