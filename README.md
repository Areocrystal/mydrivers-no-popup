自制chrome插件，干掉驱动之家 快科技恶心的三分钟闲置弹窗；

原理非常非常简单，移除弹窗的dom元素就行；

已打包成crx文件，但未发布到chrome应用商店，受chrome安全策略影响，可能加载不上去，因此需要production文件夹下的chrome.adm来添加至白名单中。
