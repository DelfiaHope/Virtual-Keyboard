const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const enCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const ruCaps = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const eventCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

let lang = localStorage.getItem('currrentLang') !== null ? localStorage.getItem('currrentLang') : 'en';

class Keyboard {
  constructor() {
    this.shiftCtrl = false;
    this.capslock = false;
  }

  init() {
    // создание элементов, присваивание классов
    const body = document.querySelector('body');
    this.main = document.createElement('div');
    this.main.classList.add('main');

    this.text = document.createElement('textarea');
    this.text.classList.add('text_output');

    this.keycontent = document.createElement('div');
    this.keycontent.classList.add('keyboard');

    for (let i = 0; i < 64; i += 1) {
      this.btn = document.createElement('div');
      this.btn.classList.add('button');
      if (i === 13 || i === 29) this.btn.classList.add('back_caps');
      if (i === 14 || i === 28) this.btn.classList.add('tab_del');
      if (i === 41 || i === 42 || i === 54) this.btn.classList.add('enter_shift');
      if (i === 58) this.btn.classList.add('space');

      this.btn.innerHTML = this.chooseLangCapsKey(i);
      this.btn.dataset.code = eventCode[i];

      // добавление в DOM
      this.keycontent.appendChild(this.btn);
    }

    this.switch = document.createElement('p');
    this.switch.classList.add('switch');
    this.switch.innerText = 'The keyboard was created in the operating system Linux. Toggle language: left Alt + Shift.';

    // добавление в DOM
    this.main.appendChild(this.text);
    this.main.appendChild(this.keycontent);
    this.main.appendChild(this.switch);
    body.appendChild(this.main);
  }

  moveCursor() {
    this.text.selectionStart += this.text.selectionStart;
  }

  chooseLangCapsKey(i) {
    if (this.shiftCtrl === true || this.capslock === true) {
      if (lang === 'en') {
        return enCaps[i];
      }
      return ruCaps[i];
    }
    if (lang === 'en') {
      return en[i];
    }
    return ru[i];
  }

  // поиск индекса по коду
  getCurrentKeyByCode(code) {
    let index = 0;
    for (let i = 0; i < eventCode.length; i += 1) {
      if (eventCode[i] === code) {
        index = i;
        break;
      }
    }
    return this.chooseLangCapsKey(index);
  }

  changeinnerHtmlBtn() {
    const btns = document.querySelectorAll('.button');
    for (let i = 0; i < btns.length; i += 1) {
      // console.log(btns[i].innerHTML)
      btns[i].innerHTML = this.chooseLangCapsKey(i);
    }
  }

  mouseDown(event) {
    // this.text.selectionStart = this.text.selectionEnd = this.text.value.length
    let code = '';

    if (event.target.classList.contains('button')) {
      if (event.target.dataset.code !== 'CapsLock') {
        event.target.classList.add('active_btn');
      }
      // console.log(event.target.dataset.code)

      code = event.target.dataset.code;
    }
    const cursorDelete = this.text.selectionStart;
    const cursorStart = this.text.selectionStart;

    if (code !== '') {
      switch (code) {
        case 'Backspace':

          if (this.text.selectionStart === this.text.innerHTML.length) {
            this.text.innerHTML = this.text.innerHTML.slice(0, -1);
          // this.text.selectionStart = cursorStart;
          } else {
            this.text.innerHTML = this.text.innerHTML.substring(0, this.text.selectionStart - 1)
              + this.text.innerHTML.substring(
                this.text.selectionStart,
                this.text.innerHTML.length,
              );
          }

          this.text.selectionStart = cursorStart - 1;
          break;

        case 'Delete':

          if (this.text.selectionStart !== this.text.innerHTML.length) {
            this.text.innerHTML = this.text.innerHTML.substring(0, this.text.selectionStart)
                + this.text.innerHTML.substring(
                  this.text.selectionStart + 1,
                  this.text.innerHTML.length,
                );
          }
          this.text.selectionStart = cursorDelete;
          break;

        case 'ControlLeft':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        case 'ControlRight':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        case 'AltRight':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        case 'AltLeft':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        case 'MetaLeft':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        case 'Tab':
          this.text.innerHTML = `${this.text.innerHTML}        `;
          this.moveCursor();
          break;

        case 'Enter':
          this.text.innerHTML = `${this.text.innerHTML}\n`;
          this.moveCursor();
          break;

        case 'Space':
          this.text.innerHTML = `${this.text.innerHTML} `;
          this.moveCursor();
          break;

        case 'ShiftRight':
          // console.log(code);
          this.text.innerHTML = `${this.text.innerHTML}`;
          this.shiftCtrl = true;
          this.changeinnerHtmlBtn();
          break;

        case 'ShiftLeft':
          // console.log(code);
          this.text.innerHTML = `${this.text.innerHTML}`;
          this.shiftCtrl = true;
          this.changeinnerHtmlBtn();
          break;

        case 'CapsLock':
          this.text.innerHTML = `${this.text.innerHTML}`;
          break;

        default:
          this.text.innerHTML += this.getCurrentKeyByCode(code);
          this.moveCursor();
      }
    }
  }

  mouseUp(event) {
    let code = '';

    if (event.target.classList.contains('button')) {
      if (event.target.dataset.code === 'CapsLock') {
        event.target.classList.toggle('active_btn');
      } else {
        event.target.classList.remove('active_btn');
      }

      code = event.target.dataset.code;
    }
    if (code === 'CapsLock') {
      this.text.innerHTML = `${this.text.innerHTML}`;
      this.capslock = !this.capslock;
      this.changeinnerHtmlBtn();
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.shiftCtrl = false;
      this.changeinnerHtmlBtn();
    }
  }

  movecursor() {
    this.text.selectionStart = this.text.value.length;
  }

  keyDown(event) {
    if (event.code !== 'F5' || event.code !== 'F12') event.preventDefault();

    const btn = document.querySelector(`[data-code="${event.code}"]`);

    if (event.code !== 'CapsLock') {
      btn.classList.add('active_btn');
    }
    const cursorStart = this.text.selectionStart;
    const cursorDelete = this.text.selectionStart;

    switch (event.key) {
      case 'Backspace':
        if (this.text.selectionStart === this.text.innerHTML.length) {
          this.text.innerHTML = this.text.innerHTML.slice(0, -1);
        } else {
          this.text.innerHTML = this.text.innerHTML.substring(0, this.text.selectionStart - 1)
              + this.text.innerHTML.substring(
                this.text.selectionStart,
                this.text.innerHTML.length,
              );
        }

        this.text.selectionStart = cursorStart - 1;
        break;

      case 'Delete':

        if (this.text.selectionStart !== this.text.innerHTML.length) {
          this.text.innerHTML = this.text.innerHTML.substring(0, this.text.selectionStart)
            + this.text.innerHTML.substring(
              this.text.selectionStart + 1,
              this.text.innerHTML.length,
            );
        }
        this.text.selectionStart = cursorDelete;
        break;

      case 'Tab':
        this.text.innerHTML = `${this.text.innerHTML}        `;
        this.moveCursor();
        break;

      case 'Enter':
        this.text.innerHTML = `${this.text.innerHTML}\n`;
        this.moveCursor();
        break;

      case ' ':
        this.text.innerHTML = `${this.text.innerHTML} `;
        this.moveCursor();
        break;

      case 'Shift':
        this.shiftCtrl = true;
        this.changeinnerHtmlBtn();
        break;

      case 'Control':
        this.text.innerHTML = `${this.text.innerHTML}`;
        break;

      case 'Alt':
        this.text.innerHTML = `${this.text.innerHTML}`;
        break;

      case 'CapsLock':
        this.text.innerHTML = `${this.text.innerHTML}`;
        this.capslock = !this.capslock;

        btn.classList.toggle('active_btn');
        this.changeinnerHtmlBtn();
        break;

      default:
        this.text.innerHTML += this.getCurrentKeyByCode(event.code);
        this.movecursor();
    }
  }

  keyUp(event) {
    if (event.code !== 'F5') event.preventDefault();
    const btn = document.querySelector(`[data-code="${event.code}"]`);

    if (event.code !== 'CapsLock') {
      btn.classList.remove('active_btn');
    }

    if (event.shiftKey && event.code === 'AltLeft') {
      lang = lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('currrentLang', lang);
      this.changeinnerHtmlBtn();
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.shiftCtrl = false;
      this.changeinnerHtmlBtn();
    }
  }
}
window.onload = () => {
  const virtual = new Keyboard();
  virtual.init();
  document.addEventListener('keydown', (event) => virtual.keyDown(event));
  document.addEventListener('keyup', (event) => virtual.keyUp(event));
  document.addEventListener('mousedown', (event) => virtual.mouseDown(event));
  document.addEventListener('mouseup', (event) => virtual.mouseUp(event));
};
