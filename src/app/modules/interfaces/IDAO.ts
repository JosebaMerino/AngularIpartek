export interface IDAO<T> {
  getAll(): T[];

  getById(id: number): T;


}
