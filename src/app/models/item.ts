export enum ItemType {
    icon = 0,
    link = 1,
    text = 2
}
export interface Item {
    type: ItemType;
    value: string;
    action?: Function;
}