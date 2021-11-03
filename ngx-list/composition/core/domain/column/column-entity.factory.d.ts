import { ColumnParams } from './set-columns/column.params';
import { ColumnEntity } from './column.entity';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
import * as i0 from "@angular/core";
export declare class ColumnEntityFactory {
    private readonly columnPresentationConverter;
    constructor(columnPresentationConverter: ColumnPresentationConverter);
    create(params: ColumnParams): ColumnEntity;
    create(params: Array<ColumnParams>): Array<ColumnEntity>;
    private createColumn;
    private createColumns;
    private convertWidth;
    private getPresentation;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnEntityFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColumnEntityFactory>;
}
//# sourceMappingURL=column-entity.factory.d.ts.map