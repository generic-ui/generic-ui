import { FieldEntity } from './field.entity';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldEntityIdGenerator } from './field-entity-id.generator';
export class FieldEntityFactory {
    fieldIdGenerator;
    dataFieldFactory;
    constructor(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    static services = [
        FieldEntityIdGenerator,
        DataFieldFactory
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZW50aXR5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE1BQU0sT0FBTyxrQkFBa0I7SUFFRDtJQUNUO0lBRHBCLFlBQTZCLGdCQUF3QyxFQUNqRCxnQkFBa0M7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUNqRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHO1FBQzFCLHNCQUFzQjtRQUN0QixnQkFBZ0I7S0FDaEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxPQUEyQjtRQUVqQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFFOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2RCxPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsV0FBd0IsRUFBRSxLQUFhO1FBRTNELElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9jb25maWcvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi9maWVsZC5lbnRpdHknO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHlJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQtZW50aXR5LWlkLmdlbmVyYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZEVudGl0eUlkR2VuZXJhdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGFGaWVsZEZhY3Rvcnk6IERhdGFGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtcblx0XHRGaWVsZEVudGl0eUlkR2VuZXJhdG9yLFxuXHRcdERhdGFGaWVsZEZhY3Rvcnlcblx0XTtcblxuXHRjcmVhdGUoY29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogQXJyYXk8RmllbGRFbnRpdHk+IHtcblxuXHRcdGlmICghY29uZmlncykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb25maWdzLm1hcCgoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSB0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLFxuXHRcdFx0XHRkYXRhRmllbGQgPSB0aGlzLmRhdGFGaWVsZEZhY3RvcnkuY3JlYXRlKGZpZWxkQ29uZmlnKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBGaWVsZEVudGl0eShmaWVsZElkLCBkYXRhRmllbGQsIHRoaXMuZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnLCBpbmRleCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWVsZE5hbWUoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGlmICh0eXBlb2YgZmllbGRDb25maWcuZmllbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRDb25maWcuZmllbGQudG9Mb3dlckNhc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICdGaWVsZCAjJyArIGluZGV4O1xuXHRcdH1cblx0fVxuXG59XG4iXX0=