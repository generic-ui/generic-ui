/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagingDisplayMode } from '../../../../structure/paging/feature/mode/paging-display-mode';
export class GuiListPagingConverter {
    /**
     * @param {?} guiListPaging
     * @return {?}
     */
    convert(guiListPaging) {
        /** @type {?} */
        let pagingConfig = {};
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHbEcsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFbEMsT0FBTyxDQUFDLGFBQTRCOztZQUUvQixZQUFZLEdBQWlCLEVBQUU7UUFFbkMsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7U0FDN0M7UUFFRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztTQUN2QztRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1NBQy9DO1FBRUQsSUFBSSxhQUFhLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUM5RSxZQUFZLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDakQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVFLFlBQVksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztTQUMvQzthQUFNO1lBQ04sWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ2xGLFlBQVksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUNyRDtRQUVELFlBQVksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBRW5ELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUxpc3RQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2d1aS5saXN0LmFwaSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aUxpc3RQYWdpbmc6IEd1aUxpc3RQYWdpbmcpOiBQYWdpbmdDb25maWcge1xuXG5cdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aUxpc3RQYWdpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aUxpc3RQYWdpbmcucGFnZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aUxpc3RQYWdpbmcucGFnZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlMaXN0UGFnaW5nLnBhZ2VTaXplcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aUxpc3RQYWdpbmcucGFnZXJUb3A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tO1xuXHRcdH1cblxuXHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG59XG4iXX0=