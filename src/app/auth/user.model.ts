export class User {
  constructor (
    public id: string,
    public name: string,
    public sd: SubjectSecurityDescriptor
  ) {}
}
