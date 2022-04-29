class list1 {
    constructor() {
      this.getdata();
    //   this.$('.findn1')
    this.get1();
    this.get2();
    }
        //获取
        async get1() {
            //获取ajax请求
            let res = await axios.get('http://localhost:3000/two')
            console.log(res);
            this.$('.findn').innerHTML= `
               <div>
               <img src="${res.data.src}" alt="">
               </div>
               `  
        }
    //获取数据的方法
    async getdata() {
        //获取ajax请求
        let res = await axios.get('http://localhost:3000/one')
        console.log(res);
        let aa  ='<div class="findn"></div> '
        res.data.forEach((item)=>{
           aa+=`
       <div class="findn1">
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
        console.log(res);
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

     $(tag){
         let res =document.querySelectorAll(tag)
         return res.length == 1 ? res[0]:res
     }
}
new list1