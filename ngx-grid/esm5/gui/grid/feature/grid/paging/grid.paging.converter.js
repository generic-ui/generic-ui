/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../../structure/paging/feature/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../domain-api/grid.api';
var GridPagingConverter = /** @class */ (function () {
    function GridPagingConverter() {
    }
    /**
     * @param {?} guiPaging
     * @return {?}
     */
    GridPagingConverter.prototype.convert = /**
     * @param {?} guiPaging
     * @return {?}
     */
    function (guiPaging) {
        /** @type {?} */
        var pagingConfig = {};
        if (guiPaging.enabled !== undefined && guiPaging.enabled !== null) {
            pagingConfig.enabled = guiPaging.enabled;
        }
        if (guiPaging.page !== undefined && guiPaging.page !== null) {
            pagingConfig.page = guiPaging.page;
        }
        if (guiPaging.pageSize !== undefined && guiPaging.pageSize !== null) {
            pagingConfig.pageSize = guiPaging.pageSize;
        }
        if (guiPaging.pageSizes !== undefined && guiPaging.pageSizes !== null) {
            pagingConfig.pageSizes = guiPaging.pageSizes;
        }
        if (guiPaging.pagerTop !== undefined && guiPaging.pagerTop !== null) {
            pagingConfig.pagerTop = guiPaging.pagerTop;
        }
        if (guiPaging.pagerBottom !== undefined && guiPaging.pagerBottom !== null) {
            pagingConfig.pagerBottom = guiPaging.pagerBottom;
        }
        if (guiPaging.display !== undefined && guiPaging.display !== null) {
            pagingConfig.displayMode = this.convertDisplay(guiPaging.display);
        }
        return pagingConfig;
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GridPagingConverter.prototype.convertDisplay = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GridPagingConverter.prototype.convertString = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        /** @type {?} */
        var loweredPaging = pagingDisplay.toLocaleLowerCase();
        switch (loweredPaging) {
            case 'basic':
                return PagingDisplayMode.BASIC;
            case 'advanced':
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    GridPagingConverter.prototype.convertEnum = /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    function (pagingDisplay) {
        switch (pagingDisplay) {
            case GuiPagingDisplay.BASIC:
                return PagingDisplayMode.BASIC;
            case GuiPagingDisplay.ADVANCED:
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    };
    return GridPagingConverter;
}());
export { GridPagingConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5wYWdpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvcGFnaW5nL2dyaWQucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDckcsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSWpGO0lBQUE7SUE4RUEsQ0FBQzs7Ozs7SUE1RUEscUNBQU87Ozs7SUFBUCxVQUFRLFNBQTBCOztZQUU3QixZQUFZLEdBQWlCLEVBQUU7UUFFbkMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDekM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNuQztRQUVELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sNENBQWM7Ozs7O0lBQXRCLFVBQXVCLGFBQXdDO1FBRTlELElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sMkNBQWE7Ozs7O0lBQXJCLFVBQXNCLGFBQXFCOztZQUVwQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFO1FBRXZELFFBQVEsYUFBYSxFQUFFO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVoQyxLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFFbkM7Z0JBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7Ozs7SUFFTyx5Q0FBVzs7Ozs7SUFBbkIsVUFBb0IsYUFBK0I7UUFFbEQsUUFBUSxhQUFhLEVBQUU7WUFFdEIsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVoQyxLQUFLLGdCQUFnQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0FBQyxBQTlFRCxJQThFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBHdWlQYWdpbmdDb25maWcsIEd1aVBhZ2luZ0Rpc3BsYXkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZFBhZ2luZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChndWlQYWdpbmc6IEd1aVBhZ2luZ0NvbmZpZyk6IFBhZ2luZ0NvbmZpZyB7XG5cblx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcgPSB7fTtcblxuXHRcdGlmIChndWlQYWdpbmcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aVBhZ2luZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aVBhZ2luZy5wYWdlO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemUgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aVBhZ2luZy5wYWdlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlQYWdpbmcucGFnZVNpemVzO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aVBhZ2luZy5wYWdlclRvcDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlQYWdpbmcucGFnZXJCb3R0b207XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmRpc3BsYXkgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IHRoaXMuY29udmVydERpc3BsYXkoZ3VpUGFnaW5nLmRpc3BsYXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYWdpbmdDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnREaXNwbGF5KHBhZ2luZ0Rpc3BsYXk6IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRpZiAodHlwZW9mIHBhZ2luZ0Rpc3BsYXkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShwYWdpbmdEaXNwbGF5KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheTogc3RyaW5nKTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFBhZ2luZyA9IHBhZ2luZ0Rpc3BsYXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFBhZ2luZykge1xuXG5cdFx0XHRjYXNlICdiYXNpYyc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSAnYWR2YW5jZWQnOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXk6IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRzd2l0Y2ggKHBhZ2luZ0Rpc3BsYXkpIHtcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkJBU0lDOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRcdGNhc2UgR3VpUGFnaW5nRGlzcGxheS5BRFZBTkNFRDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==