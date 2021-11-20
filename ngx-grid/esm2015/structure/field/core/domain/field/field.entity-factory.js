import { Injectable } from '@angular/core';
import { FieldEntity } from './field.entity';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldEntityIdGenerator } from './field-entity-id.generator';
export class FieldEntityFactory {
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
            return new FieldEntity(fieldId, dataField, this.getFieldName(fieldConfig, index));
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
FieldEntityFactory.decorators = [
    { type: Injectable }
];
FieldEntityFactory.ctorParameters = () => [
    { type: FieldEntityIdGenerator },
    { type: DataFieldFactory }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZW50aXR5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHktZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRSxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLFlBQTZCLGdCQUF3QyxFQUNqRCxnQkFBa0M7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUNqRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUF3QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBRTlELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLFdBQXdCLEVBQUUsS0FBYTtRQUUzRCxJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDRixDQUFDOzs7WUE3QkQsVUFBVTs7O1lBSEYsc0JBQXNCO1lBRHRCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi9maWVsZC5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHlJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQtZW50aXR5LWlkLmdlbmVyYXRvcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZEVudGl0eUlkR2VuZXJhdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGFGaWVsZEZhY3Rvcnk6IERhdGFGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZShjb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4pOiBBcnJheTxGaWVsZEVudGl0eT4ge1xuXG5cdFx0aWYgKCFjb25maWdzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbmZpZ3MubWFwKChmaWVsZENvbmZpZzogRmllbGRDb25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksXG5cdFx0XHRcdGRhdGFGaWVsZCA9IHRoaXMuZGF0YUZpZWxkRmFjdG9yeS5jcmVhdGUoZmllbGRDb25maWcpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEZpZWxkRW50aXR5KGZpZWxkSWQsIGRhdGFGaWVsZCwgdGhpcy5nZXRGaWVsZE5hbWUoZmllbGRDb25maWcsIGluZGV4KSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkTmFtZShmaWVsZENvbmZpZzogRmllbGRDb25maWcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0aWYgKHR5cGVvZiBmaWVsZENvbmZpZy5maWVsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBmaWVsZENvbmZpZy5maWVsZC50b0xvd2VyQ2FzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ0ZpZWxkICMnICsgaW5kZXg7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==