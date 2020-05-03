/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class SetColumnsCommand extends Command {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzdDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxPQUFPOzs7OztJQUU3QyxZQUFxQixhQUE0QixFQUM3QixPQUE0QjtRQUMvQyxLQUFLLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFGdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFFaEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7SUFUWSwwQ0FBcUM7Ozs7O0lBQzlDLG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb2x1bW5zQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRDb2x1bW5zQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFyYW1zKCk6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxufVxuIl19