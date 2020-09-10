/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from '../../domain-api/summaries/enabled/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
var StructureCreatedEventHandler = /** @class */ (function () {
    function StructureCreatedEventHandler(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureCreatedEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            var structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    };
    StructureCreatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCreatedEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureCreatedEventHandler;
}());
export { StructureCreatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRTtJQUdDLHNDQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTs7Z0JBRTNDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEQ7SUFFRixDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBMkJyQyxtQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLDRCQUE0Qjs7Ozs7O0lBRTVCLG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdW1tYXJpZXMvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeTogU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZUNyZWF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5LmluaXQoc3RydWN0dXJlSWQpO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19