This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

使用react开发的简易记账项目
学完react基础后，在网上找了这个项目直接开练
课程地址：https://coding.imooc.com/class/302.html


如果你没用过github ，可以看这边文章 差不多10分钟就可以简单上手  学会将自己的代码上传到github中去
https://www.jianshu.com/p/7edb6b838a2e


##关于文件结构
- components文件夹存放所有的展示型组件
- containers文件夹存放所有的容器型组件
- 这两个文件夹下面的__test__文件夹存放所有的组件测试文件
- 文件使用 Pascal Case命名法 首字母大写，而后的每个单词首字母大写

- 首先单独开发各个组件
 - Home页面由 MonthPicker(年月选择), TotalPrice(总支出，收入), ViewTab(列表模式，图标模式切换),CreateBtn(新建收入/支出button), PriceList(收入支出列表)组成 

##  state设计原则

- 最小化state
- 不要重复数据
- 可以推算出来的值 就不要写在state中

## 数组方法
```
reduce()
filter()
includes()
map()

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
