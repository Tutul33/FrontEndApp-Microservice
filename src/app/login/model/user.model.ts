export class User {
    fullName: string = "";
    email:string="";
    userName:string="";
    password:string="";
    age: string = "";
    birthDate: Date | undefined;
    birthTime: string = "";
    address: string = "";
    country: string = "";
    termsAndConditions:boolean=false;
    isActive: boolean = true;
    userContactAddresses:UserContactAddresses[]=[];
    constructor(defaultData?: Partial<User>) {
        if (defaultData) {
            Object.keys(defaultData).forEach(key => {
                if (key in this) {
                    const typedKey = key as keyof User;
                    // Directly assign values to properties
                    (this as any)[typedKey] = defaultData[typedKey];
                }
            });
        }
    }
}
export class UserContactAddresses{
    id:number=0;
    userId:number=0;
    contactNo:string='';
    address:string='';
    constructor(defaultData?: Partial<UserContactAddresses>) {
        if (defaultData) {
            Object.keys(defaultData).forEach(key => {
                if (key in this) {
                    const typedKey = key as keyof UserContactAddresses;
                    // Directly assign values to properties
                    (this as any)[typedKey] = defaultData[typedKey];
                }
            });
        }
    }
}
