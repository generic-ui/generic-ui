import { FieldModel } from '../../api/model/field.model';
export class FieldConverter {
    convert(fields) {
        return fields.map((field) => {
            return this.convertOne(field);
        });
    }
    convertOne(field) {
        return new FieldModel(field.getId(), field.getDataType(), field.getName());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9jb3JlLXJlYWQvaW5pdC9maWVsZC5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXpELE1BQU0sT0FBTyxjQUFjO0lBRTFCLE9BQU8sQ0FBQyxNQUEwQjtRQUNqQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUFrQjtRQUVwQyxPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRNb2RlbCB9IGZyb20gJy4uLy4uL2FwaS9tb2RlbC9maWVsZC5tb2RlbCc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5Pik6IEFycmF5PEZpZWxkTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogRmllbGRFbnRpdHkpOiBGaWVsZE1vZGVsIHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpLCBmaWVsZC5nZXROYW1lKCkpO1xuXHR9XG59XG4iXX0=