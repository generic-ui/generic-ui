import { GenericBuilder } from '../../../common/cdk/generic-builder';
export declare class StructurePagingDefinitionBuilder extends GenericBuilder<PagingDefinition> {
    private enabled;
    constructor(enabled: boolean);
    withEnabled(enabled: boolean): StructurePagingDefinitionBuilder;
    protected buildObject(): PagingDefinition;
}
export declare class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    private static readonly defaultEnabled;
    constructor();
}
export declare class PagingDefinition {
    static Builder: typeof StructurePagingDefinitionBuilder;
    static DefaultBuilder: typeof StructurePagingDefinitionDefaultBuilder;
    private readonly enabled;
    constructor(enabled: boolean);
    isEnabled(): boolean;
}
//# sourceMappingURL=paging-definition.d.ts.map