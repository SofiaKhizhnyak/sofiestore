import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert any object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
//<T> is a generic type that represents the type of the object that we want to convert
//this way we can use this function to convert any object to a plain object
//value:T is specifying the type of the parameter or the argument that this function will receive
//:T is the return type of the function

//so if we pass an object of type Product to this function, it will return an object of type Product

//Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");

  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
