/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class ListViewModeSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} mode
     */
    constructor(schemaId, mode) {
        super(schemaId, 'ListViewModeSetEvent');
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.mode;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsV0FBdUI7Ozs7O0lBRWhFLFlBQVksUUFBb0IsRUFDWixJQUFrQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFEckIsU0FBSSxHQUFKLElBQUksQ0FBYztJQUV0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBQ0Q7Ozs7OztJQVBHLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlJztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogTGlzdFZpZXdNb2RlKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdMaXN0Vmlld01vZGVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogTGlzdFZpZXdNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG59XG4iXX0=