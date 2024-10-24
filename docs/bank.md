# ⚖️ Банковская система
Функциональная система включающая в себя: карты, дизайн карт, общие счета, штрафы, транзакции,

# Карта
__Итак, для того чтобы начать пользоваться услугами банка, вам потребуется завести карту:__

__/bank newcard (дизайн карты)__

:::details Доступные дизайны для карты

1.Red - Красный

2.Yellow - Жёлтый

3.Green - Зелёный

4.Blue - Синий

5.Purple - Фиолетовый

6.Light_purple - Светло-фиолетовый

7.Lime - Лаймовый

8.Aqua - Аква

9.White - Белый

10.Black - Чёрный
:::
___
После создания карты вы можете управлять ею через онлайн-меню банка. Также там вы найдете информацию о ваших транзакциях и штрафах.

/bank 

Если вы хотите распоряжаться средствами определённой карты вместе с вашим партнёром, тогда вы можете добавить его в совладельцы карты

/bank subuser add (ID карты) (ник)
# Пополнение/Снятие средств
- Найдите ближайшего банкира и подойдите к нему (их местоположение обозначено соответствующим значком на онлайн-карте). 
- Щелкните ПКМ по банкиру, чтобы открыть меню управления счетами. В открывшемся меню выберите карту, с которой вы хотите совершить операцию.
# Платежи
Для перевода АР другому игроку используйте /bank pay (никнейм) (сумма) - в этом случае ары придут на основную карту игрока.

Для перевода АР на определённую карту используйте /bank transfer (откуда) (куда) - вместо скобок впишите ID карт.

Для оплаты штрафа используйте /bank paywarn (ID штрафа) (откуда) - вместо второй скобки впишите ID карты, с которой вы хотите оплатить штраф.