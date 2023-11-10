import { CompositionCommand } from '../../composition.command';
export class CompositionChangeSortStatusCommand extends CompositionCommand {
    compositionId;
    sortParams;
    constructor(compositionId, sortParams) {
        super(compositionId, 'CompositionChangeSortStatusCommand');
        this.compositionId = compositionId;
        this.sortParams = sortParams;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getSortParams() {
        return this.sortParams;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQjtJQUVwRDtJQUNEO0lBRHBCLFlBQXFCLGFBQTRCLEVBQzdCLFVBQW1DO1FBQ3RELEtBQUssQ0FBQyxhQUFhLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQUZ2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUV2RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihyZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ0NvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldFNvcnRQYXJhbXMoKTogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRQYXJhbXM7XG5cdH1cblxufVxuIl19