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
        this.structureAggregationArchive.set(aggregationPanelConfig);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLM0Q7SUFHQywyQ0FBb0Isd0NBQWtGLEVBQzNGLDJCQUF3RCxFQUN4RCxrQ0FBc0UsRUFDdEUsV0FBd0I7UUFIZiw2Q0FBd0MsR0FBeEMsd0NBQXdDLENBQTBDO1FBQzNGLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUFvQztRQUN0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7O0lBRXZDLCtDQUFHOzs7O0lBQUgsVUFBSSxNQUF5Qjs7WUFFdEIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFNUYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRyxDQUFDOztnQkFmRCxVQUFVOzs7O2dCQVRGLHdDQUF3QztnQkFDeEMsMkJBQTJCO2dCQUUzQixrQ0FBa0M7Z0JBQ2xDLFdBQVc7O0lBc0JwQix3Q0FBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLGlDQUFpQzs7Ozs7O0lBRWpDLHFGQUEwRjs7Ozs7SUFDbkcsd0VBQWdFOzs7OztJQUNoRSwrRUFBOEU7Ozs7O0lBQzlFLHdEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi1jb25maWcnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZTogU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7fVxuXG5cdHNldChjb25maWc6IEFnZ3JlZ2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGlvblBhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlLnNldChhZ2dyZWdhdGlvblBhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZS5zZXRBZ2dyZWdhdGlvbkVuYWJsZWQoY29uZmlnLmVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==