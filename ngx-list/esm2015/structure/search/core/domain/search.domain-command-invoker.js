import { Injectable } from '@angular/core';
import { SearchCommandInvoker } from '../api/search.command-invoker';
import * as i0 from "@angular/core";
import * as i1 from "./search.dispatcher";
export class SearchDomainCommandInvoker extends SearchCommandInvoker {
    constructor(searchDispatcher) {
        super();
        this.searchDispatcher = searchDispatcher;
    }
    setSearchingConfig(config, structureId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    }
    search(phrase, structureId) {
        this.searchDispatcher.search(phrase, structureId);
    }
}
SearchDomainCommandInvoker.ɵfac = function SearchDomainCommandInvoker_Factory(t) { return new (t || SearchDomainCommandInvoker)(i0.ɵɵinject(i1.SearchDispatcher)); };
SearchDomainCommandInvoker.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchDomainCommandInvoker, factory: SearchDomainCommandInvoker.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchDomainCommandInvoker, [{
        type: Injectable
    }], function () { return [{ type: i1.SearchDispatcher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBSXJFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFFbkUsWUFBNkIsZ0JBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFL0QsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWMsRUFBRSxXQUF3QjtRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOztvR0FaVywwQkFBMEI7Z0ZBQTFCLDBCQUEwQixXQUExQiwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUR0QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4vc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaERvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU2VhcmNoQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoRGlzcGF0Y2hlcjogU2VhcmNoRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==