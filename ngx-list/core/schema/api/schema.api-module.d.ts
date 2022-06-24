import { ApiProviders, Container, DomainInitializer } from '@generic-ui/hermes';
export declare class SchemaApiModule implements ApiProviders {
    registerProviders(container: Container): void;
}
export declare const schemaInitializer: DomainInitializer;
export declare const initSchema: () => void;
