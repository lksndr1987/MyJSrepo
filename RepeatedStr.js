function StringHandling(text)
{
    if(typeof(text) == 'string') {

        let buffer = '';
        let k, count = 0;
        let isNotFound = true;

        while (isNotFound) {
            buffer += text[count];
            k = text.length / (count + 1);
            if (buffer.repeat(k) === text)
                isNotFound = false;
            count++;
        }

        console.log(k + " * " + buffer);
    }
    else
        console.log("other type");
}

StringHandling("abcabcabcabc");
StringHandling("test9test9test9");
StringHandling(true);





