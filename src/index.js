const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;','Ctrl'];
const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const enCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const ruCaps = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const eventCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
 


const keyboard = {
    elements:{ 
        main: null,       
        text: null,
        keycontent: null,        
        switch: null,       
        btn: [],
    },
    properties:{        
        lang: 'en',        
    },

    init() {
        //создание элементов, присваивание классов
        const body = document.querySelector('body');
        this.elements.main = document.createElement("div");
        this.elements.main.classList.add('main');

        this.elements.text = document.createElement("textarea");
        this.elements.text.classList.add("text_output")

        
        this.elements.keycontent = document.createElement('div');
        this.elements.keycontent.classList.add('keyboard');
        for (let i = 0; i < 64; i ++) {
          this.elements.btn = document.createElement('div');
          this.elements.btn.classList.add('button')
          if(i == 13 || i == 29) this.elements.btn.classList.add('back_caps')
          if(i == 14 || i == 28) this.elements.btn.classList.add('tab_del')
          if(i == 41 || i == 42 || i == 54) this.elements.btn.classList.add('enter_shift')
          if(i == 58) this.elements.btn.classList.add('space')

          
          //this.btn = document.createElement('span');
          this.elements.btn.innerHTML = this.generationLangCapsKey(i);
          this.elements.btn.dataset.code = eventCode[i];
          //добавление в DOM
          //this.btn.appendChild(this.span);
          this.elements.keycontent.appendChild(this.elements.btn);
        }    
        this.elements.switch = document.createElement('p');
        this.elements.switch.classList.add('switch')
        this.elements.switch.innerText = 'Клавиатура создана в операционной системе Linux. Для переключения языка комбинация: левые Shift + Alt.';
        //добавление в DOM
        this.elements.main.appendChild(this.elements.text)
        this.elements.main.appendChild(this.elements.keycontent)
        this.elements.main.appendChild(this.elements.switch)
        body.appendChild(this.elements.main);
      }
    }
      window.onload = () => {
    
        keyboard.init();
    }