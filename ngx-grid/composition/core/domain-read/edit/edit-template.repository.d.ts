import { TemplateRef } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
export declare class EditTemplateRepository {
    private editTemplateFactory;
    constructor(editTemplateFactory: EditTemplateFactory);
    findTemplate(dataType: DataType): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditTemplateRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditTemplateRepository>;
}
//# sourceMappingURL=edit-template.repository.d.ts.map