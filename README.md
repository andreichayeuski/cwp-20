# CWP/TASK/20 - Шаблоны
function task00() {

Создаем на Github репозиторий cwp-20, клонируем его, открываем в IDE

Установим библиотеки express, sequelize и pug

}

function task01() {

Скачаем дамп тестовой базы данных

Выполним скачанный sql скрипт в своей любимой СУДБ для новой базы данных

Опишем модели для таблиц country, city и countryLanguage с помощью sequelize

}

function task02() {

Создадим файл views/index.pug:

h1 World Database

a(href='/countries.html') Countries [#{countriesCount}]

br
a(href='/cities.html') Cities [#{citiesCount}]


Создадим файл index.js:

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { countriesCount: 10, citiesCount: 42 });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

Запустим сервер и в браузере проверим главную страницу

Заполним главную страницу реальными числами из БД

}

function task03() {

Создадим шаблон для отображения списка стран - views/countries.pug, который будем отдавать для адреса /countries.html

1. Показывать 25 ссылок на страны. Текст ссылки состоит из Name и Continent. Адрес в формате - /countries/<Поле Code>.html

2. Обеспечить постраничную навигацию. Т.е. перейдя по ссылке /countries.html?page=2 получим следующие 25 стран

3. Вверху страницы показывать в заголовке первого уровня - Countries / <Номер первой элемента>-<Номер последнего элемента>. Т.е. для первой страницы - Countries / 1-25, для второй - Countries / 26-50 и т.д.

4. Внизу показывать ссылки на все доступные страницы (1, 2, 3, ...). Среди них выделить красным цветом текущую страницу

}

function task04() {

Создадим шаблон для отображения страны - views/country.pug, который будем отдавать для адреса /countries/<Поле Code>.html

1. Выведем все поля для соответствующей страны в удобном для чтения виде

2. Выведем число городов соответствующей страны

3. Выведем ссылку на столицу соответствующей страны. Текст ссылки состоит из Name. Адрес в формате - /cities/<ID>.html

4. Выведем ссылки на 3 города соответствующей страны с самым большим количеством населения. Текст ссылки состоит из Name и Population. Адрес в формате - /cities/<ID>.html

5. Выведем 3 самых распространненых языка в соответствующей страны. Нас интересует название, количество носителей (вычисляется с помощью процента), процент носителей и является ли он официальным

}

function task05() {

Создадим шаблон для отображения страны - views/city.pug, который будем отдавать для адреса /cities/<ID>.html

1. Выведем все поля для соответствующего города в удобном для чтения виде

2. Выведем краткую информацию о стране - имя, континент, официальные языки, имя столицы, ссылка на страницу страны

}

function task06() {

Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)

}