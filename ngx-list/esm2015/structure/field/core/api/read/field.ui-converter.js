import { Injectable } from '@angular/core';
import { FieldReadModel } from './field.read-model';
import * as i0 from "@angular/core";
export class FieldUiConverter {
    convert(fields) {
        return fields.map((field) => {
            return this.convertOne(field);
        });
    }
    convertOne(field) {
        return new FieldReadModel(field.getId(), field.getDataType(), field.getName());
    }
}
FieldUiConverter.ɵfac = function FieldUiConverter_Factory(t) { return new (t || FieldUiConverter)(); };
FieldUiConverter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldUiConverter, factory: FieldUiConverter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldUiConverter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFFNUIsT0FBTyxDQUFDLE1BQW9CO1FBQzNCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBWTtRQUU5QixPQUFPLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Z0ZBWFcsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZFVpQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8RmllbGRSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogRmllbGQpOiBGaWVsZFJlYWRNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkUmVhZE1vZGVsKGZpZWxkLmdldElkKCksIGZpZWxkLmdldERhdGFUeXBlKCksIGZpZWxkLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==