import { ApiProviders, Container, DomainInitializer } from '@generic-ui/hermes';
export declare const listViewKey = "ListViewKey";
export declare class ListViewApiModule implements ApiProviders {
    registerProviders(container: Container): void;
}
export declare const listViewInitializer: DomainInitializer;
