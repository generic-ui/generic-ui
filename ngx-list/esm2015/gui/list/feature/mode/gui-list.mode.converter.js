/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewMode } from '../../../../structure/list/domain/mode/list-view-mode';
import { GuiListMode } from '../../domain-api/gui.list.api';
export class GuiListModeConverter {
    /**
     * @param {?} mode
     * @return {?}
     */
    convert(mode) {
        if (mode === GuiListMode.LIST) {
            return ListViewMode.LIST;
        }
        else {
            return ListViewMode.CARD;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImd1aS9saXN0L2ZlYXR1cmUvbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUVoQyxPQUFPLENBQUMsSUFBaUI7UUFFeEIsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNOLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IEd1aUxpc3RNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9ndWkubGlzdC5hcGknO1xuXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZGVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQobW9kZTogR3VpTGlzdE1vZGUpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0aWYgKG1vZGUgPT09IEd1aUxpc3RNb2RlLkxJU1QpIHtcblx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdH1cblx0fVxufVxuIl19