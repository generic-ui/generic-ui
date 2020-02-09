/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureAggregationPanelConfigConverter } from './structure.aggregation-panel.config-converter';
import { StructureAggregationArchive } from './structure.aggregation.archive';
import { StructureAggregationCommandService } from '../../../ui-api/structure/aggregation/structure.aggregation.command-service';
import { StructureId } from '../../../domain/structure-id';
var StructureAggregationConfigService = /** @class */ (function () {
    function StructureAggregationConfigService(structureAggregationPanelConfigConverter, structureAggregationArchive, structureAggregationCommandService, structureId) {
        this.structureAggregationPanelConfigConverter = structureAggregationPanelConfigConverter;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureAggregationCommandService = structureAggregationCommandService;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregationConfigService.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var aggregationPanelConfig = this.structureAggregationPanelConfigConverter.convert(config);
        this.structureAggregationArchive.next(aggregationPanelConfig);
        this.structureAggregationCommandService.setAggregationEnabled(config.enabled, this.structureId);
    };
    StructureAggregationConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationConfigService.ctorParameters = function () { return [
        { type: StructureAggregationPanelConfigConverter },
        { type: StructureAggregationArchive },
        { type: StructureAggregationCommandService },
        { type: StructureId }
    ]; };
    return StructureAggregationConfigService;
}());
export { StructureAggregationConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationArchive;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0Q7SUFHQywyQ0FBb0Isd0NBQWtGLEVBQzNGLDJCQUF3RCxFQUN4RCxrQ0FBc0UsRUFDdEUsV0FBd0I7UUFIZiw2Q0FBd0MsR0FBeEMsd0NBQXdDLENBQTBDO1FBQzNGLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUFvQztRQUN0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNuQyxDQUFDOzs7OztJQUVELCtDQUFHOzs7O0lBQUgsVUFBSSxNQUF5Qjs7WUFFdEIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFNUYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRyxDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFSRix3Q0FBd0M7Z0JBQ3hDLDJCQUEyQjtnQkFFM0Isa0NBQWtDO2dCQUNsQyxXQUFXOztJQXNCcEIsd0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxpQ0FBaUM7Ozs7OztJQUVqQyxxRkFBMEY7Ozs7O0lBQ25HLHdFQUFnRTs7Ozs7SUFDaEUsK0VBQThFOzs7OztJQUM5RSx3REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24tY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZTogU3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0fVxuXG5cdHNldChjb25maWc6IEFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGlvblBhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlLm5leHQoYWdncmVnYXRpb25QYW5lbENvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0QWdncmVnYXRpb25FbmFibGVkKGNvbmZpZy5lbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=