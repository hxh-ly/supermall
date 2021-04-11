```
git remote addd origin  _____________
git push -u origin master
```

1. 目录结构划分

2. 引入css

3. 别名配置

   ![image-20210407092306524](C:\Users\可爱的小栩\AppData\Roaming\Typora\typora-user-images\image-20210407092306524.png)

注意css引入： @import '~assets/css/base.css';

4. navbar 制作

   ```
   1.navbar
   	<div class='center'><slot name="center" ></div>  样式用div包裹
   2.home引入
   	<div id='home'>
   	<nav-bar class='home-nav'> <div slot="center"></nav-bar>
   	</div>
   ```

   