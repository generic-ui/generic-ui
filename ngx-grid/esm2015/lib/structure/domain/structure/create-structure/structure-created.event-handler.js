/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../feature-api/summaries/enabled/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
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
        /** @type {?} */
        const structureId = event.getAggregateId();
        if (event instanceof StructureCreatedEvent) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNySCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsa0JBQStCOzs7O0lBRWhGLFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBNEI7O2NBRTVCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1FBRTFDLElBQUksS0FBSyxZQUFZLHFCQUFxQixFQUFFO1lBRTNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEQ7SUFFRixDQUFDOzs7WUFqQkQsVUFBVTs7OztZQUxGLDRCQUE0Qjs7Ozs7OztJQVF4QixvRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9zdW1tYXJpZXMvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNyZWF0ZWRFdmVudCkge1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkuaW5pdChzdHJ1Y3R1cmVJZCk7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=