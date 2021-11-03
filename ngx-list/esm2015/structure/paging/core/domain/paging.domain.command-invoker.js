import { Injectable } from '@angular/core';
import { PagingCommandInvoker } from '../api/paging.command-invoker';
import * as i0 from "@angular/core";
import * as i1 from "./paging.dispatcher";
export class PagingDomainCommandInvoker extends PagingCommandInvoker {
    constructor(pagingDispatcher) {
        super();
        this.pagingDispatcher = pagingDispatcher;
    }
    enable(structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    }
    disable(structureId) {
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    }
    setPaging(paging, structureId) {
        this.pagingDispatcher.setPaging(structureId, paging);
    }
    changePageSize(pageSize, structureId) {
        this.pagingDispatcher.changePageSize(structureId, pageSize);
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
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    }
    changePagerBottom(enabled, structureId) {
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    }
}
PagingDomainCommandInvoker.ɵfac = function PagingDomainCommandInvoker_Factory(t) { return new (t || PagingDomainCommandInvoker)(i0.ɵɵinject(i1.PagingDispatcher)); };
PagingDomainCommandInvoker.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PagingDomainCommandInvoker, factory: PagingDomainCommandInvoker.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingDomainCommandInvoker, [{
        type: Injectable
    }], function () { return [{ type: i1.PagingDispatcher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBR3JFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFFbkUsWUFBNkIsZ0JBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFnQixFQUFFLFdBQXdCO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLFdBQW1CLEVBQUUsV0FBd0I7UUFFekUsSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1lBQzdCLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsV0FBVyxJQUFJLENBQUMsQ0FBQzthQUNqQjtTQUNEO2FBQU07WUFDTixPQUFPLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDakI7U0FDRDtJQUNGLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7b0dBbkRXLDBCQUEwQjtnRkFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgUGFnaW5nQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRlbmFibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBlbmFibGVkOiB0cnVlIH0pO1xuXHR9XG5cblx0ZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IGVuYWJsZWQ6IGZhbHNlIH0pO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCBwYWdpbmcpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLmNoYW5nZVBhZ2VTaXplKHN0cnVjdHVyZUlkLCBwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cblx0XHRpZiAoY3VycmVudFBhZ2UgPCBwYWdlTnVtYmVyKSB7XG5cdFx0XHR3aGlsZSAoY3VycmVudFBhZ2UgIT09IHBhZ2VOdW1iZXIpIHtcblx0XHRcdFx0dGhpcy5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdGN1cnJlbnRQYWdlICs9IDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChjdXJyZW50UGFnZSAhPT0gcGFnZU51bWJlcikge1xuXHRcdFx0XHR0aGlzLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgLT0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VQYWdlclRvcChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0Rpc3BhdGNoZXIuc2V0UGFnaW5nKHN0cnVjdHVyZUlkLCB7IHBhZ2VyVG9wOiBlbmFibGVkIH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdEaXNwYXRjaGVyLnNldFBhZ2luZyhzdHJ1Y3R1cmVJZCwgeyBwYWdlckJvdHRvbTogZW5hYmxlZCB9KTtcblx0fVxufVxuIl19