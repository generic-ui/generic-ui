/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewMode } from '../../../../structure/list/domain/mode/list-view-mode';
import { GuiListMode } from '../../domain-api/gui.list.api';
var GuiListModeConverter = /** @class */ (function () {
    function GuiListModeConverter() {
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    GuiListModeConverter.prototype.convert = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (mode === GuiListMode.LIST) {
            return ListViewMode.LIST;
        }
        else {
            return ListViewMode.CARD;
        }
    };
    return GuiListModeConverter;
}());
export { GuiListModeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImd1aS9saXN0L2ZlYXR1cmUvbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RDtJQUFBO0lBVUEsQ0FBQzs7Ozs7SUFSQSxzQ0FBTzs7OztJQUFQLFVBQVEsSUFBaUI7UUFFeEIsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNOLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFDRiwyQkFBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgR3VpTGlzdE1vZGUgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2d1aS5saXN0LmFwaSc7XG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0TW9kZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChtb2RlOiBHdWlMaXN0TW9kZSk6IExpc3RWaWV3TW9kZSB7XG5cblx0XHRpZiAobW9kZSA9PT0gR3VpTGlzdE1vZGUuTElTVCkge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=