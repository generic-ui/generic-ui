/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../domain-api/summaries/structure-summaries.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0Q7SUFHQyx5Q0FBb0Isc0NBQThFLEVBQ3ZGLHlCQUFvRCxFQUNwRCxtQ0FBd0UsRUFDeEUsV0FBd0I7UUFIZiwyQ0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQ3ZGLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsd0NBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUN4RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNuQyxDQUFDOzs7OztJQUVELDZDQUFHOzs7O0lBQUgsVUFBSSxNQUF1Qjs7WUFFcEIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFeEYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRyxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFSRixzQ0FBc0M7Z0JBQ3RDLHlCQUF5QjtnQkFFekIsbUNBQW1DO2dCQUNuQyxXQUFXOztJQXNCcEIsc0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSwrQkFBK0I7Ozs7OztJQUUvQixpRkFBc0Y7Ozs7O0lBQy9GLG9FQUE0RDs7Ozs7SUFDNUQsOEVBQWdGOzs7OztJQUNoRixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdW1tYXJpZXMvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHR9XG5cblx0c2V0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBzdW1tYXJpZXNQYW5lbENvbmZpZyA9IHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLm5leHQoc3VtbWFyaWVzUGFuZWxDb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlci5zZXRTdW1tYXJpZXNFbmFibGVkKGNvbmZpZy5lbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=