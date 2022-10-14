// vue 简单的状态管理模式store
//相当于全局方法和全局属性
export const store = {
    state:{//数据
        iShowNavCommon:false,//侧边导航的显示与隐藏
        catalogolist:[//项目目录
            {title:'fruit-shopping',url:'/fruit'},
            {title:'home',url:'/home'},

          ],
          navcatalogolist:[//侧边栏项目目录
            {title:'主页',url:'/'},
            {title:'fruit-shopping',url:'/fruit'},
            {title:'home',url:'/home'},
          
          ]

    },
    modifyNavLeftShow(params){
        this.state.iShowNavCommon = params;
        console.log('修改成功！',this.state.iShowNavCommon);
    }
}