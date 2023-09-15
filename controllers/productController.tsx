// product-controllers/productController.js
import { object1, object2, object3 } from "../models/Product";
import { Object1Item, Object2Item, Object3Item } from "../models/Product";

// Create a new interface that combines properties from Object1Item, Object2Item, and Object3Item
export interface CombinedItem extends Object1Item, Object2Item, Object3Item {
  source: string; // You can add additional properties if needed
}
// Rest of your code, including the getCombinedData function

export function getCombinedData(): CombinedItem[] {
  const combinedData: CombinedItem[] = [];
  let object1Index = 0;
  let object2Index = 0;
  let object3Index = 0;

  while (
    object1Index < object1.length ||
    object2Index < object2.length ||
    object3Index < object3.length
  ) {
    // Add 10 items from object1
    for (let i = 0; i < 7 && object1Index < object1.length; i++) {
      combinedData.push({ ...object1[object1Index++], source: "object1" });
    }

    // Add 3 items from object2
    for (let i = 0; i < 4 && object2Index < object2.length; i++) {
      combinedData.push({ ...object2[object2Index++], source: "object2" });
    }

    for (let i = 0; i < 7 && object1Index < object1.length; i++) {
      combinedData.push({ ...object1[object1Index++], source: "object1" });
    }

    // Add 3 items from object3
    for (let i = 0; i < 2 && object3Index < object3.length; i++) {
      combinedData.push({ ...object3[object3Index++], source: "object3" });
    }
    for (let i = 0; i < 14 && object1Index < object1.length; i++) {
      combinedData.push({ ...object1[object1Index++], source: "object1" });
    }
    for (let i = 0; i < 2 && object3Index < object3.length; i++) {
      combinedData.push({ ...object3[object3Index++], source: "object3" });
    }
    for (let i = 0; i < 140 && object1Index < object1.length; i++) {
      combinedData.push({ ...object1[object1Index++], source: "object1" });
    }
  }

  return combinedData;
}
