import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from '../api/config/paging-config';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
