/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../feature-api/summaries/structure-summaries.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRDtJQUdDLHlDQUFvQixzQ0FBOEUsRUFDdkYseUJBQW9ELEVBQ3BELG1DQUF3RSxFQUN4RSxXQUF3QjtRQUhmLDJDQUFzQyxHQUF0QyxzQ0FBc0MsQ0FBd0M7UUFDdkYsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ25DLENBQUM7Ozs7O0lBRUQsNkNBQUc7Ozs7SUFBSCxVQUFJLE1BQXVCOztZQUVwQixvQkFBb0IsR0FBRyxJQUFJLENBQUMsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV4RixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQVJGLHNDQUFzQztnQkFDdEMseUJBQXlCO2dCQUV6QixtQ0FBbUM7Z0JBQ25DLFdBQVc7O0lBc0JwQixzQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLCtCQUErQjs7Ozs7O0lBRS9CLGlGQUFzRjs7Ozs7SUFDL0Ysb0VBQTREOzs7OztJQUM1RCw4RUFBZ0Y7Ozs7O0lBQ2hGLHNEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLmFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0fVxuXG5cdHNldChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZS5uZXh0KHN1bW1hcmllc1BhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChjb25maWcuZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19