import { FormationConverter } from '../formation/formation.converter';
import { PagingConverter } from '../paging/paging.converter';
import { SourceConverter } from '../source/source.converter';
import { VerticalFormationConverter } from './vertical-formation/vertical-formation.converter';
import { StructureAggregate } from '../../domain/structure/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare class StructureReadModelRootConverter {
    private formationConverter;
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(formationConverter: FormationConverter, pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
}
