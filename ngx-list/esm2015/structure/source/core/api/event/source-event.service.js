import { Injectable } from '@angular/core';
import { hermesFilter, hermesMap } from '@generic-ui/hermes';
import { EditemItemValues } from './editem-item.values';
import { StructureSourceItemEditedEvent } from '../../domain/origin/edit/structure.source-item-edited.event';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class SourceEventService {
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    onSourceEdited(structureId) {
        return this.domainEventBus
            .ofEvents([
            StructureSourceItemEditedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === structureId.toString()), hermesMap((event) => {
            const afterItem = event.getAfterItem().getSourceItem(), beforeItem = event.getBeforeItem().getSourceItem();
            return new EditemItemValues(afterItem, beforeItem);
        }));
    }
}
SourceEventService.ɵfac = function SourceEventService_Factory(t) { return new (t || SourceEventService)(i0.ɵɵinject(i1.DomainEventBus)); };
SourceEventService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SourceEventService, factory: SourceEventService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceEventService, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventBus }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLFlBQVksRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFHNUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7OztBQUk3RyxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLFlBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQXdCO1FBRXRDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsUUFBUSxDQUFDO1lBQ1IsOEJBQXFDO1NBQ3JDLENBQ0Q7YUFDQSxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUMvRyxTQUFTLENBQUMsQ0FBQyxLQUFxQyxFQUFFLEVBQUU7WUFFbkQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUNyRCxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXBELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O29GQXRCVyxrQkFBa0I7d0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4vZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Tb3VyY2VFZGl0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxFZGl0ZW1JdGVtVmFsdWVzPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudHMoW1xuXHRcdFx0XHRcdFx0ICAgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHRcdCAgIF1cblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIGNvbnN0IGFmdGVySXRlbSA9IGV2ZW50LmdldEFmdGVySXRlbSgpLmdldFNvdXJjZUl0ZW0oKSxcblx0XHRcdFx0XHRcdFx0ICAgYmVmb3JlSXRlbSA9IGV2ZW50LmdldEJlZm9yZUl0ZW0oKS5nZXRTb3VyY2VJdGVtKCk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgRWRpdGVtSXRlbVZhbHVlcyhhZnRlckl0ZW0sIGJlZm9yZUl0ZW0pO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==