class gouwu {
    constructor() {
        this.checkLogin();
        this.getgouwu();
        this.clickfn();

    }
    //给div绑定二级事件
    clickfn() {
        this.$('.shangpin1').addEventListener('click', this.bindfn.bind(this))
        this.$('.tou1').addEventListener('click', this.quanxuan.bind(this))

    }
    //点击事件
    quanxuan(eve) {
        let checked = eve.target.checked
        this.onefn(checked)
        this.getnumber();
    }
    //获取单个商品得选中状态
    onefn(status) {
        let one = document.querySelectorAll('.diyige')
        one.forEach(ele=> {
            //   console.log(ele);
            //找到单个商品得复选框
            ele.firstElementChild.checked = status
        })
    }
    //操作购物车页面用户必须登录
    async checkLogin() {
        //获取token值，进行判断是否用户登录
        const TOKEN = localStorage.getItem('token')
        let userId = localStorage.getItem('user_id')
        axios.defaults.headers.common['authorization'] = TOKEN;
        let { data, status } = await axios.get('http://localhost:8888/users/info/' + userId)
        // console.log(data);
        //如果没有登陆就跳转到登陆页面
        if (!TOKEN || data.code == 401) location.assign('./登录页面.html?ReturnUrl=./购物车.html')
    }
    bindfn({ target }) {
        //    console.log(target);
        //判断是否有节点
        if (target.parentNode.classList.contains('last')) {
            this.shanchu(target)
        }
        //判断是否点击的为单个的商品
        if (target.classList.contains('box2')) {
            //   console.log(target);
            this.getones(target)
            //统计商品价格和数量的方法
            this.getnumber()
        }
    }

    //删除
    shanchu(target) {
        let that = this
        //确认是否删除
        let bb = layer.confirm('确定要删除吗?', {
            title: "删除提示"
        }, function () {
            //获取商品id
            let divobj = target.parentNode.parentNode.parentNode
            let id = divobj.dataset.id
            // console.log(id);
            //获取用户id
            let userId = localStorage.getItem('user_id')
            //发送删除商品数据
            axios.get('http://localhost:8888/cart/remove?id=' + userId + '&goodsId=' + id).then(res => {
                let { data, status } = res
                // console.log(data);
                if (data.code == 1) {
                    layer.close(bb)
                    layer.msg('商品删除成功')
                    //在页面中删除节点
                    divobj.remove()
                    //统计商品价格和数量的方法
                    that.getnumber()
                }
            })
        })
    }
    //获取所有的单个复选框
    getones(target) {
        //如果是取消,就让全选取消
        if (!target.checked) {
            this.$('.box1').checked = false
        }
        if (target.checked) {
            let res = Array.from(this.$('.box2')).find(checked => {
                //没有被选中为flase
                return !checked.checked;
            })
            //如果返回undefined
            if (!res) return this.$('.box1').checked = true
        }
    }
    //获取页面中所有商品的价格和数量
    getnumber() {
        //获取一整个大div
        let div = document.querySelectorAll('.diyige')
        // console.log(div);
        let num = 0
        let xiaoji = 0
        div.forEach(ele => {
            if (ele.firstElementChild.checked) {
                //数量的获取
                num = ele.querySelector('.uu').innerHTML - 0 + num
                xiaoji = ele.querySelector('.tt').innerHTML - 0 + xiaoji
            }
        })
        this.$('.ll').innerHTML = num
        this.$('.pp').innerHTML = '￥' + (xiaoji - parseInt(xiaoji * 0.1))
        this.$('.dd').innerHTML = '已节省 :    ￥' + parseInt(xiaoji * 0.1)
    }
    //获取购物车中得数据
    async getgouwu() {
        //获取token值
        const TOKEN = localStorage.getItem('token')
        //获取用户id
        let userId = localStorage.getItem('user_id')
        //加上authorization值
        axios.defaults.headers.common['authorization'] = TOKEN;
        let { data, status } = await axios.get('http://localhost:8888/cart/list?id=' + userId)
        // console.log(data);
        if (status == 200) {
            //判断是否超过有效期
            if (data.code == 401) location.assign('./登录页面.html?ReturnUrl=./购物车.html')
            let html = '<div class="gouwu"></div>';
            data.cart.forEach(ele => {
                html += `
                <div data-id=${ele.goods_id} class="diyige">
                <input type="checkbox" class="box2">
                <div class="tu1">
                    <img src="${ele.img_small_logo}" alt="">
                    <p>${ele.title}</p>
                </div>
                <div class="you">
                    <p>${ele.current_price}</p>
                    <p class="p1">
                        <button class="button4">-</button>
                        <span class="uu">${ele.cart_number}</span>
                        <button class="button5">+</button>
                    </p>
                    <p class='tt'>${ele.price * ele.cart_number}</p>
                    <div class="last">
                        <a href="#none">删除</a>
                        <p>添加到我朋友圈</p>
                    </div>
                </div>
            </div>
            <hr>
                `
            })
            this.$('.shangpin1').innerHTML = html
        }
    }
    //操作减号
    // zuoFn(eve){
    //     if(eve.target.classList.contains('button4')){
    //         let aa = eve.target.parentNode.parentNode.parentNode
    //         // 获取token值
    //     const TOKEN = localStorage.getItem('token')
    //     // 获取用户id
    //     let userId = localStorage.getItem('user_id')
    //     // 加上authorization值
    //     axios.defaults.headers.common['authorization'] = TOKEN;
    //         axios.get('http://localhost:8888/cart/list?id=' + userId).then(data=>{
    //            let res = data.data.cart
    //            console.log(res);
    //         })
    //     }
    // }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res
    }
}
new gouwu();