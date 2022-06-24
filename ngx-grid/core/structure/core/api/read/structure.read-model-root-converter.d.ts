import { PagingConverter } from '../../../paging/domain-read/paging.converter';
import { SourceConverter } from '../../../source/domain/source.converter';
import { VerticalFormationConverter } from '../../../vertical-formation/domain/vertical-formation.converter';
import { StructureAggregate } from '../../domain/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    static readonly services: (typeof PagingConverter | typeof SourceConverter | typeof VerticalFormationConverter)[];
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
