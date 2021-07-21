# supermall

## 项目简介：

该项目是仿蘑菇街的WebApp,基于Vue框架进行开发。项目分为4个模块，首页、分类、购物车、个人页。目前只完成到首页和购物车。

## 项目技术：

- vue全家桶

- axios 请求库

- better-scroll 解决移动端卡顿问题

## 项目搭建：

1. 下载node
   node -v      检测node 版本
   安装node 为了使用npm

2. 安装淘宝镜像
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   把npm 改成 cnpm
   因为npm下载速度慢

3. 搭建脚手架
   cnpm install -g vue-cli

4. 创建项目
   vue init webpack 项目名称
   vue-router 是否安装路由     选择yes （y）
   后面都选择no（n）

5. 进入项目 安装依赖（模板）
   cnpm install

6. 运行
   cnpm run serve

# 目录结构

-- src 【源代码】

​	-- assets 【静态资源】

​    -- common 【全局工具】

​    -- components 

​		    -- common  【通用复用组件】

​	        -- content 【本项目使用组件】

​     -- network 【网络请求】

​     -- router 【路由配置】

​     -- store 【全局状态】

​	 -- views  【模块视图】

​    --App.vue 【主入口】

​	

附：

需配置 `babel.config.js`【转为es5工具】

​			`postcss.config.js`【ps转vw工具】

​			`vue.config.js`【wepback额外配置】



学习资源来源：[最全最新Vue、Vuejs教程，从入门到精通_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV15741177Eh?from=search&seid=14128837682875584870)





