export interface IDAO<T> {
  getAll(): List<T>;

  getById(id: number): T;


}
