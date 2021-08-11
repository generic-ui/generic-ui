/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FabricCords } from '../../common/modal/cords/fabric-cords';
export class InlineDialogCords extends FabricCords {
    /**
     * @param {?} invokerElementRef
     * @param {?} invokedElementRef
     * @param {?} window
     * @param {?=} placement
     * @param {?=} inlineDialogOffset
     */
    constructor(invokerElementRef, invokedElementRef, window, placement, inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset) {
        super(window, invokerElementRef, invokedElementRef, 'gui-inline-dialog-wrapper', placement, inlineDialogOffset);
        this.invokerElementRef = invokerElementRef;
        this.invokedElementRef = invokedElementRef;
        this.window = window;
        this.placement = placement;
        this.inlineDialogOffset = inlineDialogOffset;
    }
}
InlineDialogCords.defaultInlineDialogOffset = 8;
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.defaultInlineDialogOffset;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.invokerElementRef;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.invokedElementRef;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.window;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.inlineDialogOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3BFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxXQUFXOzs7Ozs7OztJQUlqRCxZQUFvQixpQkFBNkIsRUFDdEMsaUJBQTZCLEVBQzdCLE1BQWMsRUFDZCxTQUEyQixFQUMzQixxQkFBNkIsaUJBQWlCLENBQUMseUJBQXlCO1FBQ2xGLEtBQUssQ0FDSixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQiwyQkFBMkIsRUFDM0IsU0FBUyxFQUNULGtCQUFrQixDQUNsQixDQUFDO1FBWmlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtRQUN0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0Q7SUFTbkYsQ0FBQzs7QUFmYywyQ0FBeUIsR0FBVyxDQUFDLENBQUM7Ozs7OztJQUFyRCw0Q0FBcUQ7Ozs7O0lBRXpDLDhDQUFxQzs7Ozs7SUFDOUMsOENBQXFDOzs7OztJQUNyQyxtQ0FBc0I7Ozs7O0lBQ3RCLHNDQUFtQzs7Ozs7SUFDbkMsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljQ29yZHMgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLWNvcmRzJztcbmltcG9ydCB7IEZhYnJpY1BsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9jb3Jkcy9mYWJyaWMtcGxhY2VtZW50JztcblxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0NvcmRzIGV4dGVuZHMgRmFicmljQ29yZHMge1xuXG5cdHByaXZhdGUgc3RhdGljIGRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbnZva2VkRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSB3aW5kb3c6IFdpbmRvdyxcblx0XHRcdFx0cHJpdmF0ZSBwbGFjZW1lbnQ/OiBGYWJyaWNQbGFjZW1lbnQsXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nT2Zmc2V0OiBudW1iZXIgPSBJbmxpbmVEaWFsb2dDb3Jkcy5kZWZhdWx0SW5saW5lRGlhbG9nT2Zmc2V0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHR3aW5kb3csXG5cdFx0XHRpbnZva2VyRWxlbWVudFJlZixcblx0XHRcdGludm9rZWRFbGVtZW50UmVmLFxuXHRcdFx0J2d1aS1pbmxpbmUtZGlhbG9nLXdyYXBwZXInLFxuXHRcdFx0cGxhY2VtZW50LFxuXHRcdFx0aW5saW5lRGlhbG9nT2Zmc2V0XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=