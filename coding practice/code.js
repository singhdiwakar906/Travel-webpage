function fbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%5==0 && i%3==0){
            console.log("fizzbuzz")
        }
        else if(i%5==0){
            console.log("buzz")
        }
        else if(i%3==0){
            console.log("fizz")
        }
        else{
            console.log(i);
        }
    }
}

fbuzz(10)


// missing number in an array
function missingNum(arr){
    let val=1;
    for(let i=0;i<arr.length;){
        if(arr[i] != val){
            console.log(val)
            val++;
        }
        else{
        val++;
        i++;
        }
    }
}

arr=[
   1,  2,  3,   7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
]
missingNum(arr)


// largest and sortest in an array

function largeAndSort(arr){
    let max=arr[0];
    let min=arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min,max);
}
largeAndSort([1,2,3,5,4,10,-4])

// duplicate num in an array

arr = [1,1,2,3,4,4,5,6]
dict = {}
for(x of arr){
    if(dict[x]){
        dict[x]+=1
    }
    else{
        dict[x]=1
    }
}
for(i in dict){
    if(dict[i]>1){
        console.log(i);
    }
}