/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetConfigFilterCommand } from '../../domain/structure/filter/config/structure.set-config-filter.command';
import { StructureToggleFilterCommand } from '../../domain/structure/filter/toggle/structure.toggle-filter.command';
export class StructureFilterCommandDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setFilteringEnabled(config, structureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigFilterCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    addFilter(fieldId, externalFieldId, filterValue, structureId) {
        this.commandDispatcher.dispatch(new StructureToggleFilterCommand(structureId, fieldId, externalFieldId, filterValue));
    }
}
StructureFilterCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFilterCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUUzSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUlwSCxNQUFNLE9BQU8sZ0NBQWdDOzs7O0lBRTVDLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWdCLEVBQUUsZUFBdUIsRUFBRSxXQUFtQixFQUFFLFdBQXdCO1FBQ2pHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7OztZQVpELFVBQVU7Ozs7WUFURixpQkFBaUI7Ozs7Ozs7SUFZYiw2REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmllbGRJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCBleHRlcm5hbEZpZWxkSWQsIGZpbHRlclZhbHVlKSk7XG5cdH1cblxufVxuIl19