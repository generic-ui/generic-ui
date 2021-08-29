/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../structure/paging/feature/mode/paging-display-mode';
var GuiListPagingConverter = /** @class */ (function () {
    function GuiListPagingConverter() {
    }
    /**
     * @param {?} guiListPaging
     * @return {?}
     */
    GuiListPagingConverter.prototype.convert = /**
     * @param {?} guiListPaging
     * @return {?}
     */
    function (guiListPaging) {
        /** @type {?} */
        var pagingConfig = {};
        if (guiListPaging.enabled !== undefined && guiListPaging.enabled !== null) {
            pagingConfig.enabled = guiListPaging.enabled;
        }
        if (guiListPaging.page !== undefined && guiListPaging.page !== null) {
            pagingConfig.page = guiListPaging.page;
        }
        if (guiListPaging.pageSize !== undefined && guiListPaging.pageSize !== null) {
            pagingConfig.pageSize = guiListPaging.pageSize;
        }
        if (guiListPaging.pageSizes !== undefined && guiListPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiListPaging.pageSizes;
        }
        if (guiListPaging.pagerTop !== undefined && guiListPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiListPaging.pagerTop;
        }
        else {
            pagingConfig.pagerTop = true;
        }
        if (guiListPaging.pagerBottom !== undefined && guiListPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiListPaging.pagerBottom;
        }
        pagingConfig.displayMode = PagingDisplayMode.BASIC;
        return pagingConfig;
    };
    return GuiListPagingConverter;
}());
export { GuiListPagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHbEc7SUFBQTtJQXFDQSxDQUFDOzs7OztJQW5DQSx3Q0FBTzs7OztJQUFQLFVBQVEsYUFBNEI7O1lBRTdCLFlBQVksR0FBaUIsRUFBRTtRQUVyQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUM3QztRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1RSxZQUFZLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDL0M7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzlFLFlBQVksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNqRDtRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1NBQy9DO2FBQU07WUFDTixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUVELElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDbEYsWUFBWSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3JEO1FBRUQsWUFBWSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFFbkQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUxpc3RQYWdpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aUxpc3RQYWdpbmc6IEd1aUxpc3RQYWdpbmcpOiBQYWdpbmdDb25maWcge1xuXG5cdFx0Y29uc3QgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcgPSB7fTtcblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5lbmFibGVkID0gZ3VpTGlzdFBhZ2luZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2UgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2UgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlID0gZ3VpTGlzdFBhZ2luZy5wYWdlO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VTaXplICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplID0gZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VTaXplcyAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplcyA9IGd1aUxpc3RQYWdpbmcucGFnZVNpemVzO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlclRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID0gZ3VpTGlzdFBhZ2luZy5wYWdlclRvcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZXJCb3R0b20gIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9IGd1aUxpc3RQYWdpbmcucGFnZXJCb3R0b207XG5cdFx0fVxuXG5cdFx0cGFnaW5nQ29uZmlnLmRpc3BsYXlNb2RlID0gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRyZXR1cm4gcGFnaW5nQ29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==