import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/l10n/src/api/translation.facade";
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
TranslationPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TranslationPipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TranslationFacade }], target: i0.ɵɵFactoryTarget.Pipe });
TranslationPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TranslationPipe, name: "guiTranslate", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TranslationPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'guiTranslate',
                    pure: false
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TranslationFacade }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9sMTBuL3NyYy90cmFuc2xhdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0MsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBV2xGLE1BQU0sT0FBTyxlQUFlO0lBTTNCLFlBQTZCLGlCQUFvQyxFQUM3QyxrQkFBcUM7UUFENUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBTGpELDJCQUFzQixHQUFXLEVBQUUsQ0FBQztJQU01QyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBRXBCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFlBQVk7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQjtpQkFDckIsYUFBYSxFQUFFO2lCQUNmLFNBQVMsQ0FBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRTtnQkFDdkMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNYLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUM7aUJBQ2xDO2dCQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BDLENBQUM7OzZHQXJDVyxlQUFlOzJHQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFKM0IsSUFBSTttQkFBQztvQkFDTCxJQUFJLEVBQUUsY0FBYztvQkFDcEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AUGlwZSh7XG5cdG5hbWU6ICdndWlUcmFuc2xhdGUnLFxuXHRwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgYWN0dWFsVHJhbnNsYXRpb25WYWx1ZTogc3RyaW5nID0gJyc7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IEhlcm1lc1N1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblxuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZVxuXHRcdFx0XHQub25UcmFuc2xhdGlvbigpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gdHJhbnNsYXRpb25ba2V5XTtcblxuXHRcdFx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuYWN0dWFsVHJhbnNsYXRpb25WYWx1ZSA9IGtleTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmFjdHVhbFRyYW5zbGF0aW9uVmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdFx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmFjdHVhbFRyYW5zbGF0aW9uVmFsdWU7XG5cdH1cblxufVxuIl19