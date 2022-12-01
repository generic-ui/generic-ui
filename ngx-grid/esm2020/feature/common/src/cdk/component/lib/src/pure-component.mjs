import { GuiComponent } from './gui-component';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class PureComponent extends GuiComponent {
    constructor(elementRef) {
        super(elementRef);
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = this.ngOnInit;
        if (!this.hasConstructorOnlyElementRefInjected(arguments)) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    hasConstructorOnlyElementRefInjected(args) {
        if (arguments.length > 1) {
            return false;
        }
        if (arguments.length === 1) {
            return this.isElementRef(arguments[0]);
        }
        return false;
    }
    isElementRef(elRef) {
        return elRef.nativeElement !== null;
    }
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a PureComponent, ${reason}.`);
    }
}
PureComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PureComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PureComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: PureComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PureComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvcHVyZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBR3RELE1BQU0sT0FBZ0IsYUFBYyxTQUFRLFlBQVk7SUFNdkQsWUFBc0IsVUFBc0I7UUFDM0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxJQUFZLENBQUMsUUFBUSxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQztJQUVPLG9DQUFvQyxDQUFDLElBQWdCO1FBRTVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQVU7UUFDOUIsT0FBTyxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLHlCQUF5QixNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7OzBHQXZDb0IsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBRGxDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFB1cmVDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc05nT25Jbml0OiBGdW5jdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0dGhpcy5zdWJDbGFzc05nT25Jbml0ID0gKHRoaXMgYXMgYW55KS5uZ09uSW5pdDtcblxuXHRcdGlmICghdGhpcy5oYXNDb25zdHJ1Y3Rvck9ubHlFbGVtZW50UmVmSW5qZWN0ZWQoYXJndW1lbnRzKSkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IGluamVjdCBzZXJ2aWNlcycpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1YkNsYXNzTmdPbkluaXQpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgc2hvdWxkIG5vdCB1c2UgbmdPbkluaXQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0NvbnN0cnVjdG9yT25seUVsZW1lbnRSZWZJbmplY3RlZChhcmdzOiBJQXJndW1lbnRzKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNFbGVtZW50UmVmKGFyZ3VtZW50c1swXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0VsZW1lbnRSZWYoZWxSZWY6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBlbFJlZi5uYXRpdmVFbGVtZW50ICE9PSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgUHVyZUNvbXBvbmVudCwgJHtyZWFzb259LmApO1xuXHR9XG59XG4iXX0=