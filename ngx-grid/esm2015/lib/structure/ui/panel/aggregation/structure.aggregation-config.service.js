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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNM0QsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7OztJQUU3QyxZQUFvQix3Q0FBa0YsRUFDM0YsMkJBQXdELEVBQ3hELGtDQUFzRSxFQUN0RSxXQUF3QjtRQUhmLDZDQUF3QyxHQUF4Qyx3Q0FBd0MsQ0FBMEM7UUFDM0YsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCx1Q0FBa0MsR0FBbEMsa0NBQWtDLENBQW9DO1FBQ3RFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7Ozs7SUFFdkMsR0FBRyxDQUFDLE1BQXlCOztjQUV0QixzQkFBc0IsR0FBRyxJQUFJLENBQUMsd0NBQXdDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUU1RixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7OztZQWZELFVBQVU7Ozs7WUFURix3Q0FBd0M7WUFDeEMsMkJBQTJCO1lBRTNCLGtDQUFrQztZQUNsQyxXQUFXOzs7Ozs7O0lBUVAscUZBQTBGOzs7OztJQUNuRyx3RUFBZ0U7Ozs7O0lBQ2hFLCtFQUE4RTs7Ozs7SUFDOUUsd0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5hcmNoaXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLWNvbmZpZyc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZTogU3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHt9XG5cblx0c2V0KGNvbmZpZzogQWdncmVnYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUubmV4dChhZ2dyZWdhdGlvblBhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZS5zZXRBZ2dyZWdhdGlvbkVuYWJsZWQoY29uZmlnLmVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==