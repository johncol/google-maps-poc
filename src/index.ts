import { User } from './User';
import { Company } from './Company';

const user: Element = document.createElement('pre');
user.textContent = JSON.stringify(new User(), undefined, ' ');

const company: Element = document.createElement('pre');
company.textContent = JSON.stringify(new Company(), undefined, ' ');

document.body.appendChild(user);
document.body.appendChild(company);
