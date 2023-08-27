function change(x) {
    document.getElementById('welcome').style.opacity = '0'
    for (let i = 0; i < 4; i++) {
        console.log(i)
        x.parentElement.children[i].classList.remove('active-li')
        x.classList.add('active-li')
    }
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll('#box>div')[i].classList.remove('active-box')
    }
    let para = x.innerHTML
    document.getElementById(para).classList.add('active-box')
}