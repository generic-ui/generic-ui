import { StructureId } from '../../core/api/global/structure.id';
import { PagingConfig } from '../api/config/paging-config';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
