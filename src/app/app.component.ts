import { Component } from '@angular/core';
import { item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: item[] = [
    { name: 'CB', cost: 100 } as item,
    { name: 'Neychor Beef', cost: 120 } as item,
    { name: 'Neychor Chicken piece', cost: 130 } as item,
    { name: 'Oonu', cost: 70 } as item,
    { name: 'Koonthal fry', cost: 120 } as item,
    { name: 'jeeraka soda', cost: 15 } as item,
    { name: 'Beef Roast', cost: 100 } as item,
    { name: 'Chicken Fry', cost: 100 } as item,
  ];
  public itemName = '';
  public itemCost = '';

  public person: string[] = [];
  public personName = '';
  public personCostMap = new Map<string, number>();

  public addPerson(): void {
    this.person.push(this.personName);
    this.personName = '';
  }

  public addItem(): void {
    this.items.push({ name: this.itemName, cost: Number(this.itemCost) });
    this.itemName = '';
    this.itemCost = '';
  }

  public addItemToPerson(
    currentPerson: string,
    itemCost: Number,
    remove: boolean = false
  ): void {
    if (remove) {
      this.personCostMap.set(
        currentPerson,
        (this.personCostMap.get(currentPerson) || 0) - Number(itemCost) < 0
          ? 0
          : (this.personCostMap.get(currentPerson) || 0) - Number(itemCost)
      );
    } else {
      this.personCostMap.set(
        currentPerson,
        (this.personCostMap.get(currentPerson) || 0) + Number(itemCost)
      );
    }
  }

  public getPersonCost(currentPerson: string): number {
    return this.personCostMap.get(currentPerson) || 0;
  }

  public getTotalBillAmount(): number {
    let totalCost = 0;
    this.personCostMap.forEach((value, key) => {
      totalCost += value;
    });

    return totalCost;
  }
}
