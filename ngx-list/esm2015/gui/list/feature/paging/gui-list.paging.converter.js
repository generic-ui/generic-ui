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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUdsRyxNQUFNLE9BQU8sc0JBQXNCO0lBRWxDLE9BQU8sQ0FBQyxhQUE0QjtRQUVuQyxNQUFNLFlBQVksR0FBaUIsRUFBRSxDQUFDO1FBRXRDLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDdkM7UUFFRCxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVFLFlBQVksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztTQUMvQztRQUVELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDOUUsWUFBWSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1RSxZQUFZLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDL0M7YUFBTTtZQUNOLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNsRixZQUFZLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDckQ7UUFFRCxZQUFZLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUVuRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlMaXN0UGFnaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvYXBpL2NvbmZpZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZ3VpTGlzdFBhZ2luZzogR3VpTGlzdFBhZ2luZyk6IFBhZ2luZ0NvbmZpZyB7XG5cblx0XHRjb25zdCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmVuYWJsZWQgPSBndWlMaXN0UGFnaW5nLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZSAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2UgPSBndWlMaXN0UGFnaW5nLnBhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZVNpemUgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VTaXplICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemUgPSBndWlMaXN0UGFnaW5nLnBhZ2VTaXplO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGd1aUxpc3RQYWdpbmcucGFnZVNpemVzICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemVzID0gZ3VpTGlzdFBhZ2luZy5wYWdlU2l6ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUxpc3RQYWdpbmcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBndWlMaXN0UGFnaW5nLnBhZ2VyVG9wICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSBndWlMaXN0UGFnaW5nLnBhZ2VyVG9wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChndWlMaXN0UGFnaW5nLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgZ3VpTGlzdFBhZ2luZy5wYWdlckJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID0gZ3VpTGlzdFBhZ2luZy5wYWdlckJvdHRvbTtcblx0XHR9XG5cblx0XHRwYWdpbmdDb25maWcuZGlzcGxheU1vZGUgPSBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdHJldHVybiBwYWdpbmdDb25maWc7XG5cdH1cblxufVxuIl19