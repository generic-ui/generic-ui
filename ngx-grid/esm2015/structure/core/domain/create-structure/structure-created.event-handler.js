import { Injectable } from '@angular/core';
import { StructureCreatedEvent } from './structure-created.event';
import * as i0 from "@angular/core";
import * as i1 from "../../../summaries/core/domain/enabled/summaries-enabled-archive.service";
export class StructureCreatedEventHandler {
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    forEvent() {
        return StructureCreatedEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            const structureId = event.getAggregateId();
            this.summariesEnabledArchive.init(structureId);
        }
    }
}
StructureCreatedEventHandler.ɵfac = function StructureCreatedEventHandler_Factory(t) { return new (t || StructureCreatedEventHandler)(i0.ɵɵinject(i1.SummariesEnabledArchive)); };
StructureCreatedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureCreatedEventHandler, factory: StructureCreatedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureCreatedEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.SummariesEnabledArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLDRCQUE0QjtJQUV4QyxZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUVqRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUNGLENBQUM7O3dHQWpCVyw0QkFBNEI7a0ZBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdW1tYXJpZXNFbmFibGVkQXJjaGl2ZTogU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ3JlYXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdHRoaXMuc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUuaW5pdChzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==