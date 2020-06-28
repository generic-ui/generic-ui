/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewMode } from '../../../../structure/list/domain/mode/list-view-mode';
import { GuiListMode } from '../../domain-api/gui.list.public-api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImd1aS9saXN0L2ZlYXR1cmUvbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVuRTtJQUFBO0lBVUEsQ0FBQzs7Ozs7SUFSQSxzQ0FBTzs7OztJQUFQLFVBQVEsSUFBaUI7UUFFeEIsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNOLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFDRiwyQkFBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgR3VpTGlzdE1vZGUgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZGVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQobW9kZTogR3VpTGlzdE1vZGUpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0aWYgKG1vZGUgPT09IEd1aUxpc3RNb2RlLkxJU1QpIHtcblx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdH1cblx0fVxufVxuIl19