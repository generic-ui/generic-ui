import { PagingConfig } from 'structure/domain/paging/paging-config';
import { StructureId } from 'structure/domain/structure-id';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
