import { GenericBuilder } from '../../../common/src/cdk/generic-builder';
import { PagingDefinition } from '../../../feature/structure/paging/src/paging-definition';
export declare class StructureDefinitionBuilder extends GenericBuilder<StructureDefinition> {
    private headerEnabled;
    private bottomPaging;
    private topPaging;
    private border;
    constructor(headerEnabled: boolean, bottomPaging: PagingDefinition, topPaging: PagingDefinition);
    withHeader(enabled: boolean): StructureDefinitionBuilder;
    withBottomPaging(paging: PagingDefinition): StructureDefinitionBuilder;
    withTopPaging(paging: PagingDefinition): StructureDefinitionBuilder;
    withBorder(enabled: boolean): StructureDefinitionBuilder;
    protected buildObject(): StructureDefinition;
}
export declare class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    private static readonly defaultHeaderEnabled;
    private static readonly defaultBottomPaging;
    private static readonly defaultTopPaging;
    constructor();
}
export declare class StructureDefinition {
    static Builder: typeof StructureDefinitionBuilder;
    static DefaultBuilder: typeof StructureDefinitionDefaultBuilder;
    private readonly headerEnabled;
    private readonly bottomPaging;
    private readonly topPaging;
    private readonly border;
    constructor(headerEnabled: boolean, bottomPaging: PagingDefinition, topPaging: PagingDefinition, border: boolean);
    isHeaderEnabled(): boolean;
    isBorderEnabled(): boolean;
    getBottomPaging(): PagingDefinition;
    getTopPaging(): PagingDefinition;
}
