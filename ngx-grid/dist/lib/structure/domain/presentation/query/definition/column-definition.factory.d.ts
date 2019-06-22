import { ColumnDefinition } from 'structure/domain/presentation/query/definition/column-definition';
import { Column } from 'structure/domain/presentation/column';
import { ColumnTemplatesRepository } from 'structure/domain/presentation/query/templates/column-templates.repository';
import { ColumnTypeConverter } from 'structure/domain/presentation/command/column/column-type.converter';
export declare class ColumnDefinitionFactory {
    private columnTemplatesRepository;
    private columnTypeConverter;
    constructor(columnTemplatesRepository: ColumnTemplatesRepository, columnTypeConverter: ColumnTypeConverter);
    create(column: Column): ColumnDefinition;
    createColumns(columns: Array<Column>): Array<ColumnDefinition>;
    private findTemplate;
}
