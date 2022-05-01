class list1 {
    constructor() {
      this.getdata();
    //   this.$('.findn1')
    this.get1();
    this.get2();
    this.get3();
    this.get4();
    this.get5();
    this.get6();
    this.get7();
    this.get8();
    this.get9();
    this.get10();
    //加入购物车使用事件委托
    this.$('.findn').addEventListener('click',this.tiaozhuan1.bind(this)) 
    // console.log(this.$('.erfenyi .ac'));
    }
   
    //获取购物车的方法
    tiaozhuan1(eve){
        // console.log(this);   
        // console.log(eve.target);
        //判断用户是否登录.如果获取到了token就表示登陆了
        //getintem 获取值
        let token = localStorage.getItem('token')
        //assign 是跳转的意思   在location    还有一种跳转是herf
        if(!token) location.assign('./登录页面.html?ReturnUrl=./oppo商城.html')
    }
    //获取数据的方法
    async getdata() {
        //获取ajax请求
        let res = await axios.get('http://localhost:3000/one')
        let aa  ='<div class="findn"></div> '
        res.data.forEach((item)=>{
           aa+=`
           <div class="findn" data-id="${item.id}">
           <img src="${item.src}" alt="">
           <p>${item.name}</p>
           <span class="small">卷后价</span>
           <span class="small">￥</span>
           <span class="big">${item.price}</span>
           </div> 
           ` 
        })
        this.$('.findn').innerHTML=aa
    }

    //获取数据的方法
    async get2() {
        //获取ajax请求
        let res = await axios.get('http://localhost:3000/three')
        let aa  ='<div class="findx1"></div> '
        res.data.forEach((item)=>{
           aa+=`
       <div>
           <img src="${item.src}" alt="">
           <p>${item.name}</p>
           <span class="small">卷后价</span>
           <span class="small">￥</span>
           <span class="big">${item.price}</span>
       </div>
           `  
        })
        this.$('.findx1').innerHTML=aa
    }
    //获取数据
    async get1(){
        //获取ajax请求
        let res = await axios.get('http://localhost:3000/fourth')
        let aa = ' <div class="findx2"></div>'
        res.data.forEach(item=>{
            aa+=`
            <div class="findx22">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.findx2').innerHTML=aa
    }
    //获取数据
    async get3(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/five')
        let aa1 = '<div class="reno"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno').innerHTML=aa1
    }
     //获取数据
     async get4(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/six')
        let aa1 = '<div class="reno1"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno1').innerHTML=aa1
    }

    //获取数据
    async get5(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/seven')
        let aa1 = '<div class="reno2"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno2').innerHTML=aa1
    }
    //获取数据
    async get6(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/eight')
        let aa1 = '<div class="reno3"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno3').innerHTML=aa1
    }
    //获取数据
    async get7(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/night')
        let aa1 = '<div class="reno4"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno4').innerHTML=aa1
    }
       //获取数据
       async get8(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/ten')
        let aa1 = '<div class="reno5"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno5').innerHTML=aa1
    }
    //获取数据
    async get9(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/eleven')
        let aa1 = '<div class="reno6"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno6').innerHTML=aa1
    }
     //获取数据
     async get10(){
        //获取ajax请求
        let res = await axios.get(' http://localhost:3000/twelve')
        let aa1 = '<div class="reno7"></div>'
        res.data.forEach(item=>{
            aa1+=`
            <div class="op">
            <img src="${item.src}" alt="">
            <p>${item.name}</p>
            <span class="small">券后价</span>
            <span class="small">￥</span>
            <span class="big">${item.price}</span>
            </div>
            `
        })
        //将数据添加到节点里面
        this.$('.reno7').innerHTML=aa1
    }
     $(tag){
         let res =document.querySelectorAll(tag)
         return res.length == 1 ? res[0]:res
     }
}
 new list1