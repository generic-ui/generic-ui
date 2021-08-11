/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FabricCords } from '../../common/modal/cords/fabric-cords';
var InlineDialogCords = /** @class */ (function (_super) {
    tslib_1.__extends(InlineDialogCords, _super);
    function InlineDialogCords(invokerElementRef, invokedElementRef, window, placement, inlineDialogOffset) {
        if (inlineDialogOffset === void 0) { inlineDialogOffset = InlineDialogCords.defaultInlineDialogOffset; }
        var _this = _super.call(this, window, invokerElementRef, invokedElementRef, 'gui-inline-dialog-wrapper', placement, inlineDialogOffset) || this;
        _this.invokerElementRef = invokerElementRef;
        _this.invokedElementRef = invokedElementRef;
        _this.window = window;
        _this.placement = placement;
        _this.inlineDialogOffset = inlineDialogOffset;
        return _this;
    }
    InlineDialogCords.defaultInlineDialogOffset = 8;
    return InlineDialogCords;
}(FabricCords));
export { InlineDialogCords };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWRpYWxvZy1jb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvaW5saW5lLWRpYWxvZy1jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUdwRTtJQUF1Qyw2Q0FBVztJQUlqRCwyQkFBb0IsaUJBQTZCLEVBQ3RDLGlCQUE2QixFQUM3QixNQUFjLEVBQ2QsU0FBMkIsRUFDM0Isa0JBQXdFO1FBQXhFLG1DQUFBLEVBQUEscUJBQTZCLGlCQUFpQixDQUFDLHlCQUF5QjtRQUpuRixZQUtDLGtCQUNDLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLDJCQUEyQixFQUMzQixTQUFTLEVBQ1Qsa0JBQWtCLENBQ2xCLFNBQ0Q7UUFibUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFZO1FBQ3RDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtRQUM3QixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFzRDs7SUFTbkYsQ0FBQztJQWZjLDJDQUF5QixHQUFXLENBQUMsQ0FBQztJQWlCdEQsd0JBQUM7Q0FBQSxBQW5CRCxDQUF1QyxXQUFXLEdBbUJqRDtTQW5CWSxpQkFBaUI7Ozs7OztJQUU3Qiw0Q0FBcUQ7Ozs7O0lBRXpDLDhDQUFxQzs7Ozs7SUFDOUMsOENBQXFDOzs7OztJQUNyQyxtQ0FBc0I7Ozs7O0lBQ3RCLHNDQUFtQzs7Ozs7SUFDbkMsK0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljQ29yZHMgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLWNvcmRzJztcbmltcG9ydCB7IEZhYnJpY1BsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9jb3Jkcy9mYWJyaWMtcGxhY2VtZW50JztcblxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0NvcmRzIGV4dGVuZHMgRmFicmljQ29yZHMge1xuXG5cdHByaXZhdGUgc3RhdGljIGRlZmF1bHRJbmxpbmVEaWFsb2dPZmZzZXQ6IG51bWJlciA9IDg7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbnZva2VkRWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSB3aW5kb3c6IFdpbmRvdyxcblx0XHRcdFx0cHJpdmF0ZSBwbGFjZW1lbnQ/OiBGYWJyaWNQbGFjZW1lbnQsXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nT2Zmc2V0OiBudW1iZXIgPSBJbmxpbmVEaWFsb2dDb3Jkcy5kZWZhdWx0SW5saW5lRGlhbG9nT2Zmc2V0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHR3aW5kb3csXG5cdFx0XHRpbnZva2VyRWxlbWVudFJlZixcblx0XHRcdGludm9rZWRFbGVtZW50UmVmLFxuXHRcdFx0J2d1aS1pbmxpbmUtZGlhbG9nLXdyYXBwZXInLFxuXHRcdFx0cGxhY2VtZW50LFxuXHRcdFx0aW5saW5lRGlhbG9nT2Zmc2V0XG5cdFx0KTtcblx0fVxuXG59XG4iXX0=