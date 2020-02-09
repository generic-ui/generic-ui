/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureAggregationPanelConfigConverter } from './structure.aggregation-panel.config-converter';
import { StructureAggregationArchive } from './structure.aggregation.archive';
import { StructureAggregationCommandService } from '../../../ui-api/structure/aggregation/structure.aggregation.command-service';
import { StructureId } from '../../../domain/structure-id';
export class StructureAggregationConfigService {
    /**
     * @param {?} structureAggregationPanelConfigConverter
     * @param {?} structureAggregationArchive
     * @param {?} structureAggregationCommandService
     * @param {?} structureId
     */
    constructor(structureAggregationPanelConfigConverter, structureAggregationArchive, structureAggregationCommandService, structureId) {
        this.structureAggregationPanelConfigConverter = structureAggregationPanelConfigConverter;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureAggregationCommandService = structureAggregationCommandService;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        /** @type {?} */
        const aggregationPanelConfig = this.structureAggregationPanelConfigConverter.convert(config);
        this.structureAggregationArchive.next(aggregationPanelConfig);
        this.structureAggregationCommandService.setAggregationEnabled(config.enabled, this.structureId);
    }
}
StructureAggregationConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregationConfigService.ctorParameters = () => [
    { type: StructureAggregationPanelConfigConverter },
    { type: StructureAggregationArchive },
    { type: StructureAggregationCommandService },
    { type: StructureId }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLM0QsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7OztJQUU3QyxZQUFvQix3Q0FBa0YsRUFDM0YsMkJBQXdELEVBQ3hELGtDQUFzRSxFQUN0RSxXQUF3QjtRQUhmLDZDQUF3QyxHQUF4Qyx3Q0FBd0MsQ0FBMEM7UUFDM0YsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCx1Q0FBa0MsR0FBbEMsa0NBQWtDLENBQW9DO1FBQ3RFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ25DLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE1BQXlCOztjQUV0QixzQkFBc0IsR0FBRyxJQUFJLENBQUMsd0NBQXdDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUU1RixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBUkYsd0NBQXdDO1lBQ3hDLDJCQUEyQjtZQUUzQixrQ0FBa0M7WUFDbEMsV0FBVzs7Ozs7OztJQU9QLHFGQUEwRjs7Ozs7SUFDbkcsd0VBQWdFOzs7OztJQUNoRSwrRUFBOEU7Ozs7O0lBQzlFLHdEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlcjogU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmU6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHR9XG5cblx0c2V0KGNvbmZpZzogQWdncmVnYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUubmV4dChhZ2dyZWdhdGlvblBhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZS5zZXRBZ2dyZWdhdGlvbkVuYWJsZWQoY29uZmlnLmVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==