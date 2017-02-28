export default class HomeContoller {
    constructor() {
        this.user = {};

        this.userFields = [
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email address'
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password'
                }
            },
            {
                key: 'checked',
                type: 'checkbox',
                templateOptions: {
                    label: 'Check me out'
                }
            }
        ];
    }
}
