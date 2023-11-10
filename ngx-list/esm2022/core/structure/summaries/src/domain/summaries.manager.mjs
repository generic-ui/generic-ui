import { StructureSummariesChangedAggregateEvent } from '../core/structure.summaries-changed.aggregate-event';
export class SummariesManager {
    calculators;
    static DEFAULT_ENABLED = false;
    structureId;
    enabled;
    values = new Map();
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.structureId = structureId;
        this.enabled = SummariesManager.DEFAULT_ENABLED;
    }
    calculate(fields, entities) {
        if (!this.enabled) {
            return [];
        }
        const calculations = new Map();
        this.calculators.forEach((calc) => {
            const aggregatedValues = calc.calculate(fields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((key) => {
                    calculations.set(key, aggregatedValues.get(key));
                });
            }
        });
        if (calculations.size > 0) {
            return [
                new StructureSummariesChangedAggregateEvent(this.structureId, calculations)
            ];
        }
        else {
            return [];
        }
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    add() {
    }
    remove() {
    }
    update() {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvZG9tYWluL3N1bW1hcmllcy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSTlHLE1BQU0sT0FBTyxnQkFBZ0I7SUFXUjtJQVRwQixNQUFNLENBQVUsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUV2QixXQUFXLENBQWM7SUFFbEMsT0FBTyxDQUFVO0lBRVIsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO0lBRWxELFlBQVksV0FBd0IsRUFDaEIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsTUFBMEIsRUFBRSxRQUEyQjtRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQW1DLEVBQUUsRUFBRTtZQUVoRSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTFELElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2hDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNyQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7YUFDTDtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPO2dCQUNOLElBQUksdUNBQXVDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDM0UsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBRUYsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsR0FBRztJQUNILENBQUM7SUFFRCxNQUFNO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvc3JjL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL3NyYy9kb21haW4vaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc01hbmFnZXIge1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX0VOQUJMRUQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBuZXcgTWFwPEZpZWxkSWQsIGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsY3VsYXRvcnM6IEFycmF5PFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBTdW1tYXJpZXNNYW5hZ2VyLkRFRkFVTFRfRU5BQkxFRDtcblx0fVxuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5PiwgZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhbGN1bGF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRvcnMuZm9yRWFjaCgoY2FsYzogU3VtbWFyaWVzQ2FsY3VsYXRvcjxhbnksIGFueT4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlZFZhbHVlcyA9IGNhbGMuY2FsY3VsYXRlKGZpZWxkcywgZW50aXRpZXMpO1xuXG5cdFx0XHRpZiAoYWdncmVnYXRlZFZhbHVlcykge1xuXHRcdFx0XHRBcnJheS5mcm9tKGFnZ3JlZ2F0ZWRWYWx1ZXMua2V5cygpKVxuXHRcdFx0XHRcdCAuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCBjYWxjdWxhdGlvbnMuc2V0KGtleSwgYWdncmVnYXRlZFZhbHVlcy5nZXQoa2V5KSk7XG5cdFx0XHRcdFx0IH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGNhbGN1bGF0aW9ucy5zaXplID4gMCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0bmV3IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCh0aGlzLnN0cnVjdHVyZUlkLCBjYWxjdWxhdGlvbnMpXG5cdFx0XHRdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0YWRkKCkge1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHR9XG5cbn1cbiJdfQ==