import { StructureId } from '../structure-id';
import { PagingConfig } from './paging-config';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
