/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../feature-api/summaries/structure-summaries.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7O0lBRTNDLFlBQW9CLHNDQUE4RSxFQUN2Rix5QkFBb0QsRUFDcEQsbUNBQXdFLEVBQ3hFLFdBQXdCO1FBSGYsMkNBQXNDLEdBQXRDLHNDQUFzQyxDQUF3QztRQUN2Riw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsTUFBdUI7O2NBRXBCLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsbUNBQW1DLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFSRixzQ0FBc0M7WUFDdEMseUJBQXlCO1lBRXpCLG1DQUFtQztZQUNuQyxXQUFXOzs7Ozs7O0lBT1AsaUZBQXNGOzs7OztJQUMvRixvRUFBNEQ7Ozs7O0lBQzVELDhFQUFnRjs7Ozs7SUFDaEYsc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9zdW1tYXJpZXMvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHR9XG5cblx0c2V0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBzdW1tYXJpZXNQYW5lbENvbmZpZyA9IHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLm5leHQoc3VtbWFyaWVzUGFuZWxDb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlci5zZXRTdW1tYXJpZXNFbmFibGVkKGNvbmZpZy5lbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=