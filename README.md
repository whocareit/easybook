# easybook
## react-redux项目总结
### 在整个简书项目的开发过程中，总共完成的功能有下面的几点
1. 搜索框中接收axios数据,实现换一批的功能（其中涉及到如何解决分页）
2. 如何接收数据，然后将其推送到页面上，实现页面中加载更多的功能
3. 实现只有登录以后才能使用的界面处理方法。
### 整个简书项目各部分实现过程
1. 首先是简书中头部导航栏所实现，其需要解决的问题主要有以下几个点
    1. 头部导航栏布局，在react中怎样给每一个部分设计样式，不受其他样式所影响。在这里我们使用了一个插件[styled-components](https://github.com/search?q=styled-components ),在这里我们可以了解到如何去安装并且去使用该第三方模块去创建自己的组件与其实现过程。
    2.导航栏中小图标的使用，使用[iconfont](https://www.iconfont.cn/ )去引用其模块中的小图标。
    3. 在换一批中前面的小图标，去使用[react-transition-group](https://github.com/search?q=react-transition-group)实现图标中的旋转功能
    4. 换一批功能，其主要实现方式，首先去获取到后端发送回的数据，然后就是对数据进行分页，再实现点击换一批后换页的功能。因此，在这三步中，第一
    步如何去获取数据，这里我们需要引用一个第三方模块axios，其安装方式有两种，第一种通过npm安装，第二种通过yarn去安装。然后请求数据的连接，通
    过import axios from 'axios';引入，然后调用它发送axiso请求。第二如何进行分页，在store中储存两个数据，一个是page，一个是pagetotal，通过
    onclick事件去实现。
2. 首页中各个部分功能的实现，其解决的问题主要有以下几点
    1. 首先实现整个页面的布局，将整个页面分为四个组件，然后将再对每个组件进行样式的设计与数据的传输。
    2. 接受后台发送的数据，将数据进行处理，然后展示在页面上。其接收数据的方式与上面的相同。接下来就是如何将数据与组件连接起来，我们使用的是一个第
    三方模块[react-redux](https://www.jianshu.com/p/bd481b5dda7f )，其大概原理就是使用该组件的connect方法向组件去传递两个方法mapStateToPros,
    mapDispatchToProps,页面中需要调用的数据在mapStateToPros,页面中的action请求写在mapDispatchToProps。
3. 详情页面以及登录后使用写文章处理方法
    1. 详情页中，如何准确的去获取到后台发送的数据，然后进行对应的详情页中的展示。通过给数据加id值，然后去获取到对应的id，然后再axios中去显示该id实现
    2. 登录后才能去使用写文章的处理办法是，通过页面跳转的方式。即动态路由的方式,去安装一个第三方模块[react-router-dom](https://github.com/search?q=react-router-dom ),使用该第三方模块中的<Link> 与 <Redirect>去指定跳转路径。
### 整个项目中主要逻辑的实现
* react-redux中访问数据与获取数据之间的方式，在react中组件与数据之间的访问方式，首先用户发送请求，然后用dispatch去方法去获取该请求，其次就是state
获取到该改请求，再在reducer中去更改并且返回一个新的state到组件中，完成整个的数据访问与接收过程。而在react-redux中，所有的数据都是放在store中，首先
并且创建一个store，然后你才能在里面去获取到数据。而在这个项目中使用的是Provider组件，将store放在里面，被Provider包裹的组件就能去获取到整个项目中的
数据
* 整个项目中所有的数据都放在reducer当中，你去获取与接收的数据都必须去访问reducer。为了方便我们去管理，我们将对应的数据，都放在对应的页面中，然后通过
combineReducers 方法去整合所有页面中的reducer。这样做的好处就是方便我们去管理数据。
* 对于不同的功能，我们去请求数据是不同的，我们使用actionCreators去管理每一个请求(注意首先你需要明白的一点就是，在最初时，actionCreators所使用的方法
最后返回的一定是一个对象，当我们使用react-redux后才能使用一个函数执行)

