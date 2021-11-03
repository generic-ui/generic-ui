import { Injectable } from '@angular/core';
import { Field } from './field';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldIdGenerator } from './field-id.generator';
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
FieldFactory.decorators = [
    { type: Injectable }
];
FieldFactory.ctorParameters = () => [
    { type: FieldIdGenerator },
    { type: DataFieldFactory }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXhELE1BQU0sT0FBTyxZQUFZO0lBRXhCLFlBQTZCLGdCQUFrQyxFQUMzQyxnQkFBa0M7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBRTlELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkQsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLFdBQXdCLEVBQUUsS0FBYTtRQUUzRCxJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDRixDQUFDOzs7WUE3QkQsVUFBVTs7O1lBSEYsZ0JBQWdCO1lBRGhCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBEYXRhRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9kYXRhL2RhdGEtZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWVsZC1pZC5nZW5lcmF0b3InO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZEZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZEdlbmVyYXRvcjogRmllbGRJZEdlbmVyYXRvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRhRmllbGRGYWN0b3J5OiBEYXRhRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogQXJyYXk8RmllbGQ+IHtcblxuXHRcdGlmICghY29uZmlncykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb25maWdzLm1hcCgoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSB0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLFxuXHRcdFx0XHRkYXRhRmllbGQgPSB0aGlzLmRhdGFGaWVsZEZhY3RvcnkuY3JlYXRlKGZpZWxkQ29uZmlnKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBGaWVsZChmaWVsZElkLCBkYXRhRmllbGQsIHRoaXMuZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnLCBpbmRleCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWVsZE5hbWUoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGlmICh0eXBlb2YgZmllbGRDb25maWcuZmllbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRDb25maWcuZmllbGQudG9Mb3dlckNhc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICdGaWVsZCAjJyArIGluZGV4O1xuXHRcdH1cblx0fVxuXG59XG4iXX0=