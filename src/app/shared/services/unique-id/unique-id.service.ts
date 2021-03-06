import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UniqueIdService {

  constructor() { }

  private numberOffGeneratedIds: number = 0
  private validPrefixId = /^[A-Za-z]+[\w\-\:\.]*$/;

  generateIdWithPrefix(prefix: string): string {
    if(!prefix || !this.validPrefixId.test(prefix)) throw Error("Prefix can not be empty")
    const uniqueId = this.generateUniqueId()
    this.numberOffGeneratedIds++
    return `${prefix}-${uniqueId}`
  }

  getNumberOfGenerateUniqueId(): number {
    return this.numberOffGeneratedIds
  }

  private generateUniqueId(): string{
    return uuidv4()
  }

}
