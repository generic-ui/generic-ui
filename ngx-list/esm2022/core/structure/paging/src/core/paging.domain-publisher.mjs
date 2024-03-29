import { PagingDispatcher } from './paging.dispatcher';
import { PagingPublisher } from '../api/paging.publisher';
export class PagingDomainPublisher extends PagingPublisher {
    pagingDispatcher;
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    static services = [PagingDispatcher];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvY29yZS9wYWdpbmcuZG9tYWluLXB1Ymxpc2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHMUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7SUFFNUI7SUFBN0IsWUFBNkIsZ0JBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFL0QsQ0FBQztJQUVELE1BQU0sQ0FBVSxRQUFRLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTlDLE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFnQixFQUFFLFdBQXdCO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLFdBQW1CLEVBQUUsV0FBd0I7UUFFekUsSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1lBQzdCLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO2FBQU07WUFDTixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDtJQUNGLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi9hcGkvcGFnaW5nLnB1Ymxpc2hlcic7XG5cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpblB1Ymxpc2hlciBleHRlbmRzIFBhZ2luZ1B1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtQYWdpbmdEaXNwYXRjaGVyXTtcblxuXHRlbmFibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyh7IGVuYWJsZWQ6IHRydWUgfSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0ZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHsgZW5hYmxlZDogZmFsc2UgfSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHBhZ2luZywgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cblx0XHRpZiAoY3VycmVudFBhZ2UgPCBwYWdlTnVtYmVyKSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlICs9IDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgLT0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlclRvcChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHsgcGFnZXJUb3A6IGVuYWJsZWQgfSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyh7IHBhZ2VyQm90dG9tOiBlbmFibGVkIH0sIHN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19