let $parag = document.getElementById('parag')
console.log($parag)

let $btn = document.querySelectorAll('button')
console.log($btn)
function text_att(bg_color,color,fontStyle,fontWeight,fontFamily,textAlign){
    $parag.style.backgroundColor = bg_color
    $parag.style.color = color 
    $parag.style.fontStyle = fontStyle
    $parag.style.fontWeight = fontWeight 
    $parag.style.fontFamily = fontFamily 
    $parag.style.textAlign = textAlign 
}
function border_att(border,borderRadius){
    $parag.style.border = border 
    $parag.style.borderRadius = borderRadius   
}
for (let i = 0;i < $btn.length; i++){
    $btn[i].addEventListener('click', function (){
        switch (i){
            case 0:
                text_att('#d1f2d1','#042c04','italic','bold','Times New Roman", Times, serif','left')
                border_att('4px double blue','3px')
                break
            case 1:
                text_att('#ebd4d4','#4d044d','italic','500','serif", Times, serif','left')
                border_att('10px dashed purple','3px')
                break
            case 2:
                text_att('#e1dfdf','#4d044d','italic','900','serif','left')
                border_att('15px dashed grey','0 15% 15% 5%')
                break
            case 3:
                text_att('#6f6fa7','#c8c8f2','italic','900','serif','left')
                border_att('10px outset #05054f','10px 5px 10px 5px')
                break
        }
    })
}

