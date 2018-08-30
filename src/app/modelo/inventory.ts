import { Stock } from "./stock";
import { ArrayUtils } from "../utils/arrayUtils";

export class Inventory {
    inventory: Stock[];

    constructor() {}

    add(stock) {
        this.inventory.push(stock);
    }

    remove(stock) {
        ArrayUtils.remove(this.inventory, stock)
    }

}
