import { PagingConverter } from '../../../../paging/core/domain-read/paging.converter';
import { SourceConverter } from '../../../../source/core/domain/source.converter';
import { VerticalFormationConverter } from '../../../../vertical-formation/core/domain/vertical-formation.converter';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
