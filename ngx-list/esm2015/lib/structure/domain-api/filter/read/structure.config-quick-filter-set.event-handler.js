/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
export class StructureConfigQuickFilterSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureQuickFilterRepository
     */
    constructor(structureQuickFilterRepository) {
        super();
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureConfigQuickFilterSetEvent')) {
            this.structureQuickFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigQuickFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigQuickFilterSetEventHandler.ctorParameters = () => [
    { type: StructureQuickFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9maWx0ZXIvcmVhZC9zdHJ1Y3R1cmUuY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU1yRixNQUFNLE9BQU8seUNBQTBDLFNBQVEsa0JBQW1FOzs7O0lBRWpJLFlBQW9CLDhCQUE4RDtRQUNqRixLQUFLLEVBQUUsQ0FBQztRQURXLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFFbEYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBeUM7UUFFL0MsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDM0Y7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTEYsOEJBQThCOzs7Ozs7O0lBUTFCLG1GQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmdldEVuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19