class pp {
    constructor() {
        this.ll();
        this.z = false;
        this.x = false;
        this.c = false;
        this.v = false;
    }
    ll() {
        this.$('.aa').addEventListener('input', this.panduan.bind(this))
    }
    panduan(eve) {
        if (eve.target.classList.contains('tel')) {
            let aa = /^[\u4E00-\u9FA5]{1,10}$/
            if (aa.test(eve.target.value)) {
                z = true
            }else{
                throw new Error('我是你爸爸')
            }
        }
       
    }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res
    }
}
new pp