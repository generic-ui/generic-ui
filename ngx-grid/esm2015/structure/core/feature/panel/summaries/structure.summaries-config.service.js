/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../domain-api/summaries/structure-summaries.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
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
    { type: StructureSummariesCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLM0QsTUFBTSxPQUFPLCtCQUErQjs7Ozs7OztJQUUzQyxZQUFvQixzQ0FBOEUsRUFDdkYseUJBQW9ELEVBQ3BELG1DQUF3RSxFQUN4RSxXQUF3QjtRQUhmLDJDQUFzQyxHQUF0QyxzQ0FBc0MsQ0FBd0M7UUFDdkYsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ25DLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE1BQXVCOztjQUVwQixvQkFBb0IsR0FBRyxJQUFJLENBQUMsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV4RixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBUkYsc0NBQXNDO1lBQ3RDLHlCQUF5QjtZQUV6QixtQ0FBbUM7WUFDbkMsV0FBVzs7Ozs7OztJQU9QLGlGQUFzRjs7Ozs7SUFDL0Ysb0VBQTREOzs7OztJQUM1RCw4RUFBZ0Y7Ozs7O0lBQ2hGLHNEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLmFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N1bW1hcmllcy9zdW1tYXJpZXMtY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcjogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZTogU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdH1cblxuXHRzZXQoY29uZmlnOiBTdW1tYXJpZXNDb25maWcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1BhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlci5jb252ZXJ0KGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUubmV4dChzdW1tYXJpZXNQYW5lbENvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLnNldFN1bW1hcmllc0VuYWJsZWQoY29uZmlnLmVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==