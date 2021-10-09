/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { SummariesCommandInvoker } from '../core/api/summaries.command-invoker';
import { StructureId } from '../../core/api/structure.id';
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
        { type: SummariesCommandInvoker },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9mZWF0dXJlL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSTFEO0lBR0MseUNBQW9CLHNDQUE4RSxFQUN2Rix5QkFBb0QsRUFDcEQsbUNBQTRELEVBQzVELFdBQXdCO1FBSGYsMkNBQXNDLEdBQXRDLHNDQUFzQyxDQUF3QztRQUN2Riw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBeUI7UUFDNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw2Q0FBRzs7OztJQUFILFVBQUksTUFBdUI7O1lBRXBCLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsbUNBQW1DLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBUkYsc0NBQXNDO2dCQUN0Qyx5QkFBeUI7Z0JBRXpCLHVCQUF1QjtnQkFDdkIsV0FBVzs7SUFzQnBCLHNDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksK0JBQStCOzs7Ozs7SUFFL0IsaUZBQXNGOzs7OztJQUMvRixvRUFBNEQ7Ozs7O0lBQzVELDhFQUFvRTs7Ozs7SUFDcEUsc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi9jb3JlL2FwaS9zdW1tYXJpZXMtY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcjogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZTogU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcjogU3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdH1cblxuXHRzZXQoY29uZmlnOiBTdW1tYXJpZXNDb25maWcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1BhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlci5jb252ZXJ0KGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUubmV4dChzdW1tYXJpZXNQYW5lbENvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLnNldFN1bW1hcmllc0VuYWJsZWQoY29uZmlnLmVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==