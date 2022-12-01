import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SearchWarehouse } from '../../../../../../core/structure/search/src/api/search.warehouse';
import { SmartComponent } from '../../../../../common/src/cdk/component/lib/src/smart-component';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SearchPublisher } from '../../../../../../core/structure/search/src/api/search.publisher';
import * as i0 from "@angular/core";
export declare class ActiveSearchComponent extends SmartComponent {
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchWarehouse;
    phrase: string;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, searchCommandDispatcher: SearchPublisher, searchWarehouse: SearchWarehouse);
    ngOnInit(): void;
    clearSearch(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveSearchComponent, "div[gui-active-search]", never, {}, {}, never, never, false, never>;
}
