/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class ToggleSelectedRowCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @param {?} type
     */
    constructor(structureId, selectedRow, type) {
        super(structureId, 'ToggleSelectedRowCommand');
        this.selectedRow = selectedRow;
        this.type = type;
    }
    /**
     * @return {?}
     */
    getSelectedRow() {
        return this.selectedRow;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommand.prototype.selectedRow;
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommand.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9mb3JtYXRpb24vdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzdDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxPQUFPOzs7Ozs7SUFFcEQsWUFBWSxXQUF3QixFQUNoQixXQUFtQixFQUNuQixJQUF5QjtRQUM1QyxLQUFLLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFGNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBcUI7SUFFN0MsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7Ozs7SUFiRywrQ0FBb0M7Ozs7O0lBQ3BDLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvdzogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1RvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3coKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcblx0fVxuXG5cdGdldFR5cGUoKTogUm93U2VsZWN0VG9nZ2xlVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG59XG4iXX0=