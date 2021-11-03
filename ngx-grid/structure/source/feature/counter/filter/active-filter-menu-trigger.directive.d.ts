import { ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class ActiveFilterMenuTriggerDirective {
    private readonly el;
    private readonly structureId;
    private readonly activeFilterService;
    private readonly schemaReadModelRootId;
    constructor(el: ElementRef, structureId: StructureId, activeFilterService: ActiveFilterService, schemaReadModelRootId: SchemaReadModelRootId);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterMenuTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ActiveFilterMenuTriggerDirective, "[gui-active-filter-menu-trigger]", never, {}, {}, never>;
}
//# sourceMappingURL=active-filter-menu-trigger.directive.d.ts.map