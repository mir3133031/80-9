let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
let answer = prompt(`Что не нравится ?`)
let index = arr.indexOf(answer)
if(index !== -1){
arr.splice(index)

}else  {

    
alert(
    `go ot suda`
) 
    
   
}

