class Words{
    constructor(text){
        text = text.replace(/\n/g, ' ').toLowerCase();
        let words = text.split(' ');
        let arr = [];
        for(let i = 0; i < words.length; i++){
            if(words[i] in arr){
                arr[words[i]]++;
            }
            else
                arr[words[i]] = 1;
        }
        this.array = arr;
    }
    MostPopularWord(){
        let max = 0, result = '';
        for (let j in this.array){
            if (this.array[j] === max){
                result = '---';
            }
            if (this.array[j] > max){
                max = this.array[j];
                result = j;
            }
        }
        return result;
    }
}

let str = 'Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas \
nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu \
euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae \
pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque \
Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget \
fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas \
finibus lorem non tempor tincidunt aera';
let test = new Words(str);
console.log(test.MostPopularWord());