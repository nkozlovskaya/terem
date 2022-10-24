# Тестовое задание

Использовались технологии HTML, CSS, JS, PHP, jQuery

Состоит из 2 этапов.

## Верстка
1. Сделать HTML страницу с тэгами title "Тест", заполнить тэг meta
description lorem ipsum
2. Подключить к странице jQuery и Bootstrap актуальной версии из веб
репозитория
3. Сверстать следующую структуру
блок во всю ширину страницы
под ним 3 блока равного размера, расположенных на одном уровне по горизонтали
под ними 2 блока шириной в соотношении 1 к 2 на одном уровне по горизонтали

Примерная схема:

- [ ]
- [ ][ ][ ]
- [ ][ ]


<img width="1677" alt="Снимок экрана 2022-10-24 в 13 24 18" src="https://user-images.githubusercontent.com/64790767/197533074-bbfa370f-6c6f-40c5-887b-f503b7dac90f.png">



4. В мобильной версии в вертикальном положении все блоки должны
показываться один над другим и по ширине быть 100%.
<img width="758" alt="Снимок экрана 2022-10-24 в 13 27 14" src="https://user-images.githubusercontent.com/64790767/197533414-5ed2d908-97bd-4d74-aff6-146fe73425a6.png">

5. Добавить в нижние блоки кнопки в стилистике Bootstrap. В меньший
блок добавить кнопку "Кнопка 1" желтого цвета. В больший блок - кнопку
"Кнопка 2" зеленого цвета.
6. Сделать средствами CSS всем блокам рамки черного цвета. У среднего
блока во втором ряду сделать рамку пунктиром. Ширина рамок - 1
пиксель.
7. Покрасить средние 3 блока в разные цвета на выбор средствами CSS.
8. В верхнем блоке сделать заголовок H1 с надписью

## Программирование JS
1. В тестовом файле из задания один сделать, чтобы при нажатии кнопки
"Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
должен появляться.
<img width="1680" alt="Снимок экрана 2022-10-24 в 13 24 27" src="https://user-images.githubusercontent.com/64790767/197533787-6f57b665-ca5f-4d89-b7c2-9ff5b45b8bb2.png">

2. При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
меняться местами с левым блоком. При повторном нажатии - возвращаться
на прежнее место.
<img width="1676" alt="Снимок экрана 2022-10-24 в 13 24 39" src="https://user-images.githubusercontent.com/64790767/197534183-63f02142-4b8a-4016-a83a-2618b6157f0e.png">


3. Сделать, чтобы при открытии страницы появлялось модальное окно с
надписью "Привет, мир".
<img width="1680" alt="Снимок экрана 2022-10-24 в 13 24 09" src="https://user-images.githubusercontent.com/64790767/197533846-6d836c6f-8db4-4d8d-97c3-d56e431aaca9.png">

4. Сделать в отдельном файле форму с 5 выпадающими списками и 2
полями для ручного ввода информации. Списки должны содержать цифры от
1 до 5. Также нужна кнопка для отправки формы.
<img width="767" alt="Снимок экрана 2022-10-24 в 13 24 49" src="https://user-images.githubusercontent.com/64790767/197534007-67ee2d93-3e17-4194-aa90-3eeeaad06538.png">

5. Сделать формирование JSON-структуры из данных формы. Выводить ее
на экран под формой. Отправка формы не должна перезагружать страницу.
6. Форма должна отправлять асинхронный GET-запрос к абстрактному
обработчику на том же сервере (в той же папке). В случае, если данные
дошли, надо получать ответ. Можно выводить его через alert.
