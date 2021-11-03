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
PureComponent.ɵfac = function PureComponent_Factory(t) { return new (t || PureComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PureComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PureComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PureComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOztBQUd0RCxNQUFNLE9BQWdCLGFBQWMsU0FBUSxZQUFZO0lBTXZELFlBQXNCLFVBQXNCO1FBQzNDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUksSUFBWSxDQUFDLFFBQVEsQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFFTyxvQ0FBb0MsQ0FBQyxJQUFnQjtRQUU1RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSx5QkFBeUIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDOzswRUF2Q29CLGFBQWE7Z0VBQWIsYUFBYTt1RkFBYixhQUFhO2NBRGxDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFB1cmVDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc05nT25Jbml0OiBGdW5jdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0dGhpcy5zdWJDbGFzc05nT25Jbml0ID0gKHRoaXMgYXMgYW55KS5uZ09uSW5pdDtcblxuXHRcdGlmICghdGhpcy5oYXNDb25zdHJ1Y3Rvck9ubHlFbGVtZW50UmVmSW5qZWN0ZWQoYXJndW1lbnRzKSkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IGluamVjdCBzZXJ2aWNlcycpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1YkNsYXNzTmdPbkluaXQpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgc2hvdWxkIG5vdCB1c2UgbmdPbkluaXQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0NvbnN0cnVjdG9yT25seUVsZW1lbnRSZWZJbmplY3RlZChhcmdzOiBJQXJndW1lbnRzKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNFbGVtZW50UmVmKGFyZ3VtZW50c1swXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0VsZW1lbnRSZWYoZWxSZWY6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBlbFJlZi5uYXRpdmVFbGVtZW50ICE9PSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgUHVyZUNvbXBvbmVudCwgJHtyZWFzb259LmApO1xuXHR9XG59XG4iXX0=