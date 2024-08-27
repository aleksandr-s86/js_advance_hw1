/*• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)*/

const musikCollections = [
    {title: "Let It Be", artist: "The Beatles", year: "1970"},
    {title: "Aftermath", artist: "The Rolling Stones", year: "1966"},
    {title: "The Ultimate Collection", artist: "The Kinks", year: "1989"}
]

musikCollections[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to 
            ? { done: false, value: musikCollections[this.current++] } 
            : { done: true };
        }
    }
}

for(let musicCollection of musikCollections){
    console.log(`Название альбома ${musicCollection.title} - Исполнитель ${musicCollection.artist} (Год выпуска: ${musicCollection.year})`);
}
