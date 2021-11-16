var big_img = document.getElementsByClassName("big_img");
var small_img = document.getElementsByClassName("small_img");

// console.log(big_img[0]);
for( let i=0; i<small_img.length; i++){
// console.log(small_img[i]);
    small_img[i].addEventListener("click", function(){
        big_img[0].src = small_img[i].src;
        // console.log('test');
        // small_img[i].src
        // console.log("按鈕"+small_img[i]+i);
        // console.log();
    });
}

// console.log(which);

// var input_number = document.getElementById("text");
// input_number.addEventListener('keyup', function(e){

// });


