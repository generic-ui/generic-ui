/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowSelectionMode, GuiRowSelectionType } from '../../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../structure/source/core/api/row-selection';
var GuiGridRowSelectionConverter = /** @class */ (function () {
    function GuiGridRowSelectionConverter() {
    }
    /**
     * @param {?} selection
     * @return {?}
     */
    GuiGridRowSelectionConverter.prototype.convert = /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        /** @type {?} */
        var builder = new RowSelection.Builder();
        if (typeof selection === 'boolean') {
            return builder.withEnabled(selection).build();
        }
        else {
            if (selection.enabled !== undefined) {
                builder.withEnabled(selection.enabled);
            }
            if (selection.mode !== undefined) {
                /** @type {?} */
                var mode = this.convertMode(selection.mode);
                builder.withMode(mode);
            }
            if (selection.type !== undefined) {
                /** @type {?} */
                var type = this.convertType(selection.type);
                builder.withType(type);
            }
            return builder.build();
        }
    };
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    GuiGridRowSelectionConverter.prototype.convertMode = /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (typeof mode === 'string') {
            switch (mode) {
                case 'single':
                    return RowSelectionMode.SINGLE;
                case 'multiple':
                    return RowSelectionMode.MULTIPLE;
                default:
                    return RowSelectionMode.SINGLE;
            }
        }
        else {
            switch (mode) {
                case GuiRowSelectionMode.SINGLE:
                    return RowSelectionMode.SINGLE;
                case GuiRowSelectionMode.MULTIPLE:
                    return RowSelectionMode.MULTIPLE;
            }
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GuiGridRowSelectionConverter.prototype.convertType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (typeof type === 'string') {
            switch (type) {
                case 'row':
                    return RowSelectionType.ROW;
                case 'checkbox':
                    return RowSelectionType.CHECKBOX;
                default:
                    return RowSelectionType.ROW;
            }
        }
        else {
            switch (type) {
                case GuiRowSelectionType.ROW:
                    return RowSelectionType.ROW;
                case GuiRowSelectionType.CHECKBOX:
                    return RowSelectionType.CHECKBOX;
            }
        }
    };
    return GuiGridRowSelectionConverter;
}());
export { GuiGridRowSelectionConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEgsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTFIO0lBQUE7SUFnRkEsQ0FBQzs7Ozs7SUE5RUEsOENBQU87Ozs7SUFBUCxVQUFRLFNBQW9DOztZQUV2QyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO1FBRXhDLElBQUksT0FBTyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBRU4sSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFOztvQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFFN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7O29CQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUU3QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFFRixDQUFDOzs7Ozs7SUFFTyxrREFBVzs7Ozs7SUFBbkIsVUFBb0IsSUFBa0M7UUFFckQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFN0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ2IsS0FBSyxRQUFRO29CQUNaLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxLQUFLLFVBQVU7b0JBQ2QsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7YUFBTTtZQUNOLFFBQVEsSUFBSSxFQUFFO2dCQUViLEtBQUssbUJBQW1CLENBQUMsTUFBTTtvQkFDOUIsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLEtBQUssbUJBQW1CLENBQUMsUUFBUTtvQkFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7YUFDbEM7U0FDRDtJQUVGLENBQUM7Ozs7OztJQUVPLGtEQUFXOzs7OztJQUFuQixVQUFvQixJQUFrQztRQUVyRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUU3QixRQUFRLElBQUksRUFBRTtnQkFDYixLQUFLLEtBQUs7b0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFDbEM7b0JBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDN0I7U0FDRDthQUFNO1lBQ04sUUFBUSxJQUFJLEVBQUU7Z0JBRWIsS0FBSyxtQkFBbUIsQ0FBQyxHQUFHO29CQUMzQixPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFFN0IsS0FBSyxtQkFBbUIsQ0FBQyxRQUFRO29CQUNoQyxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUVGLG1DQUFDO0FBQUQsQ0FBQyxBQWhGRCxJQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd1NlbGVjdGlvbiwgR3VpUm93U2VsZWN0aW9uTW9kZSwgR3VpUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uLCBSb3dTZWxlY3Rpb25Nb2RlLCBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc2VsZWN0aW9uOiBib29sZWFuIHwgR3VpUm93U2VsZWN0aW9uKTogUm93U2VsZWN0aW9uIHtcblxuXHRcdGxldCBidWlsZGVyID0gbmV3IFJvd1NlbGVjdGlvbi5CdWlsZGVyKCk7XG5cblx0XHRpZiAodHlwZW9mIHNlbGVjdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gYnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24pLmJ1aWxkKCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24uZW5hYmxlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24ubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGUgPSB0aGlzLmNvbnZlcnRNb2RlKHNlbGVjdGlvbi5tb2RlKTtcblxuXHRcdFx0XHRidWlsZGVyLndpdGhNb2RlKG1vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gdGhpcy5jb252ZXJ0VHlwZShzZWxlY3Rpb24udHlwZSk7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoVHlwZSh0eXBlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydE1vZGUobW9kZTogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBtb2RlID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnc2luZ2xlJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cdFx0XHRcdGNhc2UgJ211bHRpcGxlJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGUodHlwZTogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uVHlwZSk6IFJvd1NlbGVjdGlvblR5cGUge1xuXG5cdFx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAncm93Jzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5ST1c6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19