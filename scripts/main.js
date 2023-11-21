/*1. Створити клас Людина.
Властивості: імʼя;стать.
Методи:конструктор, який приймає два параметри: імʼя та стать.
*/

class Person {
    constructor (name, gender) {
        this.name = name;
        this.gender = gender;
        console.log (`Person is ${name}, ${gender}`);
    }
}
const person1 = new Person ('Mike', 'man');
const person2 = new Person ('Nick', 'man');
const person3 = new Person ('Olga', 'woman');
const person4 = new Person ('Irene','woman');
const person5 = new Person ('Nataly','woman');
const person6 = new Person ('Max','man');


/*
2. Створити клас Квартира.
Властивості:конструктор не потрібен; масив жителів, який при створенні пустий.
Методи: додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
*/

class Flat{
    residents = [];
    method (resident) {
        this.residents.push (resident);
    }
}

const flatResident1 = new Flat ();
const flatResident2 = new Flat ();
const flatResident3 = new Flat ();
const flatResident4 = new Flat ();
const flatResident5 = new Flat ();
const flatResident6 = new Flat ();

flatResident1.method(person1);
flatResident2.method(person2);
flatResident3.method(person3);
flatResident4.method(person4);
flatResident5.method(person5);
flatResident6.method(person6);

console.log ([flatResident1, flatResident2, flatResident3, flatResident4, flatResident5, flatResident6]);



/*
3. Створити клас Будинок.
Властивості: масив квартир, який при створенні пустий; максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, 
додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
*/

class House {
    constructor (maxVal) {
        this.maxVal = maxVal;
        this.flats = [];
    }
    pushFlat (nextFlat) {
        if (this.flats.length < this.maxVal) {
            this.flats.push(nextFlat);
        } else console.log (`Sorry, we haven't place`);
    }
}

const house1 = new House (3);
const house2 = new House (2);
const house3 = new House (1);

house1.pushFlat(flatResident1);
house1.pushFlat(flatResident2);
house1.pushFlat(flatResident3);

console.log(house1);

house2.pushFlat(flatResident4);
house2.pushFlat(flatResident5);
house2.pushFlat(flatResident5);

console.log(house2);

house3.pushFlat(flatResident6);

console.log(house3);

/*
В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/



