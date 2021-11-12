import { Changes } from './ng-changes';
interface InputChanges {
    isChanged(): boolean;
    ifChanged(callback: () => void): void;
}
export declare function checkInput<T>(prop: Changes<T>): InputChanges;
export declare function ifChanged<T>(prop: Changes<T>, callback: (value: any) => void): void;
export declare function hasChanged<T>(prop: Changes<T>): boolean;
export {};
