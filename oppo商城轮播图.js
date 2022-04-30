// oppo官网跳转
var as = document.querySelectorAll('.toua a')
as[0].onclick = function () {
    as[0].href = 'https://www.oppo.com/cn/'
}
as[1].onclick = function () {
    as[1].href = 'https://www.oneplus.com/cn/'
}
//轮播图的js
//获取ol下面的所有li
var ol = document.querySelector('ol')
var lis = ol.querySelectorAll('li')
//获取ul下面所有的li
var ul = document.querySelector('.lunboul')
var ulli = ul.querySelectorAll('li')
// 设置索引
var index = 0
var lastindex = 0
var time
//循环遍历ol
lis.forEach(function (li, key) {
    //给每一个li绑定点击事件
    li.onclick = function () {
        lastindex = index
        index = key
        //给点击的ol下面的li添加类名
        lis[index].className = 'ac'
        ulli[index].className = 'ac'
        //点击完以后取消所点击到的类
        lis[lastindex].className = ''
        ulli[lastindex].className = ''
    }
})
//开启定时器
time = setInterval(function () {
    lastindex = index
    index++
    if (index > lis.length - 1) {
        index = 0
    }
    //给点击的ol下面的li添加类名
    lis[index].className = 'ac'
    ulli[index].className = 'ac'
    //点击完以后取消所点击到的类
    lis[lastindex].className = ''
    ulli[lastindex].className = ''
}, 1000)
//给左边的绑定点击事件
var goleft = document.querySelector('.goleft')
goleft.onclick = function () {
    lastindex = index
    index--
    if (index < 0) index = ulli.length - 1
    //给点击到的ol下面的里添加类名
    lis[index].className = 'ac'
    //也给图片的索引添加类名
    ulli[index].className = 'ac'
    //给点击到ol下面的li的上一个取消类名
    lis[lastindex].className = ''
    //给图片的索引取消类名
    ulli[lastindex].className = ''
}
//给右边的绑定点击事件
var goright = document.querySelector('.goright')
goright.onclick = function () {
    lastindex = index
    index++
    if (index > lis.length - 1) index = 0
    //给点击到的ol下面的里添加类名
    lis[index].className = 'ac'
    //也给图片的索引添加类名
    ulli[index].className = 'ac'
    //给点击到ol下面的li的上一个取消类名
    lis[lastindex].className = ''
    //给图片的索引取消类名
    ulli[lastindex].className = ''
}
//移入大的轮播图时取消定时器
var lunbotu = document.querySelector('.lunbotu')
lunbotu.onmouseover = function () {
    clearInterval(time)
    goleft.style.display = 'block'
    goright.style.display = 'block'

}
lunbotu.onmouseout = function () {
    goleft.style.display = 'none'
    goright.style.display = 'none'
    time = setInterval(function () {
        lastindex = index
        index++
        if (index > lis.length - 1) {
            index = 0
        }
        //给点击的ol下面的li添加类名
        lis[index].className = 'ac'
        ulli[index].className = 'ac'
        //点击完以后取消所点击到的类
        lis[lastindex].className = ''
        ulli[lastindex].className = ''
    }, 1000)
}


