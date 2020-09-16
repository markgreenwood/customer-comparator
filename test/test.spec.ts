/* eslint-disable @typescript-eslint/no-unused-vars,class-methods-use-this,max-classes-per-file */
import { v4 } from "uuid";

class Customer {
  id: string;

  firstname: string;

  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.id = v4();
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class CustomerNameComparator {
  compare(c1: Customer, c2: Customer): number {
    // TODO: implement comparator
    return 0;
  }
}

describe("CustomerNameComparator", () => {
  it(
    "should return negative number when lastname 1 is alphabetically before lastname 2",
  );
});
