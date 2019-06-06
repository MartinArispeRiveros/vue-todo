import { Model } from 'vue-mc';
import { equal, integer, min, required, string, length, match } from 'vue-mc/validation';

export default class Post extends Model {
  lettersAndNumbers = /^(?!\s+$).+$/;
  lettersAndNumbersMessages = 'Incorrect format';
  requiredValidationMessage = 'The name is empty';
  
  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id: null,
      title: '',
      author: '',
      info: '',
      comment: '',
      url: '',
      created_at: '',
    };
  }
  // Attribute mutations.
  mutations() {
    return {
      id: (id) => Number(id) || null,
      info: String || '',
      comment: String,
    };
  }
  // Attribute validation
  validation() {
    return {
      id: integer.and(min(1)).or(equal(null)),
      title: string.and(required.format(this.requiredValidationMessage)),
      author: string.and(required.format(this.requiredValidationMessage)),
      info: string.and(required.format(this.requiredValidationMessage)).and(match(this.lettersAndNumbers).format(this.lettersAndNumbersMessages))
        .and(length(1, 50).format('The name is too long (Max: 50 characters)')),
      comment: string.and(required.format(this.requiredValidationMessage)).and(match(this.lettersAndNumbers).format(this.lettersAndNumbersMessages))
        .and(length(1, 50).format('The name is too long (Max: 50 characters)')),
    };
  }
  options() {
    return {
      identifier: 'id',
      validateOnChange: true,
      validateOnSave: true,
      validateRecursively: true,
    };
  }
  buildInfo() {
    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.info = `Posted by ${this.author != '' ? this.author : 'Unknow'} on ${days[d.getDay()]}`;
    this.created_at = d.getTime();
    this.title = this.comment;
  }
}
