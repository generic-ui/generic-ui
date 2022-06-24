import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { ActiveColumnEntity } from '../../domain/column/active/active-column.entity';
export declare class ColumnDefinitionFactory {
    private readonly viewTemplateRepository;
    private readonly editTemplateRepository;
    constructor(viewTemplateRepository: ViewTemplateRepository, editTemplateRepository: EditTemplateRepository);
    static readonly services: (typeof ViewTemplateRepository | typeof EditTemplateRepository)[];
    create(column: ColumnEntity): ColumnDefinition;
    create(column: ActiveColumnEntity): ColumnDefinition;
    createColumns(columns: Array<ColumnEntity>): Array<ColumnDefinition>;
    private createFromColumnEntity;
    private createFromActiveColumnEntity;
    private findViewTemplate;
    private findEditTemplate;
}
