//basic daya tyeps number string and boolean
let num1: number = 4;
let str: string = 'abc';
let bool: boolean = false;
//arrays
let arr: number[] = [3, 4, 5, 6];
//Tuples
let tup: [string, number] = ['abc', 5];
//Enum - value could be one of a set of the possible named constants
enum cars {
  bmw = 1,
  tesla = 2,
}
//any and void
let value: any = 2;
value = 'abc';
//void - return value of functions which dont return a value
function voidFunction() {
  return;
}
//null and undefined
let nullValue: null = null;
let undef: undefined = undefined;
//type inference
arr.forEach((num) => num + 3);
//type casting
let ab: any = 1;
let cd: string = <string>ab;
let ef: string = ab as string;
//difference between let and var
//var function scoped and let is block scoped
//var can be redefined and reassigned
//const -value of the variable does not change once initialized
//const cannot be reassigned
