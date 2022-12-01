import { ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class ActiveFilterMenuTriggerDirective {
    private readonly el;
    private readonly structureId;
    private readonly activeFilterService;
    private readonly schemaReadModelRootId;
    constructor(el: ElementRef, structureId: StructureId, activeFilterService: ActiveFilterService, schemaReadModelRootId: SchemaReadModelRootId);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterMenuTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ActiveFilterMenuTriggerDirective, "[gui-active-filter-menu-trigger]", never, {}, {}, never, never, false, never>;
}
