import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { SortingPublisher } from '../../../../../core/structure/sorting/src/api/sorting.publisher';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { StructureSelectCustomService } from '../../../../../feature/structure/formation/src/select-custom/structure.select-custom.service';
import * as i0 from "@angular/core";
export declare class StructureHeaderColumnsComponent extends SmartComponent {
    private readonly elementRef;
    private readonly injector;
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly structureSelectCustomService;
    private readonly formationCommandDispatcher;
    private readonly sortingCommandDispatcher;
    readonly selectCustomContainer?: ElementRef;
    columns: Array<CellTemplateWithContext>;
    showSelection: boolean;
    showCustom: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, structureSelectCustomService: StructureSelectCustomService, formationCommandDispatcher: FormationPublisher, sortingCommandDispatcher: SortingPublisher);
    toggleSort(column: CellTemplateWithContext): void;
    openConfigDialog(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderColumnsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderColumnsComponent, "div[gui-structure-header-columns][columns]", never, { "columns": "columns"; "showSelection": "showSelection"; }, {}, never, never, false, never>;
}
