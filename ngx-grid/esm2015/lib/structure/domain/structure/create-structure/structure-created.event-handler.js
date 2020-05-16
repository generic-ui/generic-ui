/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../domain-api/summaries/enabled/structure.summaries.repository';
export class StructureCreatedEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        super();
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            const structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    }
}
StructureCreatedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCreatedEventHandler.ctorParameters = () => [
    { type: StructureSummariesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQU1wSCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsa0JBQXNEOzs7O0lBRXZHLFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBNEI7UUFFbEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7O2tCQUUzQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUUxQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBRXBEO0lBRUYsQ0FBQzs7O1lBakJELFVBQVU7Ozs7WUFMRiw0QkFBNEI7Ozs7Ozs7SUFReEIsb0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdW1tYXJpZXMvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeTogU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZUNyZWF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5LmluaXQoc3RydWN0dXJlSWQpO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19