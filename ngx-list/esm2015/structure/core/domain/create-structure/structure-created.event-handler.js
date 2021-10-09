/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesEnabledArchive } from '../../../summaries/core/domain/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
export class StructureCreatedEventHandler {
    /**
     * @param {?} summariesEnabledArchive
     */
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructureCreatedEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            const structureId = event.getAggregateId();
            this.summariesEnabledArchive.init(structureId);
        }
    }
}
StructureCreatedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCreatedEventHandler.ctorParameters = () => [
    { type: SummariesEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.summariesEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNuSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXhDLFlBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTs7a0JBRTNDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDRixDQUFDOzs7WUFsQkQsVUFBVTs7OztZQUxGLHVCQUF1Qjs7Ozs7OztJQVFuQiwrREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vZW5hYmxlZC9zdW1tYXJpZXMtZW5hYmxlZC1hcmNoaXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bW1hcmllc0VuYWJsZWRBcmNoaXZlOiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZUNyZWF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5pbml0KHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19