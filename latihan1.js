let regex1 = /[A-Z]/;
let tes = "Budhi";
let result = regex1.test(tes)
console.log(regex1.test(tes))
if(result){
    console.log('Huruf pertama adalah huruf besar')
}else{
    console.log('Huruf pertama huruf kecil')
}