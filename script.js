let flag = 0;
let caption1 = document.querySelector("#caption1");
let caption2 = document.querySelector("#caption2");

const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output ");

for ( x = 0; x < stars.length; x++) {
  stars[x].starValue = (x + 1);
//   stars[x].addEventListener("click", function () {
//     console.log("I am clicked"); 

// }) 


["click","mouseover","mouseout"].forEach(function (e) {
  
  stars[x].addEventListener(e,showRating);
   
     
})
}





function showRating(e) {
   let type = e.type; 
   let starValue = this.starValue;

   if(type === "click"){
    if(starValue > 0){
      output.textContent = "You rated this  " + starValue
        + "stars.";
    }

   }
     

   stars.forEach(function(elem,ind){
   if(type === "click"){
         if(ind < starValue){
           elem.classList.add("orange");

         }else{
            elem.classList.remove("orange");
         }

        }

        if(type === "mouseover"){
          if(ind < starValue){
            elem.classList.add("yellow");
 
          }else{
             elem.classList.remove("yellow");
          }
 
         }

         if(type === "mouseout"){
          elem.classList.remove("yellow");
 
         }

        
   })
   
     
     
}










function controller(x) {
  flag = flag + x;

slideshow(flag);

if(flag==1){
  caption1.textContent = "iphone X";
}

console.log(caption1);

if(flag==2){
  caption2.textContent = "one plus 9Pro";
}

console.log(caption2);
 
}
 

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");

  if(num == slides.length){
       flag = 0; 
       num = 0; //because num = 4 we are not getting any slide.
  }

console.log(flag);  

  if(num < 0){
    flag = slides.length-1;
    num = slides.length-1;
}
  for (let y of slides) {
     y.style.display = "none";
      
  }
  slides[num].style.display = "block";
  console.log(num);

}
//to display slide 1 we are calling function 
slideshow(flag);
  


//rating part  




        
     

    


   





