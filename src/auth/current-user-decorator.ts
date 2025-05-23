import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserPayload } from "./jwt.strategy";

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext): UserPayload => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user as UserPayload
  },
); 