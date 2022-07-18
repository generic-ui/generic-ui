import { ApiProviders, Container } from '@generic-ui/hermes';
export declare const listViewKey = "ListViewKey";
export declare class ListViewApiModule implements ApiProviders {
    registerProviders(container: Container): void;
}
export declare function initializeListView(): void;
