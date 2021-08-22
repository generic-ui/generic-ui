import { ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class ActiveFilterMenuTriggerDirective {
    private readonly el;
    private readonly structureId;
    private readonly activeFilterService;
    private readonly schemaReadModelRootId;
    constructor(el: ElementRef, structureId: StructureId, activeFilterService: ActiveFilterService, schemaReadModelRootId: SchemaReadModelRootId);
    ngOnInit(): void;
}
