import { Injectable } from '@angular/core';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
import * as i0 from "@angular/core";
import * as i1 from "./structure.source-origin.archive";
export class StructureOriginChangedEventHandler {
    constructor(structureSourceOriginRepository) {
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    forEvent() {
        return OriginSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('OriginSetEvent')) {
            const origin = event.getOrigin();
            this.structureSourceOriginRepository.next(event.getAggregateId(), origin);
        }
    }
}
StructureOriginChangedEventHandler.ɵfac = function StructureOriginChangedEventHandler_Factory(t) { return new (t || StructureOriginChangedEventHandler)(i0.ɵɵinject(i1.StructureSourceOriginArchive)); };
StructureOriginChangedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureOriginChangedEventHandler, factory: StructureOriginChangedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureOriginChangedEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.StructureSourceOriginArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7QUFLakYsTUFBTSxPQUFPLGtDQUFrQztJQUU5QyxZQUFvQiwrQkFBNkQ7UUFBN0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUE4QjtJQUNqRixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBcUI7UUFFM0IsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDMUMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQzs7b0hBaEJXLGtDQUFrQzt3RkFBbEMsa0NBQWtDLFdBQWxDLGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBRDlDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4uYXJjaGl2ZSc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgT3JpZ2luU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnk6IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxPcmlnaW5TZXRFdmVudD4ge1xuXHRcdHJldHVybiBPcmlnaW5TZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogT3JpZ2luU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdPcmlnaW5TZXRFdmVudCcpKSB7XG5cdFx0XHRjb25zdCBvcmlnaW4gPSBldmVudC5nZXRPcmlnaW4oKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgb3JpZ2luKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==