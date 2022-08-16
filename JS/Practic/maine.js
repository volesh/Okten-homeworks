let a = '';
let b = '';
let sign = '';
let finish = false;
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let signs = ['/', '+', '-', 'X']
let c = ['C']
let enterZone = document.getElementById('enter')
let str = ''
function clearAll(){
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.innerHTML = ' ';
}


const out = document.querySelector('.enter_zone');
let numbers = document.querySelector('.buttons_zone');
document.querySelector('.c').onclick = clearAll()
document.querySelector('.cc').onclick = clearAll()
numbers.onclick = (event) => {
    if (!event.target.classList.contains(`btn`) && !event.target.classList.contains(`bt`)) return;
    const key = event.target.textContent;
    if (c.includes(key)) {
        a = '';
        b = '';
        sign = ''
        console.log(a, b, sign)
        out.textContent = 0;
    }

    if (digits.includes(key)) {
        if (b === '' && sign === ''){
            a += key;
            console.log(a, b, sign)
            out.textContent = a
        }else if (a !== '' && sign !== '') {
            b += key;
            console.log(a, b, sign)
            out.textContent = b
        }
    }
    if (signs.includes(key)) {
        out.textContent = key
        sign += key;
        if (a !== '' && b !== '') {
            switch (sign[0]) {
                case '+':
                    a = +a + +b;
                    b = '';
                    sign = sign[1]
                    out.textContent = a
                    sign
                    break
                case '-':
                    a = +a - +b;
                    b = ''
                    sign = sign[1]
                    out.textContent = a
                    break
                case '/':
                    a = +a / +b;
                    b = ''
                    sign = sign[1]
                    out.textContent = a
                    break
                case 'X':
                    a = +a * +b;
                    b = ''
                    sign = sign[1]
                    out.textContent = a
                    break
            }
        }
    }
    if (key === '=') {
        switch (sign[0]) {
            case '+':
                a = +a + +b;
                b = '';
                out.textContent = a
                sign = ''
                break
            case '-':
                a = +a - +b;
                b = ''
                out.textContent = a
                sign = ''
                break
            case '/':
                a = +a / +b;
                b = ''
                out.textContent = a
                sign = ''
                break
            case 'X':
                a = +a * +b;
                b = ''
                out.textContent = a
                sign = ''
                break
        }
    }
};

