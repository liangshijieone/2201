class A {
    constructor(){
        this.get();
        this.denglu();
        this.clickFn();
    }
    clickFn(){
        this.$('.main').addEventListener('click',this.img.bind(this))
    }
    async img(eve){
        if(eve.target.classList.contains('tt')){
            //获取商品id
            let one = eve.target.parentNode
            let id = one.dataset.id - 0
            location.assign('./放大镜.html?id='+id)
        }
    }
    denglu(){
        //获取token值
        let res = localStorage.getItem('token')
        if(!res) location.assign('./登录页面.html?ReturnUrl=./商品详情页.html')
    }
   async get(){
        let aa =''
        let res = await axios.get('http://localhost:8888/goods/list?current=2')
        let bb = res.data.list
        bb.forEach(ele => {
                aa+=`
        <div class="box1" data-id="${ele.goods_id}">
             <img src="${ele.img_big_logo}" alt="" class="tt">
             <span>${ele.title}</span>
             <span>￥${ele.price}</span>
             <a href="./oppo商城.html">立即抢购</a>
         </div>
        `
        });
        this.$('.main').innerHTML=aa
    }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res
    }
}
new A;