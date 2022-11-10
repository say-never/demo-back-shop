1.login登录界面style样式没有完全呈现

解决方法：方法名字写错了！！是contaier不是container

2.![image-20221108144219070](C:\Users\20444\AppData\Roaming\Typora\typora-user-images\image-20221108144219070.png)

解决方法：

3.

![image-20221108154954145](C:\Users\20444\AppData\Roaming\Typora\typora-user-images\image-20221108154954145.png)

原因：提交的代码是新创建的项目，和gitee库上面的原本的不一样

解决方法：删库重新提交

4.

![image-20221110173003334](C:\Users\20444\AppData\Roaming\Typora\typora-user-images\image-20221110173003334.png)

原因：过滤器的顺序问题

解决方法：过滤器应该先执行，再绑定vue实例

5.eslint语法检测报错

解决方案：lintOnSave：false