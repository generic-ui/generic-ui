/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewModeRepository } from './list-view.mode.repository';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
export class ListViewModeSetEventHandler {
    /**
     * @param {?} listViewModeRepository
     */
    constructor(listViewModeRepository) {
        this.listViewModeRepository = listViewModeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ListViewModeSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ListViewModeSetEvent')) {
            this.listViewModeRepository.setMode(event.getTheme(), event.getAggregateId());
        }
    }
}
ListViewModeSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewModeSetEventHandler.ctorParameters = () => [
    { type: ListViewModeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEventHandler.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUlsRixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXZDLFlBQW9CLHNCQUE4QztRQUE5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ2xFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUEyQjtRQUVqQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUM5RTtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYsc0JBQXNCOzs7Ozs7O0lBUWxCLDZEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxMaXN0Vmlld0lkLCBMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogVHlwZTxMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBMaXN0Vmlld01vZGVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdNb2RlU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld01vZGVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkuc2V0TW9kZShldmVudC5nZXRUaGVtZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=