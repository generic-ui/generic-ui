import { ChangeDetectorRef } from '@angular/core';
import { SearchWarehouse } from '../../../../search/domain-api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { SearchCommandDispatcher } from '../../../../search/domain-api/search.command-dispatcher';
export declare class ActiveSearchComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly searchCommandDispatcher;
    private readonly searchWarehouse;
    phrase: string;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, searchCommandDispatcher: SearchCommandDispatcher, searchWarehouse: SearchWarehouse);
    ngOnInit(): void;
    clearSearch(): void;
}
