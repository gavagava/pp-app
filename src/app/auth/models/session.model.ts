import { IUser } from './user.model';

export class Session {
  // Последняя проверка состояния сессии
  public timestamp: number = Date.now().valueOf();

  /**
   * Creates an instance of Session.
   * @param {string} [sessionId=null] Идентификатор сессии
   * @param {string} [metabaseId=null] Идентификатор метабазы
   * @param {string} [sessionCookie=null] Куки
   * @param {number} [locale=null] lcid сессии
   * @param {IUser} [user=null] Пользователь, для которого открыта сессия
   * @memberof Session
   */
  constructor (
    public sessionId: string = null,
    public metabaseId: string = null,
    public sessionCookie: string = null,
    public locale: number = null,
    public user: IUser = null
  ) {}

  get isOpened(): boolean {
    return this.sessionId !== null;
  }
}
