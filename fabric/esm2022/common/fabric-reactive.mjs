import { Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class FabricReactive {
    unsubscribe$ = new Subject();
    constructor() {
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.unsubscribe$.isStopped) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricReactive, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: FabricReactive, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricReactive, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJlYWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQWdCLGNBQWM7SUFFaEIsWUFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFdEQ7SUFDQSxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsV0FBVztRQUVwQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO3dHQW5Cb0IsY0FBYzs0RkFBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQURuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByb3RlY3RlZCByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnVuc3Vic2NyaWJlJC5pc1N0b3BwZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=