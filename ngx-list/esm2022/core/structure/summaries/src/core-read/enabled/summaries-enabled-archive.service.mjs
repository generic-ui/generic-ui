import { SummariesManager } from '../../domain/summaries.manager';
import { AggregateArchive } from '@generic-ui/hermes';
export class SummariesEnabledArchive extends AggregateArchive {
    constructor() {
        super(SummariesManager.DEFAULT_ENABLED);
    }
    init(structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2NvcmUtcmVhZC9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl0RCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQXlCO0lBRXJFO1FBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLENBQUMsV0FBd0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPGJvb2xlYW4+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdW1tYXJpZXNNYW5hZ2VyLkRFRkFVTFRfRU5BQkxFRCk7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChzdHJ1Y3R1cmVJZCwgU3VtbWFyaWVzTWFuYWdlci5ERUZBVUxUX0VOQUJMRUQpO1xuXHR9XG5cbn1cbiJdfQ==