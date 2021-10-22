/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { Injectable } from '@angular/core';
import { hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import { StructureSummariesConfigArchive } from '../domain/config/structure.summaries-config.archive';
var SummariesDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesDomainWarehouse, _super);
    function SummariesDomainWarehouse(summariesEnabledArchive, structureSummariesArchive) {
        var _this = _super.call(this) || this;
        _this.summariesEnabledArchive = summariesEnabledArchive;
        _this.structureSummariesArchive = structureSummariesArchive;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainWarehouse.prototype.onEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.summariesEnabledArchive.on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainWarehouse.prototype.onBottomEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            return _this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return enabled && config.isBottomEnabled(); })));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainWarehouse.prototype.onTopEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            return _this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return enabled && config.isTopEnabled(); })));
        })));
    };
    SummariesDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesDomainWarehouse.ctorParameters = function () { return [
        { type: SummariesEnabledArchive },
        { type: StructureSummariesConfigArchive }
    ]; };
    return SummariesDomainWarehouse;
}(SummariesWarehouse));
export { SummariesDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainWarehouse.prototype.summariesEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    SummariesDomainWarehouse.prototype.structureSummariesArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHdEc7SUFDOEMsb0RBQWtCO0lBRS9ELGtDQUE2Qix1QkFBZ0QsRUFDekQseUJBQTBEO1FBRDlFLFlBRUMsaUJBQU8sU0FDUDtRQUg0Qiw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3pELCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUM7O0lBRTlFLENBQUM7Ozs7O0lBRUQsNENBQVM7Ozs7SUFBVCxVQUFVLFdBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELGtEQUFlOzs7O0lBQWYsVUFBZ0IsV0FBd0I7UUFBeEMsaUJBWUM7UUFYQSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixlQUFlOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3ZCLE9BQU8sS0FBSSxDQUFDLHlCQUF5QjtpQkFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDZixJQUFJLENBQ0osU0FBUzs7OztZQUFDLFVBQUMsTUFBcUMsSUFBSyxPQUFBLE9BQU8sSUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQW5DLENBQW1DLEVBQUMsQ0FDekYsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFFUixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxXQUF3QjtRQUFyQyxpQkFXQztRQVZBLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLGVBQWU7Ozs7UUFBQyxVQUFDLE9BQU87WUFDdkIsT0FBTyxLQUFJLENBQUMseUJBQXlCO2lCQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUNmLElBQUksQ0FDSixTQUFTOzs7O1lBQUMsVUFBQyxNQUFxQyxJQUFLLE9BQUEsT0FBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBaEMsQ0FBZ0MsRUFBQyxDQUN0RixDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQXJDRCxVQUFVOzs7O2dCQVJGLHVCQUF1QjtnQkFLdkIsK0JBQStCOztJQTBDeEMsK0JBQUM7Q0FBQSxBQXZDRCxDQUM4QyxrQkFBa0IsR0FzQy9EO1NBdENZLHdCQUF3Qjs7Ozs7O0lBRXhCLDJEQUFpRTs7Ozs7SUFDMUUsNkRBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vZW5hYmxlZC9zdW1tYXJpZXMtZW5hYmxlZC1hcmNoaXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU3VtbWFyaWVzV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0VuYWJsZWRBcmNoaXZlOiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkJvdHRvbUVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMub25FbmFibGVkKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNTd2l0Y2hNYXAoKGVuYWJsZWQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmVcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKGNvbmZpZzogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcpID0+IGVuYWJsZWQgJiYgY29uZmlnLmlzQm90dG9tRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cblx0fVxuXG5cdG9uVG9wRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkVuYWJsZWQoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZW5hYmxlZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4gZW5hYmxlZCAmJiBjb25maWcuaXNUb3BFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=