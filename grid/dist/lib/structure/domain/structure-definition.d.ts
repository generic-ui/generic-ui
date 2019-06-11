import { StructurePagingDefinition } from 'structure/domain/structure-paging-definition';
export declare class StructureDefinition {
    headerEnabled: boolean;
    bottomPaging: StructurePagingDefinition;
    topPaging: StructurePagingDefinition;
    static default: StructureDefinition;
    constructor(headerEnabled: boolean, bottomPaging: StructurePagingDefinition, topPaging: StructurePagingDefinition);
}
