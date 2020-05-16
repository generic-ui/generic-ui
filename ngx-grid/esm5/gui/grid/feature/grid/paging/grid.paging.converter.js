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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5wYWdpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvcGFnaW5nL2dyaWQucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDckcsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0U7SUFBQTtJQThFQSxDQUFDOzs7OztJQTVFQSxxQ0FBTzs7OztJQUFQLFVBQVEsU0FBb0I7O1lBRXZCLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RFLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUVELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDakQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyw0Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsYUFBd0M7UUFFOUQsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7Ozs7SUFFTywyQ0FBYTs7Ozs7SUFBckIsVUFBc0IsYUFBcUI7O1lBRXBDLGFBQWEsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7UUFFdkQsUUFBUSxhQUFhLEVBQUU7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssVUFBVTtnQkFDZCxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVPLHlDQUFXOzs7OztJQUFuQixVQUFvQixhQUErQjtRQUVsRCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7Z0JBQzFCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssZ0JBQWdCLENBQUMsUUFBUTtnQkFDN0IsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFFbkM7Z0JBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IEd1aVBhZ2luZywgR3VpUGFnaW5nRGlzcGxheSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aVBhZ2luZzogR3VpUGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aVBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5lbmFibGVkID0gZ3VpUGFnaW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2UgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlID0gZ3VpUGFnaW5nLnBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplID0gZ3VpUGFnaW5nLnBhZ2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplcyA9IGd1aVBhZ2luZy5wYWdlU2l6ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID0gZ3VpUGFnaW5nLnBhZ2VyVG9wO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9IGd1aVBhZ2luZy5wYWdlckJvdHRvbTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcuZGlzcGxheSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmRpc3BsYXlNb2RlID0gdGhpcy5jb252ZXJ0RGlzcGxheShndWlQYWdpbmcuZGlzcGxheSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydERpc3BsYXkocGFnaW5nRGlzcGxheTogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdGlmICh0eXBlb2YgcGFnaW5nRGlzcGxheSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhwYWdpbmdEaXNwbGF5OiBzdHJpbmcpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkUGFnaW5nID0gcGFnaW5nRGlzcGxheS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUGFnaW5nKSB7XG5cblx0XHRcdGNhc2UgJ2Jhc2ljJzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0XHRjYXNlICdhZHZhbmNlZCc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocGFnaW5nRGlzcGxheTogR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdHN3aXRjaCAocGFnaW5nRGlzcGxheSkge1xuXG5cdFx0XHRjYXNlIEd1aVBhZ2luZ0Rpc3BsYXkuQkFTSUM6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkFEVkFOQ0VEOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxufVxuIl19