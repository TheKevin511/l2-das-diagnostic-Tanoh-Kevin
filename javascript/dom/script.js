const btn = document.querySelector('.changeBg')

btn.addEventListener('click' , ()=>{
    let bgColor = document.body.style.backgroundColor

    if(bgColor === "#FFFFFF"){
        bgColor = "#c12323"
    }else{
        bgColor = "#FFFFFF"
    }
        
})

const input = document.querySelectorAll('input')

input.forEach(inp =>{
    inp.addEventListener('focus' , ()=>{
        if (inp.style.border === "2px solid #098736"){
            inp.style.border = null
        }else{
            inp.style.border = "1px solid black"
        }
        
    })
})