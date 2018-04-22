function Sequence(text){
    let stack = [];
    let open = ['(', '{', '['], close = [')', '}', ']'];
    for(let i = 0; i < text.length; i++){
        if(open.indexOf(text[i]) >= 0){
            stack.push(text[i]);
        }
        if(close.indexOf(text[i]) >= 0){
            if(stack.length < 1)
                return false;
            let removedElement = stack.pop();
            if(open.indexOf(removedElement) !== close.indexOf(text[i]))
                return false;
        }
    }
    return stack.length === 0;
}
console.log(Sequence("{[]({})}"));
