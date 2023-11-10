import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class RemoveFilterCommand extends StructureCommand {
    filterId;
    constructor(structureId, filterId) {
        super(structureId, 'RemoveFilterCommand');
        this.filterId = filterId;
    }
    getFilterId() {
        return this.filterId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvcmVtb3ZlL3JlbW92ZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUd6RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBR3BDO0lBRHBCLFlBQVksV0FBd0IsRUFDaEIsUUFBa0I7UUFDckMsS0FBSyxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFdEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi8uLi9hcGkvaWQvZmlsdGVyLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdSZW1vdmVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWx0ZXJJZCgpOiBGaWx0ZXJJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVySWQ7XG5cdH1cblxufVxuIl19