/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowSelectionMode, GuiRowSelectionType } from '../../../domain-api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../structure/source/domain-api/row-selection';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEgsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRTVIO0lBQUE7SUFnRkEsQ0FBQzs7Ozs7SUE5RUEsOENBQU87Ozs7SUFBUCxVQUFRLFNBQW9DOztZQUV2QyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO1FBRXhDLElBQUksT0FBTyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBRU4sSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFOztvQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFFN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7O29CQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUU3QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFFRixDQUFDOzs7Ozs7SUFFTyxrREFBVzs7Ozs7SUFBbkIsVUFBb0IsSUFBa0M7UUFFckQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFN0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ2IsS0FBSyxRQUFRO29CQUNaLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxLQUFLLFVBQVU7b0JBQ2QsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7YUFBTTtZQUNOLFFBQVEsSUFBSSxFQUFFO2dCQUViLEtBQUssbUJBQW1CLENBQUMsTUFBTTtvQkFDOUIsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLEtBQUssbUJBQW1CLENBQUMsUUFBUTtvQkFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7YUFDbEM7U0FDRDtJQUVGLENBQUM7Ozs7OztJQUVPLGtEQUFXOzs7OztJQUFuQixVQUFvQixJQUFrQztRQUVyRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUU3QixRQUFRLElBQUksRUFBRTtnQkFDYixLQUFLLEtBQUs7b0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFDbEM7b0JBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDN0I7U0FDRDthQUFNO1lBQ04sUUFBUSxJQUFJLEVBQUU7Z0JBRWIsS0FBSyxtQkFBbUIsQ0FBQyxHQUFHO29CQUMzQixPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFFN0IsS0FBSyxtQkFBbUIsQ0FBQyxRQUFRO29CQUNoQyxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQztJQUVGLG1DQUFDO0FBQUQsQ0FBQyxBQWhGRCxJQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd1NlbGVjdGlvbiwgR3VpUm93U2VsZWN0aW9uTW9kZSwgR3VpUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24sIFJvd1NlbGVjdGlvbk1vZGUsIFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvcm93LXNlbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHNlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbik6IFJvd1NlbGVjdGlvbiB7XG5cblx0XHRsZXQgYnVpbGRlciA9IG5ldyBSb3dTZWxlY3Rpb24uQnVpbGRlcigpO1xuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rpb24gPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuIGJ1aWxkZXIud2l0aEVuYWJsZWQoc2VsZWN0aW9uKS5idWlsZCgpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChzZWxlY3Rpb24uZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGJ1aWxkZXIud2l0aEVuYWJsZWQoc2VsZWN0aW9uLmVuYWJsZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLm1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBtb2RlID0gdGhpcy5jb252ZXJ0TW9kZShzZWxlY3Rpb24ubW9kZSk7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoTW9kZShtb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi50eXBlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHRoaXMuY29udmVydFR5cGUoc2VsZWN0aW9uLnR5cGUpO1xuXG5cdFx0XHRcdGJ1aWxkZXIud2l0aFR5cGUodHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBidWlsZGVyLmJ1aWxkKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRNb2RlKG1vZGU6IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvbk1vZGUpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblxuXHRcdGlmICh0eXBlb2YgbW9kZSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ3NpbmdsZSc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0XHRjYXNlICdtdWx0aXBsZSc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlKHR5cGU6IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvblR5cGUpOiBSb3dTZWxlY3Rpb25UeXBlIHtcblxuXHRcdGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3Jvdyc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuUk9XOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==