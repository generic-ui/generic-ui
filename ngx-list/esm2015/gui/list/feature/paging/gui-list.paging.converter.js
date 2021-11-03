import { PagingDisplayMode } from '../../../../structure/paging/feature/mode/paging-display-mode';
export class GuiListPagingConverter {
    convert(guiListPaging) {
        const pagingConfig = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUdsRyxNQUFNLE9BQU8sc0JBQXNCO0lBRWxDLE9BQU8sQ0FBQyxhQUE0QjtRQUVuQyxNQUFNLFlBQVksR0FBaUIsRUFBRSxDQUFDO1FBRXRDLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDdkM7UUFFRCxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVFLFlBQVksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztTQUMvQztRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDOUUsWUFBWSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1RSxZQUFZLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDL0M7YUFBTTtZQUNOLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNsRixZQUFZLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDckQ7UUFFRCxZQUFZLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUVuRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlMaXN0UGFnaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcblxuXG5leHBvcnQgY2xhc3MgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChndWlMaXN0UGFnaW5nOiBHdWlMaXN0UGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGNvbnN0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aUxpc3RQYWdpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aUxpc3RQYWdpbmcucGFnZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aUxpc3RQYWdpbmcucGFnZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlMaXN0UGFnaW5nLnBhZ2VTaXplcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpTGlzdFBhZ2luZy5wYWdlclRvcCAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aUxpc3RQYWdpbmcucGFnZXJUb3A7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tO1xuXHRcdH1cblxuXHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0cmV0dXJuIHBhZ2luZ0NvbmZpZztcblx0fVxuXG59XG4iXX0=