const menu = Array.from(document.getElementsByClassName('link'));



menu.forEach(element => {
    element.addEventListener('click', () => {
        let index = menu.indexOf(element);        
            //console.log(element.classList.contains('active')) //Проверяем наличие класса у блока
    
        if (!element.classList.contains('active')) {
            document.querySelector('.active').classList.remove('active'); //Находим элемент с классом active
            element.classList.add('active'); //задаем класс active для нажатого элемента
        } 
    });
});