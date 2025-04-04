export class IdService {
  private id: number;
  private readonly startId: number;
  private readonly max: number;

  // using Object Destructuring to allow the setting of only one
  // optional argument
  constructor({ start, max }: { start?: number; max?: number }) {
    this.startId = start !== undefined ? start : 0;
    this.max = max !== undefined ? max : 10000;
    this.id = this.startId - 1;
  }

  getNextId(): number {
    this.id += 1;
    if (this.id > this.max) {
      this.id = this.startId;
    }
    return this.id;
  }
}
