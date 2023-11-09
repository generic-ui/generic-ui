import { ChangeDetectorRef, inject, Pipe } from '@angular/core';
import { GuiPushSubscriber } from './gui.push-subscriber';
import * as i0 from "@angular/core";
export class GuiPushPipe {
    constructor() {
        this.cd = inject(ChangeDetectorRef);
        this.subscriber = new GuiPushSubscriber(this.cd);
    }
    transform(value) {
        return this.subscriber.subscribe(value);
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
}
GuiPushPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiPushPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
GuiPushPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: GuiPushPipe, name: "guiPush", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiPushPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'guiPush',
                    pure: false
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnB1c2gucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9wdXNoL2d1aS5wdXNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU0xRCxNQUFNLE9BQU8sV0FBVztJQUp4QjtRQU1rQixPQUFFLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFL0IsZUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBUzdEO0lBUEEsU0FBUyxDQUFJLEtBQTBCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7O3lHQVpXLFdBQVc7dUdBQVgsV0FBVzs0RkFBWCxXQUFXO2tCQUp2QixJQUFJO21CQUFDO29CQUNMLElBQUksRUFBRSxTQUFTO29CQUNmLElBQUksRUFBRSxLQUFLO2lCQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIGluamVjdCwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVB1c2hTdWJzY3JpYmVyIH0gZnJvbSAnLi9ndWkucHVzaC1zdWJzY3JpYmVyJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnZ3VpUHVzaCcsXG5cdHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEd1aVB1c2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNkID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXIgPSBuZXcgR3VpUHVzaFN1YnNjcmliZXIodGhpcy5jZCk7XG5cblx0dHJhbnNmb3JtPFQ+KHZhbHVlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlci5zdWJzY3JpYmUodmFsdWUpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJzY3JpYmVyLmRlc3Ryb3koKTtcblx0fVxufVxuIl19