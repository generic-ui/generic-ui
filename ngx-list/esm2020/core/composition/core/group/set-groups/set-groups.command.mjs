import { CompositionCommand } from '../../composition.command';
export class SetGroupsCommand extends CompositionCommand {
    constructor(compositionId, configs) {
        super(compositionId, 'SetGroupsCommand');
        this.compositionId = compositionId;
        this.configs = configs;
    }
    getConfigs() {
        return this.configs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWdyb3Vwcy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL2NvcmUvZ3JvdXAvc2V0LWdyb3Vwcy9zZXQtZ3JvdXBzLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJL0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGtCQUFrQjtJQUV2RCxZQUFxQixhQUE0QixFQUM3QixPQUFnRDtRQUNuRSxLQUFLLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFGckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7SUFFcEUsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRHcm91cHNDb21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihyZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3M6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRHcm91cHNDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWdzKCk6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlncztcblx0fVxuXG59XG4iXX0=