import { Type } from '@angular/core';
import { AggregateCommandHandler, AggregateRepository, DomainEventPublisher } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
import { SchemaAggregate } from '../schema.aggregate';
import { SchemaId } from '../schema.id';
import { SchemaAggregateRepository } from '../schema.aggregate-repository';
export declare class CreateSchemaCommandHandler implements AggregateCommandHandler<SchemaAggregate, CreateSchemaCommand> {
    private readonly schemaAggregateRepository;
    private readonly domainEventPublisher;
    constructor(schemaAggregateRepository: SchemaAggregateRepository, domainEventPublisher: DomainEventPublisher);
    getAggregateRepository(): AggregateRepository<SchemaId, SchemaAggregate>;
    forCommand(): Type<CreateSchemaCommand>;
    publishDomainEvents(aggregate: SchemaAggregate, command: CreateSchemaCommand): void;
}
