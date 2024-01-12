export default class Repository {
  private model;
  private dao;

  constructor(dao: any, model: string) {
    this.dao = dao;
    this.model = model;
  }

  get = async () => {
    return await this.dao.get(this.model);
  };
  save = async (data: any) => {
    return await this.dao.insert(data, this.model);
  };
  delete = async (criteria: string) => {
    return await this.dao.delete(criteria, this.model);
  };
}
