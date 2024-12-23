# Медный Голем

**Медный Голем** — уникальный механический моб, выполненный из меди. Он способен взаимодействовать с кнопками, изменять внешний вид в зависимости от окисления и вносить динамику в игровые механики. Подходит для декоративных целей, автоматизации процессов и создания интерактивных игровых конструкций.

---
   ![Голем](./public/coppergolem.webp)

## Общее описание

Медный Голем — это пассивный (или нейтральный) моб, внешний вид которого меняется со временем из-за окисления. Он проходит через несколько стадий, начиная с блестящей меди и заканчивая полностью покрытой зелёным налётом. Голем автоматически активирует каменные кнопки, а его состояние можно восстановить с помощью железного топора.

---

## Особенности поведения

### 1. Взаимодействие с кнопками
- Голем нажимает каменные кнопки в радиусе действия.
- Кулдаун активации кнопок варьируется от **3 до 8 секунд**, что делает его полезным в автоматизированных конструкциях.

### 2. Окисление
Медный Голем проходит четыре стадии окисления:  
- **Чистая медь** — начальное состояние с ярким металлическим блеском.  
- **Первое окисление** — лёгкий зеленоватый налёт.  
- **Продвинутое окисление** — заметное потемнение меди.  
- **Полное окисление** — полностью зелёный цвет, голем теряет активность.  

Игрок может удалить окисление с помощью **железного топора**, вернув голема к первоначальному состоянию.

### 3. Боевая функциональность
- При атаке Голем переходит в активное состояние:
  - Подбрасывает врагов.
  - Наносит **2 единицы урона** в радиусе.
- После окончания боя возвращается в пассивное состояние.

---

## Создание и спавн

Медный Голем не создаётся игроками. Он случайно появляется в определённых условиях:
- **Биом:** Пещеры с капельниками.  
- **Место:** Только на твёрдых блоках (вода и лава исключены).  
- **Шанс появления:** 20%.

---

## Технические характеристики

| **Характеристика**       | **Значение**                       |
|---------------------------|------------------------------------|
| **Тип**                  | Сущность                       |
| **Здоровье**             | 50 (25 сердечек)                  |
| **Урон**                 | 2 единицы                         |
| **Скорость передвижения**| 0.25 (уменьшается при окислении)  |
| **Добыча**               | Медные слитки                     |

---

## Использование

### 1. Декоративный элемент
Изменение текстуры на разных стадиях окисления добавляет визуальное разнообразие. Големы идеально вписываются в тематические постройки и поселения.

### 2. Автоматизация
Големы могут активировать кнопки для:
- Управления дверями.
- Запуска редстоун-цепей и механизмов.
