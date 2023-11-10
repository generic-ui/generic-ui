import { PagingDisplayMode } from '../../../../../feature/structure/paging/src/mode/paging-display-mode';
import { GuiPagingDisplay } from '../../core/api/gui.grid.public-api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucGFnaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvc3JjL2ZlYXR1cmUvcGFnaW5nL2d1aS5ncmlkLnBhZ2luZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDekcsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJakYsTUFBTSxPQUFPLHNCQUFzQjtJQUVsQyxPQUFPLENBQUMsU0FBb0I7UUFFM0IsTUFBTSxZQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUV0QyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUN6QztRQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNwRSxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RFLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUVELElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsWUFBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMxRSxZQUFZLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDakQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRU8sY0FBYyxDQUFDLGFBQXdDO1FBRTlELElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQztJQUVPLGFBQWEsQ0FBQyxhQUFxQjtRQUUxQyxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV4RCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxVQUFVO2dCQUNkLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBRW5DO2dCQUNDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVPLFdBQVcsQ0FBQyxhQUErQjtRQUVsRCxRQUFRLGFBQWEsRUFBRTtZQUV0QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7Z0JBQzFCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWhDLEtBQUssZ0JBQWdCLENBQUMsUUFBUTtnQkFDN0IsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFFbkM7Z0JBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7U0FDaEM7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IEd1aVBhZ2luZywgR3VpUGFnaW5nRGlzcGxheSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUGFnaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGd1aVBhZ2luZzogR3VpUGFnaW5nKTogUGFnaW5nQ29uZmlnIHtcblxuXHRcdGNvbnN0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnID0ge307XG5cblx0XHRpZiAoZ3VpUGFnaW5nLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLmVuYWJsZWQgPSBndWlQYWdpbmcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2UgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2UgPSBndWlQYWdpbmcucGFnZTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VTaXplICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VTaXplICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemUgPSBndWlQYWdpbmcucGFnZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCAmJiBndWlQYWdpbmcucGFnZVNpemVzICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZVNpemVzID0gZ3VpUGFnaW5nLnBhZ2VTaXplcztcblx0XHR9XG5cblx0XHRpZiAoZ3VpUGFnaW5nLnBhZ2VyVG9wICE9PSB1bmRlZmluZWQgJiYgZ3VpUGFnaW5nLnBhZ2VyVG9wICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcucGFnZXJUb3AgPSBndWlQYWdpbmcucGFnZXJUb3A7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aVBhZ2luZy5wYWdlckJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5wYWdlckJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID0gZ3VpUGFnaW5nLnBhZ2VyQm90dG9tO1xuXHRcdH1cblxuXHRcdGlmIChndWlQYWdpbmcuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIGd1aVBhZ2luZy5kaXNwbGF5ICE9PSBudWxsKSB7XG5cdFx0XHRwYWdpbmdDb25maWcuZGlzcGxheU1vZGUgPSB0aGlzLmNvbnZlcnREaXNwbGF5KGd1aVBhZ2luZy5kaXNwbGF5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFnaW5nQ29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RGlzcGxheShwYWdpbmdEaXNwbGF5OiBzdHJpbmcgfCBHdWlQYWdpbmdEaXNwbGF5KTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBwYWdpbmdEaXNwbGF5ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyhwYWdpbmdEaXNwbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocGFnaW5nRGlzcGxheSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHBhZ2luZ0Rpc3BsYXk6IHN0cmluZyk6IFBhZ2luZ0Rpc3BsYXlNb2RlIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRQYWdpbmcgPSBwYWdpbmdEaXNwbGF5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRQYWdpbmcpIHtcblxuXHRcdFx0Y2FzZSAnYmFzaWMnOlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cblx0XHRcdGNhc2UgJ2FkdmFuY2VkJzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUGFnaW5nRGlzcGxheU1vZGUuQkFTSUM7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bShwYWdpbmdEaXNwbGF5OiBHdWlQYWdpbmdEaXNwbGF5KTogUGFnaW5nRGlzcGxheU1vZGUge1xuXG5cdFx0c3dpdGNoIChwYWdpbmdEaXNwbGF5KSB7XG5cblx0XHRcdGNhc2UgR3VpUGFnaW5nRGlzcGxheS5CQVNJQzpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXG5cdFx0XHRjYXNlIEd1aVBhZ2luZ0Rpc3BsYXkuQURWQU5DRUQ6XG5cdFx0XHRcdHJldHVybiBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFBhZ2luZ0Rpc3BsYXlNb2RlLkJBU0lDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=