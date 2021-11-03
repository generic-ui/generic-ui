import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/api/translation.facade";
export class TranslationPipe {
    constructor(changeDetectorRef, translationService) {
        this.changeDetectorRef = changeDetectorRef;
        this.translationService = translationService;
        this.actualTranslationValue = '';
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    transform(key) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription =
            this.translationService
                .onTranslation()
                .subscribe((translation) => {
                const value = translation[key];
                if (!value) {
                    this.actualTranslationValue = key;
                }
                this.actualTranslationValue = value;
                this.changeDetectorRef.markForCheck();
            });
        return this.actualTranslationValue;
    }
}
TranslationPipe.ɵfac = function TranslationPipe_Factory(t) { return new (t || TranslationPipe)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 16), i0.ɵɵdirectiveInject(i1.TranslationFacade, 16)); };
TranslationPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "guiTranslate", type: TranslationPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslationPipe, [{
        type: Pipe,
        args: [{
                name: 'guiTranslate',
                pure: false
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TranslationFacade }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQyxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFXbEYsTUFBTSxPQUFPLGVBQWU7SUFNM0IsWUFBNkIsaUJBQW9DLEVBQzdDLGtCQUFxQztRQUQ1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFMakQsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO0lBTTVDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFFcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWTtZQUNoQixJQUFJLENBQUMsa0JBQWtCO2lCQUNyQixhQUFhLEVBQUU7aUJBQ2YsU0FBUyxDQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFO2dCQUN2QyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEMsQ0FBQzs7OEVBckNXLGVBQWU7b0ZBQWYsZUFBZTt1RkFBZixlQUFlO2NBSjNCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLEtBQUs7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBQaXBlKHtcblx0bmFtZTogJ2d1aVRyYW5zbGF0ZScsXG5cdHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBhY3R1YWxUcmFuc2xhdGlvblZhbHVlOiBzdHJpbmcgPSAnJztcblxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbjogSGVybWVzU3Vic2NyaXB0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG5cdFx0XHRcdC5vblRyYW5zbGF0aW9uKClcblx0XHRcdFx0LnN1YnNjcmliZSgodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0cmFuc2xhdGlvbltrZXldO1xuXG5cdFx0XHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuYWN0dWFsVHJhbnNsYXRpb25WYWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWN0dWFsVHJhbnNsYXRpb25WYWx1ZTtcblx0fVxuXG59XG4iXX0=