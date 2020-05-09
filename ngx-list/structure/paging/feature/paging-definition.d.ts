import { GenericBuilder } from '../../../common/cdk/generic-builder';
export declare class StructurePagingDefinitionBuilder extends GenericBuilder<PagingDefinition> {
    private enabled;
    constructor(enabled: boolean);
    protected buildObject(): PagingDefinition;
    withEnabled(enabled: boolean): StructurePagingDefinitionBuilder;
}
export declare class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    private static readonly defaultEnabled;
    constructor();
}
export declare class PagingDefinition {
    private readonly enabled;
    constructor(enabled: boolean);
    static Builder: typeof StructurePagingDefinitionBuilder;
    static DefaultBuilder: typeof StructurePagingDefinitionDefaultBuilder;
    isEnabled(): boolean;
}
