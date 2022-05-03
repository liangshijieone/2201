class denglu {
    constructor() {
        //给登录按钮绑定点击事件
        this.$('.biaodan button').addEventListener('click', this.clickFn.bind(this))
    }
    clickFn() {
        let aa = this.$('.input1').value
        let bb = this.$('.input2').value
        //判断账号密码不可为空
        if (!aa.trim() || !bb.trim()) throw new Error('不可以为空哦!宝~')
        //改变一下传输数据的格式
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        //对参数进行编码
        let data = `username=${aa}&password=${bb}`
        //要发送post请求
        axios.post(' http://localhost:8888/users/login', data).then(res => {
            //结构解析出data中的status和data
            let { status, data } = res
            console.log(res)
            if (status == 200) {
                //判断是否登陆成功根据code码来辨别
                if (data.code == 1) {
                    //存储token和id值得数据localStorage.setItem()
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('user_id', data.user.id)
                    location.assign(location.search.split('=')[1])
                }else{  //登陆失败就显示错误
                    layer.open({
                        title: '错误提示'
                        ,content: '账号或密码输入错误'
                      });
                }


            }
        })
    }
    //获取节点的方法
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res
    }
}
new denglu;