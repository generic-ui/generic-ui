/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class CompositionSetColumnEnabledCommand extends Command {
    /**
     * @param {?} compositionId
     * @param {?} columnId
     * @param {?} enabled
     */
    constructor(compositionId, columnId, enabled) {
        super(compositionId, 'CompositionSetColumnEnabledCommand');
        this.compositionId = compositionId;
        this.columnId = columnId;
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    getColumnId() {
        return this.columnId;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /** @type {?} */
    CompositionSetColumnEnabledCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLnNldC1jb2x1bW4tZW5hYmxlZC5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLN0MsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLE9BQU87Ozs7OztJQUU5RCxZQUFxQixhQUE0QixFQUM3QixRQUFrQixFQUNsQixPQUFnQjtRQUNuQyxLQUFLLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFIdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7O0lBZFksMkRBQXFDOzs7OztJQUM5QyxzREFBbUM7Ozs7O0lBQ25DLHFEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19