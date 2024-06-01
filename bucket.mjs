export class Bucket {
  constructor() {
    this.size = 16;
    this.bucket = [];

    this.numberOfItemInTheBucket = 0;
  }
  add(hashCode, key, value) {
    if (!this.bucket[hashCode]) {
      this.bucket[hashCode] = [{ key, value }];
    } else {
      let keyExist = false;
      this.bucket[hashCode].forEach((e) => {
        if (e["key"] === key) {
          e["value"] = value;
          keyExist = true;
        }
      });
      if (!keyExist) {
        this.bucket[hashCode].push({ key, value });
      }
    }
  }
  get(key, hashCode) {
    if (!this.bucket[hashCode]) {
      return null;
    } else {
      let res;
      for (let i = 0; i < this.bucket[hashCode].length; i++) {
        if (this.bucket[hashCode][i]["key"] === key) {
          let res = this.bucket[hashCode][i]["value"];
          return res;
        }
      }
      return null;
    }
  }
  getSize() {
    return this.size;
  }
  length() {
    let res = 0;
    this.bucket.forEach((e) => {
      if (e) res++;
    });
    return res;
  }
  clear() {
    this.bucket = [];
  }
  display() {
    this.bucket.forEach((e) => {
      console.log(e);
    });
  }
}
