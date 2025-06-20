// const gridSize = 4;
// const boardRef = document.querySelector('.tic-tac-toe');
// let currntPlayer = 'X';
// const game = [];

// const createBoard = (gridSize) => {
//     for(let j=0; j<gridSize; j++){
//         const rowRef = document.createElement('div');
//         rowRef.className = 'row';

//         for(let i=0; i<gridSize; i++){
//             const colRef = document.createElement('div');
//             colRef.className = 'cell';
//             colRef.setAttribute('data-row', j);
//             colRef.setAttribute('data-cell', i);
//             rowRef.appendChild(colRef);
//         }
//         boardRef.appendChild(rowRef);
//     }    
//     addEventList();
// }

// const addEventList = () => {
//     boardRef.addEventListener('click', (e) => {
//         if(e.target.nodeName === 'DIV'){
//             if(e.target.classList.contains('cell')){
//                 if(!e.target.innerText){
//                     e.target.innerText = currntPlayer;
//                     let rowId = e.target.dataset.row;
//                     let cellId = e.target.dataset.cell;
//                     updateGameData(rowId, cellId, currntPlayer);
//                     playerLogic();
//                 }
//             }
//         }
//     })
// }
// const playerLogic = () => {
//     currntPlayer = currntPlayer === 'X' ? '0' : 'X';
// }

// const checkLine = (arr) => {
//     if(arr && arr[0]){
//         return arr.every((data) => arr[0] === data);
//     }
// }

// const updateGameData = (rowId, cellId, value) => {
//     //console.log(rowId, cellId, value);
//     if(!game[rowId]){
//         game[rowId] = [];
//     }
//     game[rowId][cellId] = value;
//     getWinner();
// }

// const getWinner = () => {
//     // check for row
//     for(let i=0; i<game.length; i++){
//         if(checkLine(game[i])){
//             console.log(game[i]);
//             return true;
//         }

//         const columnValue = game.map((row) => row[i]);
//         if(checkLine(columnValue)){
//             console.log(columnValue);
//             return true;
//         }

//         const diagonalValue = game.map((row, index) => row[index]);
//         if(checkLine(diagonalValue)){
//             console.log(diagonalValue);
//             return true;
//         }

//         const revDiagonalValue = game.map((row, index) => row[game - i - 1]);
//         if(checkLine(revDiagonalValue)){
//             console.log(revDiagonalValue);
//             return true;
//         }
//     }
// }

//createBoard(gridSize);


let gridSize = 4;
const board = document.querySelector('.tic-tac-toe');
let playerName = 'X';
const game = [];

const createBoard = (gridSize) => {
    for(let i=0;i<gridSize;i++){
        const row = document.createElement('div');
        row.className = "row";

        board.appendChild(row);

        for(let j=0;j<gridSize;j++){
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.setAttribute('data-row', i);
            cell.setAttribute("data-cell", j);

            row.appendChild(cell);
        }
    }
    addEventOnCell();
}

const addEventOnCell = () => {
    let prevVal = '';
    board.addEventListener('click', (e) => {
        if(e.target.classList.contains('cell')){
            if(!e.target.innerText) {
                e.target.innerText = prevVal === playerName ? '0' : 'X';
                prevVal = e.target.innerText;
                let rowId = e.target.dataset.row;
                let cellId = e.target.dataset.cell;

                updateGameData(rowId, cellId, prevVal);
            }
        }
    });
}

const updateGameData = (rowId, cellId, val) => {
    //console.log(rowId, cellId +'--'+ val);
    if(!game[rowId]){
        game[rowId] = [];
    }
    game[rowId][cellId] = val;
    getWinner();
}

const checkLine = (arr) => {
    if(arr && arr[0]){
        return arr.every((data) => arr[0] === data);
    }
}

const getWinner = () => {
    // check row
    for(let i=0;i<game.length;i++){
        if(checkLine(game[i])){
            console.log(game[i]);
            return true;
        }

        const columnValue = game.map((row) => row[i]);
        if(checkLine(columnValue)){
            console.log(columnValue);
            return true;
        }

        const diagonalValue = game.map((row, index) => row[index]);
        if(checkLine(diagonalValue)){
            console.log(diagonalValue);
            return true;
        }

        const revDiaVal = game.map((row, index) => row[game - i - 1]);
        if(checkLine(revDiaVal)){
            console.log(revDiaVal);
            return true;
        }
    }

}

createBoard(gridSize);

const arr = ['Gaurav', 'saumya', 'saurav', 'mab'];
const restExample = (...last) => {
    return last;
}

console.log(restExample('Gaurav', 'saumya', 'saurav', 'mab'));


// find the missing element
const arr2 = [1,3,4,5];
const num = 5;
const findMissingElm = (arr, num) => {
    for(let i=1;i<num;i++){
        let flag = 0;
        for(let j=0;j<num-1;j++){
            if(arr[j] === i){
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            return i;
        }
    }
}
findMissingElm(arr2, num);

// rotate array 
const arry = [1, 2, 3, 4, 5, 6, 7], d = 2;
const arry1 = [1, 2, 3, 4, 5, 6, 7];

const rotateArray = (arr, d) => {
    const temp = [];
    for(let i=0;i<d;i++) {
        temp.push(arr[0]);
        arr.splice(0, 1);
    }
    console.log(arr.concat(temp));
}

rotateArray(arry, d);

// 1st non repeating character
const str5 = 'abbabcd';

const firstNonRepeat = (str) => {
    let str2 = str.split('');
    for(let i=0;i<str2.length;i++){
        let count = 0, character = '';
        for(let j=0;j<str2.length;j++){
            if(str2[i] == str2[j]){
                count++;
                character = str2[i];
            }
        }
        if(count === 1){
            console.log(character);
            break;
        }
    }
}

firstNonRepeat(str5);

// nth fibnnoci series
const nt = 9;
const nthFibnnoci = (n) => {
    let i, a = 0, b = 1; c = 0;
    if(n === 0){
        return a;
    }
    for(i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
        //console.log(b);
    }
    return b;
}

nthFibnnoci(nt);

const accordian = document.querySelector('.accordian');
const accordianItem = document.querySelectorAll('.accrd-list .child');

accordian.addEventListener('click', (e) => {  
    
    if(e.target.children[0]?.className?.match('hide')?.length){
        accordianItem.forEach((item) => {
            item.classList.add('hide');
        })  
        e.target.children[0].classList.remove('hide');
    } else{
        e.target?.children[0]?.classList.add('hide');
    }
})

const colorData = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

const showColorList = (colorData) => {
    const mainList = document.querySelector('.color-list ul');    
    var createList = '';
    colorData.forEach((item, index) => {        
        createList += `<li class="list-item" 
                        id="${item?.color+'_'+index}"> 
                        ${item?.color +' => '+item?.value}
                        </li>`;
            
    })
    mainList.innerHTML = createList; 
}
const handleSearch = (e) => {
    const filterList = colorData.filter((res) => {
        return res.color.toLowerCase().includes(e.value.toLowerCase());
    })
    showColorList(filterList);
}
showColorList(colorData);

//const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// const memoizedCallback = useCallback(
//     () => {
//       doSomething(a, b);
//     },
//     [a, b],
// );

const firstNonRepeatChar = (str5) => {
    const strArr = str5.split('');
    let char = '', count;
    for(let i=0;i<strArr.length;i++){
        count = 0;
        for(let j=0;j<strArr.length;j++){
            if(strArr[i] == strArr[j]){
                count++;
            }
        }
        if(count == 1){
            char = strArr[i];
            break;
        }
    }
    console.log(char);
}
firstNonRepeatChar(str5);

const rotateArray2 = (arry, d) => {
    const temp = [];
    for(let i=0;i<d;i++){
        temp.push(arry[0]);
        arry.splice(0, 1);
    }
    console.log(arry.concat(temp));
}
//rotateArray2(arry1, d);

const arrNum = [1,3,3,5,2,3,2,6,2,1,1];

const countElmTimes = () => {
    const countObj = {};
    arrNum.map((item)=>{
        if(countObj[item]){
            countObj[item]++;
        } else {
            countObj[item] = 1;
        }
    })
    console.log(countObj);
}
//countElmTimes();

const putElmFirst = () => {
    console.log(arrNum);
    const temp = [], value = 1, out = [];
    arrNum.filter((item) => {
        if(item == value){
            temp.push(value);
        } else {
            out.push(item);
        }
    })
    console.log(temp.concat(out));
}
putElmFirst();

let arr21 = [
    [1, 2], 
    [3, 4], 
    [5, 6, [7,8], 9], 
    [10, 11, 12]
];

const inputObj = {a:1, b:2, c:["four", "five"], d:{e:1, f:2},g:{h:["six","seven"],i:8}};
//const dep = 2;
const flatArray = (arr, dep) => {
    const result = [];
    arr.forEach((val) => {
        if(Array.isArray(val) && dep > 0){
            result.push(...flatArray(val, dep-1));
        } else {
            result.push(val);
        }
    });
    return result;
}
console.log(flatArray(arr21, 2));

const flatObject = (arr) => {
    var result = {};
    for(i in arr){
        
        if(typeof(arr[i]) === 'object' && !Array.isArray(arr[i])){
            const temp = flatObject(arr[i]);
            for(j in temp){
                result[i+''+j] = temp[j];
            } 
        } else if(Array.isArray(arr[i])){
            arr[i].map((item, index) => {
                result[i+''+index] = item;
            });
        } else{
            result[i] = arr[i];
        }
    }
    return result;
}
console.log(flatObject(inputObj));

const l1 = [2,4,3], l2 = [5,6,4];
var addTwoNumbers = function(l1, l2) {
    debugger;
    let len1 = l1.length;
    let len2 = l2.length;
    let reminder = 0, add = 0;
    var output = [];
    for(let i=0; i<len1+len2; i++) {
        if(l1[i] != undefined && l2[i] != undefined){
            reminder = (l1[i]+l2[i])%10 + add;
            add = Math.floor((l1[i]+l2[i])/10);        
            output.push(reminder);
        }
    }
    return output;
};

console.log(addTwoNumbers(l1, l2));


const arr23 = [2,3,4,4,5,1,27,8];
const result111 = [];

arr23.filter((item, index) => {
    if(arr23.indexOf(item) === index){
        result111.push(item);
    }
})


arr23.slice(1, 5).concat(arr23);
const ccount = {};
arr23.filter((item) => {
    if(ccount[item]){
        ccount[item]++;
    } else{
        ccount[item] = 1;
    }
})

let sum = 0;
arr23.filter((item) => sum = sum + item); 

const reverseWord = () =>{
    debugger;
    let sentence = 'Hello World';
    const sentArr =  sentence.split(' ');
    const sentArrRev = [];

    sentArr.filter((item) => {
        sentArrRev.push(item.split('').reverse().join(''));
    })

    const result8 = sentArrRev.join(' ');
    console.log(result8);
}

const countVowels = (str) => {
    let vowelCount = 0;
    let sentence = str.toLowerCase().split('');

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i=0;i<vowels.length;i++){
        for(let j=0;j<sentence.length;j++){
            if(vowels[i] === sentence[j]){
                vowelCount++;
            }
        }
    }
    return vowelCount;
}