import { Entity } from './entity';
export declare class EntityFactory {
    create(data: any): Entity;
    create(data: Array<any>): Array<Entity>;
    createEntities(data: Array<any>): Array<Entity>;
    private createEntity;
}
