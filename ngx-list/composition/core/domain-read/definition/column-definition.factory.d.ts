import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { ActiveColumnEntity } from '../../domain/column/active/active-column.entity';
import * as i0 from "@angular/core";
export declare class ColumnDefinitionFactory {
    private readonly viewTemplateRepository;
    private readonly editTemplateRepository;
    constructor(viewTemplateRepository: ViewTemplateRepository, editTemplateRepository: EditTemplateRepository);
    create(column: ColumnEntity): ColumnDefinition;
    create(column: ActiveColumnEntity): ColumnDefinition;
    private createFromColumnEntity;
    private createFromActiveColumnEntity;
    createColumns(columns: Array<ColumnEntity>): Array<ColumnDefinition>;
    private findViewTemplate;
    private findEditTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnDefinitionFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColumnDefinitionFactory>;
}
//# sourceMappingURL=column-definition.factory.d.ts.map