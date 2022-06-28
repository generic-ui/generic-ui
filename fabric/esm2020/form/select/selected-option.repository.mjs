import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricSelectedOptionsRepository {
    constructor() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    onSelectedOption() {
        return this.selectedOption$.asObservable();
    }
    next(option) {
        this.selectedOption$.next(option);
    }
}
FabricSelectedOptionsRepository.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricSelectedOptionsRepository, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricSelectedOptionsRepository.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricSelectedOptionsRepository });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricSelectedOptionsRepository, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zZWxlY3Qvc2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUlqRCxNQUFNLE9BQU8sK0JBQStCO0lBRDVDO1FBR2tCLG9CQUFlLEdBQUcsSUFBSSxhQUFhLENBQWtCLENBQUMsQ0FBQyxDQUFDO0tBVXpFO0lBUkEsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBdUI7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7NEhBVlcsK0JBQStCO2dJQUEvQiwrQkFBK0I7MkZBQS9CLCtCQUErQjtrQkFEM0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNTZWxlY3RlZE9wdGlvbnNSZXBvc2l0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PEd1aVNlbGVjdE9wdGlvbj4oMSk7XG5cblx0b25TZWxlY3RlZE9wdGlvbigpOiBPYnNlcnZhYmxlPEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9uJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XG5cdH1cblxufVxuIl19