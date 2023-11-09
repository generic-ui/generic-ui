import { Directive, Input } from '@angular/core';
import { GuiClassManager } from './gui.class.manager';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiClassDirective {
    constructor(subscriber, elementRef) {
        this.subscriber = subscriber;
        this.elementRef = elementRef;
        this.manager = new GuiClassManager(this.elementRef.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes['guiClass'] !== undefined) {
            this.subscriber
                .subscribe(this.guiClass, (newClasses) => {
                this.manager.update(newClasses);
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
}
GuiClassDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiClassDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiClassDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiClassDirective, selector: "[guiClass]", inputs: { guiClass: "guiClass" }, providers: [
        GuiSubscriber
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiClass]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ElementRef }]; }, propDecorators: { guiClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmNsYXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9jbGFzcy9ndWkuY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLGlCQUFpQjtJQU83QixZQUNrQixVQUF5QixFQUN6QixVQUFzQjtRQUR0QixlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFKdkIsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFNOUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFVBQVU7aUJBQ2IsU0FBUyxDQUNULElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxVQUF5QixFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7K0dBNUJXLGlCQUFpQjttR0FBakIsaUJBQWlCLHVFQUpsQjtRQUNWLGFBQWE7S0FDYjs0RkFFVyxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOzZIQUlBLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aUNsYXNzTWFuYWdlciB9IGZyb20gJy4vZ3VpLmNsYXNzLm1hbmFnZXInO1xuaW1wb3J0IHsgR3VpU3Vic2NyaWJlciB9IGZyb20gJy4uL2d1aS5zdWJzY3JpYmVyJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aUNsYXNzXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN1YnNjcmliZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBHdWlDbGFzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRndWlDbGFzcyE6IEhlcm1lc09ic2VydmFibGU8QXJyYXk8c3RyaW5nPj47XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYW5hZ2VyID0gbmV3IEd1aUNsYXNzTWFuYWdlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzWydndWlDbGFzcyddICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0dGhpcy5ndWlDbGFzcyxcblx0XHRcdFx0XHQobmV3Q2xhc3NlczogQXJyYXk8c3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5tYW5hZ2VyLnVwZGF0ZShuZXdDbGFzc2VzKTtcblx0XHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==