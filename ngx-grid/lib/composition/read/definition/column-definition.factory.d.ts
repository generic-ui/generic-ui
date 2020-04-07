import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { ActiveColumnEntity } from '../../domain/column/active/active-column.entity';
export declare class ColumnDefinitionFactory {
    private viewTemplateRepository;
    private editTemplateRepository;
    constructor(viewTemplateRepository: ViewTemplateRepository, editTemplateRepository: EditTemplateRepository);
    create(column: ColumnEntity): ColumnDefinition;
    create(column: ActiveColumnEntity): ColumnDefinition;
    private createFromColumnEntity;
    private createFromActiveColumnEntity;
    createColumns(columns: Array<ColumnEntity>): Array<ColumnDefinition>;
    private findViewTemplate;
    private findEditTemplate;
}
