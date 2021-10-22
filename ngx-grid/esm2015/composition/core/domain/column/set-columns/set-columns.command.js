/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommand } from '../../composition.command';
export class SetColumnsCommand extends CompositionCommand {
    /**
     * @param {?} compositionId
     * @param {?} columns
     */
    constructor(compositionId, columns) {
        super(compositionId, 'SetColumnsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.columns;
    }
}
if (false) {
    /** @type {?} */
    SetColumnsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommand.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7Ozs7O0lBRXhELFlBQXFCLGFBQTRCLEVBQzdCLE9BQTRCO1FBQy9DLEtBQUssQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUZ0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUVoRCxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQ7OztJQVRZLDBDQUFxQzs7Ozs7SUFDOUMsb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmQgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRDb2x1bW5zQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFyYW1zKCk6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxufVxuIl19