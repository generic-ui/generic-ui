import { StructureCommand } from '../../../structure-core/core/structure.command';
export class RemoveFilterCommand extends StructureCommand {
    constructor(structureId, filterId) {
        super(structureId, 'RemoveFilterCommand');
        this.filterId = filterId;
    }
    getFilterId() {
        return this.filterId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9yZW1vdmUvcmVtb3ZlLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR2xGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFFeEQsWUFBWSxXQUF3QixFQUNoQixRQUFrQjtRQUNyQyxLQUFLLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUV0QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vLi4vYXBpL2lkL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdSZW1vdmVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWx0ZXJJZCgpOiBGaWx0ZXJJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVySWQ7XG5cdH1cblxufVxuIl19