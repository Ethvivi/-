const glide = new Glide(".glide");

const captionsEL = document.querySelectorAll(".slide-caption"); /* querySelectorALL获取所有class元素 */

/* glide on是监听事件  mount.after run.after是一个事件 */
glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEL[glide.index];   /*返回的下标*/ 
    anime({
        targets: caption.children,                        /* 对什么对象执行动画class */
        opacity : [0 , 1],
        duration: 400,
        easing: "linear", /*线性动画 */
        delay : anime.stagger(400, {start: 300}),      /* 时间延迟 毫秒 */
        translateY:[anime.stagger([40, 10]), 0] /*从下方移动到上方*/
    });
});

/* run.before表示运行之前的事件*/
/*forEach方法对数组的每个元素执行一次给定的函数。*/
glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
        
    });
});

glide.mount();