/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../ui-api/summaries/structure-summaries.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
var StructureSummariesConfigService = /** @class */ (function () {
    function StructureSummariesConfigService(structureSummariesPanelConfigConverter, structureSummariesArchive, structureSummariesCommandDispatcher, structureId) {
        this.structureSummariesPanelConfigConverter = structureSummariesPanelConfigConverter;
        this.structureSummariesArchive = structureSummariesArchive;
        this.structureSummariesCommandDispatcher = structureSummariesCommandDispatcher;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureSummariesConfigService.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var summariesPanelConfig = this.structureSummariesPanelConfigConverter.convert(config);
        this.structureSummariesArchive.next(summariesPanelConfig);
        this.structureSummariesCommandDispatcher.setSummariesEnabled(config.enabled, this.structureId);
    };
    StructureSummariesConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesConfigService.ctorParameters = function () { return [
        { type: StructureSummariesPanelConfigConverter },
        { type: StructureSummariesArchive },
        { type: StructureSummariesCommandDispatcher },
        { type: StructureId }
    ]; };
    return StructureSummariesConfigService;
}());
export { StructureSummariesConfigService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0Q7SUFHQyx5Q0FBb0Isc0NBQThFLEVBQ3ZGLHlCQUFvRCxFQUNwRCxtQ0FBd0UsRUFDeEUsV0FBd0I7UUFIZiwyQ0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQ3ZGLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUN4RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNuQyxDQUFDOzs7OztJQUVELDZDQUFHOzs7O0lBQUgsVUFBSSxNQUF1Qjs7WUFFcEIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFeEYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRyxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFSRixzQ0FBc0M7Z0JBQ3RDLHlCQUF5QjtnQkFFekIsbUNBQW1DO2dCQUNuQyxXQUFXOztJQXNCcEIsc0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSwrQkFBK0I7Ozs7OztJQUUvQixpRkFBc0Y7Ozs7O0lBQy9GLG9FQUE0RDs7Ozs7SUFDNUQsOEVBQWdGOzs7OztJQUNoRixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0fVxuXG5cdHNldChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZS5uZXh0KHN1bW1hcmllc1BhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChjb25maWcuZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19