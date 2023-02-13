/*
 * @Author: suLeungs
 * @Date: 2022-04-25 16:31:08
 * @LastEditTime: 2022-04-25 20:18:17
 * @LastEditors: suLeungs
 * @Description: 继承测试
 * @FilePath: /mineTest/test/继承.js
 */

function Person (n, m) {
  this.eating = function () {
    console.log('eating')
  }
  this.name = n
  this.class = m
}

function Student (age, n, m) {
  this.age = age
  Person.call(this, n, m)
}

// Student.prototype = new Person()
// Student.prototype.studying = function () {
//   console.log('studying')
// }

// let stu = new Student(18)
// stu.studying()
// console.log(stu.name, stu.__proto__)

Student.prototype = new Person()
Student.prototype.studying = function () {
  console.log('studying')
}

let stu = new Student(18, 'susu', '终极一班')
console.log(stu)