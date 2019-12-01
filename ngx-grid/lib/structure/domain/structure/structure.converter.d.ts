import { FormationConverter } from '../formation/formation.converter';
import { SchemaConverter } from '../schema/schema.converter';
import { PagingConverter } from '../paging/paging.converter';
import { SourceConverter } from '../source/source.converter';
import { VerticalFormationConverter } from './query/vertical-formation/vertical-formation.converter';
import { StructureAggregate } from './command/structure.aggregate';
import { Structure } from './query/structure';
export declare class StructureConverter {
    private formationConverter;
    private schemaConverter;
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(formationConverter: FormationConverter, schemaConverter: SchemaConverter, pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): Structure;
    private convertSource;
}
