## 书店-Angular

## 1. 初始化项目配置文件
1. 项目配置文件
```
npm init -y
```
得到一个package.json文件
2. 安装node模块
```
npm install express body-parser mongoose --save
```

## 2. 配置前端的依赖文件
1. 初始化
```
bower init
```
2. 添加指定安装位置的配置文件
.bowerrc
```
{
  "directory":"./public/lib"
}
```
2. 安装前端依赖的模块
```
bower install angular bootstrap angular-route   angular-resource --save
```
