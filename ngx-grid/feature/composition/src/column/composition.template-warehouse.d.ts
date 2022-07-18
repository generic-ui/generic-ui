import { CompositionId } from '../../../../core/composition/src/api/global/composition.id';
import { HermesObservable } from '@generic-ui/hermes';
import { CompositionTemplateModel } from './composition.template.model';
import { CompositionWarehouse } from '../../../../core/composition';
import { ViewTemplateRepository } from './view/view-template.repository';
import { EditTemplateRepository } from './edit/edit-template.repository';
import { CompositionAccessorModel } from './composition.accessor.model';
import * as i0 from "@angular/core";
export declare class CompositionTemplateWarehouse {
    private readonly compositionWarehouse;
    private readonly viewTemplateRepository;
    private readonly editTemplateRepository;
    constructor(compositionWarehouse: CompositionWarehouse, viewTemplateRepository: ViewTemplateRepository, editTemplateRepository: EditTemplateRepository);
    onHeaderCols(compositionId: CompositionId): HermesObservable<ReadonlyArray<CompositionTemplateModel>>;
    onAll(compositionId: CompositionId): HermesObservable<ReadonlyArray<CompositionTemplateModel>>;
    onTemplateCols(compositionId: CompositionId): HermesObservable<ReadonlyArray<CompositionAccessorModel>>;
    private findViewTemplate;
    private findEditTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionTemplateWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionTemplateWarehouse>;
}
