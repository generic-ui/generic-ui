import { EntityId } from './entity.id';
export declare abstract class Entity<T extends EntityId> {
    private readonly entityId;
    protected constructor(id: T);
    getId(): EntityId;
    equals(entity: Entity<T>): boolean;
}
//# sourceMappingURL=entity.d.ts.map