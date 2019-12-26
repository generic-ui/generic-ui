import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../command/column/column.entity';
import { ColumnDefinition } from './column-definition';
export declare class ColumnDefinitionFactory {
    private viewTemplateRepository;
    private editTemplateRepository;
    constructor(viewTemplateRepository: ViewTemplateRepository, editTemplateRepository: EditTemplateRepository);
    create(column: ColumnEntity): ColumnDefinition;
    createColumns(columns: Array<ColumnEntity>): Array<ColumnDefinition>;
    private findViewTemplate;
    private findEditTemplate;
}
