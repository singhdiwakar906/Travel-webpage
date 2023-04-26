/*
console.log("first ############## \n");

arr = [0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0];
let start = 0;
let end = arr.length - 1;
for (var i = 0; i < end; i++) {
    if (arr[i] == 0) {
        arr[end] = 0;
        arr[i] = 1;
        end--;
    }
    console.log(arr);
}
*/

/*
console.log("\nsecond ########## \n")
    
    str1 = "The quick brown fox jumps over the lazy dog";
    str = str1.toLowerCase();
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    flag = true;
    for (x of str) {
    
        let idx = x.charCodeAt(0) - "a".charCodeAt(0);
        arr[idx] += 1
    }
    for (x of arr) {
        if (x == 0) {
            console.log("not panagram");
            flag = false;
        }
    }
    if (flag) {
        console.log("panagram");
    }

    console.log("\n// third\n")
    
    arr = [8, 7, 2, 5, 3, 1];
    pair_count = 0;
    target = 10;
    for (x in arr) {
        let idx = arr.indexOf(target - arr[x]);
        if (idx != -1) {
            if (idx != x) {
                pair_count++;
                console.log(arr[idx], arr[x]);
            }
        }
    }
    pair_count = pair_count / 2;
    console.log("pair_count = ", pair_count);
*/   
    console.log("\n // Fourth \n")
    
    // arr = [8, 7, 2, 5, 3, 1];
    // pair_count = 0;
    // target = 10;
    // for (x in arr) {
    //     let val = target - arr[x];
    //     for (let z = x; z < arr.length; z++) {
    //         if (arr[z] == val && z != x) {
    //             pair_count++;
    //             console.log(arr[x], arr[z]);
    //         }
    //     }
    // }
    
    // console.log("pair_count = ", pair_count);


    // Parent 1
    //      child 1
    //      Grandchild 1
    //      Grandchild 2fff
    //           Great Grsnd1
    //     Grandchild 3    
        
    // Parent 2
    
    
    // Parent 1
    //     Child 1
    //     Grandchild 1
    //         Child 2
    // Parent 2

    



var arr = [
    {
    "text": "Parent 1",
    "id": "1",
    "nodes": [
        {
        "text": "Child 1",
        "id": "2",
        "parentid": "1",
        "nodes": [
            {
                "text": "Grandchild 1",
                "id": "4",
                "parentid": "2",
                "nodes":[{
                    "id":"9",
                    "parentid":"2",
                    "text":"great-grandchild 1",
                    "nodes":[{
                        "id":"9",
                    "parentid":"2",
                    "text":"great-great-grandchild 1"
                    }]
                }]

            },
            {
                "text": "Grandchild 2",
                "id": "8",
                "parentid": "2",
            }
        ]
    }, {
        "text": "Child 2",
        "id": "10",
        "parentid": "1",
    }
]
}, {
    "text": "Parent 2",
    "id": "19",
}
]

function printNodes(arr,space){
    for(i in arr){
        console.log(space+arr[i].text)
        if(arr[i].nodes){
            printNodes(arr[i].nodes,space+"\t");
        }
    }
}

printNodes(arr,'\t');



console.log("\nTask by Saurabh sir\n")

let obj = {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters": {
        "batter": [
          {
            "id": "1001",
            "type": "Regular"
          },
          {
            "id": "1002",
            "type": "Chocolate"
          },
          {
            "id": "1003",
            "type": "Blueberry"
          },
          {
            "id": "1004",
            "type": "Devil's Food"
          }
        ]
      },
      "topping": [
        {
          "id": "5001",
          "type": "None"
        },
        {
          "id": "5002",
          "type": "Glazed"
        },
        {
          "id": "5005",
          "type": "Sugar"
        },
        {
          "id": "5007",
          "type": "Powdered Sugar"
        },
        {
          "id": "5006",
          "type": "Chocolate with Sprinkles"
        },
        {
          "id": "5003",
          "type": "Chocolate"
        },
        {
          "id": "5004",
          "type": "Maple"
        }
      ]
    }

let obj1 = obj.batters.batter
for(x in obj1){
    console.log(obj1[x].type,"(",obj1[x].id,")");
}