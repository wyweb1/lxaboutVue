// vue 简单的状态管理模式store
//相当于全局方法和全局属性
export const store = {
    state:{//数据
        iShowNavCommon:true,//侧边导航的显示与隐藏
       

    },
    modifyNavLeftShow(params){
        this.state.iShowNavCommon = params;
        console.log('修改成功！',this.state.iShowNavCommon);
    }
}