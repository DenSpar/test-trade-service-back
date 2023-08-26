# Тестовое задание
Реализовать REST сервис, который бы по запросам отдавал из БД или создавал в базе записи, для этого реализовать методы :
1. GET `/security` - список инструментов из таблицы с инструментами с идентификаторами (минимальный набор данных - ID и т.д., смотри ниже пример), параметр count - количество инструментов, не возвращать больше 20
2. GET `/security/:id` данные из БД по конкретному инструменту в соответствии с ID
2. POST `/security` создает инструмент в БД возвращает исходные данные с присвоенным ID
3. GET `/trades` - создает подписку и по появлению данных в таблице сделок отдает данные клиенту
Сервис должен производить очистку таблиц по расписанию.

Для тестирования:
    1. реализовать клиента который бы использовал все методы и логировал полученные данные 
    2. реализовать сервис который бы занимался наполением БД произвольными данными(security,trades), кроме ID которые были бы инкрементальными для каждой таблицы
БД использовать по своему выбору

```
trade = {
   "id":1,
   "price":"2,33",
   "size":10,
   "side":1,
   "security":123,
   "client":"test1"
}
security = {
   "id":123,
   "seccode": 'VTBR',
   "price":"2,33",
   "isin" : "testisin",
   "lotsize" : 10
}```
