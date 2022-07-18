import { PagingConverter } from '../../../../paging/src/core-read/paging.converter';
import { SourceConverter } from '../../../../source/src/core/source.converter';
import { VerticalFormationConverter } from '../../../../vertical-formation/src/core/vertical-formation.converter';
import { StructureAggregate } from '../../domain/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    static readonly services: (typeof PagingConverter | typeof VerticalFormationConverter | typeof SourceConverter)[];
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
