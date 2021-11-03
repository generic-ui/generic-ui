import { Injectable } from '@angular/core';
import { FieldCollection } from './field-collection';
import * as i0 from "@angular/core";
import * as i1 from "./field/field.factory";
export class FieldCollectionFactory {
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
FieldCollectionFactory.ɵfac = function FieldCollectionFactory_Factory(t) { return new (t || FieldCollectionFactory)(i0.ɵɵinject(i1.FieldFactory)); };
FieldCollectionFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldCollectionFactory, factory: FieldCollectionFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldCollectionFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.FieldFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFLckQsTUFBTSxPQUFPLHNCQUFzQjtJQUVsQyxZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUN2RCxDQUFDO0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7OzRGQVBXLHNCQUFzQjs0RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4vZmllbGQtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoKTogRmllbGRDb2xsZWN0aW9uIHtcblx0XHRyZXR1cm4gbmV3IEZpZWxkQ29sbGVjdGlvbih0aGlzLmZpZWxkRmFjdG9yeSk7XG5cdH1cblxufVxuIl19