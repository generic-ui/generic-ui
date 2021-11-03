import { Injectable } from '@angular/core';
import { SummariesManager } from '../summaries.manager';
import { AggregateArchive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class SummariesEnabledArchive extends AggregateArchive {
    constructor() {
        super(SummariesManager.DEFAULT_ENABLED);
    }
    init(structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    }
}
SummariesEnabledArchive.ɵfac = function SummariesEnabledArchive_Factory(t) { return new (t || SummariesEnabledArchive)(); };
SummariesEnabledArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SummariesEnabledArchive, factory: SummariesEnabledArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummariesEnabledArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBS3RELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBeUI7SUFFckU7UUFDQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksQ0FBQyxXQUF3QjtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs4RkFSVyx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uL3N1bW1hcmllcy5tYW5hZ2VyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSBleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8Ym9vbGVhbj4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVEKTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KHN0cnVjdHVyZUlkLCBTdW1tYXJpZXNNYW5hZ2VyLkRFRkFVTFRfRU5BQkxFRCk7XG5cdH1cblxufVxuIl19