window.onload = function () {  // 文档和所需资源都加载完毕

    var box = document.getElementById('container'),
        imgs = box.getElementsByTagName('img'); // 注意：一个是element,一个是elements

    var imgWidth = imgs[0].offsetWidth;
    // offsetWidth返回的是width + padding + border 之和，返回的是一个纯数字
    var exposeWidth = 160;
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;

    box.style.width = boxWidth + 'px';
    
    function setImagesPos() {
        for (var i = 1, len = imgs.length; i < len; i++) {
            imgs[i].style.left = imgWidth + (i - 1) * exposeWidth + 'px';
            // 注：left是margin据外层容器的距离
        }
    }

    setImagesPos();

    var translate = imgWidth - exposeWidth;

    for (var i = 0, len = imgs.length; i < len; i++) {
        (function (i) {
            // 添加闭包，保存i变量，如果不保存，i一直是4
            imgs[i].onmouseover = function () {
                setImagesPos(); // 先归位
                for (var j = 1; j <= i; j++) {  // 改变的是第二张到当前鼠标移动张之间的张数
                    imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
                    // parseInt()的第二个参数是设定转换的进制
                }
            };
        })(i);
    }

    // console.log(i);  此时i为4
};