export interface GroceryListData {
  count: number;
  items: Item[];
}

export interface Item {
  id:        number;
  todo:      string;
  completed: boolean;
  userID:    number;
}
