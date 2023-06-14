<h1 align="center">Проектная работа "Место"</h1>
<h2 align="center">Курс "Веб-разработчик" Яндекс Практикума</h2>

###### [Ссылка на GH-Pages](https://shrodinger-54rus.github.io/mesto/)

![Демонстрация](./src/images/demo-readme.gif)

---

#### Задание

Сверстать по макету Figma адаптивный сайт. Минимальный ширина 320px, максимальная - 1280px.
Реализовать логику открытия и закрытия модальных окон: формы добавления новых карточек фото, изменения аватара пользователя и его информации, открытие увеличенного изображения. Закрытие модальных окон: на кнопку закрытия, при нажатии на ESC и кликом за пределами модального окна.
Подключить проект к серверу.

---

#### Реализация

##### Верстка

Адаптивная и резиновая за счет grid layout, flex-box и медиазапросов. Добавлены CSS анимации открытия и закрытия модальных окон.

##### Логика

Добавлен тег `<template>` для добавления разметки на страницу. Создание карточек, открытие форм, слушатели, валидация реализованы классами.
Проверяется валидность заполнения форм.
Постановка и снятие лайка.
Удаление и подтверждение удаления карточек с фото. Реализована возможность удалять только созданные пользователем карточки.
Закрытие модальных окон: на кнопку закрытия, при нажатии на ESC и кликом за пределами модального окна.
Отключен дефолтный сабмит.
При нажатии на "Сохранить" модальное окно закрывается.
Реализовано подключение API. Информация о пользователе, фото, лайки хранятся на сервере.

---

#### Применяемые технологии

- HTML
- CSS
- Резиновая верстка
- Адаптивная верстка
- JavaScript
- ООП
- БЭМ, файловая структура NESTED
- Формы, валидация форм
- REST API

---

#### Планы на изменения

- Изменение стилей с помощью препроцессора SASS;
- Добавить светлую тему
- Добавить мультиязычность
- Подключить React

---

###### последнее изменение 14.06.2023 г.
