import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../core-read/composition.read-model-root-converter';
export class InMemoryCompositionReadStore extends InMemoryReadModelStore {
    constructor(inMemoryCompositionStore, compositionConverter) {
        super(inMemoryCompositionStore);
        this.inMemoryCompositionStore = inMemoryCompositionStore;
        this.compositionConverter = compositionConverter;
    }
    toReadModel(aggregate) {
        return this.compositionConverter.convert(aggregate);
    }
}
InMemoryCompositionReadStore.services = [InMemoryCompositionStore, CompositionReadModelRootConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vcGVyc2lzdC9hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFLMUcsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUc1QjtJQUVyQixZQUFvQix3QkFBa0QsRUFDM0Qsb0JBQXVEO1FBQ2pFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRmIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW1DO0lBRWxFLENBQUM7SUFJRCxXQUFXLENBQUMsU0FBK0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBSmUscUNBQVEsR0FBRyxDQUFDLHdCQUF3QixFQUFFLGlDQUFpQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuLi8uLi9jb3JlLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb3JlLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsXG5cdENvbXBvc2l0aW9uUmVhZE1vZGVSb290LFxuXHRDb21wb3NpdGlvbklkLFxuXHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLCBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXJdO1xuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==