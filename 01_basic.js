// console.log("Hello World")
// var x= 5
// var y = "5"
// console.log(x==y)

// let ans= 1

// this.document.write(ans==='1')


// let product={
//     name:"Praker Jotter Standard CT Ball Pen(Black)",
//     Rating:4,
//     NoOfReviews:7002,
//     Offer:"Deal of Day",
//     price: 285,
//     Discount: 5,
//     shownPrice: this.price * (this.Discount/100)
    
// }

// console.log(product)

// function shownPrice(product){
//     finalPrice= product.price * (product.Discount/100)
//     return finalPrice
// };



// let number= prompt("Enter a number")

// if(number%5===0 || number%5===5){
//     alert("Number is multiple of 5")
// } else {
//     alert("number is not ,multiple of 5")
// }


//new question
// let markss=prompt("Enter your marks")
// marks=Number(markss)

// switch(true){
//     case(marks>80):{
//         console.log("Grade A")
//         break;
//     }
//     case (marks>70):{
//         console.log("Grade B")
//         break;
//     }
//     case(marks>60):{
//         console.log("Grade C")
//         break;
//     }
//     case (marks>50):{
//         console.log("Grade D")
//         break;
//     }case(marks<49):{
//         console.log("Fail zala re Beta tu")
//     }
// }




let inputNumber=document.getElementById("inputNumber")
let result = document.getElementsByClassName(result)
console.log(inputNumber.value)
let inputNumberValue= Number(inputNumber.value)

function isPrime(inputNumberValue){
    if(inputNumberValue===1){
        return true;
    }else{
        for (let i = 2; i < inputNumberValue; i++){
            if (inputNumberValue % i == 0) {
                return true;
            }
        }
    }
}

function answer(){
    result.textContent=isprime(inputNumber)? "Yes is prime":"No prime";
}
