import { Validators } from '@angular/forms';

const accountValidators = [
  Validators.minLength(2),
  Validators.maxLength(20),
  Validators.pattern('^[a-zA-Z0-9]*$'),
  Validators.required,
];

const nameValidators = [
  Validators.minLength(1),
  Validators.maxLength(20),
  Validators.required,
];

const passwordValidators = [
  Validators.pattern(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$'
  ),
  Validators.minLength(8),
  Validators.maxLength(12),
  Validators.required,
];

const emailValidators = [
  Validators.email,
  Validators.max(50),
  Validators.required,
];

const birthdateValidators = [
  Validators.required,
  Validators.pattern('^[12][0-9][0-9][0-9]/[01][0-9]/[0-3][0-9]$'),
];

const streetValidatiors = [Validators.required];
const alleyValidatiors = [Validators.required];
const laneValidatiors = [Validators.required];
const floorValidatiors = [Validators.required];

export default {
  accountValidators,
  nameValidators,
  passwordValidators,
  emailValidators,
  birthdateValidators,
  streetValidatiors,
  alleyValidatiors,
  laneValidatiors,
  floorValidatiors,
};
