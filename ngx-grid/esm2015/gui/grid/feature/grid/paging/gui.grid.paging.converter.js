import { PagingDisplayMode } from '../../../../../structure/paging/feature/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../../core/api/gui.grid.public-api';
export class GuiGridPagingConverter {
    convert(guiPaging) {
        const pagingConfig = {};
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
    convertDisplay(pagingDisplay) {
        if (typeof pagingDisplay === 'string') {
            return this.convertString(pagingDisplay);
        }
        else {
            return this.convertEnum(pagingDisplay);
        }
    }
    convertString(pagingDisplay) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3BhZ2luZy9ndWkuZ3JpZC5wYWdpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3JHLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXBGLE1BQU0sT0FBTyxzQkFBc0I7SUFFbEMsT0FBTyxDQUFDLFNBQW9CO1FBRTNCLE1BQU0sWUFBWSxHQUFpQixFQUFFLENBQUM7UUFFdEMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDekM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNuQztRQUVELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsRSxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxhQUF3QztRQUU5RCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7SUFFTyxhQUFhLENBQUMsYUFBcUI7UUFFMUMsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFeEQsUUFBUSxhQUFhLEVBQUU7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssVUFBVTtnQkFDZCxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUVuQztnQkFDQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFTyxXQUFXLENBQUMsYUFBK0I7UUFFbEQsUUFBUSxhQUFhLEVBQUU7WUFFdEIsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVoQyxLQUFLLGdCQUFnQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IEd1aVBhZ2luZywgR3VpUGFnaW5nRGlzcGxheSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9jb25maWcvcGFnaW5nLWNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRQYWdpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZ3VpUGFnaW5nOiBHdWlQYWdpbmcpOiBQYWdpbmdDb25maWcge1xuXG5cdFx0Y29uc3QgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWcgPSB7fTtcblxuXHRcdGlmIChndWlQYWdpbmcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZW5hYmxlZCA9IGd1aVBhZ2luZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZSA9IGd1aVBhZ2luZy5wYWdlO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZVNpemUgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZVNpemUgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZSA9IGd1aVBhZ2luZy5wYWdlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlU2l6ZXMgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgPSBndWlQYWdpbmcucGFnZVNpemVzO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZXJUb3AgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5wYWdlclRvcCA9IGd1aVBhZ2luZy5wYWdlclRvcDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VyQm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJCb3R0b20gPSBndWlQYWdpbmcucGFnZXJCb3R0b207XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5kaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLmRpc3BsYXkgIT09IG51bGwpIHtcblx0XHRcdHBhZ2luZ0NvbmZpZy5kaXNwbGF5TW9kZSA9IHRoaXMuY29udmVydERpc3BsYXkoZ3VpUGFnaW5nLmRpc3BsYXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYWdpbmdDb25maWc7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnREaXNwbGF5KHBhZ2luZ0Rpc3BsYXk6IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRpZiAodHlwZW9mIHBhZ2luZ0Rpc3BsYXkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHBhZ2luZ0Rpc3BsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShwYWdpbmdEaXNwbGF5KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocGFnaW5nRGlzcGxheTogc3RyaW5nKTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFBhZ2luZyA9IHBhZ2luZ0Rpc3BsYXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFBhZ2luZykge1xuXG5cdFx0XHRjYXNlICdiYXNpYyc6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblxuXHRcdFx0Y2FzZSAnYWR2YW5jZWQnOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5CQVNJQztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHBhZ2luZ0Rpc3BsYXk6IEd1aVBhZ2luZ0Rpc3BsYXkpOiBQYWdpbmdEaXNwbGF5TW9kZSB7XG5cblx0XHRzd2l0Y2ggKHBhZ2luZ0Rpc3BsYXkpIHtcblxuXHRcdFx0Y2FzZSBHdWlQYWdpbmdEaXNwbGF5LkJBU0lDOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRcdGNhc2UgR3VpUGFnaW5nRGlzcGxheS5BRFZBTkNFRDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==