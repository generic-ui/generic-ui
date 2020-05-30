/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../../domain/structure/filter/config/structure.config-filter-set.event';
var StructureConfigFilterSetEventHandler = /** @class */ (function () {
    function StructureConfigFilterSetEventHandler(structureFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @return {?}
     */
    StructureConfigFilterSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureConfigFilterSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureConfigFilterSetEvent')) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureFilterRepository }
    ]; };
    return StructureConfigFilterSetEventHandler;
}());
export { StructureConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9maWx0ZXIvcmVhZC9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUkxSDtJQUdDLDhDQUFvQix5QkFBb0Q7UUFBcEQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUN4RSxDQUFDOzs7O0lBRUQsdURBQVE7OztJQUFSO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELHFEQUFNOzs7O0lBQU4sVUFBTyxLQUFvQztRQUUxQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLHlCQUF5Qjs7SUF1QmxDLDJDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksb0NBQW9DOzs7Ozs7SUFFcEMseUVBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=