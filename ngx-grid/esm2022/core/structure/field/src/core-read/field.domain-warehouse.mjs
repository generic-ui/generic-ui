import { FieldArchive } from './field.archive';
import { FieldWarehouse } from '../api/field.warehouse';
export class FieldDomainWarehouse extends FieldWarehouse {
    fieldReadModelArchive;
    constructor(fieldReadModelArchive) {
        super();
        this.fieldReadModelArchive = fieldReadModelArchive;
    }
    static services = [FieldArchive];
    onFields(structureId) {
        return this.fieldReadModelArchive.on(structureId);
    }
    findFields(structureId) {
        return this.fieldReadModelArchive.find(structureId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2NvcmUtcmVhZC9maWVsZC5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHeEQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7SUFFMUI7SUFBN0IsWUFBNkIscUJBQW1DO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRG9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBYztJQUVoRSxDQUFDO0lBRUQsTUFBTSxDQUFVLFFBQVEsR0FBRyxDQUFDLFlBQVksQ0FBVSxDQUFDO0lBRW5ELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRBcmNoaXZlIH0gZnJvbSAnLi9maWVsZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkTW9kZWwgfSBmcm9tICcuLi9hcGkvbW9kZWwvZmllbGQubW9kZWwnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvZmllbGQud2FyZWhvdXNlJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGREb21haW5XYXJlaG91c2UgZXh0ZW5kcyBGaWVsZFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZFJlYWRNb2RlbEFyY2hpdmU6IEZpZWxkQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbRmllbGRBcmNoaXZlXSBhcyBjb25zdDtcblxuXHRvbkZpZWxkcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8RmllbGRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZFJlYWRNb2RlbEFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0ZmluZEZpZWxkcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPcHRpb25hbDxSZWFkb25seUFycmF5PEZpZWxkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRSZWFkTW9kZWxBcmNoaXZlLmZpbmQoc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==