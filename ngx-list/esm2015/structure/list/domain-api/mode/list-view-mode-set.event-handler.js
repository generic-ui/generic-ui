/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewModeRepository } from './list-view.mode.repository';
export class ListViewModeSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} listViewModeRepository
     */
    constructor(listViewModeRepository) {
        super();
        this.listViewModeRepository = listViewModeRepository;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU1yRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsa0JBQW9EOzs7O0lBRXBHLFlBQW9CLHNCQUE4QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURXLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFbEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDOUU7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTEYsc0JBQXNCOzs7Ozs7O0lBUWxCLDZEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxMaXN0Vmlld0lkLCBMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IExpc3RWaWV3TW9kZVNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnTGlzdFZpZXdNb2RlU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5LnNldE1vZGUoZXZlbnQuZ2V0VGhlbWUoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19