import { Injectable } from '@angular/core';
import { Field } from './field';
import * as i0 from "@angular/core";
import * as i1 from "./field-id.generator";
import * as i2 from "./data/data-field.factory";
export class FieldFactory {
    constructor(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    create(configs) {
        if (!configs) {
            return [];
        }
        return configs.map((fieldConfig, index) => {
            const fieldId = this.fieldIdGenerator.generateId(), dataField = this.dataFieldFactory.create(fieldConfig);
            return new Field(fieldId, dataField, this.getFieldName(fieldConfig, index));
        });
    }
    getFieldName(fieldConfig, index) {
        if (typeof fieldConfig.field === 'string') {
            return fieldConfig.field.toLowerCase();
        }
        else {
            return 'Field #' + index;
        }
    }
}
FieldFactory.ɵfac = function FieldFactory_Factory(t) { return new (t || FieldFactory)(i0.ɵɵinject(i1.FieldIdGenerator), i0.ɵɵinject(i2.DataFieldFactory)); };
FieldFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldFactory, factory: FieldFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.FieldIdGenerator }, { type: i2.DataFieldFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBTWhDLE1BQU0sT0FBTyxZQUFZO0lBRXhCLFlBQTZCLGdCQUFrQyxFQUMzQyxnQkFBa0M7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBRTlELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkQsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLFdBQXdCLEVBQUUsS0FBYTtRQUUzRCxJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDRixDQUFDOzt3RUE1QlcsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWTt1RkFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQtaWQuZ2VuZXJhdG9yJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRHZW5lcmF0b3I6IEZpZWxkSWRHZW5lcmF0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0YUZpZWxkRmFjdG9yeTogRGF0YUZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cblx0XHRpZiAoIWNvbmZpZ3MpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSxcblx0XHRcdFx0ZGF0YUZpZWxkID0gdGhpcy5kYXRhRmllbGRGYWN0b3J5LmNyZWF0ZShmaWVsZENvbmZpZyk7XG5cblx0XHRcdHJldHVybiBuZXcgRmllbGQoZmllbGRJZCwgZGF0YUZpZWxkLCB0aGlzLmdldEZpZWxkTmFtZShmaWVsZENvbmZpZywgaW5kZXgpKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRpZiAodHlwZW9mIGZpZWxkQ29uZmlnLmZpZWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGZpZWxkQ29uZmlnLmZpZWxkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnRmllbGQgIycgKyBpbmRleDtcblx0XHR9XG5cdH1cblxufVxuIl19