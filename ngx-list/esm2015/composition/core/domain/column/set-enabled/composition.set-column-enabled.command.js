/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommand } from '../../composition.command';
export class CompositionSetColumnEnabledCommand extends CompositionCommand {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQjs7Ozs7O0lBRXpFLFlBQXFCLGFBQTRCLEVBQzdCLFFBQWtCLEVBQ2xCLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxhQUFhLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQUh2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7SUFkWSwyREFBcUM7Ozs7O0lBQzlDLHNEQUFtQzs7Ozs7SUFDbkMscURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG59XG4iXX0=