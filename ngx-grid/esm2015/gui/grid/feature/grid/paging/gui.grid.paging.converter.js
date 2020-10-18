/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../../structure/paging/feature/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../core/api/gui.grid.public-api';
export class GuiGridPagingConverter {
    /**
     * @param {?} guiPaging
     * @return {?}
     */
    convert(guiPaging) {
        /** @type {?} */
        let pagingConfig = {};
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
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertDisplay(pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertString(pagingDisplay) {
        /** @type {?} */
        const loweredPaging = pagingDisplay.toLocaleLowerCase();
        switch (loweredPaging) {
            case 'basic':
                return PagingDisplayMode.BASIC;
            case 'advanced':
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    }
    /**
     * @private
     * @param {?} pagingDisplay
     * @return {?}
     */
    convertEnum(pagingDisplay) {
        switch (pagingDisplay) {
            case GuiPagingDisplay.BASIC:
                return PagingDisplayMode.BASIC;
            case GuiPagingDisplay.ADVANCED:
                return PagingDisplayMode.ADVANCED;
            default:
                return PagingDisplayMode.BASIC;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNyRyxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUlwRixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUVsQyxPQUFPLENBQUMsU0FBb0I7O1lBRXZCLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RFLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUVELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDakQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsYUFBd0M7UUFFOUQsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsYUFBcUI7O2NBRXBDLGFBQWEsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7UUFFdkQsUUFBUSxhQUFhLEVBQUU7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssVUFBVTtnQkFDZCxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxhQUErQjtRQUVsRCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7Z0JBQzFCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssZ0JBQWdCLENBQUMsUUFBUTtnQkFDN0IsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFFbkM7Z0JBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7U0FDaEM7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgR3VpUGFnaW5nLCBHdWlQYWdpbmdEaXNwbGF5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aVBhZ2luZzogR3VpUGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aVBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5lbmFibGVkID0gZ3VpUGFnaW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2UgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlID0gZ3VpUGFnaW5nLnBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplID0gZ3VpUGFnaW5nLnBhZ2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VTaXplcyA9IGd1aVBhZ2luZy5wYWdlU2l6ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlclRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID0gZ3VpUGFnaW5nLnBhZ2VyVG9wO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJCb3R0b20gIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlckJvdHRvbSA9IGd1aVBhZ2luZy5wYWdlckJvdHRvbTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLmRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcuZGlzcGxheSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmRpc3BsYXlNb2RlID0gdGhpcy5jb252ZXJ0RGlzcGxheShndWlQYWdpbmcuZGlzcGxheSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydERpc3BsYXkocGFnaW5nRGlzcGxheTogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdGlmICh0eXBlb2YgcGFnaW5nRGlzcGxheSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhwYWdpbmdEaXNwbGF5OiBzdHJpbmcpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkUGFnaW5nID0gcGFnaW5nRGlzcGxheS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUGFnaW5nKSB7XG5cblx0XHRcdGNhc2UgJ2Jhc2ljJzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0XHRjYXNlICdhZHZhbmNlZCc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocGFnaW5nRGlzcGxheTogR3VpUGFnaW5nRGlzcGxheSk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdHN3aXRjaCAocGFnaW5nRGlzcGxheSkge1xuXG5cdFx0XHRjYXNlIEd1aVBhZ2luZ0Rpc3BsYXkuQkFTSUM6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkFEVkFOQ0VEOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxufVxuIl19