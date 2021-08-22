/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { SourceGate } from '../../../../source/feature/gate/source.gate';
import { StructureId } from '../../../../core/domain/structure.id';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../../source/core/api/event/source-event.service';
export class ListViewSourceGate extends SourceGate {
    /**
     * @param {?} structureId
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     */
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[items]'
            },] }
];
/** @nocollapse */
ListViewSourceGate.ctorParameters = () => [
    { type: StructureId },
    { type: SourceCommandInvoker },
    { type: SourceEventService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ListViewSourceGate.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    ListViewSourceGate.prototype.sourceEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBTTVGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVOzs7Ozs7SUFFakQsWUFBWSxXQUF3QixFQUNkLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDOzs7WUFURCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjthQUNoQzs7OztZQVBRLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsa0JBQWtCOzs7Ozs7O0lBU3ZCLGtEQUE2RDs7Ozs7SUFDN0QsZ0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W2l0ZW1zXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VHYXRlIGV4dGVuZHMgU291cmNlR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc291cmNlQ29tbWFuZFNlcnZpY2UsIHNvdXJjZUV2ZW50U2VydmljZSk7XG5cdH1cblxufVxuIl19