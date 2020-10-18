import { PagingConverter } from '../../../paging/core/api/read/paging.converter';
import { SourceConverter } from '../../../source/core/api/source.converter';
import { VerticalFormationConverter } from '../../../vertical-formation/core/api/vertical-formation.converter';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
