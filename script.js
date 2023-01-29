let arr = [];

    function numFormat(value){
        return Math.floor(Math.ceil(value))
    }
    function addArray(){
        let num = Number(document.getElementById('addNumber').value)
        arr.push(num)
        document.getElementById('numbersAdded').innerHTML = num
        document.getElementById('arrayContent').innerHTML = arr
        document.getElementById('addNumber').value = ''
        console.log(arr)
    }
    function remArray(){
        arr.pop()
        console.log(arr)
        document.getElementById('numbersAdded').innerHTML = '0'
        document.getElementById('arrayContent').innerHTML = arr
        document.getElementById('addNumber').value = ''
    }
    function calcMedia(){
        document.getElementById('addNumber').value = ''
        let soma = 0;
        for(let i = 0; i < arr.length ; i++){
            soma += arr[i];
        }
        let media = soma / arr.length;
        document.getElementById('resMedia').innerHTML = numFormat(media);
        console.log(numFormat(media))
        if (arr.length < 1){
            document.getElementById('resMedia').innerHTML ='Insira números para obter uma média.'
        }
    }

