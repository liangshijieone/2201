//获取input框
let input1 = document.querySelector('.text')
let button = document.querySelector('button')
let input2 = document.querySelector('.checkbox')
console.log(input2.checked);
//创建两个变量判断状态
let bb = false
let cc = false 
//绑定点击事件
button.onclick=function(){
    let aa =/^\w{11}$/
    if(aa.test(input1.value)){
         bb = true
    }
    if(input2.checked){
        cc=true
    }
    if(bb || cc) {
        location.assign('./登录页面.html')
    }
}

