import { StructureId } from '../../../lib/structure/domain/structure.id';
import { PagingConfig } from '../domain-api/paging-config';
export interface PagingConfigWithId extends PagingConfig {
    structureId: StructureId;
}
