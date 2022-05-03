var div = document.querySelector('.img div')
var img = document.querySelector('.img')
var img1 = document.querySelector('.img1')
var big = document.querySelector('.big')
var bigbox = document.querySelector('.fangdajing')
img.onmouseover = function () {
    div.style.display = 'block'
    img1.style.display = 'block'
}
img.onmouseout = function () {
    div.style.display = 'none'
    img1.style.display = 'none'
}
//获取大盒子的
let bigw = bigbox.offsetLeft
let bigh = bigbox.offsetTop
console.log(bigw, bigh);
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