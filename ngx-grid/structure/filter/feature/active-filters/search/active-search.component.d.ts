import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SearchWarehouse } from '../../../../search/core/api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
export declare class ActiveSearchComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchWarehouse;
    phrase: string;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, searchCommandDispatcher: SearchCommandInvoker, searchWarehouse: SearchWarehouse);
    ngOnInit(): void;
    clearSearch(): void;
    protected getSelectorName(): string;
}
