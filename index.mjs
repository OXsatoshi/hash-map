import { HashMap } from "./hashMap.mjs";
const hashMap = new HashMap();
hashMap.set("Carlos", "I am the old value");
hashMap.set("Carlos", "new value");
hashMap.set("Carla", "same as carlos");
let x = hashMap.get("carlos");
console.log(hashMap.length());
hashMap.clear();
console.log(hashMap.length());

hashMap.display();
