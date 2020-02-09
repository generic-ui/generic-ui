/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../../lib/structure/ui/paging/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../ui-api/grid.api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5wYWdpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL3BhZ2luZy9ncmlkLnBhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3BHLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUk3RTtJQUFBO0lBOEVBLENBQUM7Ozs7O0lBNUVBLHFDQUFPOzs7O0lBQVAsVUFBUSxTQUEwQjs7WUFFN0IsWUFBWSxHQUFpQixFQUFFO1FBRW5DLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1RCxZQUFZLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDbkM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNqRDtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixhQUF3QztRQUU5RCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7OztJQUVPLDJDQUFhOzs7OztJQUFyQixVQUFzQixhQUFxQjs7WUFFcEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtRQUV2RCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxVQUFVO2dCQUNkLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8seUNBQVc7Ozs7O0lBQW5CLFVBQW9CLGFBQStCO1FBRWxELFFBQVEsYUFBYSxFQUFFO1lBRXRCLEtBQUssZ0JBQWdCLENBQUMsS0FBSztnQkFDMUIsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRiwwQkFBQztBQUFELENBQUMsQUE5RUQsSUE4RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBHdWlQYWdpbmdDb25maWcsIEd1aVBhZ2luZ0Rpc3BsYXkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aVBhZ2luZzogR3VpUGFnaW5nQ29uZmlnKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aVBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5lbmFibGVkID0gZ3VpUGFnaW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2UgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlID0gZ3VpUGFnaW5nLnBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplID0gZ3VpUGFnaW5nLnBhZ2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplcyA9IGd1aVBhZ2luZy5wYWdlU2l6ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID0gZ3VpUGFnaW5nLnBhZ2VyVG9wO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9IGd1aVBhZ2luZy5wYWdlckJvdHRvbTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcuZGlzcGxheSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmRpc3BsYXlNb2RlID0gdGhpcy5jb252ZXJ0RGlzcGxheShndWlQYWdpbmcuZGlzcGxheSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydERpc3BsYXkocGFnaW5nRGlzcGxheTogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdGlmICh0eXBlb2YgcGFnaW5nRGlzcGxheSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhwYWdpbmdEaXNwbGF5OiBzdHJpbmcpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkUGFnaW5nID0gcGFnaW5nRGlzcGxheS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUGFnaW5nKSB7XG5cblx0XHRcdGNhc2UgJ2Jhc2ljJzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0XHRjYXNlICdhZHZhbmNlZCc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocGFnaW5nRGlzcGxheTogR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdHN3aXRjaCAocGFnaW5nRGlzcGxheSkge1xuXG5cdFx0XHRjYXNlIEd1aVBhZ2luZ0Rpc3BsYXkuQkFTSUM6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkFEVkFOQ0VEOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxufVxuIl19