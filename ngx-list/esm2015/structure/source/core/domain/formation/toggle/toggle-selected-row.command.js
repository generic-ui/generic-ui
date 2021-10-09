/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../../core/domain/structure.command';
export class ToggleSelectedRowCommand extends StructureCommand {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVoRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7Ozs7SUFFN0QsWUFBWSxXQUF3QixFQUNoQixXQUFtQixFQUNuQixJQUF5QjtRQUM1QyxLQUFLLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFGNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBcUI7SUFFN0MsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7Ozs7SUFiRywrQ0FBb0M7Ozs7O0lBQ3BDLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvdzogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1RvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3coKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcblx0fVxuXG5cdGdldFR5cGUoKTogUm93U2VsZWN0VG9nZ2xlVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG59XG4iXX0=