import { ElementRef, Renderer2 } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../schema/core/domain-read/schema.read-model-root-id';
import { StructureId } from '../../../core/api/structure.id';
export declare class ActiveFilterMenuTriggerDirective {
    private readonly renderer;
    private readonly el;
    private readonly structureId;
    private readonly activeFilterService;
    private readonly schemaReadModelRootId;
    constructor(renderer: Renderer2, el: ElementRef, structureId: StructureId, activeFilterService: ActiveFilterService, schemaReadModelRootId: SchemaReadModelRootId);
    ngOnInit(): void;
}
