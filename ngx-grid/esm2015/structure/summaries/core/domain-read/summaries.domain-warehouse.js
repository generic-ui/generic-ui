/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { Injectable } from '@angular/core';
import { hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import { StructureSummariesConfigArchive } from '../domain/config/structure.summaries-config.archive';
export class SummariesDomainWarehouse extends SummariesWarehouse {
    /**
     * @param {?} summariesEnabledArchive
     * @param {?} structureSummariesArchive
     */
    constructor(summariesEnabledArchive, structureSummariesArchive) {
        super();
        this.summariesEnabledArchive = summariesEnabledArchive;
        this.structureSummariesArchive = structureSummariesArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onEnabled(structureId) {
        return this.summariesEnabledArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onBottomEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((/**
             * @param {?} config
             * @return {?}
             */
            (config) => enabled && config.isBottomEnabled())));
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopEnabled(structureId) {
        return this.onEnabled(structureId)
            .pipe(hermesSwitchMap((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            return this.structureSummariesArchive
                .on(structureId)
                .pipe(hermesMap((/**
             * @param {?} config
             * @return {?}
             */
            (config) => enabled && config.isTopEnabled())));
        })));
    }
}
SummariesDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesDomainWarehouse.ctorParameters = () => [
    { type: SummariesEnabledArchive },
    { type: StructureSummariesConfigArchive }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUl0RyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCOzs7OztJQUUvRCxZQUE2Qix1QkFBZ0QsRUFDekQseUJBQTBEO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBRm9CLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDekQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQztJQUU5RSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxXQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBd0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQ0osZUFBZTs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMseUJBQXlCO2lCQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUNmLElBQUksQ0FDSixTQUFTOzs7O1lBQUMsQ0FBQyxNQUFxQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQ3pGLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBRVIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsV0FBd0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQ0osZUFBZTs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMseUJBQXlCO2lCQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUNmLElBQUksQ0FDSixTQUFTOzs7O1lBQUMsQ0FBQyxNQUFxQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQ3RGLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBckNELFVBQVU7Ozs7WUFSRix1QkFBdUI7WUFLdkIsK0JBQStCOzs7Ozs7O0lBTTNCLDJEQUFpRTs7Ozs7SUFDMUUsNkRBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vZW5hYmxlZC9zdW1tYXJpZXMtZW5hYmxlZC1hcmNoaXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU3VtbWFyaWVzV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0VuYWJsZWRBcmNoaXZlOiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkJvdHRvbUVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMub25FbmFibGVkKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNTd2l0Y2hNYXAoKGVuYWJsZWQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmVcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKGNvbmZpZzogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcpID0+IGVuYWJsZWQgJiYgY29uZmlnLmlzQm90dG9tRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cblx0fVxuXG5cdG9uVG9wRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkVuYWJsZWQoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZW5hYmxlZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4gZW5hYmxlZCAmJiBjb25maWcuaXNUb3BFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=