class oo {
    constructor() {
        this.post();
        this.$('.fangdajing').addEventListener('mousemove', this.moveFn.bind(this))
        this.$('.gudingimg').addEventListener('click', this.tiaoFn.bind(this))
        this.$('.fangdajing').addEventListener('click', this.button.bind(this))
    }
    tiaoFn() {
        location.assign('./商品详情页.html')
    }
    moveFn(eve) {
        const div = document.querySelector('.img div')
        const img = document.querySelector('.img')
        const img1 = document.querySelector('.img1')
        const big = document.querySelector('.big')
        const bigbox = document.querySelector('.fangdajing')
        img.onmouseenter = function () {
            div.style.display = 'block'
            img1.style.display = 'block'
        }
        img.onmouseleave = function () {
            div.style.display = 'none'
            img1.style.display = 'none'
        }
        //获取大盒子的
        let bigw = bigbox.offsetLeft
        let bigh = bigbox.offsetTop
        // console.log(bigw, bigh);
        img.onmousemove = function (eve) {
            //获取的是可视鼠标坐标
            let ww = eve.pageY
            let wh = eve.pageX
            //获取元素自身的宽高
            let offw = div.offsetWidth
            let offh = div.offsetHeight
            //鼠标坐标
            let zuobiaot = ww - offw / 2 - bigh
            let zuobiaol = wh - offh / 2 - bigw
            //判断
            if (zuobiaot < 0) zuobiaot = 0
            if (zuobiaol < 0) zuobiaol = 0
            //最大界限
            let maxw = img.offsetWidth - offw
            let maxh = img.offsetHeight - offh
            //判断
            if (zuobiaol > maxw) zuobiaol = maxw
            if (zuobiaot > maxh) zuobiaot = maxh
            div.style.top = zuobiaot + 'px'
            div.style.left = zuobiaol + 'px'
            // 小黄块的实时left/小黄块移动的最大left  = 大图的实时位置left/ 大图能移动的最大left值
            //获取大图能移动的最大位置
            let maxbigw = big.offsetWidth - img1.offsetWidth
            let maxbigh = big.offsetHeight - img1.offsetHeight
            //大图的实时位置
            let img1bigw = zuobiaol / maxw * maxbigw
            let img1bigh = zuobiaot / maxh * maxbigh
            big.style.top = -img1bigh + 'px'
            big.style.left = -img1bigw + 'px'
        }
    }
    async button(eve) {
        if (eve.target.classList.contains('button1')) {
            //获取用户id
            let userid = localStorage.getItem('user_id') - 0
            // console.log(userid);
            //获取商品id
            let one = eve.target.parentNode.parentNode.parentNode.parentNode
            let goodsid = one.dataset.id - 0
            // console.log(goodsid,userid);
            let parem = `id=${userid}&goodsId=${goodsid}`
            //获取token值
            let token = localStorage.getItem('token')
            //添加字段
            axios.defaults.headers.common['authorization'] = token;
            //发送axios
            let {data,status} = await axios.post(' http://localhost:8888/cart/add', parem)
            if(status==200){
                if(data.code==1){
                    location.assign('./购物车.html')
                }
            }
        }
    }
    async post(eve) {
        let aa = location.search;
        aa = aa.slice(1, aa.length)
        //   console.log(aa);
        let bb = ''
        let { data, status } = await axios.get('http://localhost:8888/goods/item' + '?' + aa)
        console.log(data);
        if (status == 200) {
            bb += `
          <div class="fangdajing" data-id="${data.info.goods_id}">
          <div class="img">
            <img src="${data.info.img_big_logo}" alt="">
            <div></div>
        </div>
        <div class="img1">
            <img src="${data.info.img_big_logo}" alt="" class="big">
        </div>
        <div class="aa">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【${data.info.category}】JING LING GONG ZHU<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${data.info.category}</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.info.title} </p>
            <p>【面议价格】①前100名面议者立省1000￥ | 先到先得 | 数量有限 | 过期不候</p>
            <div class="bb">
                <span>价&nbsp;&nbsp;&nbsp;格</span>
                <span>抢&nbsp;&nbsp;购&nbsp;&nbsp;价</span>
                <span>￥**************</span>
                <div class="cc">
                   <span>促&nbsp;&nbsp;&nbsp;销</span>
                   <span>限时特价</span>
                   <span>限时降价*******</span>
                   <p>
                    <span>赠送积分</span>
                    <s>一次性付清,可在享受10%的优惠</s>
                   </p>
                </div>
                <hr>
                <div class="dd">
                         <button class="button1">加入购物车</button>
                        <button class="button2">立即下单</button>
                </div>
            </div>
        </div>
        </div>
        </div>
          `
        }
        this.$('.fangdajing').innerHTML = bb
    }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res
    }
}
new oo;