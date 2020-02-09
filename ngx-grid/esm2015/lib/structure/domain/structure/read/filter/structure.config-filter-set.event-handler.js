/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../command/filter/config/structure.config-filter-set.event';
export class StructureConfigFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureFilterRepository
     */
    constructor(structureFilterRepository) {
        super();
        this.structureFilterRepository = structureFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigFilterSetEventHandler.ctorParameters = () => [
    { type: StructureFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUk5RyxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsa0JBQWtCOzs7O0lBRTNFLFlBQW9CLHlCQUFvRDtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQURXLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFFeEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBb0M7UUFFMUMsSUFBSSxLQUFLLFlBQVksNkJBQTZCLEVBQUU7WUFDbkQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBSkYseUJBQXlCOzs7Ozs7O0lBT3JCLHlFQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvZmlsdGVyL2NvbmZpZy9zdHJ1Y3R1cmUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=