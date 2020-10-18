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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHbEc7SUFBQTtJQXFDQSxDQUFDOzs7OztJQW5DQSx3Q0FBTzs7OztJQUFQLFVBQVEsYUFBNEI7O1lBRS9CLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUM3QztRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1RSxZQUFZLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDL0M7UUFFRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzlFLFlBQVksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNqRDtRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1NBQy9DO2FBQU07WUFDTixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUVELElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDbEYsWUFBWSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3JEO1FBRUQsWUFBWSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFFbkQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUxpc3RQYWdpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aUxpc3RQYWdpbmc6IEd1aUxpc3RQYWdpbmcpOiBQYWdpbmdDb25maWcge1xuXG5cdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aUxpc3RQYWdpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aUxpc3RQYWdpbmcucGFnZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aUxpc3RQYWdpbmcucGFnZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlMaXN0UGFnaW5nLnBhZ2VTaXplcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aUxpc3RQYWdpbmcucGFnZXJUb3A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tO1xuXHRcdH1cblxuXHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG59XG4iXX0=