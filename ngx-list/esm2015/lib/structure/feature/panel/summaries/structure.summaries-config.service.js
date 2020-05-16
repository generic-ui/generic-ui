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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7O0lBRTNDLFlBQW9CLHNDQUE4RSxFQUN2Rix5QkFBb0QsRUFDcEQsbUNBQXdFLEVBQ3hFLFdBQXdCO1FBSGYsMkNBQXNDLEdBQXRDLHNDQUFzQyxDQUF3QztRQUN2Riw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsTUFBdUI7O2NBRXBCLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsbUNBQW1DLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFSRixzQ0FBc0M7WUFDdEMseUJBQXlCO1lBRXpCLG1DQUFtQztZQUNuQyxXQUFXOzs7Ozs7O0lBT1AsaUZBQXNGOzs7OztJQUMvRixvRUFBNEQ7Ozs7O0lBQzVELDhFQUFnRjs7Ozs7SUFDaEYsc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0fVxuXG5cdHNldChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc3VtbWFyaWVzUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZS5uZXh0KHN1bW1hcmllc1BhbmVsQ29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29tbWFuZERpc3BhdGNoZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChjb25maWcuZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19