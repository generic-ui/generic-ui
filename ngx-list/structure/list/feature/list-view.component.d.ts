import { ElementRef } from '@angular/core';
import { StructureId } from '../../core/api/structure.id';
import { StructureIdGenerator } from '../../grid/feature/structure-id.generator';
import { StructureCommandInvoker } from '../../core/api/structure.command-invoker';
import { ListViewReadModelRootId } from '../core/api/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../core/api/list-view.command-invoker';
import { FilterContainerRef } from '../../filter/core/api/config/filter-container-ref';
import { TranslationFacade } from '../../../l10n/core/api/translation.facade';
import { CompositionId } from '../../../composition/core/api/composition.id';
import { SchemaReadModelRootId } from '../../../schema/core/api/schema.read-model-root-id';
import { LayoutComponent } from '../../../common/cdk/component/layout-component';
import * as i0 from "@angular/core";
/** @internal */
export declare function listViewIdFactoryForList(generator: StructureIdGenerator): ListViewReadModelRootId;
/** @internal */
export declare function structureIdFactoryForList(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactoryForList(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare function schemaIdFactoryForList(generator: StructureIdGenerator): SchemaReadModelRootId;
export declare const componentListProviders: (import("@angular/core").Provider[] | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactoryForList;
    deps: (typeof StructureIdGenerator)[];
} | {
    provide: typeof SchemaReadModelRootId;
    useFactory: typeof schemaIdFactoryForList;
    deps: (typeof StructureIdGenerator)[];
})[];
export declare class ListViewComponent extends LayoutComponent implements FilterContainerRef {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly elementRef;
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, elementRef: ElementRef, structureCommandService: StructureCommandInvoker, listViewCommandDispatcher: ListViewCommandInvoker, translationService: TranslationFacade);
    getElementRef(): ElementRef;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewComponent, "gui-list-view", never, {}, {}, never, never>;
}
//# sourceMappingURL=list-view.component.d.ts.map