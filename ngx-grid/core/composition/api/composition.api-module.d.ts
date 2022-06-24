import { ApiProviders, Container, DomainInitializer } from '@generic-ui/hermes';
export declare class CompositionApiModule implements ApiProviders {
    registerProviders(container: Container): void;
}
export declare const compositionInitializer: DomainInitializer;
