import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from '../api/paging-config';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
