import { Bucket } from "./bucket.mjs";
export class HashMap {
  constructor() {
    this.bucket = new Bucket();
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.bucket.getSize();
  }
  set(key, value) {
    let hashCode = this.hash(key);

    this.bucket.add(hashCode, key, value);
  }
  display() {
    this.bucket.display();
  }
  get(key) {
    let hashCode = this.hash(key);
    return this.bucket.get(key, hashCode);
  }
  length() {
    return this.bucket.length();
  }
  clear() {
    this.bucket.clear();
  }
}
