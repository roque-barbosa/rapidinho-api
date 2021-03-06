import { User } from "../../entity/User"
import { ObjectType, Field } from "type-graphql"
import { FieldError } from "./fieldError"

@ObjectType()
export class UserResponse{
    @Field(() => [FieldError], {nullable:true})
    errors?: FieldError[]

    @Field(() => User, {nullable:true})
    user?: User
}