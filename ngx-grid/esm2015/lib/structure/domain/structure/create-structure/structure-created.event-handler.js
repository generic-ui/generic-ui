/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../read/structure/summaries/structure.summaries.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsa0JBQStCOzs7O0lBRWhGLFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBNEI7O2NBRTVCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1FBRTFDLElBQUksS0FBSyxZQUFZLHFCQUFxQixFQUFFO1lBRTNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEQ7SUFFRixDQUFDOzs7WUFqQkQsVUFBVTs7OztZQUxGLDRCQUE0Qjs7Ozs7OztJQVF4QixvRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ3JlYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQpIHtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5LmluaXQoc3RydWN0dXJlSWQpO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19