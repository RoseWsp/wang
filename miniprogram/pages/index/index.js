//index.js
const app = getApp();

Page({
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio'
    }
  },

  data: {
    body_status: [
      {value: '差', name: '差'},
      {value: '一般', name: '一般'},
      {value: '正常', name: '正常'},
      {value: '良好', name: '良好'},
      {value: '很好', name: '很好'}
    ],
    learn_status: [
      {value: '差', name: '差'},
      {value: '一般', name: '一般'},
      {value: '正常', name: '正常'},
      {value: '良好', name: '良好'},
      {value: '优秀', name: '优秀'}
    ],
    msg:"",
    bodyStatus :"",
    learnStatus :"",
  },
  bocyStatusChange:function(e){
    this.setData({ bodyStatus: e.detail.value})
  },
  learnStatusChange:function(e){ 
    this.setData({ learnStatus: e.detail.value})
  },
  submitHandler:function(){

    if(!this.data.bodyStatus){
      this.setData({ msg:"请选择，身体状况，在提交"})
      return ;
    }

    if(!this.data.learnStatus){
      this.setData({ msg:"请选择，学习状况，在提交"})
      return ;
    }

    this.setData({ msg:"提交：" + this.data.bodyStatus+";"+this.data.learnStatus})
    var db = wx.cloud.database()
    this.setData({ msg:"提交成功"})  
    db.collection('test').add({
      data:{
        body_status:this.data.bodyStatus,
        learn_status:this.data.learnStatus,
        time:new Date(),
      },
      success:function(res){
        this.setData({ msg:"提交成功"})  
      }
    })

  }
})
