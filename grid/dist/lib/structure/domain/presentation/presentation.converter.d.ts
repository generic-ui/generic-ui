import { Presentation } from 'structure/domain/presentation/query/presentation';
import { PresentationAggregate } from 'structure/domain/presentation/command/presentation-aggregate';
import { ColumnDefinitionFactory } from 'structure/domain/presentation/query/definition/column-definition.factory';
export declare class PresentationConverter {
    private columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    convert(aggregate: PresentationAggregate): Presentation;
    private convertColumnsToColumnDef;
}
