import { PagingConverter } from '../../../../structure/paging/domain-api/read/paging.converter';
import { SourceConverter } from '../../../../structure/source/domain-api/source.converter';
import { VerticalFormationConverter } from '../vertical-formation/vertical-formation.converter';
import { StructureAggregate } from '../../domain/structure/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
