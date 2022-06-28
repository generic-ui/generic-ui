import { PagingDispatcher } from './paging.dispatcher';
import { PagingPublisher } from '../api/paging.publisher';
export class PagingDomainPublisher extends PagingPublisher {
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    enable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: true }, structureId);
    }
    disable(structureId) {
        this.pagingDispatcher.setPaging({ enabled: false }, structureId);
    }
    setPaging(paging, structureId) {
        this.pagingDispatcher.setPaging(paging, structureId);
    }
    changePageSize(pageSize, structureId) {
        this.pagingDispatcher.changePageSize(pageSize, structureId);
    }
    nextPage(structureId) {
        this.pagingDispatcher.nextPage(structureId);
    }
    prevPage(structureId) {
        this.pagingDispatcher.prevPage(structureId);
    }
    goToPage(pageNumber, currentPage, structureId) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage(structureId);
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage(structureId);
                currentPage -= 1;
            }
        }
    }
    changePagerTop(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerTop: enabled }, structureId);
    }
    changePagerBottom(enabled, structureId) {
        this.pagingDispatcher.setPaging({ pagerBottom: enabled }, structureId);
    }
}
PagingDomainPublisher.services = [PagingDispatcher];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9jb3JlL3BhZ2luZy5kb21haW4tcHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUcxRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQUV6RCxZQUE2QixnQkFBa0M7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFEb0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUUvRCxDQUFDO0lBSUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sQ0FBQyxXQUF3QjtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBb0IsRUFBRSxXQUF3QjtRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWdCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWtCLEVBQUUsV0FBbUIsRUFBRSxXQUF3QjtRQUV6RSxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7WUFDN0IsT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO0lBQ0YsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOztBQS9DZSw4QkFBUSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2NvbmZpZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ1B1Ymxpc2hlciB9IGZyb20gJy4uL2FwaS9wYWdpbmcucHVibGlzaGVyJztcblxuXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluUHVibGlzaGVyIGV4dGVuZHMgUGFnaW5nUHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0Rpc3BhdGNoZXI6IFBhZ2luZ0Rpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1BhZ2luZ0Rpc3BhdGNoZXJdO1xuXG5cdGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHsgZW5hYmxlZDogdHJ1ZSB9LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRkaXNhYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoeyBlbmFibGVkOiBmYWxzZSB9LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblxuXHRcdGlmIChjdXJyZW50UGFnZSA8IHBhZ2VOdW1iZXIpIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgKz0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRQYWdlICE9PSBwYWdlTnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0XHRjdXJyZW50UGFnZSAtPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoYW5nZVBhZ2VyVG9wKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nRGlzcGF0Y2hlci5zZXRQYWdpbmcoeyBwYWdlclRvcDogZW5hYmxlZCB9LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHsgcGFnZXJCb3R0b206IGVuYWJsZWQgfSwgc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=