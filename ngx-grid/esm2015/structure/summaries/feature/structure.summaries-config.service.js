/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { SummariesCommandInvoker } from '../core/api/summaries.command-invoker';
import { StructureId } from '../../core/api/structure.id';
export class StructureSummariesConfigService {
    /**
     * @param {?} structureSummariesPanelConfigConverter
     * @param {?} structureSummariesArchive
     * @param {?} structureSummariesCommandDispatcher
     * @param {?} structureId
     */
    constructor(structureSummariesPanelConfigConverter, structureSummariesArchive, structureSummariesCommandDispatcher, structureId) {
        this.structureSummariesPanelConfigConverter = structureSummariesPanelConfigConverter;
        this.structureSummariesArchive = structureSummariesArchive;
        this.structureSummariesCommandDispatcher = structureSummariesCommandDispatcher;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        /** @type {?} */
        const summariesPanelConfig = this.structureSummariesPanelConfigConverter.convert(config);
        this.structureSummariesArchive.next(summariesPanelConfig);
        this.structureSummariesCommandDispatcher.setSummariesEnabled(config.enabled, this.structureId);
    }
}
StructureSummariesConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesConfigService.ctorParameters = () => [
    { type: StructureSummariesPanelConfigConverter },
    { type: StructureSummariesArchive },
    { type: SummariesCommandInvoker },
    { type: StructureId }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureSummariesCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesConfigService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9mZWF0dXJlL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSzFELE1BQU0sT0FBTywrQkFBK0I7Ozs7Ozs7SUFFM0MsWUFBb0Isc0NBQThFLEVBQ3ZGLHlCQUFvRCxFQUNwRCxtQ0FBNEQsRUFDNUQsV0FBd0I7UUFIZiwyQ0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQ3ZGLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUF5QjtRQUM1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNuQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxNQUF1Qjs7Y0FFcEIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFeEYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUFoQkQsVUFBVTs7OztZQVJGLHNDQUFzQztZQUN0Qyx5QkFBeUI7WUFFekIsdUJBQXVCO1lBQ3ZCLFdBQVc7Ozs7Ozs7SUFPUCxpRkFBc0Y7Ozs7O0lBQy9GLG9FQUE0RDs7Ozs7SUFDNUQsOEVBQW9FOzs7OztJQUNwRSxzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9zdW1tYXJpZXMuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uL2NvcmUvYXBpL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyOiBTdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0fVxuXG5cdHNldChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZS5uZXh0KHN1bW1hcmllc1BhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChjb25maWcuZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19