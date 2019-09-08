import {ObjectType, Field, Int} from "type-graphql";

@ObjectType()
export default class Pokemon {
    @Field(type => Int)
    pokeDexID: number;

    @Field()
    type: string

    @Field()
    spriteURL: string;

    @Field()
    speciesName: string;
}