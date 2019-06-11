import { Structure } from 'structure/domain/structure/query/structure';
import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { OriginConverter } from 'structure/domain/origin/origin.converter';
import { FormationConverter } from 'structure/domain/formation/formation.converter';
import { SchemaConverter } from 'structure/domain/schema/schema.converter';
import { PagingConverter } from 'structure/domain/paging/paging.converter';
import { PresentationConverter } from 'structure/domain/presentation/presentation.converter';
export declare class StructureConverter {
    private originConverter;
    private formationConverter;
    private schemaConverter;
    private pagingConverter;
    private presentationConverter;
    constructor(originConverter: OriginConverter, formationConverter: FormationConverter, schemaConverter: SchemaConverter, pagingConverter: PagingConverter, presentationConverter: PresentationConverter);
    convert(aggregate: StructureAggregate): Structure;
    private convertSource;
}
