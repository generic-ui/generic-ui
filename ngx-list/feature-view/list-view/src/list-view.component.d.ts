import { ElementRef } from '@angular/core';
import { StructureId } from '../../../core/structure/structure-core/src/api/global/structure.id';
import { StructureIdGenerator } from '../../grid-view/src/structure/structure-id.generator';
import { StructurePublisher } from '../../../core/structure/structure-core/src/api/structure.publisher';
import { ListViewReadModelRootId } from '../../../core/list-view/src/api/global/list-view.read-model-root-id';
import { ListViewPublisher } from '../../../core/list-view/src/api/list-view.publisher';
import { FilterContainerRef } from '../../../feature/structure/filter/src/filter-container-ref';
import { TranslationFacade } from '../../../core/l10n/src/api/translation.facade';
import { CompositionId } from '../../../core/composition/src/api/global/composition.id';
import { SchemaReadModelRootId } from '../../../core/schema/src/api/global/schema.read-model-root-id';
import { LayoutComponent } from '../../../feature/common/component/src/layout-component';
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
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, elementRef: ElementRef, structurePublisher: StructurePublisher, listViewPublisher: ListViewPublisher, translationFacade: TranslationFacade);
    getElementRef(): ElementRef;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewComponent, "gui-list-view", never, {}, {}, never, never, false, never>;
}
