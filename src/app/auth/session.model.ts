import { User } from './user.model';

export class Session {
  constructor (
    public sessionId: string,
    public metabaseId: string,
    public user: User
  ) {}
}
