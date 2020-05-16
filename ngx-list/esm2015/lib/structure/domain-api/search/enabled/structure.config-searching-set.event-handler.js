/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
export class StructureConfigSearchingSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} structureSearchingRepository
     */
    constructor(structureSearchingRepository) {
        super();
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructureConfigSearchingSetEvent')) {
            this.structureSearchingRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    }
}
StructureConfigSearchingSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConfigSearchingSetEventHandler.ctorParameters = () => [
    { type: StructureSearchingRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zZWFyY2gvZW5hYmxlZC9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9oRixNQUFNLE9BQU8sdUNBQXdDLFNBQVEsa0JBQWlFOzs7O0lBRTdILFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBdUM7UUFFN0MsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGtDQUFrQyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsNEJBQTRCOzs7Ozs7O0lBU3hCLCtFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9jb25maWcvc3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnk6IFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=